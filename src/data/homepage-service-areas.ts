export const HOMEPAGE_SERVICE_AREAS = [
  { name: "Port Huron", slug: "port-huron" },
  { name: "Kimball", slug: "kimball-township" },
  { name: "Marysville", slug: "marysville" },
  { name: "Fort Gratiot", slug: "fort-gratiot" },
  { name: "St. Clair", slug: "st-clair" },
  { name: "Marine City", slug: "marine-city" },
  { name: "Richmond", slug: "richmond" },
  { name: "Capac", slug: "capac" },
  { name: "Emmett", slug: "emmett" },
  { name: "Clyde Township", slug: null },
  { name: "Burtchville Township", slug: null },
  { name: "Surrounding areas", slug: null },
] as const;

/** Schema-oriented service area names for LocalBusiness markup */
export const SCHEMA_SERVICE_AREAS = [
  "Port Huron",
  "Kimball Township",
  "Marysville",
  "Fort Gratiot Township",
  "St. Clair",
  "Marine City",
  "Richmond",
  "St. Clair County",
  "Blue Water Area",
] as const;
