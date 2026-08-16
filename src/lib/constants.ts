export const BRAND = {
  name: "Junk Command",
  tagline: "Take Command of Your Clutter.",
  phone: "810-242-0429",
  phoneHref: "tel:8102420429",
  smsHref: "sms:8102420429",
  email: "info@junkcommand.com",
  emailHref: "mailto:info@junkcommand.com",
} as const;

export const SITE_URL = "https://www.getjunkcommand.com";

/** Public HQ locality only — no street address (service-area GBP). */
export const LOCATION = {
  locality: "Port Huron",
  region: "MI",
  regionName: "Michigan",
  postalCode: "48060",
  country: "US",
  displayLine: "Port Huron, MI 48060",
  geo: {
    latitude: 42.9709,
    longitude: -82.4249,
  },
} as const;

/** Approximate drive-time coverage used for GeoCircle schema (Maps local pack). */
export const SERVICE_RADIUS_MILES = 45;
export const SERVICE_RADIUS_METERS = Math.round(SERVICE_RADIUS_MILES * 1609.34);

/**
 * Google Business Profile / Maps listing.
 * Service-area profile: no public street address.
 * Paste `placeId` from GBP (Share listing → Place ID) when available — that
 * unlocks the exact Maps pin and the official “write a review” URL.
 */
export const GBP = {
  name: "Junk Command",
  category: "Junk removal service",
  placeId: "",
  mapsUrl: "",
  reviewUrl: "",
} as const;

export const GBP_WEBSITE_UTM = `${SITE_URL}/?utm_source=google&utm_medium=organic&utm_campaign=gbp`;

export const MAPS_SEARCH_QUERY = `${GBP.name} ${LOCATION.displayLine} junk removal`;

export function getGbpMapsHref() {
  if (GBP.placeId) {
    return `https://www.google.com/maps/place/?q=place_id:${GBP.placeId}`;
  }
  if (GBP.mapsUrl) return GBP.mapsUrl;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    MAPS_SEARCH_QUERY,
  )}`;
}

export function getGbpReviewHref() {
  if (GBP.placeId) {
    return `https://search.google.com/local/writereview?placeid=${GBP.placeId}`;
  }
  if (GBP.reviewUrl) return GBP.reviewUrl;
  return getGbpMapsHref();
}

export function getGoogleMapsEmbedSrc(input?: {
  query?: string;
  zoom?: number;
  lat?: number;
  lng?: number;
}) {
  const query = input?.query ?? MAPS_SEARCH_QUERY;
  const zoom = input?.zoom ?? 11;
  const lat = input?.lat ?? LOCATION.geo.latitude;
  const lng = input?.lng ?? LOCATION.geo.longitude;
  const params = new URLSearchParams({
    q: query,
    ll: `${lat},${lng}`,
    z: String(zoom),
    output: "embed",
  });
  return `https://maps.google.com/maps?${params.toString()}`;
}

/** Public social profiles (footer + schema sameAs) */
export const SOCIAL_LINKS = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@JunkCommand",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/getjunkcommand/",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@junkcommand",
  },
] as const;

export function getSameAsLinks(): string[] {
  const links: string[] = SOCIAL_LINKS.map((link) => link.href);
  links.push(getGbpMapsHref());
  return links;
}

/** Default Open Graph / Twitter / iMessage share image (1200×630) */
export const SOCIAL_SHARE_IMAGE = "/images/og/junk-command-social.jpg";
export const SOCIAL_SHARE_IMAGE_ALT =
  "Junk Command — Take Command of Your Clutter. Veteran-owned junk removal in Port Huron, MI";
export const SOCIAL_SHARE_IMAGE_WIDTH = 1200;
export const SOCIAL_SHARE_IMAGE_HEIGHT = 630;

/** Primary brand mark used in header, schema, and PWA icons */
export const BRAND_LOGO = "/images/junk-command-logo.png";

export const BUSINESS_HOURS = [
  { day: "Monday", hours: "8:00 AM – 6:00 PM", opens: "08:00", closes: "18:00" },
  { day: "Tuesday", hours: "8:00 AM – 6:00 PM", opens: "08:00", closes: "18:00" },
  { day: "Wednesday", hours: "8:00 AM – 6:00 PM", opens: "08:00", closes: "18:00" },
  { day: "Thursday", hours: "8:00 AM – 6:00 PM", opens: "08:00", closes: "18:00" },
  { day: "Friday", hours: "8:00 AM – 6:00 PM", opens: "08:00", closes: "18:00" },
  { day: "Saturday", hours: "8:00 AM – 6:00 PM", opens: "08:00", closes: "18:00" },
  { day: "Sunday", hours: "Closed", opens: null, closes: null },
] as const;

export const HOURS_SUMMARY = "Mon–Sat 8:00 AM – 6:00 PM · Sunday Closed";

/** Primary header nav — matches homepage mockup anchors */
export const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Reviews", href: "/reviews" },
  { label: "Service Areas", href: "/service-areas" },
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Meet the Crew", href: "/meet-the-crew" },
    { label: "Veteran Owned", href: "/veteran-owned" },
    { label: "Careers", href: "/careers" },
    { label: "Before & After", href: "/gallery" },
  ],
  services: [
    { label: "All Services", href: "/services" },
    { label: "Garage Cleanouts", href: "/garage-cleanout" },
    { label: "Estate Cleanouts", href: "/estate-cleanout" },
    { label: "Furniture Removal", href: "/furniture-removal" },
    { label: "Hot Tub Removal", href: "/hot-tub-removal" },
  ],
  additionalServices: [
    { label: "Garage Sale Delivery", href: "/garage-sale-trail" },
    {
      label: "Furniture & Marketplace Delivery",
      href: "/furniture-delivery",
    },
  ],
  partners: [
    { label: "Partner Program", href: "/partners" },
    { label: "Realtors", href: "/partners/realtors" },
    { label: "Property Managers", href: "/partners/property-managers" },
    { label: "Contractors", href: "/partners/contractors" },
  ],
  resources: [
    { label: "Pricing", href: "/pricing" },
    { label: "FAQs", href: "/faqs" },
    { label: "What We Take", href: "/what-we-take" },
    { label: "What We Don't Take", href: "/what-we-dont-take" },
    { label: "Commercial Junk Removal", href: "/commercial-junk-removal" },
    { label: "Responsible Disposal", href: "/responsible-disposal" },
    { label: "Guides", href: "/guides" },
    { label: "Reviews", href: "/reviews" },
    { label: "Blog", href: "/blog" },
    { label: "Book Online", href: "/book-online" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

/** Featured services shown on the homepage grid */
export const HOMEPAGE_SERVICE_SLUGS = [
  "garage-cleanout",
  "estate-cleanout",
  "furniture-removal",
  "appliance-removal",
  "hot-tub-removal",
  "construction-debris-removal",
] as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Request Quote",
    description: "Fill out our quick form or call/text us.",
  },
  {
    step: 2,
    title: "We Contact You",
    description: "We'll text you back fast with a quote.",
  },
  {
    step: 3,
    title: "We Show Up",
    description: "Our crew arrives on time and gets to work.",
  },
  {
    step: 4,
    title: "Junk Gone",
    description: "You relax while we take care of the rest.",
  },
] as const;

export const JUNK_TYPES = [
  "Furniture",
  "Appliances",
  "Garage Cleanout",
  "Estate Cleanout",
  "Hot Tub",
  "Construction Debris",
  "Yard Waste",
  "General Junk",
  "Other",
] as const;

export const WHY_CHOOSE = [
  {
    title: "Veteran Owned",
    description: "Mission-focused service from a crew that shows up ready.",
  },
  {
    title: "Locally Operated",
    description: "Port Huron based. We know St. Clair County and the Blue Water Area.",
  },
  {
    title: "Upfront Pricing",
    description: "Clear quotes before we load a single item.",
  },
  {
    title: "Fast Response",
    description: "Quick scheduling and clear arrival windows when you need junk gone.",
  },
] as const;

/** @deprecated Use getFeaturedServices() from services data — kept for homepage compatibility during migration */
export const SERVICES = [
  {
    title: "Garage Cleanouts",
    slug: "garage-cleanout",
    image: "/images/services/garage-cleanout.webp",
    description: "Full garage clearouts — from clutter to clean in one visit.",
  },
  {
    title: "Estate Cleanouts",
    slug: "estate-cleanout",
    image: "/images/services/estate-cleanout.webp",
    description: "Respectful, thorough estate and property cleanouts.",
  },
  {
    title: "Furniture Removal",
    slug: "furniture-removal",
    image: "/images/services/furniture-removal.webp",
    description: "Sofas, mattresses, desks — we haul the heavy stuff.",
  },
  {
    title: "Appliance Removal",
    slug: "appliance-removal",
    image: "/images/services/appliance-removal.webp",
    description: "Fridges, washers, dryers, and more — removed fast.",
  },
  {
    title: "Hot Tub Removal",
    slug: "hot-tub-removal",
    image: "/images/services/hot-tub-removal.webp",
    description: "Broken or unwanted hot tubs hauled away the right way.",
  },
  {
    title: "Construction Debris",
    slug: "construction-debris-removal",
    image: "/images/services/construction-debris-removal.webp",
    description: "Post-renovation debris and job-site cleanup.",
  },
] as const;

/** @deprecated Prefer CITIES from data/cities — kept for schema migration */
export const SERVICE_AREAS = [
  "Port Huron",
  "Marysville",
  "Fort Gratiot",
  "Kimball Township",
  "Clyde Township",
  "St. Clair",
  "Marine City",
  "Algonac",
  "Richmond",
  "Lenox Township",
  "Romeo",
  "Armada",
  "Imlay City",
  "New Baltimore",
  "Chesterfield",
  "St. Clair County",
  "Macomb County",
] as const;

/** @deprecated Prefer REVIEWS from data/reviews */
export { REVIEWS } from "@/data/reviews";
