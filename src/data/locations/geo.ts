export type LocationGeo = {
  latitude: number;
  longitude: number;
  /** Name people actually type into Google Maps */
  searchName: string;
  aliases?: string[];
  zips?: string[];
};

/**
 * Map pins for city pages. City maps must center on that town — not Port Huron —
 * so “junk removal near Kimball MI” and similar queries stay geographically honest.
 */
export const LOCATION_GEO: Record<string, LocationGeo> = {
  "port-huron": {
    latitude: 42.9709,
    longitude: -82.4249,
    searchName: "Port Huron",
    zips: ["48060"],
  },
  "fort-gratiot": {
    latitude: 43.0214,
    longitude: -82.4488,
    searchName: "Fort Gratiot",
    aliases: ["Fort Gratiot Township"],
    zips: ["48059"],
  },
  marysville: {
    latitude: 42.9125,
    longitude: -82.4869,
    searchName: "Marysville",
    zips: ["48040"],
  },
  "kimball-township": {
    latitude: 42.94809,
    longitude: -82.56242,
    searchName: "Kimball",
    aliases: ["Kimball", "Kimball Township", "Wadhams", "Smiths Creek"],
    zips: ["48074", "48094"],
  },
  "st-clair": {
    latitude: 42.8231,
    longitude: -82.486,
    searchName: "St. Clair",
    zips: ["48079"],
  },
  "marine-city": {
    latitude: 42.7195,
    longitude: -82.4921,
    searchName: "Marine City",
    zips: ["48039"],
  },
  algonac: {
    latitude: 42.6181,
    longitude: -82.531,
    searchName: "Algonac",
    zips: ["48001"],
  },
  "new-baltimore": {
    latitude: 42.6811,
    longitude: -82.7369,
    searchName: "New Baltimore",
    zips: ["48047"],
  },
  chesterfield: {
    latitude: 42.6628,
    longitude: -82.8427,
    searchName: "Chesterfield",
    aliases: ["Chesterfield Township"],
    zips: ["48047", "48051"],
  },
  capac: {
    latitude: 43.0125,
    longitude: -82.9277,
    searchName: "Capac",
    zips: ["48014"],
  },
  "imlay-city": {
    latitude: 43.0247,
    longitude: -83.0744,
    searchName: "Imlay City",
    zips: ["48444"],
  },
  attica: {
    latitude: 43.03,
    longitude: -83.17,
    searchName: "Attica",
    zips: ["48412"],
  },
  lapeer: {
    latitude: 43.0514,
    longitude: -83.3188,
    searchName: "Lapeer",
    zips: ["48446"],
  },
  memphis: {
    latitude: 42.8964,
    longitude: -82.7688,
    searchName: "Memphis",
    zips: ["48041"],
  },
  richmond: {
    latitude: 42.8092,
    longitude: -82.7558,
    searchName: "Richmond",
    zips: ["48062"],
  },
  armada: {
    latitude: 42.8442,
    longitude: -82.8844,
    searchName: "Armada",
    zips: ["48005"],
  },
  romeo: {
    latitude: 42.8028,
    longitude: -83.0127,
    searchName: "Romeo",
    zips: ["48065"],
  },
  almont: {
    latitude: 42.9203,
    longitude: -83.0452,
    searchName: "Almont",
    zips: ["48003"],
  },
  dryden: {
    latitude: 42.9464,
    longitude: -83.1238,
    searchName: "Dryden",
    zips: ["48428"],
  },
  metamora: {
    latitude: 42.9417,
    longitude: -83.2891,
    searchName: "Metamora",
    zips: ["48455"],
  },
  yale: {
    latitude: 43.13,
    longitude: -82.798,
    searchName: "Yale",
    zips: ["48097"],
  },
  croswell: {
    latitude: 43.2753,
    longitude: -82.621,
    searchName: "Croswell",
    zips: ["48422"],
  },
  lexington: {
    latitude: 43.2681,
    longitude: -82.5307,
    searchName: "Lexington",
    zips: ["48450"],
  },
  anchorville: {
    latitude: 42.6911,
    longitude: -82.6991,
    searchName: "Anchorville",
    zips: ["48004"],
  },
  emmett: {
    latitude: 43.0,
    longitude: -82.758,
    searchName: "Emmett",
    zips: ["48022"],
  },
  "clyde-township": {
    latitude: 43.038,
    longitude: -82.58,
    searchName: "Clyde",
    aliases: ["Clyde Township"],
    zips: ["48049"],
  },
  "lenox-township": {
    latitude: 42.76,
    longitude: -82.8,
    searchName: "Lenox",
    aliases: ["Lenox Township"],
    zips: ["48050"],
  },
  "st-clair-county": {
    latitude: 42.926,
    longitude: -82.536,
    searchName: "St. Clair County",
  },
  "macomb-county": {
    latitude: 42.701,
    longitude: -82.918,
    searchName: "Macomb County",
  },
};

export function getLocationGeo(slug: string): LocationGeo | undefined {
  return LOCATION_GEO[slug];
}
