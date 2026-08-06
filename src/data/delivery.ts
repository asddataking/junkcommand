export type DeliveryArea = {
  name: string;
  slug?: string;
};

export type DeliveryFeature = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export type DeliveryGalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type DeliveryPage = {
  slug: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  image: string;
  imageAlt: string;
  primaryCta: { label: string; href: string };
  contextSection?: {
    title: string;
    paragraphs: string[];
    image?: string;
    imageAlt?: string;
  };
  gallery?: DeliveryGalleryImage[];
  process: { title: string; description: string }[];
  features: DeliveryFeature[];
  removalCta?: {
    title: string;
    description: string;
    href: string;
    linkLabel: string;
  };
  areasIntro: string;
  areas: DeliveryArea[];
  faqs: { question: string; answer: string }[];
  formTitle: string;
  formDescription: string;
  endCtaTitle: string;
  endCtaDescription: string;
  relatedLinks: { label: string; href: string }[];
};

export const DELIVERY_AREAS: DeliveryArea[] = [
  { name: "Kimball Township", slug: "kimball-township" },
  { name: "Port Huron", slug: "port-huron" },
  { name: "Fort Gratiot", slug: "fort-gratiot" },
  { name: "Marysville", slug: "marysville" },
  { name: "St. Clair", slug: "st-clair" },
  { name: "Marine City", slug: "marine-city" },
  { name: "Algonac", slug: "algonac" },
  { name: "New Baltimore", slug: "new-baltimore" },
  { name: "Lexington", slug: "lexington" },
  { name: "Croswell", slug: "croswell" },
  { name: "Yale", slug: "yale" },
  { name: "Capac", slug: "capac" },
  { name: "Richmond", slug: "richmond" },
];

export const GARAGE_SALE_TRAIL: DeliveryPage = {
  slug: "garage-sale-trail",
  path: "/garage-sale-trail",
  metaTitle:
    "Garage Sale Delivery Port Huron | Thumb Yard Sale Trail | Junk Command",
  metaDescription:
    "Bought furniture at a garage sale with no truck? Junk Command delivers large items along Michigan's Thumb Antique Yard Sale Trail — Port Huron, Blue Water Area & more. Call 810-242-0429.",
  eyebrow: "Garage Sale Trail Delivery",
  h1: "Bought Something Too Big? We'll Bring It Home.",
  intro:
    "Score a dresser, antique, or appliance along Michigan's Thumb Antique Yard Sale Trail — then text Junk Command. We haul large garage sale finds home across Port Huron, the Blue Water Area, and communities along M-29 and M-25 so you can keep shopping without a trailer.",
  image: "/images/garage-sale-trail/lexington-lake-huron-beach.webp",
  imageAlt:
    "Lexington, Michigan beach on Lake Huron along the Thumb Yard Sale Trail",
  primaryCta: { label: "Request Delivery", href: "#quote" },
  contextSection: {
    title: "MICHIGAN'S THUMB YARD SALE TRAIL",
    paragraphs: [
      "Each August, Michigan's Thumb Antique Yard Sale Trail turns the shoreline roads of the Blue Water Area into miles of garage sales, barn sales, and antique stops. The route stretches along M-29 and M-25 — up the St. Clair River through communities like New Baltimore, Marine City, St. Clair, and Port Huron, then north along Lake Huron through Lexington and the Thumb coast.",
      "Shoppers often base around Port Huron and work a segment at a time. When you find furniture, antiques, or appliances too big for your car, Junk Command provides garage sale pickup and large item delivery so you can keep browsing instead of hunting for a trailer rental.",
    ],
    image: "/images/garage-sale-trail/lexington-downtown-waterfront.webp",
    imageAlt:
      "Lexington, Michigan downtown near the Lake Huron waterfront on the Yard Sale Trail",
  },
  gallery: [
    {
      src: "/images/garage-sale-trail/lexington-lake-huron-beach.webp",
      alt: "Sandy beach and Lake Huron shoreline in Lexington, Michigan",
      caption: "Lexington Beach · Lake Huron",
    },
    {
      src: "/images/garage-sale-trail/lexington-downtown-waterfront.webp",
      alt: "Downtown Lexington, Michigan near the waterfront",
      caption: "Downtown Lexington",
    },
    {
      src: "/images/garage-sale-trail/thumb-coast-m25-trail.webp",
      alt: "Coastal Michigan highway along Lake Huron on the Thumb Yard Sale Trail",
      caption: "M-25 Thumb Coast",
    },
  ],
  process: [
    {
      title: "Text photos & pickup spot",
      description:
        "Share pictures of the item, the sale address or cross streets, and where you need it delivered in the Blue Water Area.",
    },
    {
      title: "Get a fast delivery quote",
      description:
        "We confirm pricing and timing — including same-day garage sale delivery when our route allows.",
    },
    {
      title: "We pick up & bring it home",
      description:
        "Our local crew loads carefully, protects the piece in transit, and delivers to your driveway or garage.",
    },
  ],
  features: [
    {
      title: "Same-Day Garage Sale Delivery",
      description:
        "Found the perfect piece mid-trail? Call or text for same-day garage sale delivery across Port Huron, Fort Gratiot, Marysville, and nearby Thumb towns when scheduling allows. We specialize in large item delivery when you bought furniture but have no truck.",
    },
    {
      title: "Furniture Pickup",
      description:
        "Sofas, dressers, tables, beds, and cabinets from yard sales and antique stops. Furniture delivery from the sale to your home — no rental truck, no strained backs.",
    },
    {
      title: "Appliance Pickup",
      description:
        "Working appliances scored at garage sales need careful loading. We haul fridges, washers, dryers, and more with the same professionalism as our junk removal crew.",
    },
    {
      title: "Antique Delivery",
      description:
        "Fragile antiques and vintage finds from the Yard Sale Trail deserve careful handling. Tell us about stairs, tight doorways, and delicate finishes when you book.",
    },
    {
      title: "Estate Sale Purchases",
      description:
        "Bought big pieces at an estate sale in St. Clair County or along the trail? We coordinate pickup windows so you can close the deal without scrambling for trailer delivery.",
    },
  ],
  removalCta: {
    title: "Need Your Old Furniture Removed?",
    description:
      "Replacing a sofa or clearing space for your new garage sale find? Junk Command also handles professional furniture removal across Southeast Michigan — haul the old out, bring the new in.",
    href: "/furniture-removal",
    linkLabel: "Furniture Removal",
  },
  areasIntro:
    "Junk Command provides garage sale pickup and furniture delivery throughout Port Huron, St. Clair County, and the Blue Water Area communities that shop the Thumb Yard Sale Trail.",
  areas: DELIVERY_AREAS,
  faqs: [
    {
      question: "Do you deliver from Michigan's Thumb Antique Yard Sale Trail?",
      answer:
        "Yes. Each August, the trail stretches along M-29 and M-25 through Michigan's Thumb and the Blue Water Area — from communities near New Baltimore and Algonac up through Port Huron, Lexington, and beyond. Text us the pickup location and we will haul your find home.",
    },
    {
      question: "Can you do same-day garage sale delivery?",
      answer:
        "Often yes when photos and addresses come in early and we have an open window. Same-day large item delivery is popular during Yard Sale Trail weekend — text 810-242-0429 as soon as you buy.",
    },
    {
      question: "What if I bought furniture but have no truck?",
      answer:
        "That is exactly what this service is for. We provide trailer delivery and furniture hauling so you can buy confidently at garage sales, Craigslist meetups, and estate sales without owning a truck.",
    },
    {
      question: "Do you only deliver, or can you remove old junk too?",
      answer:
        "Both. Many customers schedule furniture delivery for a new piece and furniture removal for what it replaces. Ask when you request a quote — we can often handle both in one visit.",
    },
    {
      question: "Which towns do you serve for Port Huron garage sale delivery?",
      answer:
        "We regularly serve Kimball Township, Port Huron, Fort Gratiot, Marysville, St. Clair, Marine City, Algonac, New Baltimore, Lexington, Croswell, Yale, Capac, Richmond, and surrounding Blue Water communities.",
    },
  ],
  formTitle: "REQUEST GARAGE SALE DELIVERY",
  formDescription:
    "Send photos of what you bought, the pickup address, and where it needs to go. We will confirm pricing for garage sale pickup and delivery across the Blue Water Area.",
  endCtaTitle: "KEEP THE FIND. SKIP THE TRUCK RENTAL.",
  endCtaDescription:
    "Garage sale delivery, antique hauling, and large item delivery along the Thumb Yard Sale Trail — call, text, or request a quote now.",
  relatedLinks: [
    { label: "Junk Removal Services", href: "/services" },
    { label: "Furniture Removal", href: "/furniture-removal" },
    { label: "Furniture & Marketplace Delivery", href: "/furniture-delivery" },
    { label: "Contact", href: "/contact" },
  ],
};

export const FURNITURE_DELIVERY: DeliveryPage = {
  slug: "furniture-delivery",
  path: "/furniture-delivery",
  metaTitle:
    "Furniture Delivery Port Huron MI | Marketplace Pickup | Junk Command",
  metaDescription:
    "Furniture delivery and marketplace pickup in Port Huron & the Blue Water Area. Craigslist, estate sales, auctions, garage sales — we haul large items. Call 810-242-0429.",
  eyebrow: "Furniture & Marketplace Delivery",
  h1: "Furniture Delivery & Marketplace Pickup",
  intro:
    "Need someone with a trailer? Junk Command delivers furniture and large items across Port Huron and Southeast Michigan — marketplace pickups, estate sale purchases, auction wins, and garage sale finds included.",
  image: "/images/services/furniture-removal.webp",
  imageAlt:
    "Junk Command crew delivering furniture in Port Huron and the Blue Water Area",
  primaryCta: { label: "Request Delivery", href: "#quote" },
  process: [
    {
      title: "Share the listing or photos",
      description:
        "Send marketplace links, auction lot photos, or pictures from the seller — plus both pickup and drop-off addresses.",
    },
    {
      title: "Lock in a clear price",
      description:
        "We quote furniture hauling and large item delivery before we roll so you know the cost upfront.",
    },
    {
      title: "Pickup, haul, deliver",
      description:
        "Our Port Huron crew loads carefully, transports, and places items where you need them when access allows.",
    },
  ],
  features: [
    {
      title: "What We Deliver",
      description:
        "Sofas, mattresses, dressers, dining sets, appliances, antiques, gym equipment, and other bulky household items. If it fits our trailer and can be moved safely, we can usually haul it.",
    },
    {
      title: "Marketplace Delivery",
      description:
        "Marketplace pickup and marketplace delivery for Facebook Marketplace, Craigslist, OfferUp, and similar buys. We meet sellers, load the item, and bring it to your home in Port Huron or nearby towns.",
    },
    {
      title: "Garage Sale Pickup",
      description:
        "Year-round garage sale pickup — not just Yard Sale Trail weekend. Bought furniture at a local sale with no truck? We provide trailer delivery so the deal does not fall through.",
    },
    {
      title: "Estate Sale Delivery",
      description:
        "Estate sale delivery and antique delivery for pieces that need careful handling and timed pickup. Coordinate with the sale window and we will get the furniture home.",
    },
    {
      title: "Auction & Craigslist Pickup",
      description:
        "Won an auction lot or closed a Craigslist deal? We handle auction pickup and Craigslist pickup across St. Clair County so you are not stuck figuring out logistics alone.",
    },
  ],
  removalCta: {
    title: "Need Old Furniture Hauled Away Instead?",
    description:
      "If you need furniture removed — not delivered — our core junk removal service clears sofas, mattresses, and bulky pieces from homes across the Blue Water Area.",
    href: "/furniture-removal",
    linkLabel: "Furniture Removal",
  },
  areasIntro:
    "Furniture delivery Port Huron service extends throughout St. Clair County and the Blue Water Area for marketplace hauling and large item delivery.",
  areas: DELIVERY_AREAS,
  faqs: [
    {
      question: "Do you offer furniture delivery in Port Huron?",
      answer:
        "Yes. Junk Command provides furniture delivery and large item delivery throughout Port Huron, Marysville, Fort Gratiot, Kimball Township, and surrounding communities.",
    },
    {
      question: "Can you pick up from Facebook Marketplace or Craigslist?",
      answer:
        "Yes. Marketplace pickup and Craigslist pickup are common requests. Share the seller location, item photos, and your delivery address for a quote.",
    },
    {
      question: "What if I just need someone with a trailer?",
      answer:
        "That is a core part of this service. Furniture hauling and trailer delivery for purchases you already made — garage sales, auctions, estate sales, and private sellers.",
    },
    {
      question: "Is this the same as junk removal?",
      answer:
        "No. Furniture & marketplace delivery brings items you purchased to your home. Junk removal and furniture removal take unwanted items away. Many customers use both — ask us about combining trips.",
    },
    {
      question: "Do you deliver antiques and estate sale finds?",
      answer:
        "Yes. Antique delivery and estate sale delivery are available with careful loading. Tell us about fragile finishes, stairs, and tight access when you book.",
    },
  ],
  formTitle: "REQUEST FURNITURE DELIVERY",
  formDescription:
    "Tell us what you bought, where it is, and where it needs to go. We will confirm pricing for furniture delivery and marketplace pickup.",
  endCtaTitle: "NEED A TRAILER? WE HAVE ONE.",
  endCtaDescription:
    "Furniture delivery, marketplace pickup, and large item hauling across Port Huron and the Blue Water Area.",
  relatedLinks: [
    { label: "Junk Removal Services", href: "/services" },
    { label: "Furniture Removal", href: "/furniture-removal" },
    { label: "Garage Sale Trail Delivery", href: "/garage-sale-trail" },
    { label: "Contact", href: "/contact" },
  ],
};

export function getDeliveryPage(slug: string): DeliveryPage | undefined {
  if (slug === GARAGE_SALE_TRAIL.slug) return GARAGE_SALE_TRAIL;
  if (slug === FURNITURE_DELIVERY.slug) return FURNITURE_DELIVERY;
  return undefined;
}
