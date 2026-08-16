import {
  LOCATIONS,
  getAllLocationSlugs,
  getHeroImage,
  getLocationBySlug,
  getNearbyLocations,
} from "@/data/locations";
import type { LocationPage } from "@/data/locations/types";

/**
 * Legacy city shape used by schema, sitemap, and a few remaining consumers.
 * New location pages should import from `@/data/locations`.
 */
export type City = LocationPage & {
  intro: string;
  introduction: string[];
  image: string;
  imageAlt: string;
};

export function toCity(location: LocationPage): City {
  const hero = getHeroImage(location);
  return {
    ...location,
    intro: location.heroIntro,
    introduction: location.localIntro,
    image: hero?.src ?? "/images/junk-command-hero.webp",
    imageAlt:
      hero?.alt ?? `Junk Command junk removal serving ${location.name}, Michigan`,
  };
}

export const CITIES: City[] = LOCATIONS.map(toCity);

export const CITY_NAMES: string[] = CITIES.map((city) => city.name);

export function getCityBySlug(slug: string): City | undefined {
  const location = getLocationBySlug(slug);
  return location ? toCity(location) : undefined;
}

export function getAllCitySlugs(): string[] {
  return getAllLocationSlugs();
}

export function getNearbyCities(city: City): City[] {
  return getNearbyLocations(city).map(toCity);
}
