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
  phone_click: "Contact",
};

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

export function trackEstimateFormSubmit(params: AnalyticsContext = {}) {
  trackEvent("estimate_form_submit", params);
}

export function trackPhoneClick(params: AnalyticsContext = {}) {
  trackEvent("phone_click", params);
}

export function trackChatOpen(params: AnalyticsContext = {}) {
  trackEvent("chat_open", params);
}

function messageLooksLikeFormSubmit(data: unknown) {
  if (!data) return false;
  const raw =
    typeof data === "string" ? data : JSON.stringify(data).toLowerCase();
  return (
    raw.includes("form") &&
    (raw.includes("submit") || raw.includes("submitted") || raw.includes("success"))
  );
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

/** Best-effort listeners for GHL iframe/widget postMessage events. */
export function bindGhlAnalyticsListeners() {
  if (typeof window === "undefined") return () => {};

  const onMessage = (event: MessageEvent) => {
    if (messageLooksLikeFormSubmit(event.data)) {
      trackEstimateFormSubmit({ page_type: "unknown", cta_position: "ghl_form" });
    }
    if (messageLooksLikeChatOpen(event.data)) {
      trackChatOpen({ page_type: "unknown", cta_position: "ghl_chat" });
    }
  };

  window.addEventListener("message", onMessage);
  return () => window.removeEventListener("message", onMessage);
}
