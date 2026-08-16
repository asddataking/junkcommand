import type { LocationRegionId } from "@/data/locations/types";

export type LocationRegion = {
  id: LocationRegionId;
  name: string;
  heading: string;
  description: string;
  slugs: string[];
};

/** Geographic clusters for the Areas We Serve hub. Order is display order. */
export const LOCATION_REGIONS: LocationRegion[] = [
  {
    id: "blue-water",
    name: "Blue Water Area",
    heading: "Blue Water Area",
    description:
      "Port Huron and the river, lakeshore, and township communities that make up Junk Command’s home territory.",
    slugs: [
      "port-huron",
      "fort-gratiot",
      "marysville",
      "kimball-township",
      "st-clair",
      "marine-city",
      "algonac",
      "new-baltimore",
      "chesterfield",
    ],
  },
  {
    id: "i69-corridor",
    name: "I-69 Corridor",
    heading: "I-69 Corridor",
    description:
      "Western St. Clair and Lapeer County towns along I-69 and M-53, from Capac through Lapeer.",
    slugs: ["capac", "imlay-city", "attica", "lapeer"],
  },
  {
    id: "north-macomb",
    name: "North Macomb / M-19",
    heading: "North Macomb / M-19",
    description:
      "Border-town and village communities connecting the Blue Water Area with northern Macomb County.",
    slugs: ["memphis", "richmond", "armada", "romeo"],
  },
  {
    id: "southern-lapeer",
    name: "Southern Lapeer County",
    heading: "Southern Lapeer County",
    description:
      "Residential and larger-lot communities along M-53 and the roads between Romeo, Imlay City, and Lapeer.",
    slugs: ["almont", "dryden", "metamora"],
  },
  {
    id: "also-served",
    name: "Also Served",
    heading: "Also Served",
    description:
      "Additional towns and townships on our regular Blue Water, Sanilac, and county-line routes.",
    slugs: [
      "yale",
      "croswell",
      "lexington",
      "anchorville",
      "emmett",
      "clyde-township",
      "lenox-township",
    ],
  },
  {
    id: "county",
    name: "Countywide",
    heading: "Countywide Pages",
    description:
      "Broader coverage pages for customers who want junk removal across St. Clair or northeastern Macomb County.",
    slugs: ["st-clair-county", "macomb-county"],
  },
];
