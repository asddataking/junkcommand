export type City = {
  slug: string;
  name: string;
  county: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  intro: string; // short hero paragraph ~35-50 words
  introduction: string[]; // 4-5 unique paragraphs for body (~1500 words TOTAL page copy including all fields)
  whyUs: string[]; // 2-3 paragraphs
  localReferences: string[]; // 6 neighborhood/street refs
  nearbyLandmarks: string[]; // 4 landmarks
  servicesBlurb: string;
  commonJobs: { title: string; description: string }[]; // 4 jobs
  pricingOverview: string[]; // 2 paragraphs
  faqs: { question: string; answer: string }[]; // 4-5 FAQs
  nearbySlugs: string[];
  image: string; // `/images/cities/{slug}.webp` or for memphis use `/images/junk-command-hero.webp`
  imageAlt: string;
  isCounty?: boolean;
};

type CitySeed = {
  slug: string;
  name: string;
  county: string;
  eyebrow: string;
  metaDescription: string;
  intro: string;
  profile: string;
  routeDetails: string;
  cleanupExamples: string;
  accessNotes: string;
  localPromise: string;
  whyLocal: string;
  whyCare: string;
  localReferences: string[];
  nearbyLandmarks: string[];
  nearbySlugs: string[];
  image?: string;
  imageAlt?: string;
  isCounty?: boolean;
};

function cityImage(_slug: string): string {
  // Shared branded photography until verified city-specific images are added.
  return "/images/dan-gage-luna.webp";
}

function buildCity(seed: CitySeed): City {
  const { name } = seed;
  const image = seed.image ?? cityImage(seed.slug);

  return {
    slug: seed.slug,
    name,
    county: seed.county,
    metaTitle: `Junk Removal ${name} MI | Junk Command`,
    metaDescription: seed.metaDescription,
    h1: `Junk Removal in ${name}, Michigan`,
    eyebrow: seed.eyebrow,
    intro: seed.intro,
    introduction: [
      `Looking for junk removal in ${name}? Junk Command is a veteran-owned Blue Water Area crew that treats every property like a real neighborhood stop — not a pin on a national franchise map. ${seed.profile}`,
      `Most ${name} junk hauling jobs start small and grow from there. A garage reset uncovers old furniture, a move exposes basement boxes, a remodel creates debris, or a rental turnover leaves more than the weekly cart can handle. ${seed.routeDetails} Our crew arrives ready to lift, load, and haul so you do not need a dumpster sitting in the driveway for a week.`,
      `Trash removal in ${name} works best when the load is mixed and awkward — bagged clutter, broken shelving, mattresses, outdoor items, office leftovers, and light construction debris that municipal pickup will not take. ${seed.cleanupExamples} We confirm pricing before we load, flag anything that needs special handling, and keep the work area controlled from start to finish.`,
      `Furniture removal and appliance removal are two of the most common ${name} requests because bulky pieces are hard to move without scuffing walls, stairs, or flooring. We take sofas, sectionals, recliners, tables, dressers, mattresses, refrigerators, freezers, washers, dryers, ranges, dishwashers, and similar items from the room, garage, basement, porch, or storage area where they sit. ${seed.accessNotes}`,
      `${seed.localPromise} On service day we walk the pile with you, protect doorways and floors, load what we agreed to remove, and leave the space broom-clean whenever practical. Call or text 810-336-5865 with photos, access notes, and your timeline for a practical estimate.`,
      `Whether you need a same-week pickup or are planning ahead for a closing, remodel, or estate transition, junk removal in ${name} should feel straightforward. Junk Command keeps communication clear, quotes transparent, and the crew accountable — the way a local company should operate across ${seed.county}.`,
      `Customers often meet us near familiar spots such as ${seed.nearbyLandmarks.join(", ")}. We also work regularly around ${seed.localReferences.slice(0, 4).join("; ")}, so driveway access, alley parking, and long carries rarely catch our crew off guard.`,
    ],
    whyUs: [
      `${seed.whyLocal} That local awareness matters because the hard part of junk removal is rarely just weight. Parking, stairs, long carries, association rules, rural drives, weather, and disposal options all affect the job. We ask about those details before arrival so the crew, truck space, and time window match the work.`,
      `${seed.whyCare} You get volume-based pricing, clear communication, and a team that protects trim, lawns, driveways, and common areas. When usable items can reasonably be donated or recycled, we make that effort; when disposal is required, we route it responsibly.`,
      `Homeowners, landlords, realtors, and small businesses in ${name} choose Junk Command when they want premium service without corporate runaround. Text photos to 810-336-5865 and we will tell you what the job looks like before we roll.`,
    ],
    localReferences: seed.localReferences,
    nearbyLandmarks: seed.nearbyLandmarks,
    servicesBlurb: `From ${name} junk hauling for household clutter to furniture removal, appliance removal, garage cleanouts, estate cleanouts, and light construction debris removal, Junk Command covers the jobs that fill a truck and free up your property.`,
    commonJobs: [
      {
        title: "Furniture haul-away",
        description: `Sofas, sectionals, recliners, mattresses, dressers, tables, cabinets, desks, and patio sets removed from homes, rentals, condos, offices, and garages throughout ${name}.`,
      },
      {
        title: "Appliance pickup",
        description: `Refrigerators, freezers, washers, dryers, stoves, dishwashers, microwaves, and water heaters hauled after replacements, moves, remodels, or full cleanouts in ${name}.`,
      },
      {
        title: "Garage, basement, and estate cleanouts",
        description: `Boxes, shelving, tools, toys, bagged clutter, inherited contents, and non-hazardous debris cleared so the property can be sold, rented, remodeled, or used again.`,
      },
      {
        title: "Rental and light commercial trash removal",
        description: `Landlords, realtors, property managers, shops, and offices in ${name} book us for move-out debris, fixtures, storage-room overflow, and deadline cleanups.`,
      },
    ],
    pricingOverview: [
      `Pricing for junk removal in ${name} is based mainly on how much space your items take in the truck, with access, weight, and special handling considered before work begins. Single-item pickups, partial loads, and larger cleanouts are quoted clearly, and the crew confirms the final number on site before loading anything.`,
      `Photos make estimates faster and more accurate. Text 810-336-5865 with pictures of the pile, large furniture, appliances, stairs, parking, outbuildings, or tight access. A few good photos help us send the right crew for ${name} junk hauling and avoid surprises on the day of service.`,
      `Most minimum pickups start near $99, while garage cleanouts and multi-room jobs scale with volume. Visit our pricing page for common item ranges, or ask about bundling furniture and appliances into one efficient trip.`,
    ],
    faqs: [
      {
        question: `How quickly can you schedule junk removal in ${name}?`,
        answer: `Scheduling depends on the route and the size of the job, but ${name} is part of our regular service area. Call or text 810-336-5865 with photos and your deadline so we can confirm the soonest practical pickup window.`,
      },
      {
        question: `Do I need to move everything to the curb in ${name}?`,
        answer: `No. Full-service removal is the reason customers hire Junk Command. If items are safely accessible, our crew can remove them from rooms, basements, garages, sheds, porches, offices, or storage areas.`,
      },
      {
        question: `What items are common for junk hauling in ${name}?`,
        answer: `Common loads include sofas, mattresses, appliances, boxes, shelving, bagged clutter, outdoor furniture, tenant debris, garage contents, estate items, and light non-hazardous remodel debris.`,
      },
      {
        question: `Can you combine furniture and appliance removal in one visit?`,
        answer: `Yes. Combining bulky furniture, appliances, and general trash in one ${name} visit is common and usually more efficient than booking separate pickups. We price the combined load before loading begins.`,
      },
      {
        question: `Are you insured for ${name} junk removal jobs?`,
        answer: `Yes. Junk Command is bonded and insured. Our veteran-owned crew works carefully around floors, doorways, stairs, driveways, lawns, and business spaces on every scheduled pickup.`,
      },
    ],
    nearbySlugs: seed.nearbySlugs,
    image,
    imageAlt:
      seed.image && seed.imageAlt
        ? seed.imageAlt
        : `Dan and Gage with Luna and the Junk Command truck serving ${name}, Michigan`,
    isCounty: seed.isCounty,
  };
}

export const CITIES: City[] = [
  buildCity({
    slug: "port-huron",
    name: "Port Huron",
    county: "St. Clair County",
    eyebrow: "Blue Water Area Headquarters",
    metaDescription:
      "Junk Removal Port Huron MI by veteran-owned Junk Command. Fast furniture, appliance and cleanout hauling. Call 810-336-5865 today.",
    intro:
      "Junk Command is based in Port Huron, so our crew already knows the alleys, bridges, basements, rentals, and lakefront streets that make cleanup here different. Call 810-336-5865 for veteran-owned hauling with clear pricing and careful service.",
    profile:
      "Port Huron jobs may involve tight downtown parking near Military Street, older stairways off Pine Grove, lake-season clutter near Lakeside, student rentals around SC4, office spaces near McMorran, or waterfront homes close to the Black River and Blue Water Bridge. Winter weather, bridge traffic, and older housing stock all shape how we stage a truck and protect floors on a typical day.",
    routeDetails:
      "Because our headquarters are local, we can plan pickups around Port Huron neighborhoods instead of treating the city like an out-of-town appointment. Same-day and next-day windows open more often here when photos come in early and the load fits the route already running through town.",
    cleanupExamples:
      "A south side landlord may need a tenant cleanout before the next lease, a family near Holland Avenue may need basement junk removed before remodeling, a downtown business may need fixtures hauled before reopening, or a Lakeside household may need patio furniture and storm debris cleared after a rough stretch of weather.",
    accessNotes:
      "In Port Huron, that often means watching older trim, narrow basement stairs, winter sidewalks, alley parking, and neighbors close by. We bring floor protection, move carefully through tight halls, and confirm what stays versus what goes before the first item hits the truck.",
    localPromise:
      "From the Blue Water Bridge corridor to Edison, Lakeside, and the canal area, we help Port Huron properties feel clear, safe, and ready for what comes next — whether that is a listing photo day, a family visit, or simply a garage you can finally park in again.",
    whyLocal:
      "Port Huron is home base, so our team knows Pine Grove, 10th Avenue, Griswold, Military Street, Electric Avenue, the Black River canal area, and the neighborhoods that sit between the lake and the interstate. That map knowledge shortens travel time and helps us show up with the right crew size.",
    whyCare:
      "Port Huron customers hire us because we bring a polished process to very real local jobs: estate cleanouts, appliance failures, garage overflow, commercial resets, and rental turnovers. You get veteran-owned accountability, not a revolving door of subcontractors.",
    localReferences: [
      "Blue Water Bridge corridor",
      "Military Street and downtown Port Huron",
      "Pine Grove Avenue neighborhoods",
      "Lakeside and Gratiot Avenue homes",
      "Black River canal area",
      "Holland Avenue and 10th Avenue blocks",
    ],
    nearbyLandmarks: [
      "Blue Water Bridge",
      "Thomas Edison Depot Museum",
      "McMorran Place",
      "Fort Gratiot Lighthouse",
    ],
    nearbySlugs: [
      "fort-gratiot",
      "marysville",
      "kimball-township",
      "st-clair",
      "st-clair-county",
    ],
    imageAlt:
      "Junk Command crew loading junk removal items at a Port Huron Michigan home",
  }),
  buildCity({
    slug: "fort-gratiot",
    name: "Fort Gratiot",
    county: "St. Clair County",
    eyebrow: "Lakeshore Township Hauling",
    metaDescription:
      "Junk Removal Fort Gratiot MI for lakeshore homes, stores and cleanouts. Veteran-owned Junk Command. Call 810-336-5865.",
    intro:
      "Fort Gratiot homeowners and businesses call Junk Command for careful haul-away along the Lake Huron shoreline, 24th Avenue retail corridor, and quiet township streets. We bring veteran-owned service, upfront pricing, and the truck capacity to finish cleanouts without hassle.",
    profile:
      "Fort Gratiot combines lake cottages, year-round homes, retail properties, storage-heavy garages, and township roads where storm debris and seasonal clutter can build quickly after a windy stretch off Lake Huron. Weekend openings and seasonal closings create predictable spikes in furniture and appliance haul-away requests.",
    routeDetails:
      "We regularly work around 24th Avenue, Keewahdin Road, Lakeshore Road, Krafft Road, State Road, and the Birchwood Mall area, so route planning is familiar. That proximity to Port Huron means Fort Gratiot junk hauling can often fit same-week openings when photos arrive early.",
    cleanupExamples:
      "One call may be an old freezer in a garage, the next may be furniture from a lakeshore cottage, retail shelving near the commercial corridor, or brush and patio items after lake-effect weather. Estate cleanouts and rental turnovers are common when families consolidate or prepare a property for listing.",
    accessNotes:
      "Fort Gratiot properties often have tight garage storage, split-level stairs, older cottages, and soft yard areas near the lake, so we plan the removal path before lifting. Tell us about HOA rules, gravel shoulders, or items upstairs so we can protect floors and finish cleanly.",
    localPromise:
      "Whether you are opening a cottage, closing a sale, refreshing a store, or reclaiming a garage, we keep Fort Gratiot cleanup direct and professional — with upfront pricing and a broom-clean finish when we leave.",
    whyLocal:
      "Fort Gratiot sits minutes from our Port Huron base and is one of our most common township service areas, from Birchwood Mall traffic to quieter roads toward the shoreline. Local knowledge shortens travel time and helps us show up prepared.",
    whyCare:
      "Fort Gratiot customers count on us for a clean finish around finished driveways, lake homes, association neighborhoods, and retail entrances where sloppy hauling stands out. Veteran-owned standards mean we treat every stop like it belongs to a neighbor.",
    localReferences: [
      "24th Avenue retail corridor",
      "Keewahdin Road subdivisions",
      "Lakeshore Road homes",
      "Krafft Road residential areas",
      "State Road township stretches",
      "Birchwood Mall and surrounding businesses",
    ],
    nearbyLandmarks: [
      "Birchwood Mall",
      "Fort Gratiot County Park",
      "Lake Huron shoreline",
      "Fort Gratiot Lighthouse",
    ],
    nearbySlugs: [
      "port-huron",
      "clyde-township",
      "kimball-township",
      "marysville",
      "lexington",
    ],
    imageAlt:
      "Junk removal crew serving a Fort Gratiot Michigan township home near Lake Huron",
  }),
  buildCity({
    slug: "kimball-township",
    name: "Kimball Township",
    county: "St. Clair County",
    eyebrow: "Acreage, Outbuilding, and Subdivision Cleanouts",
    metaDescription:
      "Junk Removal Kimball Township MI for homes, barns, garages and shops. Veteran-owned hauling. Call Junk Command 810-336-5865.",
    intro:
      "Kimball Township cleanouts often involve long driveways, pole barns, basements, sheds, and mixed rural loads. Junk Command brings a veteran-owned crew, clear pricing, and practical hauling experience for homes and properties along the I-69 corridor.",
    profile:
      "Kimball Township properties may include acreage, pole barns, workshops, detached garages, subdivision homes, rental houses, and inherited storage areas where unwanted items spread across several buildings instead of one room.",
    routeDetails:
      "Our crew already travels the I-69, Wadhams, Smiths Creek, Allen Road, Range Road, and Lapeer Road corridors, so rural and subdivision stops can be planned intelligently.",
    cleanupExamples:
      "Kimball loads often include barn shelving, old tools, damaged furniture, boxes, freezers, renovation scraps, tenant trash, and the kind of mixed household material that needs judgment before disposal.",
    accessNotes:
      "Long gravel drives, uneven barn floors, low basement ceilings, and items stored far from the truck are normal in Kimball Township, so we ask access questions before scheduling.",
    localPromise:
      "We help Kimball Township customers turn crowded barns, garages, basements, and rental properties back into usable space without forcing them into multiple dump runs.",
    whyLocal:
      "Kimball is directly west of Port Huron and part of our everyday Blue Water footprint, with routes that naturally connect Smiths Creek, Wadhams, Marysville, and Emmett.",
    whyCare:
      "Kimball customers appreciate that we treat rural access as normal work, not an inconvenience, while still protecting finished interiors, lawn edges, gravel drives, and outbuilding doors.",
    localReferences: [
      "Wadhams Road area",
      "Smiths Creek neighborhoods",
      "Lapeer Road corridor",
      "I-69 and Range Road access",
      "Allen Road township properties",
      "Griswold Road and rural side roads",
    ],
    nearbyLandmarks: [
      "Wadhams to Avoca Trail",
      "Glacier Pointe Ice Complex",
      "Smiths Creek village area",
      "I-69 corridor",
    ],
    nearbySlugs: [
      "port-huron",
      "fort-gratiot",
      "clyde-township",
      "emmett",
      "st-clair-county",
    ],
    imageAlt:
      "Junk Command removing clutter from a Kimball Township Michigan outbuilding",
  }),
  buildCity({
    slug: "marysville",
    name: "Marysville",
    county: "St. Clair County",
    eyebrow: "St. Clair River Neighbor Service",
    metaDescription:
      "Junk Removal Marysville MI with veteran-owned hauling for furniture, appliances and cleanouts. Call Junk Command at 810-336-5865.",
    intro:
      "Marysville homes, riverfront properties, rentals, and businesses rely on Junk Command for clean, careful hauling minutes from our Port Huron base. We remove bulky items, clear packed spaces, and make scheduling simple with upfront pricing.",
    profile:
      "Marysville has tidy ranch homes, established neighborhoods, riverfront streets, industrial edges, and business pockets where clutter can block garages, basements, storage rooms, and turnover schedules. Families often call when a renovation, move, or appliance delivery leaves bulky items with nowhere practical to go.",
    routeDetails:
      "We work Marysville as a true local stop between Port Huron and St. Clair, including Gratiot Boulevard, Busha Highway, Huron Boulevard, Wills Road, and Michigan Avenue. That corridor familiarity helps us offer practical windows for Marysville junk hauling without treating the city like a long-distance detour.",
    cleanupExamples:
      "A Marysville pickup may involve a basement before remodeling, an old washer after delivery, furniture from a downsizing project, office items from a business near the river corridor, or a garage cleanout before winter parking becomes a weekly hassle.",
    accessNotes:
      "Many Marysville homes have finished floors, attached garages, narrow utility rooms, and well-kept entries, so careful carrying matters as much as hauling speed. We protect doorways and confirm keepers before anything rolls to the truck.",
    localPromise:
      "From riverfront homes to neighborhood garages, we help Marysville residents clear space before winter parking, summer guests, listings, or family transitions — with clear pricing and a respectful finish.",
    whyLocal:
      "Marysville is minutes from our Port Huron operation and falls directly on our regular southbound routes along the St. Clair River. Local routing means less wait and a crew that already knows the streets.",
    whyCare:
      "Marysville customers expect neat work, respectful crews, and a clean driveway when the truck leaves, especially in homes where clutter is tied to moving, downsizing, or a family estate. That expectation matches how Junk Command runs every job.",
    localReferences: [
      "Gratiot Boulevard corridor",
      "Busha Highway riverfront streets",
      "Huron Boulevard neighborhoods",
      "Wills Road residential area",
      "Michigan Avenue business pockets",
      "Chrysler Drive industrial edge",
    ],
    nearbyLandmarks: [
      "Marysville City Park",
      "Marysville Golf Course",
      "Marysville Municipal Marina area",
      "St. Clair River shoreline",
    ],
    nearbySlugs: [
      "port-huron",
      "st-clair",
      "kimball-township",
      "fort-gratiot",
      "marine-city",
    ],
    imageAlt:
      "Junk Command hauling furniture from a Marysville Michigan residential property",
  }),
  buildCity({
    slug: "st-clair",
    name: "St. Clair",
    county: "St. Clair County",
    eyebrow: "Riverfront City Cleanout Service",
    metaDescription:
      "Junk Removal St. Clair MI for riverfront homes, estates, appliances and furniture. Veteran-owned. Call Junk Command 810-336-5865.",
    intro:
      "From riverfront homes near the boardwalk to neighborhoods off Range Road, Junk Command provides St. Clair with professional junk removal, furniture hauling, appliance pickup, and cleanout support backed by veteran-owned discipline.",
    profile:
      "St. Clair has historic homes, waterfront properties, marinas, parks, well-kept neighborhoods, and a downtown that leaves little room for messy curb piles or careless loading.",
    routeDetails:
      "Our route knowledge includes Riverside Avenue, Clinton Avenue, M-29, Range Road, the Palmer Park area, and residential pockets west of the riverfront.",
    cleanupExamples:
      "St. Clair projects often involve estate contents, pre-listing garage cleanup, old appliances from riverfront homes, patio furniture after storms, or business clutter near downtown.",
    accessNotes:
      "Older homes, riverfront parking, finished entries, and tight downtown blocks require patience, clean staging, and a crew that thinks before moving heavy items.",
    localPromise:
      "We help St. Clair homeowners, businesses, realtors, and families keep properties clean, presentable, and ready for guests, buyers, tenants, or the next renovation phase.",
    whyLocal:
      "St. Clair is a natural part of our daily route south from Port Huron, and our team understands the M-29 river corridor and the neighborhoods that branch west from it.",
    whyCare:
      "St. Clair customers choose us because riverfront and historic properties deserve careful handling, not rushed hauling that scuffs trim or leaves debris behind.",
    localReferences: [
      "Riverside Avenue riverfront homes",
      "Downtown St. Clair business district",
      "Clinton Avenue neighborhoods",
      "Range Road residential areas",
      "M-29 / River Road corridor",
      "Palmer Park and boardwalk vicinity",
    ],
    nearbyLandmarks: [
      "St. Clair River",
      "Palmer Park",
      "The St. Clair Inn",
      "Pine Shores Golf Course",
    ],
    nearbySlugs: [
      "marysville",
      "marine-city",
      "port-huron",
      "algonac",
      "st-clair-county",
    ],
    imageAlt:
      "Veteran owned Junk Command crew providing junk removal in St. Clair Michigan",
  }),
  buildCity({
    slug: "marine-city",
    name: "Marine City",
    county: "St. Clair County",
    eyebrow: "Historic River Town Hauling",
    metaDescription:
      "Junk Removal Marine City MI for homes, cottages, shops and riverfront cleanouts. Call veteran-owned Junk Command 810-336-5865.",
    intro:
      "Marine City properties deserve junk removal that respects older homes, riverfront streets, busy downtown blocks, and tight access. Junk Command hauls furniture, appliances, trash, and cleanout debris with clear pricing and veteran-owned care.",
    profile:
      "Marine City blends historic houses, arts venues, riverfront businesses, cottages, ferry-area traffic, and established neighborhoods where clutter needs to disappear without damaging older entries or blocking narrow streets.",
    routeDetails:
      "We plan Marine City stops around Broadway, Water Street, South Parker Street, the M-29 corridor, and residential streets that stretch west from the river.",
    cleanupExamples:
      "Common calls include cottage cleanouts, estate furniture, old appliances, storefront fixtures, basement junk, garage overflow, patio sets, and rental debris after a busy season.",
    accessNotes:
      "Older staircases, porch steps, alley-style access, and downtown parking make Marine City jobs a good fit for a crew that values planning before lifting.",
    localPromise:
      "From the theater district to quiet inland blocks, we help Marine City properties stay clean, useful, and ready for family, customers, guests, or buyers.",
    whyLocal:
      "Marine City sits on our lower river route with St. Clair and Algonac, so our crew understands the river-town layout and seasonal cleanup rhythm.",
    whyCare:
      "Marine City customers rely on us for careful hauling in older homes, small businesses, cottages, and rentals where a careless bump can create extra work.",
    localReferences: [
      "Broadway Street downtown area",
      "Water Street riverfront properties",
      "South Parker Street neighborhoods",
      "M-29 / River Road corridor",
      "Bridge to Bay Trail vicinity",
      "Inland streets west of downtown",
    ],
    nearbyLandmarks: [
      "Marine City Beach",
      "Mariner Theater",
      "St. Clair River waterfront",
      "Bridge to Bay Trail",
    ],
    nearbySlugs: [
      "st-clair",
      "algonac",
      "anchorville",
      "marysville",
      "st-clair-county",
    ],
    imageAlt:
      "Junk Command hauling unwanted items from a Marine City Michigan river town property",
  }),
  buildCity({
    slug: "algonac",
    name: "Algonac",
    county: "St. Clair County",
    eyebrow: "Pickerel, Channels, and Riverfront Hauling",
    metaDescription:
      "Junk Removal Algonac MI for waterfront homes, cottages, furniture and appliances. Veteran-owned. Call 810-336-5865.",
    intro:
      "Algonac junk removal calls often involve water access, cottages, garages, boat-season clutter, and heavy items tucked away for years. Junk Command brings full-service hauling to homes and businesses throughout the lower St. Clair River area.",
    profile:
      "Algonac is shaped by the St. Clair River, canals, marinas, cottages, year-round homes, and seasonal boating storage, so cleanup often involves outdoor items as much as household clutter.",
    routeDetails:
      "We serve Algonac along M-29, Pointe Tremble Road, the downtown boardwalk area, canal neighborhoods, and routes leading toward the Flats and Ira Township.",
    cleanupExamples:
      "Algonac pickups often include broken patio furniture, grills, dock boxes, garage shelves, cottage mattresses, old appliances, rental leftovers, and items stored around boat-season gear.",
    accessNotes:
      "Waterfront parking, deck routes, soft ground, sheds, and detached garages can affect loading, so we ask about the path from the item to the truck before arrival.",
    localPromise:
      "We help Algonac residents and cottage owners get spaces ready for summer, winter storage, guests, listing photos, or a fresh start after years of accumulation.",
    whyLocal:
      "Algonac is part of our lower St. Clair River service pattern with Marine City, Anchorville, and the Anchor Bay communities.",
    whyCare:
      "Algonac customers appreciate a hauler who understands waterfront properties, seasonal deadlines, and the need to remove bulky items without tearing up lawns or decks.",
    localReferences: [
      "M-29 / Pointe Tremble Road corridor",
      "Algonac riverfront neighborhoods",
      "Canal and marina area homes",
      "St. Clair Flats access routes",
      "Algonac State Park vicinity",
      "Downtown boardwalk area",
    ],
    nearbyLandmarks: [
      "Algonac State Park",
      "St. Clair River",
      "Algonac Boardwalk",
      "Russell Island Ferry area",
    ],
    nearbySlugs: [
      "marine-city",
      "anchorville",
      "st-clair",
      "chesterfield",
      "st-clair-county",
    ],
    imageAlt:
      "Junk Command removing junk from an Algonac Michigan waterfront property",
  }),
  buildCity({
    slug: "yale",
    name: "Yale",
    county: "St. Clair County",
    eyebrow: "Western St. Clair County Hauling",
    metaDescription:
      "Junk Removal Yale MI for village homes, farms, garages and estates. Veteran-owned Junk Command. Call 810-336-5865.",
    intro:
      "Yale cleanouts can mean a village basement, a farm garage, a rental house, or an estate with years of stored items. Junk Command brings reliable Port Huron-based hauling west with upfront pricing and respectful service.",
    profile:
      "Yale sits where village blocks meet western county farm roads, which means cleanouts may involve Main Street homes, outbuildings, older basements, workshops, and multi-generation storage.",
    routeDetails:
      "We plan Yale routes with Brockway Road, Avoca Road, Yale Road, Emmett, Capac, and the rural roads that connect those communities.",
    cleanupExamples:
      "Yale projects often include inherited contents, barn shelving, old appliances, garage clutter, damaged furniture, basement boxes, tenant debris, and pre-listing cleanouts.",
    accessNotes:
      "Village homes can have older stairs, while rural properties can have gravel drives, uneven barns, and items spread across multiple buildings.",
    localPromise:
      "We help Yale families, property owners, and realtors turn overwhelming cleanup projects into clear rooms, usable garages, and properties ready for the next step.",
    whyLocal:
      "Yale is a regular western St. Clair County service area for us, grouped naturally with Emmett, Capac, Croswell, and Kimball routes.",
    whyCare:
      "Yale customers value a crew that can move from a careful interior furniture pickup to a barn cleanout without losing communication or respect for the property.",
    localReferences: [
      "Main Street Yale village blocks",
      "Brockway Road corridor",
      "Avoca Road area",
      "Yale Road rural properties",
      "Village neighborhoods near schools",
      "Farm roads outside the city",
    ],
    nearbyLandmarks: [
      "Downtown Yale",
      "Yale Bologna Festival area",
      "Yale City Park",
      "Wadhams to Avoca Trail region",
    ],
    nearbySlugs: [
      "capac",
      "emmett",
      "croswell",
      "kimball-township",
      "st-clair-county",
    ],
    imageAlt:
      "Junk Command hauling garage clutter from a Yale Michigan property",
  }),
  buildCity({
    slug: "capac",
    name: "Capac",
    county: "St. Clair County",
    eyebrow: "I-69 Corridor Cleanout Service",
    metaDescription:
      "Junk Removal Capac MI for homes, farms, estates and business cleanouts. Veteran-owned hauling. Call 810-336-5865.",
    intro:
      "Capac residents and businesses call Junk Command for reliable hauling along the I-69 corridor. We remove furniture, appliances, trash, garage clutter, estate contents, and light debris with clear quotes and veteran-owned professionalism.",
    profile:
      "Capac connects village homes, small businesses, I-69 access, nearby farms, and older properties with garages and storage rooms that can hold years of unwanted material.",
    routeDetails:
      "Our western routes regularly connect Capac Road, Main Street, the I-69 interchange, Emmett, Yale, Memphis, and surrounding township roads.",
    cleanupExamples:
      "Capac cleanouts may involve a rental house, a business storage room, a barn corner, an estate garage, a basement of boxes, or old appliances after a replacement.",
    accessNotes:
      "We plan for village parking, rural drives, outbuildings, stairs, and heavy items that may be stored far from the easiest loading spot.",
    localPromise:
      "We help Capac homeowners, landlords, business owners, and families get properties cleaned up without chasing multiple dump trips or managing a dumpster alone.",
    whyLocal:
      "Capac is part of our I-69 corridor coverage and fits naturally with Emmett, Yale, Memphis, Richmond, and western St. Clair County routes.",
    whyCare:
      "Capac customers often have mixed loads from several areas of a property, so they need a hauler who can organize the work, not just throw items in a truck.",
    localReferences: [
      "Main Street Capac village area",
      "Capac Road corridor",
      "I-69 interchange vicinity",
      "Downtown Capac storefronts",
      "Rural roads outside the village",
      "Residential blocks near Capac schools",
    ],
    nearbyLandmarks: [
      "Downtown Capac",
      "I-69 corridor",
      "Capac Community Schools area",
      "Holly Meadows Golf Course region",
    ],
    nearbySlugs: [
      "yale",
      "emmett",
      "imlay-city",
      "memphis",
      "richmond",
    ],
    imageAlt:
      "Junk Command crew hauling unwanted items from a Capac Michigan property",
  }),
  buildCity({
    slug: "croswell",
    name: "Croswell",
    county: "Sanilac County",
    eyebrow: "Sanilac County Blue Water Route",
    metaDescription:
      "Junk Removal Croswell MI for village homes, farms, cottages and cleanouts. Veteran-owned Junk Command. Call 810-336-5865.",
    intro:
      "Croswell homes, farms, and village properties use Junk Command for dependable hauling north of our Port Huron base. We clear furniture, appliances, garage clutter, estate contents, and mixed debris with careful full-service removal.",
    profile:
      "Croswell connects inland Sanilac County with the Lake Huron corridor, giving us village homes, farm shops, Black River properties, and seasonal cleanouts headed toward Lexington.",
    routeDetails:
      "We schedule Croswell with Lexington, Yale, and northern Blue Water runs, including Main Street, Wells Street, Harrington Road, and roads outside the village.",
    cleanupExamples:
      "Croswell calls often involve farm garage clutter, cottage turnover items, water-damaged basement furniture, old appliances, estate contents, and pre-sale property cleanup.",
    accessNotes:
      "Older village homes, outbuildings, rural drives, and mixed loads require a crew that can adapt without losing the careful handling expected inside a home.",
    localPromise:
      "We help Croswell customers clear the items that keep homes, barns, garages, and seasonal properties from being useful, marketable, or guest-ready.",
    whyLocal:
      "Croswell is part of our northern Blue Water service rhythm, especially when routes connect Lexington, Yale, and Sanilac County cleanout work.",
    whyCare:
      "Croswell customers choose Junk Command because we bring Port Huron-level professionalism to properties that larger haulers may treat as too far or too rural.",
    localReferences: [
      "Main Street Croswell",
      "Wells Street neighborhoods",
      "Harrington Road area",
      "Black River corridor",
      "Farm roads outside the village",
      "Routes toward Lexington and Yale",
    ],
    nearbyLandmarks: [
      "Croswell Swinging Bridge",
      "Black River",
      "Downtown Croswell",
      "Sanilac County rural corridor",
    ],
    nearbySlugs: [
      "lexington",
      "yale",
      "capac",
      "emmett",
      "st-clair-county",
    ],
    imageAlt:
      "Junk Command providing junk hauling for a Croswell Michigan village property",
  }),
  buildCity({
    slug: "lexington",
    name: "Lexington",
    county: "Sanilac County",
    eyebrow: "Lake Huron Cottage and Village Service",
    metaDescription:
      "Junk Removal Lexington MI for cottages, rentals, lake homes and cleanouts. Veteran-owned hauling. Call Junk Command 810-336-5865.",
    intro:
      "Lexington cleanouts often happen on tight timelines before guests, listings, weekends, or seasonal turnover. Junk Command hauls furniture, appliances, mattresses, garage clutter, and cottage junk with organized scheduling and veteran-owned care.",
    profile:
      "Lexington is a Lake Huron destination with cottages, rentals, year-round homes, harbor traffic, downtown shops, and owners who often need cleanup finished before guests arrive.",
    routeDetails:
      "We plan Lexington service through the M-25 corridor, Huron Avenue, the harbor area, village streets, and inland roads that connect toward Croswell and Yale.",
    cleanupExamples:
      "Lexington loads often include cottage mattresses, sleeper sofas, patio sets, beach gear, grills, garage shelves, rental leftovers, and appliances replaced before summer.",
    accessNotes:
      "Cottages and older lake homes may have narrow doors, stairs, limited parking, or items stored in sheds, so access instructions are especially helpful.",
    localPromise:
      "We help Lexington owners keep lake homes, rentals, garages, and cottages guest-ready without spending valuable weekends on heavy hauling.",
    whyLocal:
      "Lexington is served intentionally as part of our northern Blue Water route, not as an afterthought, with Croswell and Yale often helping shape scheduling.",
    whyCare:
      "Lexington customers care about timing and presentation, especially when rental turnovers, family visits, listing photos, or seasonal openings are on the calendar.",
    localReferences: [
      "Huron Avenue downtown Lexington",
      "Lexington Harbor area",
      "Lake Huron shoreline cottages",
      "Village residential streets",
      "M-25 lakeshore corridor",
      "Inland roads toward Croswell",
    ],
    nearbyLandmarks: [
      "Lexington Harbor",
      "Lexington Village Theatre",
      "Lexington State Harbor",
      "Lake Huron shoreline",
    ],
    nearbySlugs: [
      "croswell",
      "yale",
      "fort-gratiot",
      "port-huron",
      "st-clair-county",
    ],
    imageAlt:
      "Junk Command hauling cottage furniture from a Lexington Michigan Lake Huron property",
  }),
  buildCity({
    slug: "richmond",
    name: "Richmond",
    county: "Macomb County",
    eyebrow: "Macomb and St. Clair Border Hauling",
    metaDescription:
      "Junk Removal Richmond MI for homes, estates, farms and businesses. Veteran-owned Junk Command. Call 810-336-5865 today.",
    intro:
      "Richmond sits where Macomb County, St. Clair County, farms, subdivisions, and Main Street businesses meet. Junk Command provides full-service hauling for furniture, appliances, estate cleanouts, garages, and trash removal with upfront pricing.",
    profile:
      "Richmond mixes Main Street businesses, Gratiot Avenue traffic, family neighborhoods, county-line roads, and rural properties that can produce everything from one old refrigerator to a multi-area estate cleanout.",
    routeDetails:
      "Our routes connect Richmond with Memphis, Chesterfield, New Baltimore, Capac, and St. Clair County, so border-area scheduling is familiar territory.",
    cleanupExamples:
      "Richmond projects often include storefront fixtures, garage clutter, estate furniture, rental debris, barn storage, office pieces, and appliances that need careful removal from basements or utility rooms.",
    accessNotes:
      "We plan around downtown parking, older stairs, rural drives, outbuildings, and heavy items stored away from the easiest loading point.",
    localPromise:
      "We help Richmond homeowners, businesses, landlords, and realtors clear spaces before closings, remodels, tenant turnovers, and family transitions.",
    whyLocal:
      "Richmond is a key northeastern Macomb stop that connects naturally to our Blue Water and western St. Clair County coverage.",
    whyCare:
      "Richmond customers choose us because a border-town cleanout may include city, suburban, and rural challenges in the same job, and our crew is prepared for that variety.",
    localReferences: [
      "Main Street Richmond",
      "Gratiot Avenue corridor",
      "Division Road neighborhoods",
      "County Line Road area",
      "Downtown Richmond businesses",
      "Rural roads toward Memphis and Armada",
    ],
    nearbyLandmarks: [
      "Downtown Richmond",
      "Richmond Community Theatre",
      "Beebe Street Park area",
      "Gratiot Avenue corridor",
    ],
    nearbySlugs: [
      "memphis",
      "armada",
      "romeo",
      "lenox-township",
      "chesterfield",
    ],
    imageAlt:
      "Junk Command hauling furniture and debris from a Richmond Michigan home",
  }),
  buildCity({
    slug: "chesterfield",
    name: "Chesterfield",
    county: "Macomb County",
    eyebrow: "Anchor Bay and Subdivision Hauling",
    metaDescription:
      "Junk Removal Chesterfield MI for homes, condos, offices, furniture and appliances. Veteran-owned. Call 810-336-5865.",
    intro:
      "Chesterfield residents call Junk Command for clean, professional hauling from subdivisions, condos, lake-area homes, offices, and garages. We remove bulky furniture, appliances, trash, and cleanout debris with veteran-owned attention to detail.",
    profile:
      "Chesterfield has busy subdivisions, condos, commercial corridors, lake-area homes, HOA neighborhoods, and garages packed with seasonal storage, making clean and prompt hauling especially important.",
    routeDetails:
      "We serve Chesterfield through 23 Mile Road, Gratiot Avenue, Jefferson Avenue, I-94 access points, Cotton Road, Sugarbush Road, and Anchor Bay-area streets.",
    cleanupExamples:
      "Chesterfield calls often involve condo furniture, old appliances after delivery, garage clutter, estate contents, office furniture, patio sets, and light remodel debris that cannot sit curbside.",
    accessNotes:
      "HOA rules, shared drives, finished entries, basement stairs, and tight garage storage call for neat staging and careful movement.",
    localPromise:
      "We help Chesterfield homeowners, condo residents, businesses, and property managers remove bulky items without leaving a driveway eyesore or association problem.",
    whyLocal:
      "Chesterfield is a core northeastern Macomb County community on our route with New Baltimore, Anchorville, Richmond, and the Anchor Bay corridor.",
    whyCare:
      "Chesterfield customers expect professional communication, clean trucks, careful crews, and a finished result that respects neighbors, common areas, and property rules.",
    localReferences: [
      "23 Mile Road corridor",
      "Gratiot Avenue businesses",
      "Jefferson Avenue and Anchor Bay area",
      "I-94 access neighborhoods",
      "Cotton Road residential streets",
      "Sugarbush Road subdivisions",
    ],
    nearbyLandmarks: [
      "Anchor Bay",
      "I-94 corridor",
      "Chesterfield Township offices area",
      "Lake St. Clair Metropark region",
    ],
    nearbySlugs: [
      "new-baltimore",
      "anchorville",
      "richmond",
      "algonac",
      "macomb-county",
    ],
    imageAlt:
      "Junk Command removing furniture from a Chesterfield Michigan subdivision home",
  }),
  buildCity({
    slug: "new-baltimore",
    name: "New Baltimore",
    county: "Macomb County",
    eyebrow: "Anchor Bay Waterfront Cleanout Service",
    metaDescription:
      "Junk Removal New Baltimore MI for lake homes, garages, furniture and appliances. Veteran-owned. Call Junk Command 810-336-5865.",
    intro:
      "New Baltimore homes and businesses count on Junk Command for clean haul-away near Anchor Bay, downtown, and surrounding neighborhoods. We remove bulky furniture, appliances, trash, and cleanout debris with upfront pricing and careful service.",
    profile:
      "New Baltimore blends Anchor Bay waterfront homes, historic downtown streets, subdivisions, marinas, restaurants, rentals, and seasonal activity where curb appeal and timing matter.",
    routeDetails:
      "Our crew serves New Baltimore around Washington Street, Green Street, Jefferson Avenue, County Line Road, 23 Mile Road, and lake-adjacent residential pockets.",
    cleanupExamples:
      "New Baltimore pickups often include lake-home furniture, old patio sets, grills, rental mattresses, business fixtures, garage overflow, appliances, and clutter before guests or listing photos.",
    accessNotes:
      "Waterfront parking, downtown traffic, porch steps, condo rules, and visible driveways make clean staging and prompt removal important.",
    localPromise:
      "We help New Baltimore properties stay ready for lake season, family gatherings, showings, business updates, and rental turnovers.",
    whyLocal:
      "New Baltimore fits our Anchor Bay and northeastern Macomb route with Chesterfield, Anchorville, Richmond, and Algonac nearby.",
    whyCare:
      "New Baltimore customers choose Junk Command because lake-area properties and downtown businesses need respectful crews who avoid messy piles and surprise pricing.",
    localReferences: [
      "Washington Street downtown",
      "Green Street neighborhoods",
      "Jefferson Avenue corridor",
      "Anchor Bay waterfront homes",
      "County Line Road area",
      "23 Mile Road access",
    ],
    nearbyLandmarks: [
      "Anchor Bay",
      "Walter and Mary Burke Park",
      "New Baltimore Historic District",
      "Lake St. Clair shoreline",
    ],
    nearbySlugs: [
      "chesterfield",
      "anchorville",
      "richmond",
      "algonac",
      "macomb-county",
    ],
    imageAlt:
      "Junk Command hauling unwanted items from a New Baltimore Michigan lake area home",
  }),
  buildCity({
    slug: "memphis",
    name: "Memphis",
    county: "Macomb / St. Clair County",
    eyebrow: "Macomb and St. Clair Border Town Service",
    metaDescription:
      "Junk Removal Memphis MI for border-town homes, farms, garages and estates. Veteran-owned. Call Junk Command at 810-336-5865.",
    intro:
      "Memphis sits right on the Macomb and St. Clair County line, making it a natural Junk Command service area. We haul furniture, appliances, trash, estate contents, garage clutter, and rural debris with clear pricing.",
    profile:
      "Memphis is a true border town with village homes, rural roads, small businesses, farm garages, and county-line properties that may feel connected to Richmond, Capac, Emmett, and Yale all at once.",
    routeDetails:
      "Our routes already tie Memphis to Richmond, Capac, Emmett, Yale, and northeastern Macomb, so the county line does not complicate scheduling.",
    cleanupExamples:
      "Memphis jobs may include a Main Street basement, a rural barn, an inherited garage, a rental property, old appliances, office clutter, or mixed items spread across several buildings.",
    accessNotes:
      "Village parking, gravel drives, barns, sheds, older stairs, and long carries can all be part of a Memphis pickup, so access notes help us plan correctly.",
    localPromise:
      "We help Memphis residents get one dependable hauling solution instead of wondering whether to call a Macomb or St. Clair County company.",
    whyLocal:
      "Memphis sits directly between service areas we already cover every week, which makes it a practical and important stop for Junk Command.",
    whyCare:
      "Memphis customers value a crew that understands border-town properties, rural access, and small-town expectations for respectful work.",
    localReferences: [
      "Main Street Memphis",
      "Boardman Road area",
      "Memphis Ridge Road corridor",
      "County Line Road vicinity",
      "Village neighborhoods near schools",
      "Rural roads toward Richmond and Capac",
    ],
    nearbyLandmarks: [
      "Downtown Memphis",
      "Memphis Community Schools area",
      "Belle River region",
      "Macomb-St. Clair county line",
    ],
    nearbySlugs: [
      "richmond",
      "armada",
      "romeo",
      "capac",
      "emmett",
    ],
    image: "/images/junk-command-hero.webp",
    imageAlt:
      "Junk Command veteran owned junk removal truck serving Memphis Michigan",
  }),
  buildCity({
    slug: "anchorville",
    name: "Anchorville",
    county: "St. Clair County",
    eyebrow: "Anchor Bay Area Hauling",
    metaDescription:
      "Junk Removal Anchorville MI for lake-area homes, garages, furniture and appliances. Veteran-owned. Call 810-336-5865.",
    intro:
      "Anchorville residents call Junk Command for clean hauling near Anchor Bay, M-29, and Ira Township neighborhoods. We remove furniture, appliances, trash, garage clutter, and seasonal items with upfront pricing and careful service.",
    profile:
      "Anchorville sits between Algonac, New Baltimore, Chesterfield, and Ira Township, giving the area lake-season storage, waterfront influence, cottages, garages, and quiet residential roads.",
    routeDetails:
      "We serve Anchorville around M-29, Anchor Bay, Pointe Tremble Road, Bethuy Road, Ira Township neighborhoods, and routes toward New Baltimore and Algonac.",
    cleanupExamples:
      "Anchorville cleanups often include patio furniture, grills, dockside storage, garage boxes, old appliances, mattresses, shed clutter, and estate items from lake-area homes.",
    accessNotes:
      "Water-oriented properties can involve soft yards, deck steps, detached garages, and narrow parking, so careful staging matters.",
    localPromise:
      "We help Anchorville customers clear space before summer, winter storage, listing photos, guest visits, or long-delayed garage projects.",
    whyLocal:
      "Anchorville sits naturally on our lower river and Anchor Bay service route with Algonac, Marine City, Chesterfield, and New Baltimore.",
    whyCare:
      "Anchorville customers need a hauler who understands seasonal clutter and lake-area access while still treating the home like a permanent residence.",
    localReferences: [
      "M-29 corridor",
      "Anchor Bay area homes",
      "Ira Township neighborhoods",
      "Pointe Tremble Road access",
      "Bethuy Road vicinity",
      "Roads toward New Baltimore and Algonac",
    ],
    nearbyLandmarks: [
      "Anchor Bay",
      "Ira Township waterfront area",
      "St. Clair River delta region",
      "M-29 shoreline route",
    ],
    nearbySlugs: [
      "algonac",
      "new-baltimore",
      "chesterfield",
      "marine-city",
      "macomb-county",
    ],
    imageAlt:
      "Junk Command hauling seasonal clutter from an Anchorville Michigan home",
  }),
  buildCity({
    slug: "emmett",
    name: "Emmett",
    county: "St. Clair County",
    eyebrow: "Rural Western County Cleanouts",
    metaDescription:
      "Junk Removal Emmett MI for rural homes, garages, barns and estates. Veteran-owned Junk Command. Call 810-336-5865.",
    intro:
      "Emmett cleanouts often involve country homes, barns, garages, sheds, and estate properties. Junk Command brings full-service hauling west with clear quotes, respectful crews, and the truck space to handle rural clutter.",
    profile:
      "Emmett is a rural western St. Clair County community where country homes, farm properties, outbuildings, and larger lots can collect years of items before a serious cleanout begins.",
    routeDetails:
      "We route Emmett with Bryce Road, Emmett Road, the I-69 western corridor, Capac, Yale, Memphis, and the farm roads that connect those communities.",
    cleanupExamples:
      "Emmett loads often include barn contents, spare refrigerators, old furniture, basement boxes, estate items, outdoor clutter, garage shelving, and non-hazardous debris.",
    accessNotes:
      "Long drives, gravel, sheds, barns, basements, and items stored in several buildings are common, so we plan truck placement and crew time before arrival.",
    localPromise:
      "We help Emmett residents clear rural properties without turning cleanup into several weekends of lifting, sorting, and hauling alone.",
    whyLocal:
      "Emmett is part of our western St. Clair County coverage and fits naturally with Capac, Yale, Memphis, and Kimball Township routes.",
    whyCare:
      "Emmett customers appreciate a crew that treats barns, garages, and rural homes with the same respect we bring to finished interiors and city properties.",
    localReferences: [
      "Emmett village area",
      "Bryce Road corridor",
      "Emmett Road rural properties",
      "I-69 western route access",
      "Roads toward Capac",
      "Farm roads toward Yale",
    ],
    nearbyLandmarks: [
      "Village of Emmett",
      "Western St. Clair County farmland",
      "I-69 corridor",
      "Belle River region",
    ],
    nearbySlugs: [
      "capac",
      "yale",
      "memphis",
      "kimball-township",
      "imlay-city",
    ],
    imageAlt:
      "Junk Command clearing rural junk from an Emmett Michigan property",
  }),
  buildCity({
    slug: "clyde-township",
    name: "Clyde Township",
    county: "St. Clair County",
    eyebrow: "North Township and Lakeshore Corridor Hauling",
    metaDescription:
      "Junk Removal Clyde Township MI for homes, garages, barns and lake-area cleanouts. Veteran-owned. Call 810-336-5865.",
    intro:
      "Clyde Township residents call Junk Command for full-service hauling north of Port Huron and Fort Gratiot. We remove furniture, appliances, garage clutter, barn contents, and trash with clear pricing and careful local crews.",
    profile:
      "Clyde Township mixes rural roads, acreage homes, outbuildings, and properties that sit between Port Huron, Fort Gratiot, and the northern St. Clair County corridor toward Burtchville and Lakeshore.",
    routeDetails:
      "Our routes already cover Port Huron, Fort Gratiot, Kimball Township, and the northern township roads, so Clyde Township pickups fit naturally into Blue Water Area scheduling.",
    cleanupExamples:
      "Clyde Township jobs often include garage cleanouts, old appliances, basement boxes, barn storage, estate furniture, outdoor clutter, and mixed household junk that will not fit the weekly cart.",
    accessNotes:
      "Long drives, gravel shoulders, sheds, barns, and items stored away from the easiest loading point are common, so a few photos and access notes help us plan the truck and crew.",
    localPromise:
      "We help Clyde Township homeowners reclaim usable space without turning a cleanout into several weekends of lifting, sorting, and dump runs.",
    whyLocal:
      "Clyde Township sits minutes from our Port Huron base and connects directly to our Fort Gratiot and northern county routes.",
    whyCare:
      "Clyde Township customers want a respectful local crew that treats rural access as normal work and leaves the property clean when the truck pulls away.",
    localReferences: [
      "North River Road corridor",
      "Vincent Road area",
      "Wildcat Road properties",
      "Township roads toward Burtchville",
      "Routes near Fort Gratiot",
      "Rural stretches north of Port Huron",
    ],
    nearbyLandmarks: [
      "Lake Huron shoreline corridor",
      "Fort Gratiot County Park region",
      "Northern St. Clair County farmland",
      "Port Huron northern access roads",
    ],
    nearbySlugs: [
      "fort-gratiot",
      "port-huron",
      "kimball-township",
      "lexington",
      "st-clair-county",
    ],
    imageAlt:
      "Junk Command hauling clutter from a Clyde Township Michigan property",
  }),
  buildCity({
    slug: "lenox-township",
    name: "Lenox Township",
    county: "Macomb County",
    eyebrow: "I-94 and County Line Cleanout Service",
    metaDescription:
      "Junk Removal Lenox Township MI for homes, farms, garages and estates. Veteran-owned Junk Command. Call 810-336-5865.",
    intro:
      "Lenox Township homeowners and property managers call Junk Command for clean haul-away near Richmond, New Haven, and the I-94 corridor. We remove furniture, appliances, garage clutter, estate contents, and trash with upfront pricing.",
    profile:
      "Lenox Township combines rural roads, farm properties, subdivision homes, and county-line neighborhoods that connect naturally to Richmond, Chesterfield, and northeastern Macomb County.",
    routeDetails:
      "We serve Lenox Township through Gratiot Avenue, 26 Mile Road, County Line Road, I-94 access points, and the routes that already connect Richmond, Chesterfield, and New Baltimore.",
    cleanupExamples:
      "Lenox Township pickups often include estate furniture, barn or garage overflow, old appliances, rental debris, basement boxes, and mixed junk before a sale or remodel.",
    accessNotes:
      "Rural drives, outbuildings, older basements, and items stored across multiple buildings are common, so we confirm access and staging before arrival.",
    localPromise:
      "We help Lenox Township customers clear space for closings, family transitions, tenant turnovers, and long-delayed garage projects without surprise pricing.",
    whyLocal:
      "Lenox Township sits on the same northeastern Macomb and county-line routes we already run for Richmond, Chesterfield, and Memphis.",
    whyCare:
      "Lenox Township customers choose Junk Command because border-area properties can mix suburban, rural, and farm access in one job, and our crew is ready for that variety.",
    localReferences: [
      "Gratiot Avenue corridor",
      "26 Mile Road area",
      "County Line Road neighborhoods",
      "New Haven vicinity",
      "I-94 Lenox Township access",
      "Rural roads toward Richmond",
    ],
    nearbyLandmarks: [
      "I-94 corridor",
      "New Haven area",
      "Gratiot Avenue corridor",
      "Macomb-St. Clair county line",
    ],
    nearbySlugs: [
      "richmond",
      "chesterfield",
      "new-baltimore",
      "romeo",
      "macomb-county",
    ],
    imageAlt:
      "Junk Command removing furniture from a Lenox Township Michigan home",
  }),
  buildCity({
    slug: "imlay-city",
    name: "Imlay City",
    county: "Lapeer County",
    eyebrow: "M-53 Corridor and Western Route Hauling",
    metaDescription:
      "Junk Removal Imlay City MI for homes, businesses, garages and estates. Veteran-owned Junk Command. Call 810-336-5865.",
    intro:
      "Imlay City residents and businesses call Junk Command for dependable hauling along the M-53 corridor. We remove furniture, appliances, garage clutter, estate contents, and trash with clear pricing from a veteran-owned Blue Water Area crew.",
    profile:
      "Imlay City mixes Main Street businesses, neighborhood homes, farm properties, and western-route access that connects naturally toward Capac, Emmett, and the I-69 corridor.",
    routeDetails:
      "Our western routes already connect Capac, Emmett, Yale, and Memphis, so Imlay City is a practical extension for customers who want the same local-feeling service.",
    cleanupExamples:
      "Imlay City jobs often include storefront fixtures, garage cleanouts, estate furniture, old appliances, basement clutter, barn storage, and rental turnovers.",
    accessNotes:
      "Downtown parking, older stairs, rural drives, sheds, and heavy items stored away from the truck all shape how we plan the pickup.",
    localPromise:
      "We help Imlay City homeowners, landlords, and small businesses clear space before closings, remodels, tenant changes, and family transitions.",
    whyLocal:
      "Imlay City sits on a natural western extension of our Capac and Emmett coverage, giving Lapeer County customers a crew that already works nearby every week.",
    whyCare:
      "Imlay City customers value clear communication, careful loading, and a finished result that respects Main Street businesses and residential neighborhoods alike.",
    localReferences: [
      "Main Street Imlay City",
      "M-53 corridor businesses",
      "Neighborhoods near Capac Road",
      "I-69 western access",
      "Village residential streets",
      "Rural roads toward Capac and Attica",
    ],
    nearbyLandmarks: [
      "Downtown Imlay City",
      "M-53 corridor",
      "I-69 interchange area",
      "Eastern Lapeer County farmland",
    ],
    nearbySlugs: [
      "capac",
      "emmett",
      "memphis",
      "richmond",
      "yale",
    ],
    imageAlt:
      "Junk Command hauling unwanted items from an Imlay City Michigan property",
  }),
  buildCity({
    slug: "romeo",
    name: "Romeo",
    county: "Macomb County",
    eyebrow: "Village and North Macomb Cleanouts",
    metaDescription:
      "Junk Removal Romeo MI for village homes, estates, garages and businesses. Veteran-owned Junk Command. Call 810-336-5865.",
    intro:
      "Romeo homeowners and businesses call Junk Command for clean, professional junk hauling in and around the historic village. We remove furniture, appliances, garage clutter, estate contents, and trash with upfront pricing.",
    profile:
      "Romeo blends historic village streets, nearby subdivisions, orchard-country roads, and north Macomb properties that connect naturally to Armada, Washington Township, and Richmond.",
    routeDetails:
      "We serve Romeo around Van Dyke Road, 32 Mile Road, Main Street, and the routes that already connect Armada, Richmond, Memphis, and northeastern Macomb County.",
    cleanupExamples:
      "Romeo pickups often include estate furniture, basement boxes, garage overflow, old appliances, patio sets, rental debris, and business fixtures after a remodel or move.",
    accessNotes:
      "Village parking, older homes, basement stairs, outbuildings, and driveway staging all matter on Romeo jobs, so photos help us quote accurately.",
    localPromise:
      "We help Romeo residents and shop owners clear space before showings, family visits, seasonal resets, and long-delayed cleanouts.",
    whyLocal:
      "Romeo sits on our expanding northeastern Macomb route with Armada, Richmond, and Lenox Township, making scheduling practical and familiar.",
    whyCare:
      "Romeo customers expect careful crews who respect historic homes, village businesses, and finished properties while still handling heavy furniture and appliances.",
    localReferences: [
      "Main Street Romeo",
      "Van Dyke Road corridor",
      "32 Mile Road access",
      "Village neighborhoods near downtown",
      "Roads toward Armada",
      "North Macomb residential pockets",
    ],
    nearbyLandmarks: [
      "Downtown Romeo",
      "Romeo Historic District",
      "Van Dyke Road corridor",
      "North Macomb orchard country",
    ],
    nearbySlugs: [
      "armada",
      "richmond",
      "lenox-township",
      "memphis",
      "macomb-county",
    ],
    imageAlt:
      "Junk Command removing furniture from a Romeo Michigan village home",
  }),
  buildCity({
    slug: "armada",
    name: "Armada",
    county: "Macomb County",
    eyebrow: "Village and Rural North Macomb Hauling",
    metaDescription:
      "Junk Removal Armada MI for village homes, farms, garages and estates. Veteran-owned Junk Command. Call 810-336-5865.",
    intro:
      "Armada residents call Junk Command for dependable junk removal around the village and surrounding rural roads. We haul furniture, appliances, garage clutter, barn contents, and estate debris with clear pricing.",
    profile:
      "Armada mixes quiet village streets, fairgrounds traffic, farm properties, and north Macomb roads that connect toward Romeo, Richmond, and Memphis.",
    routeDetails:
      "Our crew serves Armada through Main Street, Armada Ridge Road, 32 Mile Road, and the routes that already cover Romeo, Richmond, Memphis, and the Macomb-St. Clair border.",
    cleanupExamples:
      "Armada jobs often include estate cleanouts, barn storage, garage clutter, old appliances, outdoor junk, basement boxes, and mixed household loads before a sale or remodel.",
    accessNotes:
      "Village parking, gravel drives, sheds, barns, and long carries are common, so we ask about access before the truck rolls.",
    localPromise:
      "We help Armada homeowners and rural property owners clear space without turning a cleanout into a week of heavy lifting and dump runs.",
    whyLocal:
      "Armada sits naturally between Romeo, Richmond, and Memphis on routes Junk Command already runs through northeastern Macomb County.",
    whyCare:
      "Armada customers appreciate a local-feeling crew that treats village homes and rural outbuildings with the same care and clear pricing.",
    localReferences: [
      "Main Street Armada",
      "Armada Ridge Road area",
      "32 Mile Road corridor",
      "Village neighborhoods near downtown",
      "Rural roads toward Romeo",
      "Routes toward Richmond and Memphis",
    ],
    nearbyLandmarks: [
      "Downtown Armada",
      "Armada Fairgrounds area",
      "Armada Ridge corridor",
      "North Macomb farmland",
    ],
    nearbySlugs: [
      "romeo",
      "richmond",
      "memphis",
      "lenox-township",
      "macomb-county",
    ],
    imageAlt:
      "Junk Command hauling junk from an Armada Michigan home and property",
  }),
  buildCity({
    slug: "st-clair-county",
    name: "St. Clair County",
    county: "St. Clair County",
    eyebrow: "Countywide Blue Water Area Service",
    metaDescription:
      "Junk Removal St. Clair County MI from Port Huron to Algonac and Yale. Veteran-owned Junk Command. Call 810-336-5865.",
    intro:
      "Junk Command is based in Port Huron and serves St. Clair County from the Lake Huron shoreline to western villages and lower river towns. We haul furniture, appliances, trash, cleanouts, and bulky debris countywide.",
    profile:
      "St. Clair County is our home map, covering dense city neighborhoods, Lake Huron homes, river towns, rural townships, western villages, farms, cottages, rentals, and commercial corridors.",
    routeDetails:
      "Our county routes connect Port Huron, Fort Gratiot, Clyde Township, Kimball Township, Marysville, St. Clair, Marine City, Algonac, Anchorville, Emmett, Capac, and Yale.",
    cleanupExamples:
      "Countywide calls range from one appliance in Port Huron to a Kimball barn, a Clyde Township garage, a St. Clair estate, a Fort Gratiot garage, an Algonac cottage, or a Yale farm cleanup.",
    accessNotes:
      "Every part of the county has different access: city alleys, lake cottages, riverfront drives, outbuildings, rural lanes, business entries, and older basement stairs.",
    localPromise:
      "We help St. Clair County residents find one dependable junk removal company instead of guessing who will serve each city, township, or village.",
    whyLocal:
      "St. Clair County is not an edge market for Junk Command; it is where we are based and where our crews work daily.",
    whyCare:
      "Countywide customers get the same veteran-owned standard whether the job is a single sofa, a rental cleanout, a multi-load estate, or a rural garage full of stored items.",
    localReferences: [
      "Port Huron and Blue Water Bridge area",
      "Fort Gratiot and Lake Huron shoreline",
      "Marysville and St. Clair river towns",
      "Marine City, Algonac, and Anchorville",
      "Kimball Township and Smiths Creek",
      "Emmett, Capac, and Yale western routes",
    ],
    nearbyLandmarks: [
      "Blue Water Bridge",
      "St. Clair River",
      "Lake Huron shoreline",
      "I-69 and I-94 corridors",
    ],
    nearbySlugs: [
      "port-huron",
      "fort-gratiot",
      "marysville",
      "st-clair",
      "marine-city",
    ],
    imageAlt:
      "Junk Command providing junk removal across St. Clair County Michigan",
    isCounty: true,
  }),
  buildCity({
    slug: "macomb-county",
    name: "Macomb County",
    county: "Macomb County",
    eyebrow: "Northeastern Macomb County Service",
    metaDescription:
      "Junk Removal Macomb County MI for Chesterfield, New Baltimore, Richmond and border towns. Call Junk Command 810-336-5865.",
    intro:
      "Junk Command serves northeastern Macomb County communities that connect naturally to our Blue Water routes, including Chesterfield, New Baltimore, Richmond, Romeo, Armada, Lenox Township, Anchorville, and Memphis. We haul furniture, appliances, trash, and cleanout debris.",
    profile:
      "Macomb County is broad, so Junk Command focuses on northeastern communities where our routes provide practical, local-feeling service: Chesterfield, New Baltimore, Richmond, Romeo, Armada, Lenox Township, Anchorville, Memphis, and nearby Anchor Bay areas.",
    routeDetails:
      "We plan Macomb County stops around 23 Mile Road, 32 Mile Road, Gratiot Avenue, Van Dyke Road, Jefferson Avenue, I-94, County Line Road, Anchor Bay, and the Richmond-Romeo-Armada corridor.",
    cleanupExamples:
      "Macomb County calls in our service zone include Chesterfield condo cleanouts, New Baltimore lake-home furniture, Richmond estate work, Romeo village pickups, Armada rural loads, Lenox Township garages, Anchorville seasonal clutter, and Memphis border-town cleanouts.",
    accessNotes:
      "HOA neighborhoods, condos, lake homes, downtown businesses, rural border roads, and finished interiors all require tidy staging and careful handling.",
    localPromise:
      "We help northeastern Macomb County customers get premium hauling without dealing with a call center that does not know the local roads or property styles.",
    whyLocal:
      "Our Macomb County coverage is intentionally focused where our Blue Water routes are strongest, especially around Anchor Bay and the county-line communities.",
    whyCare:
      "Macomb County customers hire us for responsive communication, careful crews, and clean removal that works in subdivisions, condos, lake homes, businesses, and border-town properties.",
    localReferences: [
      "Chesterfield Township subdivisions",
      "New Baltimore harbor and downtown",
      "Richmond Main Street and Gratiot corridor",
      "Romeo and Armada village areas",
      "Lenox Township and County Line connectors",
      "Anchor Bay shoreline communities",
    ],
    nearbyLandmarks: [
      "Anchor Bay",
      "New Baltimore Harbor",
      "Gratiot Avenue corridor",
      "Macomb-St. Clair border roads",
    ],
    nearbySlugs: [
      "chesterfield",
      "richmond",
      "romeo",
      "armada",
      "lenox-township",
    ],
    imageAlt:
      "Junk Command junk removal truck serving Macomb County Michigan communities",
    isCounty: true,
  }),
];

export const CITY_NAMES: string[] = CITIES.map((c) => c.name);

export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return CITIES.map((c) => c.slug);
}

export function getNearbyCities(city: City): City[] {
  return city.nearbySlugs
    .map((slug) => getCityBySlug(slug))
    .filter((c): c is City => Boolean(c));
}

export function getCitiesByCounty(county: string): City[] {
  return CITIES.filter((c) => c.county === county);
}
