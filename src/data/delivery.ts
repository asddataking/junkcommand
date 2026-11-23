export type DeliveryArea = {
  name: string;
  slug?: string;
};

export type DeliveryFeature = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
};

export type LandingPackage = {
  name: string;
  price: string;
  blurb: string;
};

export const STOCK_PHOTO_CAPTION = "Illustrative photo. Not a Junk Command job.";

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
  processCtas?: boolean;
  features: DeliveryFeature[];
  removalCta?: {
    title: string;
    description: string;
    href: string;
    linkLabel: string;
  };
  crossSells?: {
    title: string;
    description: string;
    href: string;
    linkLabel: string;
  }[];
  areasIntro: string;
  areas: DeliveryArea[];
  faqs: { question: string; answer: string }[];
  formTitle: string;
  formDescription: string;
  formInstructions?: string[];
  formEmbed?: boolean;
  pageType?: string;
  endCtaTitle: string;
  endCtaDescription: string;
  endCtaLabel?: string;
  relatedLinks: { label: string; href: string }[];
  galleryTitle?: string;
  galleryIntro?: string;
  packagesTitle?: string;
  packages?: LandingPackage[];
  packagesDisclaimer?: string;
  audienceTitle?: string;
  audience?: { title: string; description: string }[];
  noticeTitle?: string;
  notice?: string;
};

export const DELIVERY_AREAS: DeliveryArea[] = [
  { name: "Port Huron", slug: "port-huron" },
  { name: "Fort Gratiot", slug: "fort-gratiot" },
  { name: "Marysville", slug: "marysville" },
  { name: "Kimball Township", slug: "kimball-township" },
  { name: "St. Clair", slug: "st-clair" },
  { name: "Marine City", slug: "marine-city" },
  { name: "Smiths Creek", slug: "smiths-creek" },
  { name: "Romeo", slug: "romeo" },
  { name: "Imlay City", slug: "imlay-city" },
  { name: "Lapeer", slug: "lapeer" },
  { name: "Algonac" },
  { name: "New Baltimore" },
  { name: "Lexington" },
  { name: "Croswell" },
  { name: "Yale" },
  { name: "Capac" },
  { name: "Richmond" },
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
    "Furniture Delivery & Marketplace Pickup in Port Huron, MI | Junk Command",
  metaDescription:
    "Furniture delivery and Facebook Marketplace pickup in Port Huron and St. Clair County. We pick up, haul, and place large items. Call 810-242-0429.",
  eyebrow: "Furniture Pickup & Delivery",
  h1: "Bought It. Found It. Need It Delivered?",
  intro:
    "Found the perfect furniture or bulky item but don't have a way to get it home? Junk Command handles pickup, transportation and placement across Port Huron and St. Clair County — Facebook Marketplace, furniture stores, auctions, estate sales, and garage sale finds included.",
  image: "/images/expansion/furniture-delivery-hero.webp",
  imageAlt:
    "Stock photo of a man loading a cabinet into a van. Illustrative only; not a Junk Command job.",
  primaryCta: { label: "Request Delivery", href: "#quote" },
  process: [
    {
      title: "Send the listing or photos",
      description:
        "Share the Facebook Marketplace, store, or sale listing and photos of the item.",
    },
    {
      title: "Give pickup and drop-off addresses",
      description:
        "Tell us where the item is and where it needs to go, including stairs or tight access.",
    },
    {
      title: "Get a quote",
      description:
        "Junk Command confirms a price before we roll, based on the item, distance, and access.",
    },
    {
      title: "We coordinate the pickup",
      description:
        "We set a window with you and, when needed, with the seller or store.",
    },
    {
      title: "Placed where you need it",
      description:
        "We transport the item and place it in the room you choose when access allows.",
    },
  ],
  features: [
    {
      title: "Facebook Marketplace Pickup",
      description:
        "Bought a sofa, dresser, or appliance on Facebook Marketplace? Junk Command meets the seller, loads the item, and brings it to your home in Port Huron or nearby towns.",
      image: "/images/expansion/furniture-delivery-hero.webp",
      imageAlt:
        "Stock photo of a cabinet being loaded into a van. Illustrative only; not a Junk Command job.",
      imageCaption: STOCK_PHOTO_CAPTION,
    },
    {
      title: "Furniture Store, Auction & Estate Sale Pickup",
      description:
        "We pick up from local furniture stores, auction lots, and estate sales when you already paid for the piece and just need it moved carefully.",
    },
    {
      title: "Large-Item Transport",
      description:
        "Sofas, mattresses, dining sets, appliances, and other bulky household items. If it fits our trailer and can be moved safely, we can usually haul it.",
    },
    {
      title: "Placement in Your Home",
      description:
        "Delivery includes placing the item where you want it when stairs, doorways, and floors allow. Tell us about tight turns when you request a quote.",
      image: "/images/expansion/furniture-delivery-placement.webp",
      imageAlt:
        "Stock photo of two people carrying a couch into a room. Illustrative only; not a Junk Command job.",
      imageCaption: STOCK_PHOTO_CAPTION,
    },
    {
      title: "Storage-to-Home",
      description:
        "Need a piece brought from a storage unit to a house or apartment in St. Clair County? Share both locations and photos for a quote.",
    },
    {
      title: "Delivery Plus Assembly",
      description:
        "Bought furniture that still needs to be put together? Ask us to coordinate delivery with furniture assembly so you are not left with a box in the hallway.",
    },
    {
      title: "Garage Sale Pickup",
      description:
        "Year-round garage sale pickup — not just sale-weekend traffic. Bought furniture at a local sale with no truck? We can often bring it home so the deal does not fall through.",
    },
  ],
  removalCta: {
    title: "Need It Built After We Bring It In?",
    description:
      "Junk Command also assembles beds, desks, dining sets, and other household furniture, including IKEA-style flat-pack pieces. We are not an IKEA partner or official assembler.",
    href: "/furniture-assembly",
    linkLabel: "Furniture Assembly",
  },
  crossSells: [
    {
      title: "Need Old Furniture Hauled Away Instead?",
      description:
        "If you need furniture removed — not delivered — Junk Command clears sofas, mattresses, and bulky pieces from homes across the Blue Water Area.",
      href: "/furniture-removal",
      linkLabel: "Furniture Removal",
    },
  ],
  areasIntro:
    "Furniture delivery from Junk Command covers Port Huron, St. Clair County, and the other towns we already serve.",
  areas: DELIVERY_AREAS,
  faqs: [
    {
      question: "Do you offer furniture delivery in Port Huron?",
      answer:
        "Yes. Junk Command provides furniture delivery and large-item delivery throughout Port Huron, Marysville, Fort Gratiot, Kimball Township, and surrounding St. Clair County communities.",
    },
    {
      question: "Can you pick up from Facebook Marketplace or Craigslist?",
      answer:
        "Yes. Marketplace pickup is a common request. Share the listing link, item photos, the pickup address, and your delivery address for a quote.",
    },
    {
      question: "What should I include in the quote form?",
      answer:
        "Use the Free Estimate form on this page. In the notes, include the pickup address, the drop-off address, a link to the listing if you have one, and a short description of the item. Upload photos in the form as well.",
    },
    {
      question: "Is this the same as junk removal?",
      answer:
        "No. Furniture pickup and delivery brings items you purchased to your home. Furniture removal takes unwanted items away. Many customers use both — ask us about combining trips.",
    },
    {
      question: "Can you assemble the furniture after delivery?",
      answer:
        "Yes, when the piece is a regular household item we assemble, such as a bed frame, desk, or flat-pack set. Tell us in the notes. Junk Command does not assemble home gyms. See the furniture assembly page for details.",
    },
  ],
  formTitle: "REQUEST DELIVERY",
  formDescription:
    "Use the same Free Estimate form we use for every Junk Command quote. In the notes, please include the pickup address, the drop-off address, a link to the item if you have one, and a short description. Upload photos in the form so we can confirm pricing.",
  formInstructions: [
    "Include the pickup address and the drop-off address in the notes.",
    "Paste the item or listing link if you have one.",
    "Describe the item and any stairs, tight doorways, or special handling.",
    "Upload photos in the form — they help us quote accurately.",
  ],
  formEmbed: true,
  pageType: "furniture_delivery",
  endCtaTitle: "NEED A TRAILER? WE HAVE ONE.",
  endCtaDescription:
    "Furniture delivery, Facebook Marketplace pickup, and large-item hauling across Port Huron and St. Clair County.",
  endCtaLabel: "Request Delivery",
  relatedLinks: [
    { label: "Furniture Assembly", href: "/furniture-assembly" },
    { label: "Furniture Removal", href: "/furniture-removal" },
    { label: "Downsizing & Home Transitions", href: "/downsizing-moving" },
    { label: "What We Take", href: "/what-we-take" },
    { label: "Contact", href: "/contact" },
  ],
};

export function getDeliveryPage(slug: string): DeliveryPage | undefined {
  if (slug === GARAGE_SALE_TRAIL.slug) return GARAGE_SALE_TRAIL;
  if (slug === FURNITURE_DELIVERY.slug) return FURNITURE_DELIVERY;
  return undefined;
}
