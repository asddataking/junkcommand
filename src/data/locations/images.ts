import type { LocationImage } from "@/data/locations/types";

export type LocationImageSet =
  | "urban"
  | "rural"
  | "waterfront"
  | "village"
  | "county";

const ASSETS = {
  hero: "/images/junk-command-hero.webp",
  crew: "/images/dan-gage-luna.webp",
  trailer: "/images/trailer.webp",
  garage: "/images/services/garage-cleanout.webp",
  estate: "/images/services/estate-cleanout.webp",
  furniture: "/images/services/furniture-removal.webp",
  appliance: "/images/services/appliance-removal.webp",
  construction: "/images/services/construction-debris-removal.webp",
  hotTub: "/images/services/hot-tub-removal.webp",
  luna: "/images/luna-mascot.webp",
} as const;

/**
 * Honest captions: these photos are real Junk Command / service shots,
 * not claimed as being taken on that city's Main Street.
 */
export function buildLocationImages(
  city: string,
  area: string,
  set: LocationImageSet = "village",
): LocationImage[] {
  const serving = `serving ${city} and ${area}`;

  if (set === "urban") {
    return [
      {
        src: ASSETS.hero,
        alt: `Junk Command crew loading a trailer for junk removal ${serving}`,
        caption: `Junk Command crew and trailer — full-service junk removal ${serving}`,
        role: "hero",
      },
      {
        src: ASSETS.furniture,
        alt: `Furniture being removed for a residential junk hauling job ${serving}`,
        caption: `Furniture removal of the kind we handle for homes and rentals ${serving}`,
        role: "intro",
      },
      {
        src: ASSETS.appliance,
        alt: `Appliance haul-away for a property cleanout ${serving}`,
        caption: `Appliance pickup — refrigerators, washers, and dryers ${serving}`,
        role: "services",
      },
      {
        src: ASSETS.estate,
        alt: `Estate and property cleanout work ${serving}`,
        caption: `Whole-property cleanouts for moves, estates, and rentals ${serving}`,
        role: "cleanout",
      },
    ];
  }

  if (set === "waterfront") {
    return [
      {
        src: ASSETS.crew,
        alt: `Junk Command crew with Luna ready for a pickup ${serving}`,
        caption: `Dan, Gage, and Luna — the Port Huron crew ${serving}`,
        role: "hero",
      },
      {
        src: ASSETS.furniture,
        alt: `Household furniture staged for junk removal ${serving}`,
        caption: `Sofas, mattresses, and household furniture hauled ${serving}`,
        role: "intro",
      },
      {
        src: ASSETS.hotTub,
        alt: `Outdoor and patio item removal ${serving}`,
        caption: `Outdoor junk and bulky patio items — typical of lake and river properties ${serving}`,
        role: "gallery",
      },
      {
        src: ASSETS.garage,
        alt: `Garage cleanout in progress ${serving}`,
        caption: `Garage and storage cleanouts before seasonal turnover ${serving}`,
        role: "cleanout",
      },
    ];
  }

  if (set === "rural") {
    return [
      {
        src: ASSETS.trailer,
        alt: `Junk Command trailer used for rural property cleanouts ${serving}`,
        caption: `Junk Command trailer — built for mixed loads on larger properties ${serving}`,
        role: "hero",
      },
      {
        src: ASSETS.garage,
        alt: `Garage and outbuilding cleanout ${serving}`,
        caption: `Garage, barn, and outbuilding cleanouts ${serving}`,
        role: "intro",
      },
      {
        src: ASSETS.construction,
        alt: `Mixed debris and property cleanup ${serving}`,
        caption: `Mixed household junk and light debris removed ${serving}`,
        role: "services",
      },
      {
        src: ASSETS.estate,
        alt: `Estate cleanout on a larger residential property ${serving}`,
        caption: `Estate and whole-property cleanouts ${serving}`,
        role: "cleanout",
      },
    ];
  }

  if (set === "county") {
    return [
      {
        src: ASSETS.hero,
        alt: `Junk Command providing junk removal ${serving}`,
        caption: `Veteran-owned junk removal ${serving}`,
        role: "hero",
      },
      {
        src: ASSETS.crew,
        alt: `Junk Command crew ${serving}`,
        caption: `The Port Huron crew that covers jobs ${serving}`,
        role: "intro",
      },
      {
        src: ASSETS.garage,
        alt: `Cleanout work ${serving}`,
        caption: `Garage and property cleanouts across the county`,
        role: "services",
      },
      {
        src: ASSETS.estate,
        alt: `Property cleanout ${serving}`,
        caption: `Estate and whole-house cleanouts ${serving}`,
        role: "cleanout",
      },
    ];
  }

  return [
    {
      src: ASSETS.hero,
      alt: `Junk Command junk removal crew ${serving}`,
      caption: `Junk Command crew loading a pickup ${serving}`,
      role: "hero",
    },
    {
      src: ASSETS.furniture,
      alt: `Furniture removal ${serving}`,
      caption: `Furniture and household junk hauled from village homes ${serving}`,
      role: "intro",
    },
    {
      src: ASSETS.garage,
      alt: `Garage cleanout ${serving}`,
      caption: `Garage cleanouts for homeowners ${serving}`,
      role: "services",
    },
    {
      src: ASSETS.estate,
      alt: `Estate cleanout ${serving}`,
      caption: `Estate and inherited-home cleanouts ${serving}`,
      role: "cleanout",
    },
  ];
}

export const SERVICE_PRESETS = {
  urban: [
    "furniture-removal",
    "appliance-removal",
    "garage-cleanout",
    "basement-cleanout",
    "estate-cleanout",
    "storage-unit-cleanout",
    "foreclosure-cleanout",
  ],
  waterfront: [
    "furniture-removal",
    "appliance-removal",
    "garage-cleanout",
    "estate-cleanout",
    "yard-debris-removal",
    "hot-tub-removal",
    "basement-cleanout",
  ],
  rural: [
    "garage-cleanout",
    "estate-cleanout",
    "furniture-removal",
    "appliance-removal",
    "yard-debris-removal",
    "construction-debris-removal",
    "shed-removal",
  ],
  village: [
    "furniture-removal",
    "appliance-removal",
    "garage-cleanout",
    "estate-cleanout",
    "basement-cleanout",
    "storage-unit-cleanout",
    "yard-debris-removal",
  ],
  countySeat: [
    "furniture-removal",
    "appliance-removal",
    "garage-cleanout",
    "estate-cleanout",
    "storage-unit-cleanout",
    "foreclosure-cleanout",
    "construction-debris-removal",
  ],
} as const;
