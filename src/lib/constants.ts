export const BRAND = {
  name: "Junk Command",
  tagline: "Take Command of Your Clutter.",
  phone: "810-336-5865",
  phoneHref: "tel:8103365865",
  smsHref: "sms:8103365865",
  email: "info@junkcommand.com",
  emailHref: "mailto:info@junkcommand.com",
  reviewCount: 250,
  rating: 5,
} as const;

export const SITE_URL = "https://www.getjunkcommand.com";

/** Default Open Graph / Twitter / iMessage share image (1200×630) */
export const SOCIAL_SHARE_IMAGE = "/images/og/junk-command-social.jpg";
export const SOCIAL_SHARE_IMAGE_ALT =
  "Junk Command — Take Command of Your Clutter. Veteran-owned junk removal in Port Huron, MI";
export const SOCIAL_SHARE_IMAGE_WIDTH = 1200;
export const SOCIAL_SHARE_IMAGE_HEIGHT = 630;

/** Primary brand mark used in header, schema, and PWA icons */
export const BRAND_LOGO = "/images/junk-command-logo.png";

export const BUSINESS_HOURS = [
  { day: "Monday", hours: "7:00 AM – 7:00 PM" },
  { day: "Tuesday", hours: "7:00 AM – 7:00 PM" },
  { day: "Wednesday", hours: "7:00 AM – 7:00 PM" },
  { day: "Thursday", hours: "7:00 AM – 7:00 PM" },
  { day: "Friday", hours: "7:00 AM – 7:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 5:00 PM" },
  { day: "Sunday", hours: "By Appointment" },
] as const;

/** Primary header nav — matches homepage mockup anchors */
export const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Service Areas", href: "/#service-areas" },
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
  resources: [
    { label: "Pricing", href: "/pricing" },
    { label: "FAQs", href: "/faqs" },
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
    description: "Port Huron based. We know St. Clair County.",
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
  "St. Clair",
  "Marine City",
  "Algonac",
  "Richmond",
  "New Baltimore",
  "Chesterfield",
  "St. Clair County",
  "Macomb County",
] as const;

/** @deprecated Prefer REVIEWS from data/reviews */
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
