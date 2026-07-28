export type PricingItem = {
  id: string;
  name: string;
  startingPrice: number;
  image: string;
  alt: string;
  href?: string;
};

export const PRICING_ITEMS: PricingItem[] = [
  {
    id: "couch-loveseat",
    name: "Couch / Loveseat",
    startingPrice: 99,
    image: "/images/pricing/couch.webp",
    alt: "Couch ready for junk removal pickup in Port Huron",
    href: "/furniture-removal",
  },
  {
    id: "mattress",
    name: "Mattress",
    startingPrice: 99,
    image: "/images/pricing/mattress.webp",
    alt: "Mattress ready for same-day junk removal pickup",
  },
  {
    id: "recliner",
    name: "Recliner",
    startingPrice: 99,
    image: "/images/pricing/recliner.webp",
    alt: "Recliner staged for furniture removal",
    href: "/furniture-removal",
  },
  {
    id: "washer-dryer",
    name: "Washer / Dryer",
    startingPrice: 99,
    image: "/images/pricing/washer-dryer.webp",
    alt: "Washer and dryer ready for appliance removal",
    href: "/appliance-removal",
  },
  {
    id: "refrigerator",
    name: "Refrigerator",
    startingPrice: 129,
    image: "/images/pricing/refrigerator.webp",
    alt: "Refrigerator ready for appliance removal pickup",
    href: "/appliance-removal",
  },
  {
    id: "box-spring",
    name: "Box Spring",
    startingPrice: 99,
    image: "/images/pricing/box-spring.webp",
    alt: "Box spring ready for junk removal haul-away",
  },
  {
    id: "dresser",
    name: "Dresser",
    startingPrice: 99,
    image: "/images/pricing/dresser.webp",
    alt: "Dresser ready for furniture removal",
    href: "/furniture-removal",
  },
  {
    id: "television",
    name: "Television",
    startingPrice: 99,
    image: "/images/pricing/television.webp",
    alt: "Television ready for junk removal pickup",
  },
  {
    id: "exercise-equipment",
    name: "Exercise Equipment",
    startingPrice: 129,
    image: "/images/pricing/exercise-equipment.webp",
    alt: "Exercise equipment ready for junk removal",
  },
  {
    id: "hot-tub",
    name: "Hot Tub",
    startingPrice: 399,
    image: "/images/pricing/hot-tub.webp",
    alt: "Hot tub ready for professional hot tub removal",
    href: "/hot-tub-removal",
  },
];

export const usdPriceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function formatStartingPrice(amount: number) {
  return usdPriceFormatter.format(amount);
}
