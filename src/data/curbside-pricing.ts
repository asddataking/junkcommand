export const CURBSIDE_START = 99;
export const FULL_SERVICE_START = 129;
export const TRAILER_CUBIC_YARDS = 2.67;

export type EstimatorCategory =
  | "small"
  | "bulky"
  | "appliance"
  | "specialty"
  | "addon";

export type EstimatorItem = {
  id: string;
  name: string;
  startingPrice: number;
  category: EstimatorCategory;
  /** When true, item alone cannot create a pickup under CURBSIDE_START */
  isAddonOnly?: boolean;
  image?: string;
  icon?: "chair" | "bookshelf" | "bag" | "appliance" | "desk" | "sectional";
  alt: string;
};

export type LoadTier = {
  id: string;
  fillPercent: 25 | 50 | 75 | 100;
  name: string;
  price: number;
  cubicYards: number;
  examples: string[];
};

export const LOAD_TIERS: LoadTier[] = [
  {
    id: "quick-clear",
    fillPercent: 25,
    name: "Quick Clear",
    price: 179,
    cubicYards: Number((TRAILER_CUBIC_YARDS * 0.25).toFixed(2)),
    examples: [
      "A small garage corner",
      "Several bags and boxes",
      "One bulky item plus smaller junk",
      "Small apartment leftovers",
      "A few household items",
    ],
  },
  {
    id: "small-cleanup",
    fillPercent: 50,
    name: "Small Cleanup",
    price: 279,
    cubicYards: Number((TRAILER_CUBIC_YARDS * 0.5).toFixed(2)),
    examples: [
      "Several furniture pieces",
      "Bedroom cleanup",
      "Small storage-unit cleanup",
      "Moving leftovers",
      "Larger garage corner",
    ],
  },
  {
    id: "large-cleanup",
    fillPercent: 75,
    name: "Large Cleanup",
    price: 369,
    cubicYards: Number((TRAILER_CUBIC_YARDS * 0.75).toFixed(2)),
    examples: [
      "Multiple large furniture items",
      "Garage cleanup",
      "Small basement cleanup",
      "Moving or estate leftovers",
      "Mixed household junk",
    ],
  },
  {
    id: "full-command-load",
    fillPercent: 100,
    name: "Full Command Load",
    price: 449,
    cubicYards: TRAILER_CUBIC_YARDS,
    examples: [
      "Full trailer of ordinary household junk",
      "Whole-room cleanup",
      "Small estate cleanup",
      "Garage or basement cleanup",
      "Furniture, bags, and boxes",
    ],
  },
];

export const ESTIMATOR_ITEMS: EstimatorItem[] = [
  {
    id: "small-chair",
    name: "Small chair",
    startingPrice: 99,
    category: "small",
    icon: "chair",
    alt: "Small chair ready for curbside junk pickup",
  },
  {
    id: "recliner",
    name: "Recliner",
    startingPrice: 99,
    category: "bulky",
    image: "/images/pricing/recliner.webp",
    alt: "Recliner staged for curbside furniture removal",
  },
  {
    id: "mattress",
    name: "Mattress",
    startingPrice: 99,
    category: "bulky",
    image: "/images/pricing/mattress.webp",
    alt: "Mattress ready for curbside junk removal",
  },
  {
    id: "box-spring",
    name: "Box spring",
    startingPrice: 99,
    category: "bulky",
    image: "/images/pricing/box-spring.webp",
    alt: "Box spring ready for curbside haul-away",
  },
  {
    id: "standard-couch",
    name: "Standard couch",
    startingPrice: 99,
    category: "bulky",
    image: "/images/pricing/couch.webp",
    alt: "Standard couch ready for curbside pickup",
  },
  {
    id: "large-couch",
    name: "Large couch",
    startingPrice: 119,
    category: "bulky",
    image: "/images/pricing/couch.webp",
    alt: "Large couch ready for curbside junk pickup",
  },
  {
    id: "sectional-piece",
    name: "Sectional piece",
    startingPrice: 109,
    category: "bulky",
    icon: "sectional",
    alt: "Sectional sofa piece ready for pickup",
  },
  {
    id: "small-dresser",
    name: "Small dresser",
    startingPrice: 99,
    category: "bulky",
    image: "/images/pricing/dresser.webp",
    alt: "Small dresser ready for furniture removal",
  },
  {
    id: "large-dresser",
    name: "Large dresser",
    startingPrice: 99,
    category: "bulky",
    image: "/images/pricing/dresser.webp",
    alt: "Large dresser ready for furniture removal",
  },
  {
    id: "desk",
    name: "Desk",
    startingPrice: 99,
    category: "bulky",
    icon: "desk",
    alt: "Desk ready for curbside junk pickup",
  },
  {
    id: "bookshelf",
    name: "Bookshelf",
    startingPrice: 99,
    category: "bulky",
    icon: "bookshelf",
    alt: "Bookshelf ready for curbside junk pickup",
  },
  {
    id: "washer",
    name: "Washer",
    startingPrice: 109,
    category: "appliance",
    image: "/images/pricing/washer-dryer.webp",
    alt: "Washer ready for appliance removal",
  },
  {
    id: "dryer",
    name: "Dryer",
    startingPrice: 109,
    category: "appliance",
    image: "/images/pricing/washer-dryer.webp",
    alt: "Dryer ready for appliance removal",
  },
  {
    id: "refrigerator",
    name: "Refrigerator",
    startingPrice: 139,
    category: "specialty",
    image: "/images/pricing/refrigerator.webp",
    alt: "Refrigerator ready for specialty appliance removal",
  },
  {
    id: "freezer",
    name: "Freezer",
    startingPrice: 139,
    category: "specialty",
    image: "/images/pricing/refrigerator.webp",
    alt: "Freezer ready for specialty appliance removal",
  },
  {
    id: "television",
    name: "Television",
    startingPrice: 99,
    category: "small",
    image: "/images/pricing/television.webp",
    alt: "Television ready for curbside junk pickup",
  },
  {
    id: "bagged-junk",
    name: "Bagged household junk",
    startingPrice: 20,
    category: "addon",
    isAddonOnly: true,
    icon: "bag",
    alt: "Bagged household junk ready for pickup",
  },
  {
    id: "small-appliance",
    name: "Small appliance",
    startingPrice: 39,
    category: "addon",
    isAddonOnly: true,
    icon: "appliance",
    alt: "Small appliance ready for add-on pickup",
  },
];

export type CommonItemCard = {
  id: string;
  name: string;
  priceLabel: string;
  startingPrice: number;
  serviceLabel: "Curbside" | "Full-Service" | "Load";
  disclaimer: string;
  estimatorItemId?: string;
  loadTierId?: string;
  image?: string;
  alt: string;
};

export const COMMON_ITEM_CARDS: CommonItemCard[] = [
  {
    id: "couch",
    name: "Couch",
    priceLabel: "Curbside from $99",
    startingPrice: 99,
    serviceLabel: "Curbside",
    disclaimer: "Typical sofa already outside and ready to load.",
    estimatorItemId: "standard-couch",
    image: "/images/pricing/couch.webp",
    alt: "Couch ready for curbside junk pickup",
  },
  {
    id: "mattress",
    name: "Mattress",
    priceLabel: "Curbside from $99",
    startingPrice: 99,
    serviceLabel: "Curbside",
    disclaimer: "Standard mattress ready at the curb.",
    estimatorItemId: "mattress",
    image: "/images/pricing/mattress.webp",
    alt: "Mattress ready for curbside junk pickup",
  },
  {
    id: "recliner",
    name: "Recliner",
    priceLabel: "Curbside from $99",
    startingPrice: 99,
    serviceLabel: "Curbside",
    disclaimer: "Qualifying recliner already outside.",
    estimatorItemId: "recliner",
    image: "/images/pricing/recliner.webp",
    alt: "Recliner ready for curbside junk pickup",
  },
  {
    id: "small-dresser",
    name: "Small Dresser",
    priceLabel: "Curbside from $99",
    startingPrice: 99,
    serviceLabel: "Curbside",
    disclaimer: "Small dresser staged for easy loading.",
    estimatorItemId: "small-dresser",
    image: "/images/pricing/dresser.webp",
    alt: "Small dresser ready for curbside junk pickup",
  },
  {
    id: "washer-dryer",
    name: "Washer or Dryer",
    priceLabel: "Starting at $109",
    startingPrice: 109,
    serviceLabel: "Curbside",
    disclaimer: "Single washer or dryer; access affects final price.",
    estimatorItemId: "washer",
    image: "/images/pricing/washer-dryer.webp",
    alt: "Washer or dryer ready for appliance pickup",
  },
  {
    id: "fridge-freezer",
    name: "Refrigerator or Freezer",
    priceLabel: "Starting at $139",
    startingPrice: 139,
    serviceLabel: "Curbside",
    disclaimer: "Specialty appliance pricing; photos required.",
    estimatorItemId: "refrigerator",
    image: "/images/pricing/refrigerator.webp",
    alt: "Refrigerator or freezer ready for specialty pickup",
  },
  {
    id: "full-service-single",
    name: "Full-Service Single Item",
    priceLabel: "Starting at $129",
    startingPrice: 129,
    serviceLabel: "Full-Service",
    disclaimer: "We carry the item out from inside your property.",
    alt: "Full-service single item junk removal",
  },
  {
    id: "small-cleanup",
    name: "Small Cleanup",
    priceLabel: "Starting at $179",
    startingPrice: 179,
    serviceLabel: "Load",
    disclaimer: "Quick Clear load tier for mixed smaller piles.",
    loadTierId: "quick-clear",
    alt: "Small cleanup junk removal load",
  },
];

export const SPECIALTY_ITEMS = [
  "Concrete",
  "Bricks",
  "Dirt",
  "Shingles",
  "Tile",
  "Plaster",
  "Wet materials",
  "Large quantities of books",
  "Construction debris",
  "Tires",
  "Refrigerators and freezers",
  "Mattresses with separate disposal fees",
  "Pianos",
  "Hot tubs",
  "Safes",
] as const;

export const SERVICE_TYPES = [
  "Curbside Command",
  "Full-Service Command",
  "Command Load Pricing",
  "Specialty or Heavy Item",
  "Not Sure",
] as const;

export type ServiceType = (typeof SERVICE_TYPES)[number];

export function getEstimatorItem(id: string): EstimatorItem | undefined {
  return ESTIMATOR_ITEMS.find((item) => item.id === id);
}

export function getLoadTierByFill(fillPercent: number): LoadTier {
  const match = LOAD_TIERS.find((tier) => tier.fillPercent === fillPercent);
  return match ?? LOAD_TIERS[0];
}
