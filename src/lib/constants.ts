export const BRAND = {
  name: "Junk Command",
  tagline: "Take Command of Your Clutter.",
  phone: "810-336-5865",
  phoneHref: "tel:8103365865",
  smsHref: "sms:8103365865",
  email: "info@junkcommand.com",
  emailHref: "mailto:info@junkcommand.com",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Areas", href: "#service-areas" },
] as const;

export const SERVICE_AREAS = [
  "Port Huron",
  "Marysville",
  "Fort Gratiot",
  "Kimball Township",
  "St. Clair",
  "Clyde Township",
  "St. Clair County",
] as const;

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
    slug: "construction-debris",
    image: "/images/services/construction-debris.webp",
    description: "Post-renovation debris and job-site cleanup.",
  },
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

export const REVIEWS = [
  {
    quote:
      "They showed up within 2 hours and had my garage cleaned out in no time!",
    name: "Sarah T.",
    city: "Port Huron, MI",
  },
  {
    quote:
      "Best price I found and a super professional crew. Highly recommend Junk Command!",
    name: "Mike R.",
    city: "Marysville, MI",
  },
  {
    quote:
      "I had an old hot tub and shed removed. Fast, friendly, and hassle-free!",
    name: "Dave L.",
    city: "Fort Gratiot, MI",
  },
] as const;

export const WHY_CHOOSE = [
  {
    title: "Veteran Owned",
    description: "Mission-focused service from a crew that shows up ready.",
  },
  {
    title: "Locally Operated",
    description: "Port Huron based. We know St. Clair County.",
  },
  {
    title: "Upfront Pricing",
    description: "Clear quotes before we load a single item.",
  },
  {
    title: "Fast Response",
    description: "Same-day options when you need junk gone now.",
  },
] as const;

export const SITE_URL = "https://junkcommand.com";
