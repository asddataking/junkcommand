import type { LocationImage, LocationPage } from "@/data/locations/types";

const IMG = {
  hero: "/images/junk-command-hero.webp",
  crew: "/images/dan-gage-luna.webp",
  trailer: "/images/trailer.webp",
  garage: "/images/services/garage-cleanout.webp",
  estate: "/images/services/estate-cleanout.webp",
  furniture: "/images/services/furniture-removal.webp",
  appliance: "/images/services/appliance-removal.webp",
  construction: "/images/services/construction-debris-removal.webp",
  hotTub: "/images/services/hot-tub-removal.webp",
} as const;

function img(
  src: string,
  role: LocationImage["role"],
  alt: string,
  caption: string,
): LocationImage {
  return { src, role, alt, caption };
}

/**
 * Macomb County city pages. Local references are limited to well-documented
 * parks, roads, and institutions. Photos are real Junk Command shots and are
 * not captioned as being taken in that city.
 */
export const MACOMB_COUNTY_LOCATIONS: LocationPage[] = [
  {
    slug: "chesterfield",
    name: "Chesterfield",
    county: "Macomb County",
    regionId: "macomb",
    layout: "gallery",
    eyebrow: "Chesterfield Township Junk Removal",
    metaTitle: "Junk Removal Chesterfield MI | Junk Hauling Near You | Junk Command",
    metaDescription:
      "Junk removal in Chesterfield Township, MI. Furniture, appliances, garage and estate cleanouts hauled from homes near Anchor Bay, Gratiot and 23 Mile. Curbside from $99.",
    h1: "Junk Removal in Chesterfield, MI",
    heroIntro:
      "From Anchor Bay shoreline homes off Jefferson Avenue to the subdivisions between Gratiot and I-94, Junk Command hauls furniture, appliances, and full garage loads out of Chesterfield Township. Send photos and get a confirmed price.",
    localIntro: [
      "Chesterfield Township sits on the north shore of Anchor Bay, with the Salt River winding through it on the way to the lake. That mix of lake-area homes, newer subdivisions, and busy Gratiot Avenue frontage means the junk we see here leans toward boat-season storage, patio furniture, and garages that have quietly become storage units.",
      "Most Chesterfield calls are a single trip: a sectional and a mattress after a move, an old refrigerator the delivery crew would not take, or a garage that needs to be emptied before a listing. We load from wherever the items are — basement, attic, back deck — so you do not have to drag anything to the driveway.",
      "If your street has HOA rules about curb piles or truck parking, mention it with your photos. We plan the stop so the trailer is in and out quickly. Pair a pickup with [furniture removal](/furniture-removal) or a [garage cleanout](/garage-cleanout) and we quote it as one load.",
    ],
    localContext: {
      municipality:
        "Chesterfield Township, Macomb County — north shore of Anchor Bay on Lake St. Clair, crossed by I-94 and Gratiot Avenue (M-3).",
      neighborhoods:
        "Lake-area streets off Jefferson Avenue, subdivisions between 21 Mile and 26 Mile Roads, and homes along the Salt River.",
      landmarks:
        "Brandenburg Park on Anchor Bay, the Salt River, and the Gratiot Avenue and 23 Mile Road commercial corridor.",
      disposal:
        "Regular household collection is handled through the township. Junk Command is the call for bulky items, multi-room cleanouts, and anything still inside the house. Usable furniture is donated when it can be, and metal is recycled.",
    },
    featuredServiceSlugs: [
      "furniture-removal",
      "garage-cleanout",
      "appliance-removal",
      "hot-tub-removal",
      "estate-cleanout",
    ],
    servicesIntro:
      "Chesterfield jobs we book most: [garage cleanouts](/garage-cleanout) before a move, [hot tub removal](/hot-tub-removal) on lake-area decks, [appliance removal](/appliance-removal) after a kitchen upgrade, and [estate cleanouts](/estate-cleanout) when a family home needs to be emptied.",
    cleanoutHeading: "Garage, Basement & Whole-Home Cleanouts in Chesterfield",
    cleanoutBody: [
      "A full cleanout is a different job from a pickup. We bring the crew size the photos call for, sort donate-worthy items from junk, and leave the space broom-swept so it is ready for a showing, a tenant, or a contractor.",
      "Realtors and property managers working Chesterfield listings can send photos and a lockbox note. We confirm the price in writing before the crew is scheduled.",
    ],
    midCtaTitle: "Junk Removal Near You in Chesterfield",
    midCtaDescription:
      "Snap photos of the pile, the garage, or the room. We text back a confirmed price for your Chesterfield pickup.",
    nearbySlugs: ["new-baltimore", "macomb-township", "clinton-township", "st-clair"],
    faqs: [
      {
        question: "Do you pick up junk near Anchor Bay and the Salt River?",
        answer:
          "Yes. Lake-area homes off Jefferson Avenue and the streets along the Salt River are a regular part of our Chesterfield route. Tell us about narrow drives or seawall-side access so we bring the right equipment.",
      },
      {
        question: "Can you remove a hot tub from a Chesterfield deck?",
        answer:
          "Yes. We disconnect, cut down if needed, and haul the spa. Send a photo showing the path from the tub to the driveway so we can quote it accurately.",
      },
      {
        question: "How much does junk removal cost in Chesterfield Township?",
        answer:
          "Pricing is by how much truck space your items take. Curbside pickup starts at $99 and full-service removal from inside the home starts at $129. Photos get you a confirmed price before we arrive.",
      },
      {
        question: "Will you work around HOA rules?",
        answer:
          "Yes. Share any association rules on parking, timing, or curb piles. We plan a quick, tidy stop so nothing sits in the driveway.",
      },
    ],
    images: [
      img(IMG.trailer, "hero", "Junk Command trailer ready for a junk removal pickup serving Chesterfield, MI", "Our trailer on the way to a Macomb County junk removal job"),
      img(IMG.garage, "intro", "Garage cleanout of the kind we handle for Chesterfield Township homes", "Garage cleanouts are one of our most-booked Chesterfield jobs"),
      img(IMG.hotTub, "services", "Hot tub being removed from a backyard, a common lake-area request", "Hot tub removal for lake-area decks and backyards"),
      img(IMG.furniture, "cleanout", "Furniture loaded for haul-away from a Macomb County home", "Furniture removal from inside the home, no curb drag required"),
    ],
  },
  {
    slug: "new-baltimore",
    name: "New Baltimore",
    county: "Macomb County",
    regionId: "macomb",
    layout: "split",
    eyebrow: "New Baltimore Junk Hauling",
    metaTitle: "Junk Removal New Baltimore MI | Same-Week Junk Hauling | Junk Command",
    metaDescription:
      "Junk removal in New Baltimore, MI on Anchor Bay. Junk Command hauls furniture, appliances, rental and estate cleanouts near downtown Washington Street. Get a free photo estimate.",
    h1: "Junk Removal in New Baltimore, MI",
    heroIntro:
      "New Baltimore is a small waterfront city on Anchor Bay, and its older downtown homes and lake cottages come with tight driveways and packed basements. Junk Command hauls it out for you, room to curb to truck.",
    localIntro: [
      "Downtown New Baltimore along Washington Street has some of the oldest housing stock in northern Macomb County, alongside newer subdivisions inland toward 23 Mile Road and I-94. Older homes mean narrow stairs, full basements, and detached garages, which is exactly the kind of carry-out work we price as full-service removal.",
      "Summer is busy here. Before Bay-Rama weekend and the boating season, we haul a lot of patio sets, old docks furniture, grills, and cottage contents that have been waiting since last fall. In the off-season it is more estate work and rental turnovers.",
      "Getting a house ready to list? An [estate cleanout](/estate-cleanout) or a round of [furniture removal](/furniture-removal) usually gets it photo-ready. We also run [Chesterfield](/service-areas/chesterfield) on the same route.",
    ],
    localContext: {
      municipality:
        "City of New Baltimore, Macomb County, on the north shore of Anchor Bay (Lake St. Clair), with I-94 access at 23 Mile Road.",
      neighborhoods:
        "Historic downtown blocks around Washington Street, waterfront streets along Anchor Bay, and newer subdivisions inland toward 23 Mile Road.",
      landmarks:
        "Walter and Mary Burke Park on the waterfront, the Grand Pacific House museum on Washington Street, and the annual Bay-Rama festival.",
      disposal:
        "Weekly household collection runs through the city. For bulky items, basement carry-outs, and whole-house cleanouts, Junk Command does the lifting and hauls to licensed disposal, donating and recycling where possible.",
    },
    featuredServiceSlugs: [
      "estate-cleanout",
      "furniture-removal",
      "appliance-removal",
      "construction-debris-removal",
    ],
    servicesIntro:
      "New Baltimore homeowners book us for [estate cleanouts](/estate-cleanout) in older downtown homes, [furniture removal](/furniture-removal) from cottages and rentals, [appliance removal](/appliance-removal), and [construction debris removal](/construction-debris-removal) after a remodel.",
    cleanoutHeading: "Estate & Rental Cleanouts in New Baltimore",
    cleanoutBody: [
      "Clearing an inherited home or a seasonal rental takes more than one trip to the curb. We handle the full property: basement, garage, attic, and outbuildings, with keep, donate, and dispose piles sorted as we go.",
      "Landlords can send photos and an access note. We will tell you whether it is a quick haul or a full turnover and give you a price before we schedule.",
    ],
    midCtaTitle: "Need Junk Hauled in New Baltimore?",
    midCtaDescription:
      "Cottage furniture, a basement full of boxes, or a rental turnover. Send photos and get a confirmed New Baltimore price.",
    nearbySlugs: ["chesterfield", "macomb-township", "st-clair", "marine-city"],
    faqs: [
      {
        question: "Can you get furniture out of an older downtown home?",
        answer:
          "Yes. Narrow stairs and tight doorways are common near Washington Street. We carry items out, protect floors and railings, and load straight onto the trailer.",
      },
      {
        question: "Do you haul patio and cottage furniture before summer?",
        answer:
          "Yes. Spring is when we see the most outdoor furniture, grills, and cottage contents in New Baltimore. Book early in the season for the best timing.",
      },
      {
        question: "How fast can you schedule a New Baltimore pickup?",
        answer:
          "New Baltimore is on our regular Anchor Bay route, so same-week service is common and next-day is often available.",
      },
      {
        question: "What does junk removal cost in New Baltimore?",
        answer:
          "It depends on truck volume and access. Curbside starts at $99 and full-service starts at $129. Text photos and we confirm the price before we load.",
      },
    ],
    images: [
      img(IMG.crew, "hero", "Junk Command crew ready for a junk removal job serving New Baltimore, MI", "Dan, Gage and Luna, the crew that handles New Baltimore pickups"),
      img(IMG.estate, "intro", "Estate cleanout work like the jobs we do in New Baltimore homes", "Estate cleanouts for older homes and family properties"),
      img(IMG.appliance, "services", "Appliance haul-away from a Macomb County kitchen", "Old refrigerators, washers and dryers removed from inside the home"),
      img(IMG.construction, "cleanout", "Remodel debris loaded for removal", "Construction debris removal after a remodel"),
    ],
  },
  {
    slug: "macomb-township",
    name: "Macomb Township",
    county: "Macomb County",
    regionId: "macomb",
    layout: "editorial",
    eyebrow: "Macomb Township Junk Removal",
    metaTitle: "Junk Removal Macomb Township MI | Junk Pickup Near Me | Junk Command",
    metaDescription:
      "Junk removal in Macomb Township, MI. Basement, garage and move-out junk hauled from subdivisions off Hall Road, 21 Mile and Romeo Plank. Curbside from $99, full-service from $129.",
    h1: "Junk Removal in Macomb Township, MI",
    heroIntro:
      "Macomb Township is mostly newer subdivisions, finished basements, and three-car garages. When that space fills up, Junk Command clears it out so you can park, move, or sell.",
    localIntro: [
      "Macomb Township has been one of the fastest-growing communities in Michigan for years, and most of its homes sit in subdivisions between Hall Road (M-59) and 26 Mile Road. Those homes tend to have large finished basements and big garages, which means the junk we haul here is volume: old sectionals, basement bars, exercise equipment, and years of boxes.",
      "Move-outs drive a lot of our Macomb Township work. Families upsizing or downsizing need the old furniture gone before closing, and a single trip with our trailer usually beats renting a dumpster that sits on the driveway for a week.",
      "We also see a steady stream of builder and remodel leftovers. Our [construction debris removal](/construction-debris-removal) handles drywall, flooring, and cabinets, and a [garage cleanout](/garage-cleanout) gets the cars back inside.",
    ],
    localContext: {
      municipality:
        "Macomb Township, Macomb County — bounded on the south by Hall Road (M-59), with Romeo Plank Road and 21 to 26 Mile Roads as its main routes.",
      neighborhoods:
        "Subdivisions along Romeo Plank, Card, and North Avenue between Hall Road and 26 Mile Road.",
      landmarks:
        "Macomb Corners Park at 21 Mile and Romeo Plank, and the Hall Road (M-59) corridor.",
      disposal:
        "Curbside household collection is provided through the township. Junk Command handles what does not fit that program: bulky furniture, basement and garage cleanouts, and remodel debris, with donation and metal recycling whenever we can.",
    },
    featuredServiceSlugs: [
      "garage-cleanout",
      "construction-debris-removal",
      "furniture-removal",
      "appliance-removal",
    ],
    servicesIntro:
      "In Macomb Township we mostly run [garage cleanouts](/garage-cleanout), basement furniture hauls through [furniture removal](/furniture-removal), [construction debris removal](/construction-debris-removal) after finishing a basement, and [appliance removal](/appliance-removal) when a new set arrives.",
    cleanoutHeading: "Basement & Move-Out Cleanouts in Macomb Township",
    cleanoutBody: [
      "Finished basements are the biggest jobs we see here. We carry everything up the stairs, protect walls and railings, and leave the floor clear for the next owner or the next project.",
      "Selling or closing on a deadline? Send photos of each room and we will build a one-visit plan with a confirmed price, so the house is empty before the walkthrough.",
    ],
    midCtaTitle: "Junk Pickup Near You in Macomb Township",
    midCtaDescription:
      "Basement, garage, or the whole house. Send photos and we will quote your Macomb Township pickup.",
    nearbySlugs: ["chesterfield", "clinton-township", "sterling-heights", "romeo"],
    faqs: [
      {
        question: "Can you empty a finished basement in Macomb Township?",
        answer:
          "Yes. We carry everything up and out, including heavy sectionals, bars, and exercise equipment. Photos of the stairs help us bring the right crew.",
      },
      {
        question: "Is junk removal cheaper than a dumpster for a move-out?",
        answer:
          "Often, yes. We do the loading in one visit and nothing sits on your driveway. Send photos and compare our confirmed price with a dumpster rental.",
      },
      {
        question: "Do you haul remodel debris?",
        answer:
          "Yes. Drywall, flooring, cabinets, and trim from a basement finish or kitchen remodel are common Macomb Township loads.",
      },
      {
        question: "How do I get a quote for Macomb Township?",
        answer:
          "Use the free estimate form on this page or text photos to 810-242-0429. We reply with a confirmed price.",
      },
    ],
    images: [
      img(IMG.hero, "hero", "Junk Command crew loading a trailer for junk removal serving Macomb Township, MI", "Full-service junk removal across Macomb Township"),
      img(IMG.construction, "intro", "Construction and remodel debris ready for haul-away", "Remodel and basement-finish debris hauled away"),
      img(IMG.garage, "services", "Garage cleanout in progress", "Garage cleanouts so the cars fit again"),
      img(IMG.furniture, "cleanout", "Basement furniture removed from a home", "Basement and move-out furniture carried out by our crew"),
    ],
  },
  {
    slug: "clinton-township",
    name: "Clinton Township",
    county: "Macomb County",
    regionId: "macomb",
    layout: "split",
    eyebrow: "Clinton Township Junk Hauling",
    metaTitle: "Junk Removal Clinton Township MI | Junk Hauling Near You | Junk Command",
    metaDescription:
      "Junk removal in Clinton Township, MI. Condo, apartment and home junk hauled near the Clinton River, Hall Road and Gratiot. Appliances, furniture and cleanouts. Free photo estimate.",
    h1: "Junk Removal in Clinton Township, MI",
    heroIntro:
      "Clinton Township has a little of everything: condo complexes, ranch homes, apartments, and busy commercial corridors. Junk Command handles the stairs, the elevators, and the parking so your junk is simply gone.",
    localIntro: [
      "Clinton Township is one of the most populous townships in Michigan, and a big share of its housing is condos and apartments along Hall Road, Gratiot Avenue, and the Clinton River. That changes how a pickup works. We plan around shared parking lots, upper-floor units, and management rules, not just a driveway.",
      "Many of our Clinton Township calls come from families helping a parent downsize from a house into a condo or senior community. We clear out what will not make the move and leave the rest exactly where you want it.",
      "Need a couch out of a second-floor unit, or a washer and dryer out of a basement? That is [furniture removal](/furniture-removal) and [appliance removal](/appliance-removal), priced from photos before we arrive.",
    ],
    localContext: {
      municipality:
        "Clinton Charter Township, Macomb County, crossed by the Clinton River, with Hall Road (M-59) and Gratiot Avenue as major corridors.",
      neighborhoods:
        "Condo and apartment communities along Hall Road and Garfield, ranch-home neighborhoods off 15 and 16 Mile Roads, and homes near the Clinton River.",
      landmarks:
        "The Clinton River, Macomb Community College's Center Campus on Hall Road, Henry Ford Macomb Hospital, and The Mall at Partridge Creek.",
      disposal:
        "Household curbside service is arranged through the township. For bulky furniture, appliances, and downsizing cleanouts, Junk Command does the carrying and hauls responsibly, donating usable items and recycling metal.",
    },
    featuredServiceSlugs: [
      "furniture-removal",
      "appliance-removal",
      "estate-cleanout",
      "garage-cleanout",
    ],
    servicesIntro:
      "Clinton Township bookings lean toward [furniture removal](/furniture-removal) from condos and apartments, [appliance removal](/appliance-removal), downsizing and [estate cleanouts](/estate-cleanout), and [garage cleanouts](/garage-cleanout) in the single-family neighborhoods.",
    cleanoutHeading: "Downsizing & Estate Cleanouts in Clinton Township",
    cleanoutBody: [
      "Downsizing is emotional and physical work. We move at your pace, set aside anything you want to keep or donate, and clear the rest so the house can be listed or handed over.",
      "For condos and apartments, send us the building rules on elevators, loading areas, and quiet hours. We schedule around them and keep common areas clean.",
    ],
    midCtaTitle: "Junk Removal Near You in Clinton Township",
    midCtaDescription:
      "Condo, apartment, or family home. Send photos and get a confirmed price for your Clinton Township pickup.",
    nearbySlugs: ["sterling-heights", "macomb-township", "chesterfield", "new-baltimore"],
    faqs: [
      {
        question: "Can you remove furniture from an upstairs condo or apartment?",
        answer:
          "Yes. Stairs and elevators are routine for us in Clinton Township. Let us know the floor, elevator access, and any loading rules when you send photos.",
      },
      {
        question: "Do you help families downsizing a parent's home?",
        answer:
          "Yes. We clear what is not moving, set aside keep and donate items, and leave the home ready to list. We can work around a moving company's schedule.",
      },
      {
        question: "How much is junk removal in Clinton Township?",
        answer:
          "Price is based on truck space and access. Curbside starts at $99 and full-service starts at $129. You approve the price before we load.",
      },
      {
        question: "Do you take old appliances?",
        answer:
          "Yes. Refrigerators, washers, dryers, stoves, and dehumidifiers are hauled from inside the home, and the metal is recycled.",
      },
    ],
    images: [
      img(IMG.furniture, "hero", "Furniture removal for a junk hauling job serving Clinton Township, MI", "Furniture removal from homes, condos and apartments"),
      img(IMG.appliance, "intro", "Appliance being removed from a home", "Appliance removal with metal recycling"),
      img(IMG.estate, "services", "Downsizing and estate cleanout work", "Downsizing and estate cleanouts at your pace"),
      img(IMG.crew, "cleanout", "The Junk Command crew ready for a pickup", "The same local crew on every job"),
    ],
  },
  {
    slug: "sterling-heights",
    name: "Sterling Heights",
    county: "Macomb County",
    regionId: "macomb",
    layout: "gallery",
    eyebrow: "Sterling Heights Junk Removal",
    metaTitle: "Junk Removal Sterling Heights MI | Junk Pickup Near Me | Junk Command",
    metaDescription:
      "Junk removal in Sterling Heights, MI. Furniture, appliances, garage and yard junk hauled from homes between Van Dyke, Mound and Hall Road. Curbside from $99. Free photo estimate.",
    h1: "Junk Removal in Sterling Heights, MI",
    heroIntro:
      "Sterling Heights is Macomb County's largest city, with established neighborhoods of brick ranches and colonials. Junk Command hauls away the furniture, appliances, and garage junk those homes collect over the years.",
    localIntro: [
      "Much of Sterling Heights was built out in the 1970s and 1980s, so many homes are on their second or third owner. That is when basements, garages, and sheds get emptied: a new owner wants a clean start, or a long-time owner is finally downsizing. We see a lot of console TVs, old recliners, workbench clutter, and backyard sheds in these jobs.",
      "The city runs from 14 Mile Road up to Hall Road, between Dequindre and Hayes, with Van Dyke and Mound Road carrying most of the traffic. We schedule Sterling Heights pickups in route blocks so you get a tight arrival window instead of an all-day wait.",
      "Backyard projects are common too. When an old shed, deck boards, or a [hot tub](/hot-tub-removal) needs to go, our [construction debris removal](/construction-debris-removal) crew handles the teardown and the haul.",
    ],
    localContext: {
      municipality:
        "City of Sterling Heights, Macomb County — the county's largest city, crossed by Van Dyke Avenue (M-53), Mound Road, and the Clinton River, with Hall Road (M-59) along the north.",
      neighborhoods:
        "Established neighborhoods between 14 Mile Road and Hall Road, from Dequindre on the west to Hayes on the east.",
      landmarks:
        "Dodge Park, Freedom Hill County Park, the Sterling Heights Nature Center, and the Clinton River.",
      disposal:
        "Residential curbside collection is handled through the city. Junk Command picks up where that ends: bulky items still inside, garage and shed cleanouts, and backyard teardown debris, with donation and recycling where possible.",
    },
    featuredServiceSlugs: [
      "furniture-removal",
      "construction-debris-removal",
      "hot-tub-removal",
      "garage-cleanout",
      "appliance-removal",
    ],
    servicesIntro:
      "Popular in Sterling Heights: [furniture removal](/furniture-removal) for recliners and sofas, [garage cleanouts](/garage-cleanout), [appliance removal](/appliance-removal), [hot tub removal](/hot-tub-removal), and shed or deck teardown through [construction debris removal](/construction-debris-removal).",
    cleanoutHeading: "Garage, Shed & Whole-House Cleanouts in Sterling Heights",
    cleanoutBody: [
      "Decades of storage do not leave in a single curb pile. We clear garages, sheds, basements, and entire houses, sort anything worth donating, and leave the space swept and ready.",
      "Buying or selling a Sterling Heights home? Send room-by-room photos and we will price the full cleanout up front, so there are no surprises on closing week.",
    ],
    midCtaTitle: "Junk Pickup Near You in Sterling Heights",
    midCtaDescription:
      "Old furniture, a packed garage, or a backyard teardown. Send photos for a confirmed Sterling Heights price.",
    nearbySlugs: ["clinton-township", "macomb-township", "chesterfield", "romeo"],
    faqs: [
      {
        question: "Can you tear down and haul away an old shed in Sterling Heights?",
        answer:
          "Yes. We dismantle most wood and metal sheds and haul the debris in the same visit. Send a photo and the rough size for a quote.",
      },
      {
        question: "Do you take old TVs and electronics?",
        answer:
          "Yes. Console and flat-screen TVs and most household electronics are hauled and routed to proper recycling.",
      },
      {
        question: "How much does junk removal cost in Sterling Heights?",
        answer:
          "Quotes are based on truck volume and access. Curbside starts at $99 and full-service removal starts at $129, confirmed from your photos.",
      },
      {
        question: "Can you give me a short arrival window?",
        answer:
          "Yes. We group Sterling Heights stops by area, which lets us give a tighter arrival window and a heads-up text before we arrive.",
      },
    ],
    images: [
      img(IMG.hero, "hero", "Junk Command crew loading a trailer for junk removal serving Sterling Heights, MI", "Junk removal for Sterling Heights homes"),
      img(IMG.construction, "intro", "Shed and deck teardown debris ready for haul-away", "Shed, deck and backyard teardown debris"),
      img(IMG.hotTub, "services", "Hot tub removal from a backyard", "Hot tub removal, disconnect to haul-away"),
      img(IMG.appliance, "cleanout", "Appliance being hauled out of a home", "Appliance and electronics removal"),
    ],
  },
];
