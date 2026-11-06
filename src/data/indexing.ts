/**
 * Indexable URL set and permanent redirects for Google indexing recovery.
 * Keep this as the single source of truth for sitemap, generateStaticParams,
 * footer/nav, and next.config redirects.
 */

export const KEPT_SERVICE_SLUGS = [
  "furniture-removal",
  "appliance-removal",
  "hot-tub-removal",
  "estate-cleanout",
  "construction-debris-removal",
  "garage-cleanout",
] as const;

export const KEPT_CITY_SLUGS = [
  "port-huron",
  "marysville",
  "fort-gratiot",
  "kimball-township",
  "st-clair",
  "marine-city",
  "smiths-creek",
  "romeo",
  "imlay-city",
  "lapeer",
] as const;

export type KeptPath =
  | "/"
  | "/about"
  | "/work-with-junk-command"
  | "/contact"
  | "/what-we-take"
  | "/commercial-junk-removal"
  | "/port-huron-trash-bulk-pickup"
  | `/${(typeof KEPT_SERVICE_SLUGS)[number]}`
  | `/service-areas/${(typeof KEPT_CITY_SLUGS)[number]}`;

export const KEPT_PAGES: {
  path: KeptPath;
  label: string;
  group: "home" | "services" | "areas" | "company";
}[] = [
  { path: "/", label: "Home", group: "home" },
  { path: "/furniture-removal", label: "Furniture Removal", group: "services" },
  { path: "/appliance-removal", label: "Appliance Removal", group: "services" },
  { path: "/hot-tub-removal", label: "Hot Tub Removal", group: "services" },
  { path: "/estate-cleanout", label: "Estate Cleanouts", group: "services" },
  { path: "/garage-cleanout", label: "Garage Cleanouts", group: "services" },
  {
    path: "/construction-debris-removal",
    label: "Construction Debris",
    group: "services",
  },
  {
    path: "/commercial-junk-removal",
    label: "Commercial Junk Removal",
    group: "services",
  },
  { path: "/what-we-take", label: "What We Take", group: "services" },
  { path: "/service-areas/port-huron", label: "Port Huron", group: "areas" },
  { path: "/service-areas/fort-gratiot", label: "Fort Gratiot", group: "areas" },
  { path: "/service-areas/marysville", label: "Marysville", group: "areas" },
  {
    path: "/service-areas/kimball-township",
    label: "Kimball Township",
    group: "areas",
  },
  { path: "/service-areas/st-clair", label: "St. Clair", group: "areas" },
  { path: "/service-areas/marine-city", label: "Marine City", group: "areas" },
  { path: "/service-areas/smiths-creek", label: "Smiths Creek", group: "areas" },
  { path: "/service-areas/romeo", label: "Romeo", group: "areas" },
  { path: "/service-areas/imlay-city", label: "Imlay City", group: "areas" },
  { path: "/service-areas/lapeer", label: "Lapeer", group: "areas" },
  { path: "/about", label: "About", group: "company" },
  { path: "/contact", label: "Contact", group: "company" },
  {
    path: "/port-huron-trash-bulk-pickup",
    label: "Port Huron Trash & Bulk Pickup",
    group: "company",
  },
  {
    path: "/work-with-junk-command",
    label: "Work With Junk Command",
    group: "company",
  },
];

export const KEPT_PATHS = KEPT_PAGES.map((page) => page.path);

export function isKeptPath(path: string): boolean {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return (KEPT_PATHS as string[]).includes(normalized);
}

export function isKeptServiceSlug(slug: string): boolean {
  return (KEPT_SERVICE_SLUGS as readonly string[]).includes(slug);
}

export function isKeptCitySlug(slug: string): boolean {
  return (KEPT_CITY_SLUGS as readonly string[]).includes(slug);
}

export const NOINDEX_FOLLOW_PATHS = ["/privacy", "/terms"] as const;

type RedirectRule = {
  source: string;
  destination: string;
};

const SERVICE_REDIRECTS: RedirectRule[] = [
  { source: "/mattress-removal", destination: "/furniture-removal" },
  { source: "/couch-removal", destination: "/furniture-removal" },
  { source: "/tv-removal", destination: "/appliance-removal" },
  { source: "/refrigerator-removal", destination: "/appliance-removal" },
  { source: "/basement-cleanout", destination: "/garage-cleanout" },
  { source: "/storage-unit-cleanout", destination: "/estate-cleanout" },
  { source: "/hoarder-cleanout", destination: "/estate-cleanout" },
  { source: "/foreclosure-cleanout", destination: "/estate-cleanout" },
  { source: "/shed-removal", destination: "/construction-debris-removal" },
  { source: "/deck-removal", destination: "/construction-debris-removal" },
  { source: "/yard-debris-removal", destination: "/construction-debris-removal" },
  { source: "/brush-removal", destination: "/construction-debris-removal" },
  { source: "/electronics-recycling", destination: "/what-we-take" },
];

const CITY_REDIRECTS: RedirectRule[] = [
  { source: "/service-areas/kimball", destination: "/service-areas/kimball-township" },
  { source: "/service-areas/clyde-township", destination: "/service-areas/kimball-township" },
  { source: "/service-areas/algonac", destination: "/service-areas/st-clair" },
  { source: "/service-areas/new-baltimore", destination: "/service-areas/st-clair" },
  { source: "/service-areas/chesterfield", destination: "/service-areas/st-clair" },
  { source: "/service-areas/lenox-township", destination: "/service-areas/marysville" },
  { source: "/service-areas/anchorville", destination: "/service-areas/marysville" },
  { source: "/service-areas/memphis", destination: "/service-areas/marysville" },
  { source: "/service-areas/richmond", destination: "/service-areas/marysville" },
  { source: "/service-areas/armada", destination: "/service-areas/marysville" },
  { source: "/service-areas/yale", destination: "/service-areas/port-huron" },
  { source: "/service-areas/croswell", destination: "/service-areas/port-huron" },
  { source: "/service-areas/lexington", destination: "/service-areas/port-huron" },
  { source: "/service-areas/emmett", destination: "/service-areas/kimball-township" },
  { source: "/service-areas/capac", destination: "/service-areas/port-huron" },
  { source: "/service-areas/attica", destination: "/service-areas/port-huron" },
  { source: "/service-areas/almont", destination: "/service-areas/port-huron" },
  { source: "/service-areas/dryden", destination: "/service-areas/port-huron" },
  { source: "/service-areas/metamora", destination: "/service-areas/port-huron" },
  { source: "/service-areas/st-clair-county", destination: "/service-areas/port-huron" },
  { source: "/service-areas/macomb-county", destination: "/service-areas/port-huron" },
  { source: "/service-areas/marinecity", destination: "/service-areas/marine-city" },
  { source: "/service-areas/marine-city-mi", destination: "/service-areas/marine-city" },
  { source: "/service-areas/smithscreek", destination: "/service-areas/smiths-creek" },
  { source: "/service-areas/smiths_creek", destination: "/service-areas/smiths-creek" },
  { source: "/service-areas/smiths-creek-mi", destination: "/service-areas/smiths-creek" },
  { source: "/service-areas/romeo-mi", destination: "/service-areas/romeo" },
  { source: "/service-areas/imlay", destination: "/service-areas/imlay-city" },
  { source: "/service-areas/imlaycity", destination: "/service-areas/imlay-city" },
  { source: "/service-areas/imlay-city-mi", destination: "/service-areas/imlay-city" },
  { source: "/service-areas/lapeer-mi", destination: "/service-areas/lapeer" },
  { source: "/service-areas/lapeer-city", destination: "/service-areas/lapeer" },
];

const STATIC_REDIRECTS: RedirectRule[] = [
  { source: "/services", destination: "/" },
  { source: "/service-areas", destination: "/" },
  { source: "/pricing", destination: "/" },
  { source: "/reviews", destination: "/" },
  { source: "/meet-the-crew", destination: "/about" },
  { source: "/veteran-owned", destination: "/about" },
  { source: "/careers", destination: "/work-with-junk-command" },
  { source: "/gallery", destination: "/" },
  { source: "/faqs", destination: "/" },
  { source: "/what-we-dont-take", destination: "/what-we-take" },
  { source: "/guides", destination: "/" },
  { source: "/book-online", destination: "/contact" },
  { source: "/blog", destination: "/" },
  { source: "/garage-sale-trail", destination: "/" },
  { source: "/furniture-delivery", destination: "/furniture-removal" },
  { source: "/partners", destination: "/about" },
  { source: "/responsible-disposal", destination: "/what-we-take" },
];

const CONTENT_REDIRECTS: RedirectRule[] = [
  { source: "/blog/how-much-does-junk-removal-cost-in-michigan", destination: "/" },
  { source: "/blog/how-to-clean-out-a-garage", destination: "/garage-cleanout" },
  {
    source: "/blog/10-things-you-should-never-throw-away",
    destination: "/what-we-take",
  },
  {
    source: "/blog/how-to-dispose-of-a-hot-tub",
    destination: "/hot-tub-removal",
  },
  {
    source: "/blog/estate-cleanout-checklist",
    destination: "/estate-cleanout",
  },
  { source: "/blog/moving-checklist-michigan", destination: "/" },
  {
    source: "/blog/preparing-for-a-foreclosure-cleanout",
    destination: "/estate-cleanout",
  },
  {
    source: "/guides/same-day-junk-removal-port-huron",
    destination: "/service-areas/port-huron",
  },
  { source: "/guides/what-junk-do-you-remove", destination: "/what-we-take" },
  {
    source: "/guides/furniture-removal-blue-water-area",
    destination: "/furniture-removal",
  },
  { source: "/guides/how-much-does-junk-removal-cost", destination: "/" },
  {
    source: "/guides/junk-command-service-areas",
    destination: "/service-areas/port-huron",
  },
  {
    source: "/guides/heavy-appliance-removal",
    destination: "/appliance-removal",
  },
  {
    source: "/guides/estate-garage-cleanouts-when-to-hire",
    destination: "/estate-cleanout",
  },
  { source: "/guides/licensed-insured-junk-hauler", destination: "/about" },
  { source: "/guides/junk-removal-lapeer", destination: "/service-areas/lapeer" },
  { source: "/guides/junk-removal-romeo", destination: "/service-areas/romeo" },
  { source: "/guides/junk-removal-marine-city", destination: "/service-areas/marine-city" },
  { source: "/guides/junk-removal-imlay-city", destination: "/service-areas/imlay-city" },
  { source: "/guides/junk-removal-smiths-creek", destination: "/service-areas/smiths-creek" },
  { source: "/blog/junk-removal-lapeer", destination: "/service-areas/lapeer" },
  { source: "/blog/junk-removal-romeo", destination: "/service-areas/romeo" },
  { source: "/blog/junk-removal-marine-city", destination: "/service-areas/marine-city" },
  { source: "/blog/junk-removal-imlay-city", destination: "/service-areas/imlay-city" },
  { source: "/blog/junk-removal-smiths-creek", destination: "/service-areas/smiths-creek" },
];

const CATCH_ALL_REDIRECTS: RedirectRule[] = [
  { source: "/blog/:slug", destination: "/" },
  { source: "/guides/:slug", destination: "/" },
  { source: "/partners/:slug", destination: "/about" },
];

export const PERMANENT_REDIRECTS: RedirectRule[] = [
  ...SERVICE_REDIRECTS,
  ...CITY_REDIRECTS,
  ...STATIC_REDIRECTS,
  ...CONTENT_REDIRECTS,
  ...CATCH_ALL_REDIRECTS,
];

export function pagesInGroup(group: (typeof KEPT_PAGES)[number]["group"]) {
  return KEPT_PAGES.filter((page) => page.group === group);
}
