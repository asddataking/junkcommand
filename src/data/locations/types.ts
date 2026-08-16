export type LocationLayout = "editorial" | "split" | "gallery";

export type LocationRegionId =
  | "blue-water"
  | "i69-corridor"
  | "north-macomb"
  | "southern-lapeer"
  | "also-served"
  | "county";

export type LocationImageRole = "hero" | "intro" | "services" | "cleanout" | "gallery";

export type LocationImage = {
  src: string;
  alt: string;
  caption: string;
  role: LocationImageRole;
};

export type LocationFaq = {
  question: string;
  answer: string;
};

export type LocationPage = {
  slug: string;
  name: string;
  county: string;
  regionId: LocationRegionId;
  isCounty?: boolean;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  heroIntro: string;
  localIntro: string[];
  featuredServiceSlugs: string[];
  servicesIntro: string;
  cleanoutHeading: string;
  cleanoutBody: string[];
  midCtaTitle: string;
  midCtaDescription: string;
  nearbySlugs: string[];
  faqs: LocationFaq[];
  layout: LocationLayout;
  images: LocationImage[];
};
