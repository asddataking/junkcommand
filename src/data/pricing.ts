export type PricingItem = {
  id: string;
  name: string;
  startingPrice: number;
  image: string;
  alt: string;
  href?: string;
  /** Special end card with custom CTA copy instead of a price */
  isCtaCard?: boolean;
  ctaTitle?: string;
  ctaDescription?: string;
};

export const PRICING_ITEMS: PricingItem[] = [
  {
    id: "couch",
    name: "Couch",
    startingPrice: 129,
    image: "/images/pricing/couch.webp",
    alt: "Couch ready for junk removal pickup in Port Huron",
    href: "/furniture-removal",
  },
  {
    id: "mattress",
    name: "Mattress",
    startingPrice: 129,
    image: "/images/pricing/mattress.webp",
    alt: "Mattress ready for junk removal pickup",
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
    id: "washer",
    name: "Washer",
    startingPrice: 129,
    image: "/images/pricing/washer-dryer.webp",
    alt: "Washer ready for appliance removal",
    href: "/appliance-removal",
  },
  {
    id: "dryer",
    name: "Dryer",
    startingPrice: 129,
    image: "/images/pricing/washer-dryer.webp",
    alt: "Dryer ready for appliance removal",
    href: "/appliance-removal",
  },
  {
    id: "stove",
    name: "Stove",
    startingPrice: 129,
    image: "/images/pricing/refrigerator.webp",
    alt: "Stove ready for appliance removal pickup",
    href: "/appliance-removal",
  },
  {
    id: "recliner",
    name: "Recliner",
    startingPrice: 129,
    image: "/images/pricing/recliner.webp",
    alt: "Recliner staged for furniture removal",
    href: "/furniture-removal",
  },
  {
    id: "dresser",
    name: "Dresser",
    startingPrice: 129,
    image: "/images/pricing/dresser.webp",
    alt: "Dresser ready for furniture removal",
    href: "/furniture-removal",
  },
  {
    id: "bbq-grill",
    name: "BBQ Grill",
    startingPrice: 129,
    image: "/images/pricing/hot-tub.webp",
    alt: "BBQ grill ready for junk removal haul-away",
  },
  {
    id: "treadmill",
    name: "Treadmill",
    startingPrice: 129,
    image: "/images/pricing/exercise-equipment.webp",
    alt: "Treadmill ready for junk removal",
  },
  {
    id: "something-else",
    name: "Need something else removed?",
    startingPrice: 0,
    image: "/images/pricing/couch.webp",
    alt: "Request a free junk removal quote for any item",
    isCtaCard: true,
    ctaTitle: "Need something else removed?",
    ctaDescription: "Free, upfront quote in minutes. No hidden fees.",
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
