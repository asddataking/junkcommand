import type { LocationPage } from "@/data/locations/types";
import { BLUE_WATER_LOCATIONS } from "@/data/locations/blue-water";
import { I69_CORRIDOR_LOCATIONS } from "@/data/locations/i69-corridor";
import { NORTH_MACOMB_LOCATIONS } from "@/data/locations/north-macomb";
import { SOUTHERN_LAPEER_LOCATIONS } from "@/data/locations/southern-lapeer";
import {
  ALSO_SERVED_LOCATIONS,
  COUNTY_LOCATIONS,
} from "@/data/locations/existing-other";
import { LOCATION_REGIONS } from "@/data/locations/regions";

export const LOCATIONS: LocationPage[] = [
  ...BLUE_WATER_LOCATIONS,
  ...I69_CORRIDOR_LOCATIONS,
  ...NORTH_MACOMB_LOCATIONS,
  ...SOUTHERN_LAPEER_LOCATIONS,
  ...ALSO_SERVED_LOCATIONS,
  ...COUNTY_LOCATIONS,
];

const bySlug = new Map(LOCATIONS.map((location) => [location.slug, location]));

export function getLocationBySlug(slug: string): LocationPage | undefined {
  return bySlug.get(slug);
}

export function getAllLocationSlugs(): string[] {
  return LOCATIONS.map((location) => location.slug);
}

export function getNearbyLocations(location: LocationPage): LocationPage[] {
  return location.nearbySlugs
    .map((slug) => bySlug.get(slug))
    .filter((item): item is LocationPage => Boolean(item));
}

export function getLocationsByRegion(regionId: LocationPage["regionId"]) {
  const region = LOCATION_REGIONS.find((item) => item.id === regionId);
  if (!region) return [];
  return region.slugs
    .map((slug) => bySlug.get(slug))
    .filter((item): item is LocationPage => Boolean(item));
}

export function getHeroImage(location: LocationPage) {
  return (
    location.images.find((image) => image.role === "hero") ?? location.images[0]
  );
}

export {
  LOCATION_REGIONS,
  type LocationRegion,
} from "@/data/locations/regions";
export { getLocationGeo, LOCATION_GEO } from "@/data/locations/geo";
export type {
  LocationPage,
  LocationLayout,
  LocationImage,
  LocationFaq,
  LocationRegionId,
} from "@/data/locations/types";
