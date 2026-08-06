export const PARTNER_BUSINESS_TYPES = [
  "Realtor",
  "Property Manager",
  "Moving Company",
  "Storage Facility",
  "Estate Sale Company",
  "Roofer",
  "Flooring Installer",
  "Painter",
  "Plumber",
  "Electrician",
  "HVAC Company",
  "Handyman",
  "Cleaning Company",
  "Senior Move Manager",
  "General Contractor",
  "Other",
] as const;

export type PartnerBusinessType = (typeof PARTNER_BUSINESS_TYPES)[number];

export type PartnerIndustry = {
  slug: string;
  title: string;
  shortTitle: string;
  /** Prefills Partner Application business type select */
  businessTypeDefault: PartnerBusinessType;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  typicalSituations: string[];
  howWeHelp: string[];
  faqs: { question: string; answer: string }[];
};

export type PartnerHubSection = {
  slug: string;
  title: string;
  situations: string;
  howWeHelp: string;
};

export const PARTNER_TRUST_SIGNALS = [
  "Fast response",
  "Professional communication",
  "Online booking",
  "Photo estimates",
  "Veteran-owned",
  "Locally operated",
  "Simple scheduling",
] as const;

export const PARTNER_BENEFITS = [
  {
    title: "Reliable for Your Customers",
    description:
      "When you refer Junk Command, your clients get a Port Huron crew that shows up, prices clearly, and leaves properties broom-clean.",
  },
  {
    title: "Fast Turnarounds",
    description:
      "Closings, move-outs, and job-site deadlines cannot wait. We prioritize partner referrals whenever scheduling allows.",
  },
  {
    title: "Easy Coordination",
    description:
      "Photo estimates, text updates, and flexible invoicing make it simple to keep agents, managers, and trades in the loop.",
  },
  {
    title: "Local & Veteran-Owned",
    description:
      "Blue Water Area operated. Mission-focused service that reflects well on the professionals who send us work.",
  },
] as const;

export const PARTNER_HUB_SECTIONS: PartnerHubSection[] = [
  {
    slug: "realtors",
    title: "Realtors",
    situations:
      "Pre-listing clutter, estate leftovers, foreclosure debris, and sellers who need a property photo-ready before showings.",
    howWeHelp:
      "We clear rooms, garages, and yards on closing timelines with realtor-friendly communication and invoicing.",
  },
  {
    slug: "property-managers",
    title: "Property Managers",
    situations:
      "Tenant turnovers, abandoned furniture, curb piles, and unit cleanouts that block the next lease.",
    howWeHelp:
      "Fast junk removal between tenants so units turn quicker — with clear photo quotes and flexible access windows.",
  },
  {
    slug: "movers",
    title: "Moving Companies",
    situations:
      "Items clients refuse at the curb, last-minute discard piles, and storage unit leftovers after a move.",
    howWeHelp:
      "We haul what should not go on the moving truck so your crew stays focused on the move itself.",
  },
  {
    slug: "storage",
    title: "Storage Facilities",
    situations:
      "Auction cleanouts, abandoned units, and customers ending rentals with more junk than they can haul.",
    howWeHelp:
      "Unit wipeouts that respect facility hours and leave spaces ready to rent again.",
  },
  {
    slug: "estate-sale",
    title: "Estate Sale Companies",
    situations:
      "Post-sale leftovers, unsold furniture, and properties that still need a full clear after the sale weekend.",
    howWeHelp:
      "We remove remaining items quickly so families and sale companies can close the job.",
  },
  {
    slug: "roofers",
    title: "Roofers",
    situations:
      "Tear-off debris, old shingles, and job-site scrap that slows the next phase.",
    howWeHelp:
      "Construction debris removal timed around your roofing schedule — no long-term dumpster babysitting.",
  },
  {
    slug: "flooring",
    title: "Flooring Installers",
    situations:
      "Carpet tear-outs, pad piles, old hardwood, and renovation leftovers filling garages and driveways.",
    howWeHelp:
      "We haul flooring debris so installers can keep installing instead of managing disposal.",
  },
  {
    slug: "painters",
    title: "Painters",
    situations:
      "Drop cloths of discarded furniture, staging clutter, and post-paint junk clients want gone before the final walkthrough.",
    howWeHelp:
      "Quick furniture and junk hauls that clear rooms for painting or finish the job after coats dry.",
  },
  {
    slug: "plumbers",
    title: "Plumbers",
    situations:
      "Old water heaters, tubs, vanities, and fixture tear-outs that do not fit in a service van.",
    howWeHelp:
      "Appliance and fixture haul-away so plumbing upgrades leave a clean finish.",
  },
  {
    slug: "electricians",
    title: "Electricians",
    situations:
      "Panel upgrade leftovers, old fixtures, and remodel scrap that piles up in basements and garages.",
    howWeHelp:
      "We clear e-waste and remodel junk so electrical jobs wrap cleanly.",
  },
  {
    slug: "hvac",
    title: "HVAC Companies",
    situations:
      "Furnace and AC change-outs, old duct pieces, and outdoor unit replacements.",
    howWeHelp:
      "Heavy appliance and equipment removal coordinated with your install window.",
  },
  {
    slug: "handymen",
    title: "Handymen",
    situations:
      "Mixed demo debris, old doors, cabinets, and the odds-and-ends after a punch-list day.",
    howWeHelp:
      "One call for mixed junk and light debris so you can move to the next ticket.",
  },
  {
    slug: "cleaning",
    title: "Cleaning Companies",
    situations:
      "Move-out cleans blocked by furniture and trash, estate cleans with discard piles, and rental resets.",
    howWeHelp:
      "We remove the junk so your cleaners can clean — not haul sofas down stairs.",
  },
  {
    slug: "senior-move",
    title: "Senior Move Managers",
    situations:
      "Downsizing households, donation logistics, and sensitive estate transitions.",
    howWeHelp:
      "Respectful removal and hauling that supports dignified moves for seniors and their families.",
  },
];

export const PARTNER_HUB_FAQS = [
  {
    question: "How does the Junk Command partner program work?",
    answer:
      "Refer customers who need junk removal, cleanouts, or hauling. We handle the quote, scheduling, and job. Partners get reliable service for their clients and simple coordination with our Port Huron team.",
  },
  {
    question: "Is there a cost to become a referral partner?",
    answer:
      "No. Applying is free. Fill out the partner application with your business details and estimated referral volume so we can set expectations and keep communication tight.",
  },
  {
    question: "What types of businesses make good partners?",
    answer:
      "Realtors, property managers, movers, storage facilities, estate sale companies, roofers, flooring installers, painters, plumbers, electricians, HVAC companies, handymen, cleaning companies, and senior move managers.",
  },
  {
    question: "How fast do you respond to partner referrals?",
    answer:
      "We prioritize clear communication. Photo estimates and text updates help us quote quickly and keep your customer informed — the same standards we use for direct bookings.",
  },
  {
    question: "Do you serve the full Blue Water Area?",
    answer:
      "Yes. Junk Command is locally operated in Port Huron and serves St. Clair County and surrounding Southeast Michigan communities.",
  },
];

export const PARTNER_INDUSTRIES: PartnerIndustry[] = [
  {
    slug: "realtors",
    title: "Realtor Referral Partners",
    shortTitle: "Realtors",
    businessTypeDefault: "Realtor",
    metaTitle: "Realtor Junk Removal Partners | Port Huron | Junk Command",
    metaDescription:
      "Partner with Junk Command for realtor junk removal referrals in Port Huron & St. Clair County. Fast cleanouts for listings, estates, and closings. Call 810-242-0429.",
    eyebrow: "Partner Program · Realtors",
    h1: "Junk Removal Partners for Realtors",
    intro:
      "Listings sell faster when clutter is gone. Junk Command is the Port Huron junk removal partner realtors trust for pre-listing cleanouts, estate leftovers, and closing-day deadlines.",
    typicalSituations: [
      "Sellers need garages and basements cleared before photos",
      "Estate and probate properties with remaining furniture",
      "Foreclosure or vacant homes with abandoned junk",
      "Last-minute cleanouts before closing",
    ],
    howWeHelp: [
      "Photo estimates agents can forward to clients",
      "Scheduling that respects showing calendars",
      "Professional communication that reflects well on your brand",
      "Broom-clean handoffs ready for staging or buyers",
    ],
    faqs: [
      {
        question: "Can you invoice the seller or the brokerage?",
        answer:
          "Yes. We work with realtors on flexible invoicing so the right party pays — seller, estate, or brokerage — with clear documentation.",
      },
      {
        question: "How quickly can you clear a listing?",
        answer:
          "Many jobs are scheduled within a few days. Rush windows are available when closings demand it — send photos early.",
      },
    ],
  },
  {
    slug: "property-managers",
    title: "Property Manager Referral Partners",
    shortTitle: "Property Managers",
    businessTypeDefault: "Property Manager",
    metaTitle:
      "Property Manager Junk Removal Partners | Port Huron | Junk Command",
    metaDescription:
      "Junk removal partners for property managers in Port Huron. Fast turnover cleanouts, abandoned furniture, and tenant junk haul-away. 810-242-0429.",
    eyebrow: "Partner Program · Property Managers",
    h1: "Junk Removal for Property Managers",
    intro:
      "Turn units faster with a local junk removal partner. Junk Command clears abandoned furniture, curb piles, and turnover junk across Port Huron and St. Clair County.",
    typicalSituations: [
      "Tenant left furniture and trash behind",
      "Garage or basement full after a move-out",
      "HOA or curb violations needing quick removal",
      "Multi-unit turnovers on a tight lease schedule",
    ],
    howWeHelp: [
      "Fast photo quotes for property files",
      "Lockbox and access-friendly scheduling",
      "Volume pricing for denser cleanouts",
      "Reliable Port Huron crew that protects units",
    ],
    faqs: [
      {
        question: "Can you work around tenant notice periods?",
        answer:
          "Yes. Share access windows and we schedule around keys, lockboxes, and occupancy rules.",
      },
      {
        question: "Do you haul mattresses and appliances from rentals?",
        answer:
          "Absolutely — mattresses, sofas, appliances, and mixed junk are routine turnover jobs.",
      },
    ],
  },
  {
    slug: "movers",
    title: "Moving Company Referral Partners",
    shortTitle: "Movers",
    businessTypeDefault: "Moving Company",
    metaTitle: "Moving Company Junk Removal Partners | Port Huron | Junk Command",
    metaDescription:
      "Movers: partner with Junk Command for discard piles, curb junk, and items clients will not take. Port Huron hauling support. Call 810-242-0429.",
    eyebrow: "Partner Program · Movers",
    h1: "Hauling Support for Moving Companies",
    intro:
      "Not everything belongs on the moving truck. Junk Command partners with movers to haul discard piles, last-minute junk, and storage leftovers across the Blue Water Area.",
    typicalSituations: [
      "Clients decide mid-move that items are trash",
      "Donation rejects that still need removal",
      "Storage unit leftovers after a relocation",
      "Estate moves with heavy discard volume",
    ],
    howWeHelp: [
      "Same-week junk hauls that do not slow your move crew",
      "Clear handoff so movers stay on the move plan",
      "Photo estimates customers can approve quickly",
      "Local Port Huron coverage for SE Michigan jobs",
    ],
    faqs: [
      {
        question: "Can you arrive after the moving truck leaves?",
        answer:
          "Yes. Many partners schedule us for the discard pile once the move is underway or complete.",
      },
      {
        question: "Do you take broken furniture movers will not load?",
        answer:
          "Yes. Damaged furniture, mattresses, and mixed junk are core junk removal work for us.",
      },
    ],
  },
  {
    slug: "roofers",
    title: "Roofer Referral Partners",
    shortTitle: "Roofers",
    businessTypeDefault: "Roofer",
    metaTitle: "Roofer Debris Removal Partners | Port Huron | Junk Command",
    metaDescription:
      "Roofers: partner with Junk Command for tear-off debris and job-site scrap removal in Port Huron & St. Clair County. Call 810-242-0429.",
    eyebrow: "Partner Program · Roofers",
    h1: "Debris Hauling Partners for Roofers",
    intro:
      "Tear-offs create mountains of scrap. Junk Command partners with roofing companies for construction debris removal timed to your job schedule.",
    typicalSituations: [
      "Shingle tear-off piles ready for haul-away",
      "Old underlayment and scrap after a reroof",
      "Homeowner requests to skip a driveway dumpster",
      "Phased jobs needing mid-project debris pulls",
    ],
    howWeHelp: [
      "Flexible pickup windows around roofing crews",
      "Volume-based pricing for debris loads",
      "No long-term dumpster blocking the driveway",
      "Contractor-friendly communication",
    ],
    faqs: [
      {
        question: "Do you haul roofing tear-off debris?",
        answer:
          "Yes. Construction debris removal for shingles and related scrap is a common partner request — share photos for weight and volume notes.",
      },
      {
        question: "Can you schedule around our install day?",
        answer:
          "We work with roofing schedules whenever possible. Early photos help us lock the right truck and crew.",
      },
    ],
  },
  {
    slug: "plumbers",
    title: "Plumber Referral Partners",
    shortTitle: "Plumbers",
    businessTypeDefault: "Plumber",
    metaTitle: "Plumber Junk Removal Partners | Port Huron | Junk Command",
    metaDescription:
      "Plumbers: refer water heater, tub, and fixture haul-away to Junk Command in Port Huron. Fast appliance removal partners. 810-242-0429.",
    eyebrow: "Partner Program · Plumbers",
    h1: "Haul-Away Partners for Plumbers",
    intro:
      "Old water heaters and fixtures should not sit in the driveway. Junk Command partners with plumbers for appliance and fixture removal across Port Huron and St. Clair County.",
    typicalSituations: [
      "Water heater change-outs",
      "Tub and vanity tear-outs",
      "Basement appliance removals",
      "Remodel fixture scrap after a bath upgrade",
    ],
    howWeHelp: [
      "Heavy appliance haul-away done right",
      "Photo quotes homeowners can approve fast",
      "Same-visit removal when scheduling aligns",
      "Professional finish that completes your install",
    ],
    faqs: [
      {
        question: "Do you remove water heaters?",
        answer:
          "Yes — drained units are routine. Mention access and stairs when referring so we bring the right crew.",
      },
      {
        question: "Can homeowners book directly after you refer them?",
        answer:
          "Absolutely. Send them our number or the partner intro — we mention you provided the referral when they book.",
      },
    ],
  },
  {
    slug: "flooring",
    title: "Flooring Installer Referral Partners",
    shortTitle: "Flooring",
    businessTypeDefault: "Flooring Installer",
    metaTitle:
      "Flooring Debris Removal Partners | Port Huron | Junk Command",
    metaDescription:
      "Flooring installers: partner with Junk Command for carpet tear-outs and renovation debris in Port Huron. Call 810-242-0429.",
    eyebrow: "Partner Program · Flooring",
    h1: "Debris Partners for Flooring Installers",
    intro:
      "Carpet piles and tear-outs slow installs. Junk Command partners with flooring companies to haul renovation debris so crews keep installing.",
    typicalSituations: [
      "Carpet and pad tear-outs",
      "Old hardwood and underlayment scrap",
      "Garage piles after a multi-room install",
      "Homeowners who refuse dumpster rentals",
    ],
    howWeHelp: [
      "Quick debris pulls between install phases",
      "Volume quotes from photos",
      "Cleaner job sites for your crew",
      "Local Port Huron scheduling",
    ],
    faqs: [
      {
        question: "Do you take old carpet and pad?",
        answer:
          "Yes. Flooring tear-out debris is a regular construction debris job for our crew.",
      },
      {
        question: "Can you haul the same day as tear-out?",
        answer:
          "When the schedule allows. Message us early with address and photos for same-day windows.",
      },
    ],
  },
  {
    slug: "contractors",
    title: "Contractor Referral Partners",
    shortTitle: "Contractors",
    businessTypeDefault: "General Contractor",
    metaTitle:
      "Contractor Junk & Debris Removal Partners | Port Huron | Junk Command",
    metaDescription:
      "General contractors and trades: partner with Junk Command for job-site debris and remodel junk removal in Port Huron. 810-242-0429.",
    eyebrow: "Partner Program · Contractors",
    h1: "Junk & Debris Partners for Contractors",
    intro:
      "Remodels create scrap. Junk Command partners with general contractors and trades across the Blue Water Area for construction debris removal and job-site cleanups.",
    typicalSituations: [
      "Post-demo debris piles",
      "Cabinet and fixture tear-outs",
      "Phased renovation scrap pulls",
      "Homeowner punch-list junk after trades leave",
    ],
    howWeHelp: [
      "Contractor-friendly scheduling and communication",
      "Volume-based debris hauling without long dumpster sits",
      "Photo estimates for GCs and homeowners",
      "Veteran-owned local crew that protects properties",
    ],
    faqs: [
      {
        question: "Do you work with general contractors and specialty trades?",
        answer:
          "Yes. Roofers, flooring installers, plumbers, painters, HVAC, electricians, and handymen all refer debris and junk jobs to Junk Command.",
      },
      {
        question: "Is this cheaper than leaving a dumpster for a week?",
        answer:
          "For many one-time cleanups, yes — especially when driveway space and HOA rules matter. We quote from photos.",
      },
    ],
  },
];

export function getPartnerIndustry(
  slug: string,
): PartnerIndustry | undefined {
  return PARTNER_INDUSTRIES.find((industry) => industry.slug === slug);
}

export function getAllPartnerIndustrySlugs(): string[] {
  return PARTNER_INDUSTRIES.map((industry) => industry.slug);
}
