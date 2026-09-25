export type AnalyticsContext = {
  page_type?: string;
  location_slug?: string;
  cta_position?: string;
  page_url?: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

const FACEBOOK_STANDARD_EVENTS: Record<string, string> = {
  estimate_form_submit: "Lead",
  generate_lead: "Lead",
  phone_click: "Contact",
};

/** Official Free Estimate form id from `GhlFormEmbed`. */
const FREE_ESTIMATE_FORM_ID = "yw2y86G2nD6Vmzn2HjN2";

const GENERATE_LEAD_PARAMS = {
  form_name: "free_estimate",
  site: "junk_command",
} as const;

const GHL_ORIGIN_SUFFIXES = [
  "leadconnectorhq.com",
  "msgsndr.com",
  "gohighlevel.com",
] as const;

const OBJECT_SUBMIT_TYPES = new Set([
  "form_submitted",
  "form-submitted",
  "formsubmitted",
  "gohighlevelformsubmit",
  "form_submit",
  "form-submit",
]);

const IGNORED_ARRAY_ACTIONS = new Set([
  "iframeloaded",
  "fetch-query-params",
  "fetch-sticky-contacts",
  "query-params",
  "modify-parent-url",
  "highlevel.setheight",
  "sticky-contacts",
]);

const LEAD_DEDUPE_STORAGE_KEY = "jc:generate_lead:free_estimate";
const LEAD_DEDUPE_WINDOW_MS = 10_000;

type LeadDedupeState = {
  at: number;
};

let leadDedupeMemory: LeadDedupeState | null = null;

export function getPageUrl() {
  if (typeof window === "undefined") return "";
  return window.location.href;
}

export function trackEvent(name: string, params: AnalyticsContext = {}) {
  if (typeof window === "undefined") return;

  const payload = {
    ...params,
    page_url: params.page_url || getPageUrl(),
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", name, payload);
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...payload });
  }

  if (typeof window.fbq === "function") {
    const facebookEvent = FACEBOOK_STANDARD_EVENTS[name];
    if (facebookEvent) {
      window.fbq("track", facebookEvent, payload);
    } else {
      window.fbq("trackCustom", name, payload);
    }
  }
}

export function trackEstimateModalOpen(params: AnalyticsContext) {
  trackEvent("estimate_modal_open", params);
}

/**
 * Retired as a standalone GA4 event. Successful Free Estimate submits
 * now fire `generate_lead` so Meta still receives a Lead via that path.
 */
export function trackEstimateFormSubmit(params: AnalyticsContext = {}) {
  void params;
  trackGenerateLead();
}

export function trackPhoneClick(params: AnalyticsContext = {}) {
  trackEvent("phone_click", params);
}

export function trackChatOpen(params: AnalyticsContext = {}) {
  trackEvent("chat_open", params);
}

function trackGenerateLead() {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", { ...GENERATE_LEAD_PARAMS });
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "generate_lead", ...GENERATE_LEAD_PARAMS });
  }

  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead", { ...GENERATE_LEAD_PARAMS });
  }
}

export function isTrustedGhlOrigin(origin: string): boolean {
  if (!origin) return false;
  try {
    const url = new URL(origin);
    if (url.protocol !== "https:") return false;
    const host = url.hostname.toLowerCase();
    return GHL_ORIGIN_SUFFIXES.some(
      (suffix) => host === suffix || host.endsWith(`.${suffix}`),
    );
  } catch {
    return false;
  }
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value !== null && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function parseJsonValue(value: unknown): unknown {
  if (typeof value !== "string") return value;
  const trimmed = value.trim();
  if (!trimmed.startsWith("{") && !trimmed.startsWith("[")) return value;
  try {
    return JSON.parse(trimmed);
  } catch {
    return value;
  }
}

function parseContactPayload(value: unknown): Record<string, unknown> | null {
  return asRecord(parseJsonValue(value));
}

function contactLooksSubmitted(contact: Record<string, unknown> | null): boolean {
  if (!contact) return false;
  const email =
    typeof contact.email === "string" && contact.email.includes("@");
  const customerId =
    (typeof contact.customer_id === "string" && contact.customer_id.length > 0) ||
    (typeof contact.id === "string" && contact.id.length > 0);
  const name =
    (typeof contact.full_name === "string" && contact.full_name.length > 0) ||
    (typeof contact.first_name === "string" &&
      typeof contact.last_name === "string");
  const phone = typeof contact.phone === "string" && contact.phone.length > 5;
  return email || (customerId && (name || phone));
}

/**
 * Detect a successful HighLevel / LeadConnector form submission.
 *
 * Official widget (`stcdn.leadconnectorhq.com/_preview/*.js`) posts, after
 * a successful submit:
 *   ["set-sticky-contacts", "_ud", JSON.stringify(contact), locationId, fingerprint]
 *   ["set-sticky-contacts", "embedded_iframe_<id>", iframeId, locationId, fingerprint]
 *
 * Independently confirmed by GTM captures (array[0] = "set-sticky-contacts",
 * array[2] = contact JSON with email / customer_id / full_name) and by
 * `form_embed.js`, which treats `set-sticky-contacts` as leadCollected.
 */
export function isGhlFormSubmitMessage(data: unknown): boolean {
  const parsed = parseJsonValue(data);

  if (Array.isArray(parsed) && parsed.length > 0) {
    const action = String(parsed[0] ?? "").toLowerCase();

    if (IGNORED_ARRAY_ACTIONS.has(action)) return false;
    if (action === "msgsndr-booking-complete") return false;

    if (action === "set-sticky-contacts") {
      const key = String(parsed[1] ?? "");
      const payload = parsed[2];
      if (contactLooksSubmitted(parseContactPayload(payload))) return true;
      if (key.startsWith("embedded_iframe_")) return true;
      return false;
    }

    const classic = parseContactPayload(parsed[2]);
    if (
      classic &&
      "full_address" in classic &&
      "customer_id" in classic &&
      "full_name" in classic &&
      "email" in classic &&
      contactLooksSubmitted(classic)
    ) {
      return true;
    }

    return false;
  }

  const record = asRecord(parsed);
  if (!record) return false;

  const type = String(
    record.type ?? record.event ?? record.action ?? record.name ?? "",
  ).toLowerCase();
  if (OBJECT_SUBMIT_TYPES.has(type)) return true;
  if (type.includes("form_submit") || type.includes("form-submit")) return true;

  return false;
}

function messageLooksLikeChatOpen(data: unknown) {
  if (!data) return false;
  const raw =
    typeof data === "string" ? data : JSON.stringify(data).toLowerCase();
  return (
    raw.includes("chat") &&
    (raw.includes("open") || raw.includes("start") || raw.includes("widget"))
  );
}

function isFreeEstimateFormSource(source: MessageEventSource | null): boolean {
  if (typeof document === "undefined" || !source) return true;

  const iframes = document.querySelectorAll<HTMLIFrameElement>(
    "iframe[data-form-id], iframe[data-form-name]",
  );

  for (const iframe of iframes) {
    if (iframe.contentWindow !== source) continue;
    const formId = iframe.dataset.formId ?? "";
    const formName = (iframe.dataset.formName ?? "").toLowerCase();
    return formId === FREE_ESTIMATE_FORM_ID || formName === "free estimate";
  }

  return true;
}

function hasRecentlyFiredLead(): boolean {
  const now = Date.now();
  if (leadDedupeMemory && now - leadDedupeMemory.at < LEAD_DEDUPE_WINDOW_MS) {
    return true;
  }

  try {
    const raw = sessionStorage.getItem(LEAD_DEDUPE_STORAGE_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw) as LeadDedupeState;
    if (typeof parsed.at === "number" && now - parsed.at < LEAD_DEDUPE_WINDOW_MS) {
      leadDedupeMemory = parsed;
      return true;
    }
  } catch {
    // Ignore unavailable / unreadable sessionStorage.
  }

  return false;
}

function markLeadFired() {
  const state: LeadDedupeState = { at: Date.now() };
  leadDedupeMemory = state;
  try {
    sessionStorage.setItem(LEAD_DEDUPE_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore quota / private-mode failures; in-memory still dedupes this page.
  }
}

function fireFreeEstimateLeadOnce() {
  if (hasRecentlyFiredLead()) return;
  markLeadFired();
  trackGenerateLead();
}

/** Best-effort listeners for GHL iframe/widget postMessage events. */
export function bindGhlAnalyticsListeners() {
  if (typeof window === "undefined") return () => {};

  const onMessage = (event: MessageEvent) => {
    if (
      isTrustedGhlOrigin(event.origin) &&
      isGhlFormSubmitMessage(event.data) &&
      isFreeEstimateFormSource(event.source)
    ) {
      fireFreeEstimateLeadOnce();
    }

    if (messageLooksLikeChatOpen(event.data)) {
      trackChatOpen({ page_type: "unknown", cta_position: "ghl_chat" });
    }
  };

  window.addEventListener("message", onMessage);
  return () => window.removeEventListener("message", onMessage);
}
