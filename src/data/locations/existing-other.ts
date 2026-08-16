import type { LocationPage } from "@/data/locations/types";
import {
  SERVICE_PRESETS,
  buildLocationImages,
} from "@/data/locations/images";

function migratedFaqs(name: string): LocationPage["faqs"] {
  return [
    {
      question: `How much does junk removal cost in ${name}?`,
      answer: `Pricing is based mainly on how much space the load takes in the truck, plus access. Photos get you a confirmed range before we arrive. Call or text 810-242-0429.`,
    },
    {
      question: `How soon can you schedule junk removal in ${name}?`,
      answer: `${name} is part of our regular service area. Same-day or next-day service may be available depending on the schedule. Send photos and your timeline so we can confirm the soonest window.`,
    },
    {
      question: "Do I have to move everything to the curb?",
      answer:
        "No. If items are safely accessible, our crew can remove them from rooms, basements, garages, sheds, or porches.",
    },
    {
      question: "Can you take furniture and appliances in one visit?",
      answer: `Yes. Combining bulky furniture, appliances, and general junk in one ${name} visit is common and usually more efficient than separate pickups.`,
    },
    {
      question: "Can I send photos for an estimate?",
      answer:
        "Yes. Use the free estimate form on this page or text photos to 810-242-0429.",
    },
  ];
}

export const ALSO_SERVED_LOCATIONS: LocationPage[] = [
  {
    slug: "yale",
    name: "Yale",
    county: "St. Clair County",
    regionId: "also-served",
    layout: "editorial",
    eyebrow: "Serving Yale",
    metaTitle: "Junk Removal Yale MI | Junk Command",
    metaDescription:
      "Need junk removal in Yale, Michigan? Junk Command hauls furniture, appliances, garages, and farm clutter in western St. Clair County. Get a free estimate.",
    h1: "Junk Removal in Yale, MI",
    heroIntro:
      "Yale cleanouts can mean a village basement, a farm garage, a rental house, or an estate with years of stored items. Junk Command brings Port Huron-based hauling west with upfront pricing.",
    localIntro: [
      "Yale sits where village blocks meet western St. Clair County farm roads. Main Street homes, outbuildings, older basements, and multi-generation storage all show up on the same map as Brockway, Avoca, and Yale Road.",
      "We plan Yale with Emmett, Capac, Croswell, and Kimball routes. Inherited contents, barn shelving, old appliances, and pre-listing cleanouts are the usual jobs.",
      "If the property has more than a few bulky pieces, [estate cleanouts](/estate-cleanout) and [garage cleanouts](/garage-cleanout) are the right fit. Nearby [Capac](/service-areas/capac) and [Emmett](/service-areas/emmett) sit on the same western roads.",
    ],
    featuredServiceSlugs: [...SERVICE_PRESETS.rural],
    servicesIntro:
      "Yale jobs mix [furniture removal](/furniture-removal), [appliance removal](/appliance-removal), garage and barn contents, and household junk that will not fit the weekly cart.",
    cleanoutHeading: "More Than Just Junk Pickup",
    cleanoutBody: [
      "Village homes can have older stairs while rural properties spread items across several buildings. Junk Command treats both as normal Yale work — estates, rentals, moving piles, and whole-property jobs.",
      "Send photos of each area that needs to be cleared so the quote matches the property.",
    ],
    midCtaTitle: "Got Junk in Yale?",
    midCtaDescription:
      "Village house, farm garage, or an estate cleanout — send photos and Junk Command will quote a western St. Clair County pickup.",
    nearbySlugs: ["capac", "emmett", "croswell", "kimball-township"],
    faqs: migratedFaqs("Yale"),
    images: buildLocationImages("Yale", "western St. Clair County", "rural"),
  },
  {
    slug: "croswell",
    name: "Croswell",
    county: "Sanilac County",
    regionId: "also-served",
    layout: "split",
    eyebrow: "Serving Croswell",
    metaTitle: "Junk Removal Croswell MI | Junk Command",
    metaDescription:
      "Need junk removal in Croswell, Michigan? Junk Command hauls furniture, appliances, and farm or cottage clutter in Sanilac County. Get a free estimate.",
    h1: "Junk Removal in Croswell, MI",
    heroIntro:
      "Croswell homes, farms, and village properties use Junk Command for hauling north of our Port Huron base. We clear furniture, appliances, garage clutter, and estate contents with full-service removal.",
    localIntro: [
      "Croswell connects inland Sanilac County with the Lake Huron corridor — village homes, farm shops, Black River properties, and seasonal cleanouts headed toward Lexington.",
      "We schedule Croswell with Lexington and Yale, including Main Street, Wells Street, Harrington Road, and roads outside the village. Farm garage clutter, cottage turnover items, and pre-sale cleanups are common.",
      "[Garage cleanouts](/garage-cleanout) and [estate cleanouts](/estate-cleanout) cover most of the larger jobs. We also serve [Lexington](/service-areas/lexington) on the lakeshore route.",
    ],
    featuredServiceSlugs: [...SERVICE_PRESETS.rural],
    servicesIntro:
      "Croswell loads include furniture, appliances, basement junk, estate contents, and mixed household debris. [Yard debris](/yard-debris-removal) can be included when it sits with the rest of the pile.",
    cleanoutHeading: "More Than Just Junk Pickup",
    cleanoutBody: [
      "Older village homes and rural outbuildings need a crew that can move from a careful interior pickup to a barn cleanout without losing the standard of work.",
      "We help Croswell customers clear homes, barns, garages, and seasonal properties so the space is usable again.",
    ],
    midCtaTitle: "Got Junk in Croswell?",
    midCtaDescription:
      "Village, farm, or cottage clutter — send photos and Junk Command will quote a Sanilac County pickup.",
    nearbySlugs: ["lexington", "yale", "capac", "emmett"],
    faqs: migratedFaqs("Croswell"),
    images: buildLocationImages("Croswell", "Sanilac County", "rural"),
  },
  {
    slug: "lexington",
    name: "Lexington",
    county: "Sanilac County",
    regionId: "also-served",
    layout: "gallery",
    eyebrow: "Serving Lexington",
    metaTitle: "Junk Removal Lexington MI | Junk Command",
    metaDescription:
      "Need junk removal in Lexington, Michigan? Junk Command hauls cottage furniture, appliances, and lake-home clutter on the M-25 corridor. Get a free estimate.",
    h1: "Junk Removal in Lexington, MI",
    heroIntro:
      "Lexington cleanouts often happen on a deadline — guests, listings, weekends, or seasonal turnover. Junk Command hauls furniture, appliances, mattresses, and cottage junk along the Lake Huron shore.",
    localIntro: [
      "Lexington is a Lake Huron destination with cottages, rentals, year-round homes, harbor traffic, and downtown shops. Owners often need cleanup finished before guests arrive.",
      "We plan Lexington through the M-25 corridor, Huron Avenue, the harbor area, and inland roads toward Croswell. Cottage mattresses, sleeper sofas, patio sets, rental leftovers, and replaced appliances are typical.",
      "[Furniture removal](/furniture-removal) and [garage cleanouts](/garage-cleanout) handle most lake-home jobs. Nearby [Croswell](/service-areas/croswell) and [Fort Gratiot](/service-areas/fort-gratiot) sit on the same northern Blue Water rhythm.",
    ],
    featuredServiceSlugs: [...SERVICE_PRESETS.waterfront],
    servicesIntro:
      "Lexington customers call for cottage furniture, [appliance removal](/appliance-removal), patio items, and [estate cleanouts](/estate-cleanout) when a lake home changes hands.",
    cleanoutHeading: "More Than Just Junk Pickup",
    cleanoutBody: [
      "Cottages and older lake homes may have narrow doors, stairs, limited parking, or items stored in sheds. Access notes help us quote accurately.",
      "We help Lexington owners keep lake homes, rentals, and garages guest-ready without spending the weekend on heavy hauling.",
    ],
    midCtaTitle: "Got Junk in Lexington?",
    midCtaDescription:
      "Cottage furniture, a rental turnover, or garage clutter — send photos and Junk Command will quote a Lake Huron pickup.",
    nearbySlugs: ["croswell", "fort-gratiot", "port-huron", "yale"],
    faqs: migratedFaqs("Lexington"),
    images: buildLocationImages(
      "Lexington",
      "the Lake Huron shore",
      "waterfront",
    ),
  },
  {
    slug: "anchorville",
    name: "Anchorville",
    county: "St. Clair County",
    regionId: "also-served",
    layout: "editorial",
    eyebrow: "Serving Anchorville",
    metaTitle: "Junk Removal Anchorville MI | Junk Command",
    metaDescription:
      "Need junk removal in Anchorville, Michigan? Junk Command hauls furniture, appliances, and seasonal clutter near Anchor Bay. Get a free estimate.",
    h1: "Junk Removal in Anchorville, MI",
    heroIntro:
      "Anchorville residents call Junk Command for hauling near Anchor Bay, M-29, and Ira Township neighborhoods. We remove furniture, appliances, garage clutter, and seasonal items with upfront pricing.",
    localIntro: [
      "Anchorville sits between Algonac, New Baltimore, Chesterfield, and Ira Township — lake-season storage, waterfront influence, cottages, garages, and quiet residential roads.",
      "Patio furniture, grills, garage boxes, old appliances, mattresses, and shed clutter are the usual loads. Water-oriented properties can involve soft yards, deck steps, and narrow parking.",
      "We also serve [Algonac](/service-areas/algonac), [New Baltimore](/service-areas/new-baltimore), and [Chesterfield](/service-areas/chesterfield) on the same Anchor Bay route.",
    ],
    featuredServiceSlugs: [...SERVICE_PRESETS.waterfront],
    servicesIntro:
      "Anchorville jobs include [furniture removal](/furniture-removal), [appliance removal](/appliance-removal), [garage cleanouts](/garage-cleanout), and outdoor items after the season turns.",
    cleanoutHeading: "More Than Just Junk Pickup",
    cleanoutBody: [
      "Seasonal clutter and lake-area access need a hauler who still treats the home like a permanent residence.",
      "We help Anchorville customers clear space before summer, winter storage, listing photos, or a long-delayed garage project.",
    ],
    midCtaTitle: "Got Junk in Anchorville?",
    midCtaDescription:
      "Seasonal clutter, garage overflow, or household furniture — send photos and Junk Command will quote an Anchor Bay pickup.",
    nearbySlugs: ["algonac", "new-baltimore", "chesterfield", "marine-city"],
    faqs: migratedFaqs("Anchorville"),
    images: buildLocationImages(
      "Anchorville",
      "Anchor Bay",
      "waterfront",
    ),
  },
  {
    slug: "emmett",
    name: "Emmett",
    county: "St. Clair County",
    regionId: "also-served",
    layout: "split",
    eyebrow: "Serving Emmett",
    metaTitle: "Junk Removal Emmett MI | Junk Command",
    metaDescription:
      "Need junk removal in Emmett, Michigan? Junk Command handles rural homes, barns, garages, and estates in western St. Clair County. Get a free estimate.",
    h1: "Junk Removal in Emmett, MI",
    heroIntro:
      "Emmett cleanouts often involve country homes, barns, garages, sheds, and estate properties. Junk Command brings full-service hauling west with clear quotes and respectful crews.",
    localIntro: [
      "Emmett is a rural western St. Clair County community where country homes, farm properties, and larger lots can collect years of items before a serious cleanout begins.",
      "We route Emmett with Bryce Road, Emmett Road, the I-69 western corridor, Capac, Yale, and Memphis. Barn contents, spare refrigerators, estate items, and garage shelving are typical.",
      "Nearby [Capac](/service-areas/capac), [Yale](/service-areas/yale), and [Kimball Township](/service-areas/kimball-township) sit on the same western map. [Estate cleanouts](/estate-cleanout) cover the larger inherited-property jobs.",
    ],
    featuredServiceSlugs: [...SERVICE_PRESETS.rural],
    servicesIntro:
      "Emmett loads include furniture, appliances, basement boxes, barn and garage contents, and non-hazardous outdoor clutter.",
    cleanoutHeading: "More Than Just Junk Pickup",
    cleanoutBody: [
      "Long drives, gravel, sheds, barns, and items stored in several buildings are common. We plan truck placement and crew time from photos.",
      "We help Emmett residents clear rural properties without turning cleanup into several weekends of lifting and dump runs.",
    ],
    midCtaTitle: "Got Junk in Emmett?",
    midCtaDescription:
      "Rural garage, barn, or whole-property cleanout — send photos and Junk Command will quote a western county pickup.",
    nearbySlugs: ["capac", "yale", "memphis", "kimball-township"],
    faqs: migratedFaqs("Emmett"),
    images: buildLocationImages("Emmett", "western St. Clair County", "rural"),
  },
  {
    slug: "clyde-township",
    name: "Clyde Township",
    county: "St. Clair County",
    regionId: "also-served",
    layout: "gallery",
    eyebrow: "Serving Clyde Township",
    metaTitle: "Junk Removal Clyde Township MI | Junk Command",
    metaDescription:
      "Need junk removal in Clyde Township, Michigan? Junk Command hauls furniture, appliances, and garage clutter north of Port Huron. Get a free estimate.",
    h1: "Junk Removal in Clyde Township, MI",
    heroIntro:
      "Clyde Township residents call Junk Command for full-service hauling north of Port Huron and Fort Gratiot. We remove furniture, appliances, garage clutter, barn contents, and household junk.",
    localIntro: [
      "Clyde Township mixes rural roads, acreage homes, outbuildings, and properties between Port Huron, Fort Gratiot, and the northern corridor toward Burtchville and Lakeshore.",
      "Garage cleanouts, old appliances, basement boxes, barn storage, and mixed household junk that will not fit the weekly cart are the usual calls.",
      "We also serve [Fort Gratiot](/service-areas/fort-gratiot) and [Port Huron](/service-areas/port-huron) minutes away. [Garage cleanouts](/garage-cleanout) are the most common township request.",
    ],
    featuredServiceSlugs: [...SERVICE_PRESETS.rural],
    servicesIntro:
      "Clyde Township jobs include [furniture removal](/furniture-removal), [appliance removal](/appliance-removal), garages, barns, and estate contents.",
    cleanoutHeading: "More Than Just Junk Pickup",
    cleanoutBody: [
      "Long drives, gravel shoulders, and items stored away from the easiest loading point are common. A few photos and access notes help us plan the truck and crew.",
      "We help Clyde Township homeowners reclaim usable space without several weekends of dump runs.",
    ],
    midCtaTitle: "Got Junk in Clyde Township?",
    midCtaDescription:
      "Garage, barn, or household furniture — send photos and Junk Command will quote a northern township pickup.",
    nearbySlugs: [
      "fort-gratiot",
      "port-huron",
      "kimball-township",
      "lexington",
    ],
    faqs: migratedFaqs("Clyde Township"),
    images: buildLocationImages(
      "Clyde Township",
      "northern St. Clair County",
      "rural",
    ),
  },
  {
    slug: "lenox-township",
    name: "Lenox Township",
    county: "Macomb County",
    regionId: "also-served",
    layout: "editorial",
    eyebrow: "Serving Lenox Township",
    metaTitle: "Junk Removal Lenox Township MI | Junk Command",
    metaDescription:
      "Need junk removal in Lenox Township, Michigan? Junk Command hauls furniture, appliances, and estate clutter near Richmond and I-94. Get a free estimate.",
    h1: "Junk Removal in Lenox Township, MI",
    heroIntro:
      "Lenox Township homeowners call Junk Command for haul-away near Richmond, New Haven, and the I-94 corridor. We remove furniture, appliances, garage clutter, and estate contents with upfront pricing.",
    localIntro: [
      "Lenox Township combines rural roads, farm properties, subdivision homes, and county-line neighborhoods that connect to Richmond, Chesterfield, and northeastern Macomb County.",
      "We serve the township through Gratiot, 26 Mile, County Line Road, and I-94 access. Estate furniture, garage overflow, rental debris, and mixed junk before a sale are typical.",
      "Nearby [Richmond](/service-areas/richmond), [Chesterfield](/service-areas/chesterfield), and [New Baltimore](/service-areas/new-baltimore) share the same county-line routes.",
    ],
    featuredServiceSlugs: [...SERVICE_PRESETS.rural],
    servicesIntro:
      "Lenox Township pickups include [furniture removal](/furniture-removal), [appliance removal](/appliance-removal), [garage cleanouts](/garage-cleanout), and [estate cleanouts](/estate-cleanout).",
    cleanoutHeading: "More Than Just Junk Pickup",
    cleanoutBody: [
      "Border-area properties can mix suburban, rural, and farm access in one job. We plan for that variety instead of quoting only the front-room furniture.",
      "We help with closings, family transitions, tenant turnovers, and long-delayed garage projects.",
    ],
    midCtaTitle: "Got Junk in Lenox Township?",
    midCtaDescription:
      "Garage, estate, or household junk — send photos and Junk Command will quote a county-line pickup.",
    nearbySlugs: ["richmond", "chesterfield", "new-baltimore", "romeo"],
    faqs: migratedFaqs("Lenox Township"),
    images: buildLocationImages(
      "Lenox Township",
      "northeastern Macomb County",
      "rural",
    ),
  },
];

export const COUNTY_LOCATIONS: LocationPage[] = [
  {
    slug: "st-clair-county",
    name: "St. Clair County",
    county: "St. Clair County",
    regionId: "county",
    isCounty: true,
    layout: "split",
    eyebrow: "Serving St. Clair County",
    metaTitle: "Junk Removal St. Clair County MI | Junk Command",
    metaDescription:
      "Junk Command provides junk removal across St. Clair County from Port Huron to Algonac and Yale. Furniture, appliances, and property cleanouts. Get a free estimate.",
    h1: "Junk Removal in St. Clair County, MI",
    heroIntro:
      "Junk Command is based in Port Huron and serves St. Clair County from the Lake Huron shoreline to western villages and lower river towns. We haul furniture, appliances, trash, and cleanout debris countywide.",
    localIntro: [
      "St. Clair County is our home map — city neighborhoods, Lake Huron homes, river towns, rural townships, western villages, farms, cottages, rentals, and commercial corridors.",
      "County routes connect Port Huron, Fort Gratiot, Clyde Township, Kimball Township, Marysville, St. Clair, Marine City, Algonac, Anchorville, Emmett, Capac, and Yale.",
      "This is a service-area page for the whole county, not a claim of extra offices. For a specific town, start with that city’s page — for example [Port Huron](/service-areas/port-huron) or [Marysville](/service-areas/marysville).",
    ],
    featuredServiceSlugs: [...SERVICE_PRESETS.urban],
    servicesIntro:
      "Countywide calls range from one appliance in Port Huron to a Kimball barn, a St. Clair estate, or an Algonac cottage. [Estate cleanouts](/estate-cleanout), [garage cleanouts](/garage-cleanout), and [furniture removal](/furniture-removal) cover most of the work.",
    cleanoutHeading: "More Than Just Junk Pickup",
    cleanoutBody: [
      "Every part of the county has different access: city alleys, lake cottages, riverfront drives, outbuildings, rural lanes, and older basement stairs.",
      "We help St. Clair County residents use one junk removal company instead of guessing who will serve each city, township, or village.",
    ],
    midCtaTitle: "Got Junk in St. Clair County?",
    midCtaDescription:
      "Send photos from anywhere in the county and Junk Command will confirm coverage and quote the load.",
    nearbySlugs: [
      "port-huron",
      "fort-gratiot",
      "marysville",
      "st-clair",
      "marine-city",
    ],
    faqs: migratedFaqs("St. Clair County"),
    images: buildLocationImages(
      "St. Clair County",
      "the Blue Water Area",
      "county",
    ),
  },
  {
    slug: "macomb-county",
    name: "Macomb County",
    county: "Macomb County",
    regionId: "county",
    isCounty: true,
    layout: "gallery",
    eyebrow: "Serving Northeastern Macomb County",
    metaTitle: "Junk Removal Macomb County MI | Junk Command",
    metaDescription:
      "Junk Command serves northeastern Macomb County — Chesterfield, New Baltimore, Richmond, Romeo, and Armada. Get a free junk removal estimate.",
    h1: "Junk Removal in Macomb County, MI",
    heroIntro:
      "Junk Command serves northeastern Macomb County communities that connect to our Blue Water routes, including Chesterfield, New Baltimore, Richmond, Romeo, Armada, Lenox Township, Anchorville, and Memphis.",
    localIntro: [
      "Macomb County is broad, so Junk Command focuses on northeastern communities where our routes provide practical service — not a claim that we cover every township in the county from a local office.",
      "We plan stops around 23 Mile, 32 Mile, Gratiot, Van Dyke, Jefferson, I-94, County Line Road, Anchor Bay, and the Richmond-Romeo-Armada corridor.",
      "For a specific town, use that page: [Chesterfield](/service-areas/chesterfield), [Richmond](/service-areas/richmond), [Romeo](/service-areas/romeo), or [Armada](/service-areas/armada).",
    ],
    featuredServiceSlugs: [...SERVICE_PRESETS.urban],
    servicesIntro:
      "Northeastern Macomb calls include Chesterfield condo cleanouts, New Baltimore lake-home furniture, Richmond estate work, Romeo village pickups, and Armada rural loads. [Furniture removal](/furniture-removal) and [estate cleanouts](/estate-cleanout) are the core services.",
    cleanoutHeading: "More Than Just Junk Pickup",
    cleanoutBody: [
      "HOA neighborhoods, condos, lake homes, downtown businesses, and rural border roads all require tidy staging.",
      "We help northeastern Macomb County customers get hauling without a call center that does not know the local roads.",
    ],
    midCtaTitle: "Got Junk in Macomb County?",
    midCtaDescription:
      "If you are in our northeastern Macomb coverage, send photos and Junk Command will confirm the town and quote the load.",
    nearbySlugs: [
      "chesterfield",
      "richmond",
      "romeo",
      "armada",
      "lenox-township",
    ],
    faqs: migratedFaqs("Macomb County"),
    images: buildLocationImages(
      "Macomb County",
      "northeastern Macomb communities",
      "county",
    ),
  },
];
