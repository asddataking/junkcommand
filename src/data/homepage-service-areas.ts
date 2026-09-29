export const HOMEPAGE_SERVICE_AREAS = [
  { name: "Port Huron", slug: "port-huron" },
  { name: "Fort Gratiot", slug: "fort-gratiot" },
  { name: "Marysville", slug: "marysville" },
  { name: "Kimball Township", slug: "kimball-township" },
  { name: "St. Clair", slug: "st-clair" },
] as const;

/** Linked cities for the homepage "Serving the Blue Water Area" section */
export const BLUE_WATER_AREAS = [
  { name: "Port Huron", slug: "port-huron" },
  { name: "Fort Gratiot", slug: "fort-gratiot" },
  { name: "Kimball Township", slug: "kimball-township" },
  { name: "Marysville", slug: "marysville" },
  { name: "St Clair", slug: "st-clair" },
] as const;

/** Schema-oriented service area names for LocalBusiness markup */
export const SCHEMA_SERVICE_AREAS = [
  "Port Huron",
  "Fort Gratiot",
  "Fort Gratiot Township",
  "Kimball Township",
  "Kimball",
  "Wadhams",
  "Smiths Creek",
  "Marysville",
  "St. Clair",
  "St. Clair County",
  "Blue Water Area",
] as const;
