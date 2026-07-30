export type City = {
  slug: string;
  name: string;
  county: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  intro: string;
  whyUs: string;
  localReferences: string[];
  nearbyLandmarks: string[];
  servicesBlurb: string;
  faqs: { question: string; answer: string }[];
  nearbySlugs: string[];
  image: string;
  imageAlt: string;
  isCounty?: boolean;
};

export const CITIES: City[] = [
  {
    slug: "port-huron",
    name: "Port Huron",
    county: "St. Clair County",
    metaTitle: "Junk Removal Port Huron MI | Junk Command",
    metaDescription:
      "Junk removal in Port Huron, MI. Veteran-owned crew for furniture, appliances, cleanouts & more. Free quotes. Call Junk Command at 810-336-5865.",
    h1: "Junk Removal in Port Huron, Michigan",
    eyebrow: "Blue Water Area Headquarters",
    intro:
      "Junk Command is based right here in Port Huron — so when you need junk hauled, we are already in your backyard. From Military Street bungalows to waterfront condos near the Blue Water Bridge, our veteran-owned crew clears clutter fast with upfront pricing and no surprises.",
    whyUs:
      "Port Huron is home for Junk Command. We know the neighborhoods off Pine Grove, the tight alley access downtown, and how quickly lake-effect weather can change a haul day. As a local, veteran-owned team we show up on time, protect floors and doorways, and leave every job broom-clean. Whether you are emptying a garage near Lakeside or staging a rental on 10th Avenue, you get honest volume-based pricing, and a crew that treats your property like it is our own. Call 810-336-5865 and talk to people who actually live and work in the Blue Water Area.",
    localReferences: [
      "Blue Water Bridge corridor",
      "Military Street downtown",
      "Pine Grove Park waterfront",
      "Lakeside & Edison neighborhoods",
      "Holland Avenue corridor",
      "Black River canal area",
    ],
    nearbyLandmarks: [
      "Thomas Edison Depot Museum",
      "Fort Gratiot Lighthouse",
      "McMorran Place",
      "St. Clair County Community College",
    ],
    servicesBlurb:
      "In Port Huron we handle furniture, appliance, and mattress haul-away, garage and basement cleanouts, estate clearances, construction debris, and yard waste from our local Port Huron base.",
    faqs: [
      {
        question: "How quickly can you schedule junk removal in Port Huron?",
        answer:
          "Because we are based in Port Huron, we can usually confirm a pickup window quickly. Timing depends on the schedule and is confirmed when you book. Call or text 810-336-5865 with photos for the fastest quote.",
      },
      {
        question: "What areas of Port Huron do you serve?",
        answer:
          "We cover the entire city — downtown, south side, Lakeside, Edison, and properties near the Blue Water Bridge and Black River. If you are in Port Huron city limits, we haul for you.",
      },
      {
        question: "How is junk removal priced in Port Huron?",
        answer:
          "Pricing is based on how much space your load takes in our truck, not by the hour. You get an upfront quote before we load anything. Most single-item pickups start near our $99 minimum.",
      },
      {
        question: "Are you bonded and insured for Port Huron jobs?",
        answer:
          "Yes. Junk Command is bonded and fully insured. Our veteran-owned crew is careful with driveways, floors, and door frames on every Port Huron property we clear.",
      },
    ],
    nearbySlugs: [
      "marysville",
      "fort-gratiot",
      "kimball-township",
      "st-clair",
      "st-clair-county",
    ],
    image: "/images/cities/port-huron.webp",
    imageAlt:
      "Junk Command crew loading junk into a truck in Port Huron, Michigan",
  },
  {
    slug: "marysville",
    name: "Marysville",
    county: "St. Clair County",
    metaTitle: "Junk Removal Marysville MI | Junk Command",
    metaDescription:
      "Reliable junk removal in Marysville, MI. Furniture, appliances, garage cleanouts & estate haul-away. Veteran-owned. Call Junk Command 810-336-5865.",
    h1: "Junk Removal in Marysville, Michigan",
    eyebrow: "St. Clair River Neighbors",
    intro:
      "Marysville homeowners and businesses call Junk Command when clutter outgrows the garage, basement, or curb. Minutes from our Port Huron base, we roll into town with a full crew, clear pricing, and the muscle to finish the job in one visit.",
    whyUs:
      "Marysville sits right along our daily routes between Port Huron and St. Clair, so we treat your address like a local stop — not a long-haul add-on. We know the ranch homes off Gratiot, the riverfront streets near Busha Highway, and the storage challenges that come with Michigan winters. Our veteran-owned team quotes by volume, hauls furniture and appliances without you lifting a finger, and recycles or donates when items still have life. From a single dryer on Huron Boulevard to a full estate cleanout near Wills Road, Junk Command keeps Marysville properties clear and ready for what is next.",
    localReferences: [
      "Gratiot Boulevard corridor",
      "Busha Highway & riverfront",
      "Marysville Municipal Marina area",
      "Huron Boulevard neighborhoods",
      "Wills Road residential streets",
      "Chrysler Drive industrial edge",
    ],
    nearbyLandmarks: [
      "Marysville Golf Course",
      "Marysville City Park",
      "St. Clair River Walk access",
      "Marysville Historical Museum",
    ],
    servicesBlurb:
      "Marysville customers book us for sofa and appliance pickup, garage and basement cleanouts, shed clearing, yard debris, and post-renovation junk — with free photo quotes and flexible scheduling.",
    faqs: [
      {
        question: "How quickly can you get to Marysville?",
        answer:
          "Marysville is a short drive from our Port Huron headquarters. Send photos to 810-336-5865 and we will confirm the soonest available window.",
      },
      {
        question: "Do you remove junk from Marysville apartments and condos?",
        answer:
          "Yes. We coordinate elevator and loading-dock access when needed and remove furniture, mattresses, and boxed clutter from multi-unit buildings throughout Marysville.",
      },
      {
        question: "Can you haul construction debris in Marysville?",
        answer:
          "Absolutely. Drywall scraps, cabinets, flooring, and remodel leftovers are a regular part of our Marysville work. Tell us the volume and we will size the truck accordingly.",
      },
      {
        question: "Do I need to be home during the pickup?",
        answer:
          "Not always. If items are accessible outside or you leave clear instructions, we can often complete the haul while you are at work. We confirm access details when you book.",
      },
    ],
    nearbySlugs: [
      "port-huron",
      "st-clair",
      "kimball-township",
      "fort-gratiot",
      "marine-city",
    ],
    image: "/images/cities/marysville.webp",
    imageAlt:
      "Junk removal truck serving a Marysville, Michigan residential street",
  },
  {
    slug: "fort-gratiot",
    name: "Fort Gratiot",
    county: "St. Clair County",
    metaTitle: "Junk Removal Fort Gratiot MI | Junk Command",
    metaDescription:
      "Junk removal in Fort Gratiot Township, MI. Fast haul-away for homes near Birchwood Mall & lakeshore. Call Junk Command at 810-336-5865.",
    h1: "Junk Removal in Fort Gratiot, Michigan",
    eyebrow: "Lakeshore Township Service",
    intro:
      "Fort Gratiot residents trust Junk Command to clear outgrown furniture, storm debris, and packed garages without the dump-run hassle. We serve township homes from the lakeshore inland with the same premium, veteran-owned standard as Port Huron.",
    whyUs:
      "Fort Gratiot is one of our most frequent service zones — close enough for rapid response, busy enough that we know the layout. From Keewahdin Road subdivisions to properties near Birchwood Mall and the 24th Avenue corridor, we navigate township roads confidently and arrive ready to work. Lake effect wind and older lakeside homes often mean damp basements and seasonal clutter; we haul it all with care. You get transparent pricing, protected entryways, and a crew that recycles responsibly whenever possible. Junk Command is the Fort Gratiot neighbor who actually shows up with a truck and finishes the job.",
    localReferences: [
      "Keewahdin Road neighborhoods",
      "24th Avenue corridor",
      "Birchwood Mall retail area",
      "Lakeshore Road homes",
      "Krafft Road residential pockets",
      "State Road township stretches",
    ],
    nearbyLandmarks: [
      "Fort Gratiot Lighthouse",
      "Birchwood Mall",
      "Lake Huron shoreline parks",
      "Fort Gratiot County Park",
    ],
    servicesBlurb:
      "We clear Fort Gratiot homes of furniture, appliances, mattresses, electronics, garage clutter, basement junk, and yard brush — ideal after storms, moves, or seasonal cleanups along the lakeshore.",
    faqs: [
      {
        question: "Do you serve all of Fort Gratiot Township?",
        answer:
          "Yes. We cover residential and light commercial addresses throughout Fort Gratiot Township, including lakeshore and inland neighborhoods.",
      },
      {
        question: "Can you remove storm debris after high winds?",
        answer:
          "We regularly haul fallen limbs, brush piles, and damaged outdoor items after lake-effect storms. Call 810-336-5865 and we will schedule a Fort Gratiot pickup as soon as possible.",
      },
      {
        question: "Is junk removal cheaper than renting a dumpster in Fort Gratiot?",
        answer:
          "For many homes, yes. You avoid permit headaches, driveway damage risk, and loading the dumpster yourself. We quote by volume so you only pay for what we haul.",
      },
      {
        question: "Do you take old electronics and TVs?",
        answer:
          "Yes. TVs, computers, and small electronics are part of our Fort Gratiot service. We route e-waste through responsible recycling channels whenever available.",
      },
    ],
    nearbySlugs: [
      "port-huron",
      "marysville",
      "kimball-township",
      "st-clair-county",
    ],
    image: "/images/cities/fort-gratiot.webp",
    imageAlt:
      "Junk Command removing household clutter from a Fort Gratiot, MI home",
  },
  {
    slug: "kimball-township",
    name: "Kimball Township",
    county: "St. Clair County",
    metaTitle: "Junk Removal Kimball Township MI | Junk Command",
    metaDescription:
      "Junk removal for Kimball Township, MI farms, homes & shops. Furniture, debris & cleanouts. Veteran-owned Junk Command — call 810-336-5865.",
    h1: "Junk Removal in Kimball Township, Michigan",
    eyebrow: "Rural & Subdivision Haul-Away",
    intro:
      "Kimball Township properties often mix acreage, outbuildings, and family homes — and junk piles up in all of them. Junk Command brings the crew and truck capacity to clear barns, garages, and basements across the township without you renting equipment.",
    whyUs:
      "Kimball sits west of Port Huron along the I-69 corridor, and we know the mix of country lots and newer subdivisions that define it. Long driveways, pole barns, and multi-building properties are normal for us — we plan crew size and truck load accordingly. Whether you are clearing inheritance clutter near Lapeer Road, emptying a shed off Allen Road, or resetting a rental near Smiths Creek, our veteran-owned team quotes honestly and works efficiently. You stay out of the landfill line and the heavy lifting. Junk Command keeps Kimball Township properties usable again.",
    localReferences: [
      "Lapeer Road corridor",
      "Allen Road rural stretches",
      "Smiths Creek area",
      "I-69 / Wadhams interchange zone",
      "Dove Road neighborhoods",
      "Range Road township homes",
    ],
    nearbyLandmarks: [
      "Smiths Creek landfill access routes",
      "Wadhams commercial pocket",
      "Kimball Township offices area",
      "Local farm & orchard corridors",
    ],
    servicesBlurb:
      "Kimball Township jobs often include shed and barn cleanouts, farm scrap, furniture and appliance removal, estate hauls, and construction leftovers from home additions — all with upfront volume pricing.",
    faqs: [
      {
        question: "Can you access long rural driveways in Kimball?",
        answer:
          "Yes. We routinely serve acreage properties. Let us know about gate codes, soft ground, or low branches when you book so we arrive prepared.",
      },
      {
        question: "Do you clean out barns and pole buildings?",
        answer:
          "We do. Old equipment parts, stored furniture, tires, and decades of accumulated junk are common Kimball Township requests — we sort and load what we can legally haul.",
      },
      {
        question: "How far in advance should I schedule?",
        answer:
          "Larger barn or estate jobs benefit from a day or two of notice so we can dedicate the right truck space. Call 810-336-5865 to lock a window.",
      },
      {
        question: "Will you haul scrap metal from my property?",
        answer:
          "Yes, when it is safe to handle and fits our load. Scrap metal is often recycled. Describe or photograph the material for an accurate Kimball Township quote.",
      },
    ],
    nearbySlugs: [
      "port-huron",
      "marysville",
      "fort-gratiot",
      "emmett",
      "capac",
    ],
    image: "/images/cities/kimball-township.webp",
    imageAlt:
      "Junk Command truck clearing debris at a Kimball Township, Michigan property",
  },
  {
    slug: "st-clair",
    name: "St. Clair",
    county: "St. Clair County",
    metaTitle: "Junk Removal St. Clair MI | Junk Command",
    metaDescription:
      "Junk removal in St. Clair, Michigan. Downtown, riverfront & neighborhood haul-away. Free quotes from Junk Command — 810-336-5865.",
    h1: "Junk Removal in St. Clair, Michigan",
    eyebrow: "River City Cleanouts",
    intro:
      "St. Clair’s charming streets and riverfront homes deserve clutter-free living. Junk Command hauls unwanted furniture, appliances, and renovation debris so you can enjoy the porch view — not the pile in the garage.",
    whyUs:
      "The City of St. Clair is a core stop on our southern St. Clair County route. We know downtown’s tighter streets near Clinton Avenue, the residential blocks off River Road, and the newer builds spreading toward Fred Moore Highway. Our veteran-owned crew works carefully around historic homes and landscaped lots, quoting by the load so you are never surprised at the curb. From a single hot tub behind a cottage to a full basement cleanout before listing, Junk Command delivers Port Huron–caliber service with local familiarity. Call 810-336-5865 and reclaim your space along the St. Clair River.",
    localReferences: [
      "Clinton Avenue downtown",
      "River Road waterfront homes",
      "Fred Moore Highway corridor",
      "Brown Street neighborhoods",
      "Third Street residential blocks",
      "St. Clair Boat Harbor area",
    ],
    nearbyLandmarks: [
      "St. Clair Inn & riverfront",
      "Pine Shores Golf Course",
      "St. Clair Historical Museum",
      "Palmer Park",
    ],
    servicesBlurb:
      "In St. Clair we remove couches, beds, fridges, remodel debris, yard waste, and estate contents — perfect for riverfront cottages, downtown homes, and properties preparing for sale.",
    faqs: [
      {
        question: "Do you serve downtown St. Clair and riverfront homes?",
        answer:
          "Yes. We regularly work on downtown and waterfront properties. Narrow drives and shared alleys are fine — just mention access details when you request a quote.",
      },
      {
        question: "Can you help with a pre-sale cleanout in St. Clair?",
        answer:
          "Absolutely. Estate and move-out cleanouts are common here. We clear rooms, garages, and sheds so showings look clean and listings go smoother.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept major cards and other standard payment options confirmed at booking. You approve the price before we start loading in St. Clair.",
      },
      {
        question: "Do you recycle or donate usable items?",
        answer:
          "When furniture or household goods are in good condition, we route them to donation partners whenever practical instead of sending everything to the landfill.",
      },
    ],
    nearbySlugs: [
      "marysville",
      "marine-city",
      "port-huron",
      "kimball-township",
      "algonac",
    ],
    image: "/images/cities/st-clair.webp",
    imageAlt:
      "Junk removal crew working at a home in St. Clair, Michigan",
  },
  {
    slug: "marine-city",
    name: "Marine City",
    county: "St. Clair County",
    metaTitle: "Junk Removal Marine City MI | Junk Command",
    metaDescription:
      "Junk removal in Marine City, MI. Waterfront homes, downtown & neighborhood cleanouts. Call veteran-owned Junk Command at 810-336-5865.",
    h1: "Junk Removal in Marine City, Michigan",
    eyebrow: "Downriver Blue Water Hauling",
    intro:
      "Marine City’s waterfront character comes with seasonal projects, older homes, and garages that fill up fast. Junk Command clears the excess — furniture, appliances, and remodel leftovers — so your property stays guest-ready.",
    whyUs:
      "Marine City is a regular destination on our southern county circuit between St. Clair and Algonac. We understand Broadway’s mixed downtown buildings, the cottage streets near Waterworks Park, and the practical reality of ferry-town storage constraints. Our veteran-owned team arrives with the right crew size, protects flooring in historic homes, and prices by volume so weekend warriors never overpay. Whether you inherited a packed attic off Chartier or just need a broken washer gone from King Road, Junk Command makes junk removal simple along the St. Clair River.",
    localReferences: [
      "Broadway Street downtown",
      "Waterworks Park neighborhood",
      "Chartier Road homes",
      "King Road residential area",
      "Degurse Avenue corridor",
      "Marine City ferry landing vicinity",
    ],
    nearbyLandmarks: [
      "Marine City Ferry Dock",
      "Waterworks Park",
      "Nautical Mile / Broadway shops",
      "St. Clair River shoreline",
    ],
    servicesBlurb:
      "Marine City clients book furniture and mattress pickup, appliance haul-away, garage cleanouts, construction debris removal, and yard brush clearing — often timed around seasonal openings and closings.",
    faqs: [
      {
        question: "How far is Marine City from your base?",
        answer:
          "Marine City is a straightforward drive south of Port Huron along our regular route. We schedule efficiently and confirm the soonest available window for your address.",
      },
      {
        question: "Can you remove junk from older Marine City homes with narrow stairs?",
        answer:
          "Yes. Stairs, tight landings, and period doorways are common here. Tell us about access when you send photos so we bring enough crew.",
      },
      {
        question: "Do you haul away docks, boats parts, or outdoor gear?",
        answer:
          "We can remove many outdoor items, old furniture, and stored gear. Specialty marine equipment may need a photo review — call 810-336-5865 and we will confirm what we can take.",
      },
      {
        question: "Is there a minimum charge in Marine City?",
        answer:
          "Most small pickups start near our $99 minimum. Larger loads are priced by truck volume. You always approve the quote before we load.",
      },
    ],
    nearbySlugs: [
      "st-clair",
      "algonac",
      "new-baltimore",
      "richmond",
      "marysville",
    ],
    image: "/images/cities/marine-city.webp",
    imageAlt:
      "Junk Command hauling household items in Marine City, Michigan",
  },
  {
    slug: "algonac",
    name: "Algonac",
    county: "St. Clair County",
    metaTitle: "Junk Removal Algonac MI | Junk Command",
    metaDescription:
      "Junk removal in Algonac, MI — canal homes, cottages & mainland properties. Fast haul-away. Call Junk Command 810-336-5865.",
    h1: "Junk Removal in Algonac, Michigan",
    eyebrow: "Gateway to the Delta",
    intro:
      "Algonac’s canal lifestyle means storage space is precious. Junk Command helps island-adjacent and mainland homeowners clear outgrown furniture, storm debris, and garage overflow without wrestling a rental truck over the bridge.",
    whyUs:
      "Algonac sits at the edge of the St. Clair River delta, and we plan routes accordingly for mainland and accessible canal-side addresses. From Pointe Tremble Road to neighborhoods near State Street and the Algonac State Park approach, our crew knows how to stage trucks efficiently and work around boat trailers and seasonal congestion. Veteran-owned means disciplined, respectful service — we quote clearly, haul heavy items, and leave driveways clean. When cottage turnovers or estate cleanouts stack up before summer, Junk Command is the Algonac-area partner that keeps projects on schedule.",
    localReferences: [
      "Pointe Tremble Road corridor",
      "State Street downtown Algonac",
      "Michigan Street neighborhoods",
      "Summer Street residential blocks",
      "Stone Road area homes",
      "Algonac State Park approach",
    ],
    nearbyLandmarks: [
      "Algonac State Park",
      "Algonac City Park & waterfront",
      "Russell Island ferry area",
      "St. Clair River delta channels",
    ],
    servicesBlurb:
      "We serve Algonac with furniture removal, appliance pickup, mattress disposal, garage and basement cleanouts, yard debris hauling, and estate clearances timed for seasonal cottage schedules.",
    faqs: [
      {
        question: "Do you serve canal and waterfront homes in Algonac?",
        answer:
          "Yes, for addresses we can reach by road with our trucks. Mention dockside access, shared drives, or HOA rules when you book so we plan the stop correctly.",
      },
      {
        question: "Can you help with cottage cleanouts before winter?",
        answer:
          "Seasonal cleanouts are a big part of our Algonac work. We haul furniture, appliances, and stored junk so properties close down tidy.",
      },
      {
        question: "Do you remove brush and yard waste after storms?",
        answer:
          "We haul brush piles, limbs, and outdoor debris that fit our truck. Send photos to 810-336-5865 for a volume-based Algonac quote.",
      },
      {
        question: "Are Saturday pickups available?",
        answer:
          "Weekend windows are often available depending on route density. Ask when you call — we will match you with the next open Algonac slot.",
      },
    ],
    nearbySlugs: [
      "marine-city",
      "new-baltimore",
      "anchorville",
      "richmond",
      "st-clair",
    ],
    image: "/images/cities/algonac.webp",
    imageAlt:
      "Junk removal service at a residential property in Algonac, Michigan",
  },
  {
    slug: "richmond",
    name: "Richmond",
    county: "Macomb County",
    metaTitle: "Junk Removal Richmond MI | Junk Command",
    metaDescription:
      "Junk removal in Richmond, MI on the Macomb–St. Clair border. Furniture, cleanouts & debris haul-away. Call Junk Command 810-336-5865.",
    h1: "Junk Removal in Richmond, Michigan",
    eyebrow: "Macomb–St. Clair Border Service",
    intro:
      "Richmond sits where Macomb and St. Clair meet — and Junk Command covers both sides. When garages, barns, and basements overflow, our Port Huron–based crew delivers fast, veteran-owned junk removal with clear pricing.",
    whyUs:
      "Richmond’s border location makes it a natural bridge between our St. Clair County core and Macomb County routes. We regularly serve homes near Main Street, properties along Division and Gratiot, and outlying lots toward Memphis and New Haven roads. You get the same disciplined, veteran-owned standard whether your address leans Macomb or St. Clair. Volume-based quotes, careful loading, and responsible disposal mean no dump-run stress and no guessing at the final bill. Junk Command is the premium local option for Richmond households ready to clear space and move on.",
    localReferences: [
      "Main Street downtown Richmond",
      "Gratiot Avenue corridor",
      "Division Road area",
      "Memphis Road outskirts",
      "New Haven Road approaches",
      "31 Mile & Richmond Road zone",
    ],
    nearbyLandmarks: [
      "Richmond Community Schools area",
      "Beebe Street recreation spots",
      "Downtown Richmond shopping district",
      "Macomb–St. Clair county line corridors",
    ],
    servicesBlurb:
      "Richmond customers use us for sofa and appliance removal, full garage cleanouts, estate hauls, farm outbuilding junk, and construction debris — bridging Macomb and St. Clair County service seamlessly.",
    faqs: [
      {
        question: "Do you serve both Macomb and St. Clair sides of Richmond?",
        answer:
          "Yes. Richmond spans the county line, and we haul from addresses on either side without treating it as an out-of-area exception.",
      },
      {
        question: "Can you clean out a barn or workshop near Richmond?",
        answer:
          "We frequently clear outbuildings of stored furniture, scrap, and decades of accumulated items. Photos help us estimate truck space and crew needs.",
      },
      {
        question: "How do I get a quote?",
        answer:
          "Text or call 810-336-5865 with a description or photos of the junk. We reply with an upfront volume-based price before we arrive.",
      },
      {
        question: "Do you remove hot tubs in Richmond?",
        answer:
          "Yes. Broken or unwanted hot tubs are a common request. We break down and haul them so you do not need specialty equipment.",
      },
    ],
    nearbySlugs: [
      "new-baltimore",
      "chesterfield",
      "marine-city",
      "anchorville",
      "capac",
    ],
    image: "/images/cities/richmond.webp",
    imageAlt:
      "Junk Command truck serving Richmond, Michigan on the Macomb County border",
  },
  {
    slug: "new-baltimore",
    name: "New Baltimore",
    county: "Macomb County",
    metaTitle: "Junk Removal New Baltimore MI | Junk Command",
    metaDescription:
      "Junk removal in New Baltimore, MI. Waterfront & neighborhood haul-away for furniture, appliances & cleanouts. Call Junk Command 810-336-5865.",
    h1: "Junk Removal in New Baltimore, Michigan",
    eyebrow: "Anchor Bay Cleanouts",
    intro:
      "New Baltimore’s Anchor Bay setting brings lakeside living — and the clutter that comes with boats, guests, and full basements. Junk Command clears it out so you can enjoy the waterfront, not the storage pile.",
    whyUs:
      "New Baltimore is a key Macomb County stop for Junk Command as we serve the Anchor Bay shoreline and inland neighborhoods. From Washington Street downtown to subdivisions off 23 Mile and properties near Walter and Maria, we schedule hauls that fit busy family calendars. Our veteran-owned crew quotes before we load, protects finished floors in newer builds, and handles heavy appliances without drama. Whether you are flipping a rental near the harbor or reclaiming a garage after years of accumulation, you get Southeast Michigan junk removal done to a premium standard — without Port Huron feeling far away.",
    localReferences: [
      "Washington Street downtown",
      "23 Mile Road corridor",
      "Walter and Maria neighborhood",
      "County Line Road area",
      "Base Street residential blocks",
      "New Baltimore Harbor vicinity",
    ],
    nearbyLandmarks: [
      "New Baltimore Harbor",
      "Walter and Maria Park",
      "Anchor Bay shoreline",
      "Downtown New Baltimore shops",
    ],
    servicesBlurb:
      "In New Baltimore we haul furniture, mattresses, appliances, garage clutter, renovation debris, and yard waste — popular with waterfront homes, downtown properties, and Anchor Bay subdivisions.",
    faqs: [
      {
        question: "Do you serve New Baltimore waterfront properties?",
        answer:
          "Yes. Harbor-area and shoreline homes are part of our regular Macomb County route. Share parking and access notes when you book.",
      },
      {
        question: "How quickly can you remove a fridge or washer?",
        answer:
          "Timing depends on route availability. Call 810-336-5865 early with photos and we will confirm the soonest available window for New Baltimore.",
      },
      {
        question: "Do you take construction debris from basement remodels?",
        answer:
          "We haul drywall, cabinets, flooring scraps, and similar remodel leftovers. Hazardous materials are excluded — we will tell you what we cannot take.",
      },
      {
        question: "Is Junk Command more affordable than a dumpster rental?",
        answer:
          "For many New Baltimore jobs, full-service haul-away costs less time and hassle than renting, loading, and waiting on a dumpster. You only pay for the volume we remove.",
      },
    ],
    nearbySlugs: [
      "chesterfield",
      "richmond",
      "algonac",
      "anchorville",
      "macomb-county",
    ],
    image: "/images/cities/new-baltimore.webp",
    imageAlt:
      "Junk removal crew clearing a garage in New Baltimore, Michigan",
  },
  {
    slug: "chesterfield",
    name: "Chesterfield",
    county: "Macomb County",
    metaTitle: "Junk Removal Chesterfield MI | Junk Command",
    metaDescription:
      "Junk removal in Chesterfield Township, MI. Fast furniture, appliance & cleanout service. Veteran-owned Junk Command — 810-336-5865.",
    h1: "Junk Removal in Chesterfield, Michigan",
    eyebrow: "Macomb Township Haul-Away",
    intro:
      "Chesterfield Township’s growing neighborhoods fill garages and basements quickly. Junk Command brings professional junk removal to your driveway — no dump runs, no borrowed trailers, no leftover mess.",
    whyUs:
      "Chesterfield is one of our strongest Macomb County markets: dense subdivisions, busy commercial strips along 23 Mile and Gratiot, and homeowners who value speed and respect. We know the layout around Sugarbush, Jefferson approaches toward the bay, and inland streets off Callens. Our veteran-owned team sizes every job by truck volume, arrives on time, and leaves the space broom-clean. From a single sectional on Brandenburg to a foreclosure-ready cleanout near Cotton, Junk Command delivers Port Huron reliability deeper into Macomb County without nickel-and-diming add-ons.",
    localReferences: [
      "23 Mile Road corridor",
      "Gratiot Avenue Chesterfield stretch",
      "Sugarbush Road neighborhoods",
      "Callens Road residential area",
      "Brandenburg & Cotton pockets",
      "Jefferson Avenue bay approaches",
    ],
    nearbyLandmarks: [
      "Chesterfield Township Civic Center area",
      "Anchor Bay High School vicinity",
      "Selfridge ANGB approach corridors",
      "Lake St. Clair recreational access",
    ],
    servicesBlurb:
      "Chesterfield residents book us for couch and mattress removal, appliance haul-away, garage and basement cleanouts, estate jobs, and post-reno debris — with photo quotes and flexible time windows.",
    faqs: [
      {
        question: "Do you cover all of Chesterfield Township?",
        answer:
          "Yes. We serve residential and many light-commercial addresses throughout Chesterfield Township in Macomb County.",
      },
      {
        question: "Can HOAs or condo associations book pickup?",
        answer:
          "Property managers and associations regularly schedule common-area or unit cleanouts with us. We can invoice as needed once the scope is confirmed.",
      },
      {
        question: "What if my junk is in a second-story room?",
        answer:
          "Stairs are included in our normal service. Let us know about tight turns or long carries so we staff the Chesterfield job correctly.",
      },
      {
        question: "Do you offer recurring junk pickup?",
        answer:
          "For landlords and businesses with ongoing needs, we can arrange repeat visits. Call 810-336-5865 to discuss a Chesterfield schedule.",
      },
    ],
    nearbySlugs: [
      "new-baltimore",
      "richmond",
      "anchorville",
      "macomb-county",
      "algonac",
    ],
    image: "/images/cities/chesterfield.webp",
    imageAlt:
      "Junk Command loading debris from a Chesterfield Township, MI home",
  },
  {
    slug: "anchorville",
    name: "Anchorville",
    county: "St. Clair County",
    metaTitle: "Junk Removal Anchorville MI | Junk Command",
    metaDescription:
      "Junk removal in Anchorville, MI near Anchor Bay. Furniture, cleanouts & debris haul-away. Call Junk Command at 810-336-5865.",
    h1: "Junk Removal in Anchorville, Michigan",
    eyebrow: "Anchor Bay Community Service",
    intro:
      "Anchorville may be small, but junk piles are not. Junk Command serves this Anchor Bay community with the same full-crew haul-away we bring to neighboring New Baltimore and Ira Township roads.",
    whyUs:
      "Anchorville sits in the quiet pocket between larger Anchor Bay towns, and residents often get overlooked by big franchise haulers. We do not overlook it. Our routes already pass through for New Baltimore, Chesterfield, and Algonac work, so Anchorville is a natural stop — not a surcharge zone. Expect veteran-owned professionalism, volume pricing, and careful handling around cottage-style lots and older homes near Dixie Highway. Whether you are clearing a relative’s house or finally emptying the pole barn, Junk Command makes junk removal feel local again along the bay.",
    localReferences: [
      "Dixie Highway corridor",
      "Anchor Bay shoreline approaches",
      "Short residential streets off M-29",
      "Ira Township bordering roads",
      "Church & school neighborhood pockets",
      "Bay-view cottage lots",
    ],
    nearbyLandmarks: [
      "Anchor Bay shoreline",
      "Nearby Ira Township parks",
      "M-29 lakeshore drive",
      "New Baltimore Harbor (nearby)",
    ],
    servicesBlurb:
      "Anchorville jobs typically include furniture and appliance removal, garage cleanouts, mattress disposal, brush piles, and small estate hauls — scheduled alongside our Anchor Bay route for efficiency.",
    faqs: [
      {
        question: "Is Anchorville in your regular service area?",
        answer:
          "Yes. Anchorville is part of our Southeast Michigan coverage between St. Clair and Macomb County Anchor Bay communities.",
      },
      {
        question: "Do you charge extra for small towns?",
        answer:
          "No special small-town penalty. Pricing is based on load volume, same as New Baltimore or Port Huron. Call 810-336-5865 for an Anchorville quote.",
      },
      {
        question: "Can you haul junk from a cottage with limited parking?",
        answer:
          "We work with tight parking every week. Describe the street and access when you book and we will stage the truck accordingly.",
      },
      {
        question: "What items can you not take?",
        answer:
          "We generally exclude hazardous waste like certain chemicals, wet paint in large volumes, and regulated materials. Ask when you send your item list and we will clarify.",
      },
    ],
    nearbySlugs: [
      "new-baltimore",
      "richmond",
      "algonac",
      "chesterfield",
      "marine-city",
    ],
    image: "/images/cities/anchorville.webp",
    imageAlt:
      "Junk Command serving a home in Anchorville, Michigan near Anchor Bay",
  },
  {
    slug: "emmett",
    name: "Emmett",
    county: "St. Clair County",
    metaTitle: "Junk Removal Emmett MI | Junk Command",
    metaDescription:
      "Junk removal in Emmett, MI. Rural properties, homes & outbuildings cleared fast. Veteran-owned Junk Command — call 810-336-5865.",
    h1: "Junk Removal in Emmett, Michigan",
    eyebrow: "Western St. Clair County Hauling",
    intro:
      "Emmett’s open land and quiet streets hide full barns, packed garages, and basements waiting for a clean slate. Junk Command drives west from Port Huron to haul it all — with upfront pricing and a crew that works hard.",
    whyUs:
      "Emmett Township and the village sit along our western St. Clair County corridor toward Capac and Yale. We understand gravel drives, acreage setbacks, and outbuildings that have not been opened in years. Our veteran-owned team plans load capacity before we arrive so one trip finishes the job whenever possible. From Main Street village homes to farms off Emmett Road and Imlay City Road approaches, you get respectful service and honest quotes — not a rundown from a distant call center. Junk Command brings Blue Water reliability inland where it is needed most.",
    localReferences: [
      "Main Street Emmett village",
      "Emmett Road rural corridor",
      "Imlay City Road approaches",
      "Township farm roads & acreages",
      "Village residential side streets",
      "Outbuilding & pole barn properties",
    ],
    nearbyLandmarks: [
      "Emmett Township hall area",
      "Local churches & community grounds",
      "Surrounding farmland corridors",
      "Western St. Clair County backroads",
    ],
    servicesBlurb:
      "In Emmett we specialize in barn and shed cleanouts, farm scrap and stored junk, furniture and appliance removal, estate clearances, and yard debris — sized for rural properties with real volume.",
    faqs: [
      {
        question: "Do you serve Emmett Township outside the village?",
        answer:
          "Yes. Village and township addresses across Emmett are in our service area. Share gate or driveway details when you schedule.",
      },
      {
        question: "Can you take old farm equipment parts and scrap?",
        answer:
          "Many scrap metal and equipment pieces are haulable if safe to load. Send photos to 810-336-5865 and we will confirm what belongs on the truck.",
      },
      {
        question: "How long does a typical Emmett cleanout take?",
        answer:
          "Small pickups can finish in under an hour. Full barn or estate jobs may take longer — we estimate timing when we quote the volume.",
      },
      {
        question: "Do I need to sort everything before you arrive?",
        answer:
          "Helpful but not required. Point us to what goes and what stays. We can work room-by-room or pile-by-pile based on your instructions.",
      },
    ],
    nearbySlugs: [
      "capac",
      "yale",
      "kimball-township",
      "port-huron",
      "richmond",
    ],
    image: "/images/cities/emmett.webp",
    imageAlt:
      "Junk Command clearing an outbuilding near Emmett, Michigan",
  },
  {
    slug: "capac",
    name: "Capac",
    county: "St. Clair County",
    metaTitle: "Junk Removal Capac MI | Junk Command",
    metaDescription:
      "Junk removal in Capac, MI. Homes, farms & Main Street properties cleared. Free quotes from Junk Command — 810-336-5865.",
    h1: "Junk Removal in Capac, Michigan",
    eyebrow: "Village & Farm Country Service",
    intro:
      "Capac sits at the crossroads of farm country and village life — and junk accumulates in both. Junk Command clears Capac homes, shops, and outbuildings so space works again without a DIY dump run.",
    whyUs:
      "Capac is part of our western St. Clair County loop with Emmett and Yale. We know Mill Street’s village core, the residential blocks nearby, and the larger lots spreading toward Capac Road and rural township lines. Franchise haulers often treat Capac as an afterthought; we treat it as a planned stop with full crew capability. Veteran-owned discipline shows in how we quote, how we protect driveways, and how thoroughly we leave the site. From a single mattress pickup to a multi-building estate, Junk Command gives Capac the same premium Southeast Michigan service as the lakeshore towns.",
    localReferences: [
      "Mill Street / downtown Capac",
      "Capac Road corridor",
      "Village residential side streets",
      "North and south township farm roads",
      "School neighborhood blocks",
      "Outlying barn & workshop properties",
    ],
    nearbyLandmarks: [
      "Capac Municipal Building area",
      "Local school campus vicinity",
      "Downtown Capac storefronts",
      "Surrounding agricultural roads",
    ],
    servicesBlurb:
      "Capac clients hire us for furniture and appliance haul-away, garage and basement cleanouts, shed clearing, construction debris, and full estate jobs across village and rural addresses.",
    faqs: [
      {
        question: "Is Capac within Junk Command’s service area?",
        answer:
          "Yes. Capac and surrounding township roads are regularly served from our Port Huron base along our western county routes.",
      },
      {
        question: "Can you help after a home renovation in Capac?",
        answer:
          "We haul cabinets, drywall scraps, flooring, and other remodel debris. Tell us approximate pile size for an accurate volume quote.",
      },
      {
        question: "Do you remove old tires?",
        answer:
          "Limited tire quantities may be accepted depending on current disposal rules and fees. Ask when you call 810-336-5865 so we price Capac jobs correctly.",
      },
      {
        question: "Will you donate usable household goods?",
        answer:
          "When items are clean and usable, we attempt donation partnerships instead of automatic landfill disposal — common on Capac estate cleanouts.",
      },
    ],
    nearbySlugs: [
      "emmett",
      "yale",
      "richmond",
      "kimball-township",
      "croswell",
    ],
    image: "/images/cities/capac.webp",
    imageAlt:
      "Junk removal truck working in Capac, Michigan",
  },
  {
    slug: "yale",
    name: "Yale",
    county: "St. Clair County",
    metaTitle: "Junk Removal Yale MI | Junk Command",
    metaDescription:
      "Junk removal in Yale, MI. Furniture, appliances, farm cleanouts & more. Veteran-owned Junk Command — call 810-336-5865.",
    h1: "Junk Removal in Yale, Michigan",
    eyebrow: "Northwestern St. Clair County",
    intro:
      "Yale homeowners and farm families call Junk Command when clutter outgrows the shed, loft, or garage. We haul heavy, price fair, and leave properties ready for the next season.",
    whyUs:
      "Yale anchors the northwestern corner of our St. Clair County coverage, linking inland farm towns with routes toward Croswell and Lexington. We know Main Street village life, Brockway Road approaches, and the long lanes that lead to working farms. Our veteran-owned crew does not rush the quote or cut corners on cleanup — you approve the price, we load the truck, and we sweep up. Whether clearing a rental near the Yale fairgrounds area or emptying a relative’s basement after a move, Junk Command brings disciplined Blue Water service to Yale without making you feel like an out-of-the-way exception.",
    localReferences: [
      "Main Street downtown Yale",
      "Brockway Road corridor",
      "Yale fairgrounds vicinity",
      "Village residential neighborhoods",
      "Township farm lanes & acreages",
      "School and park area streets",
    ],
    nearbyLandmarks: [
      "Yale Community Fairgrounds",
      "Downtown Yale business district",
      "Local parks & ball fields",
      "Northwestern St. Clair farmland",
    ],
    servicesBlurb:
      "Yale service covers furniture and mattress removal, appliance haul-away, barn and garage cleanouts, yard debris, and estate clearances — built for village lots and larger rural properties alike.",
    faqs: [
      {
        question: "How soon can you reach Yale from Port Huron?",
        answer:
          "Yale is a planned stop on our northwestern routes. Same-week service is typical. Call 810-336-5865 with photos for timing.",
      },
      {
        question: "Do you clean out entire farmsteads?",
        answer:
          "We can stage multi-building cleanouts and return if volume exceeds one truck. We map the plan with you before the first load leaves.",
      },
      {
        question: "Are you insured for Yale residential work?",
        answer:
          "Yes. Junk Command carries insurance. We take care around lawns, gravel drives, and outbuilding thresholds on every Yale job.",
      },
      {
        question: "Can you remove an old deck or shed contents only?",
        answer:
          "We remove shed contents routinely and can discuss deck or shed structure removal as a separate scope. Send details and we will outline what fits your quote.",
      },
    ],
    nearbySlugs: [
      "capac",
      "emmett",
      "croswell",
      "lexington",
      "kimball-township",
    ],
    image: "/images/cities/yale.webp",
    imageAlt:
      "Junk Command crew hauling items in Yale, Michigan",
  },
  {
    slug: "lexington",
    name: "Lexington",
    county: "Sanilac County",
    metaTitle: "Junk Removal Lexington MI | Junk Command",
    metaDescription:
      "Junk removal in Lexington, MI on Lake Huron. Cottage, home & seasonal cleanouts. Junk Command serves the Blue Water tourism corridor — 810-336-5865.",
    h1: "Junk Removal in Lexington, Michigan",
    eyebrow: "Lake Huron Tourism Corridor",
    intro:
      "Lexington’s lakeside charm means cottages, rentals, and year-round homes that need seasonal resets. Junk Command extends Blue Water junk removal north into Sanilac County so tourism-town clutter does not linger through peak season.",
    whyUs:
      "Lexington sits just beyond St. Clair County along the Lake Huron shore, and we proudly serve it as part of our expanded Blue Water footprint. Summer turnovers, porch furniture swaps, and packed garages after rental seasons create real demand — and distant haulers leave locals waiting. Our veteran-owned crew plans northern runs through Croswell and Yale corridors to reach Huron Avenue properties, lakeshore cottages, and inland homes efficiently. You still get upfront volume pricing, careful handling, and a broom-clean finish. Junk Command keeps Lexington properties guest-ready when the boardwalk fills and the weekend crowds arrive.",
    localReferences: [
      "Huron Avenue downtown Lexington",
      "Lake Huron shoreline cottages",
      "Main business district blocks",
      "Inland residential streets off M-25",
      "Harbor & marina vicinity homes",
      "Seasonal rental properties",
    ],
    nearbyLandmarks: [
      "Lexington Harbor & marina",
      "Lexington Village Beach",
      "Downtown Lexington shops",
      "M-25 lakeshore drive",
    ],
    servicesBlurb:
      "Lexington customers book furniture and appliance removal, cottage cleanouts, mattress disposal, garage clearing, and yard debris hauls — especially before and after the summer tourism rush.",
    faqs: [
      {
        question: "Do you really serve Lexington if you are based in Port Huron?",
        answer:
          "Yes. Lexington is part of our Blue Water service area. We schedule Sanilac County stops deliberately so cottages and year-round homes get reliable haul-away.",
      },
      {
        question: "Can you coordinate with short-term rental turnovers?",
        answer:
          "We often work around checkout and listing deadlines. Give us the date you need the space clear and we will aim for a Lexington window that fits.",
      },
      {
        question: "Do you remove old patio sets and beach gear storage?",
        answer:
          "Outdoor furniture, stored seasonal items, and garage overflow are common Lexington requests. Photos help us quote accurately.",
      },
      {
        question: "How quickly can you schedule junk removal in Lexington?",
        answer:
          "Timing depends on northern route scheduling. Call 810-336-5865 early — we will confirm the soonest available window for your address.",
      },
    ],
    nearbySlugs: ["croswell", "yale", "port-huron", "capac"],
    image: "/images/cities/lexington.webp",
    imageAlt:
      "Junk Command serving a cottage property in Lexington, Michigan on Lake Huron",
  },
  {
    slug: "croswell",
    name: "Croswell",
    county: "Sanilac County",
    metaTitle: "Junk Removal Croswell MI | Junk Command",
    metaDescription:
      "Junk removal in Croswell, MI. Homes, farms & village cleanouts on the Blue Water route. Call Junk Command at 810-336-5865.",
    h1: "Junk Removal in Croswell, Michigan",
    eyebrow: "Sanilac County Inland Service",
    intro:
      "Croswell connects inland Sanilac living with the Lake Huron tourism corridor. Junk Command clears Croswell homes, farms, and Main Street properties with the same premium haul-away Port Huron trusts.",
    whyUs:
      "Croswell is a strategic stop between our St. Clair County inland towns and Lexington’s lakeshore demand. We know the village grid, Harrington and Wells corridors, and the farm roads that branch toward surrounding townships. Big-box junk companies rarely prioritize Croswell; we build it into our northern schedule so you are not left waiting weeks. Veteran-owned means we communicate clearly, price by volume, and finish thoroughly — whether the job is a single dryer on a village lot or a packed barn outside town. Junk Command brings Blue Water work ethic to Sanilac County’s heartland.",
    localReferences: [
      "Downtown Croswell / Main Street",
      "Harrington Road area",
      "Wells Street neighborhoods",
      "Village residential blocks",
      "Outlying township farm roads",
      "Black River corridor properties",
    ],
    nearbyLandmarks: [
      "Croswell Swinging Bridge",
      "Black River in Croswell",
      "Local parks & fairgrounds area",
      "Downtown Croswell district",
    ],
    servicesBlurb:
      "In Croswell we haul furniture, appliances, mattresses, garage and barn contents, remodel debris, and estate junk — supporting village homes and rural Sanilac County properties on our Blue Water route.",
    faqs: [
      {
        question: "Is Croswell part of Junk Command’s normal coverage?",
        answer:
          "Yes. We serve Croswell as part of our Sanilac County / Blue Water extended area alongside Lexington and nearby inland towns.",
      },
      {
        question: "Can you remove junk after a flood or basement leak?",
        answer:
          "We haul water-damaged furniture and debris that is safe to handle. Active mold remediation is outside our scope — we will be clear about limits when you describe the job.",
      },
      {
        question: "Do you work with local realtors on vacant homes?",
        answer:
          "Realtors and property managers in Croswell regularly book us for listing prep and estate clearances. We can coordinate lockbox access when authorized.",
      },
      {
        question: "How is pricing set for larger rural loads?",
        answer:
          "Larger Croswell loads are priced by how much of the truck they fill. Multiple truckloads are quoted up front so there are no surprises. Call 810-336-5865.",
      },
    ],
    nearbySlugs: ["lexington", "yale", "capac", "emmett"],
    image: "/images/cities/croswell.webp",
    imageAlt:
      "Junk Command truck clearing debris in Croswell, Michigan",
  },
  {
    slug: "st-clair-county",
    name: "St. Clair County",
    county: "St. Clair County",
    metaTitle: "Junk Removal St. Clair County MI | Junk Command",
    metaDescription:
      "Countywide junk removal across St. Clair County, MI — Port Huron to Algonac & inland towns. Veteran-owned Junk Command. Call 810-336-5865.",
    h1: "Junk Removal Across St. Clair County, Michigan",
    eyebrow: "Full-County Coverage",
    intro:
      "Junk Command is St. Clair County’s hometown junk removal company — based in Port Huron and serving every corner of the county. From lakeshore townships to inland villages, one call gets a crew, a truck, and a clear price.",
    whyUs:
      "St. Clair County is not a side market for us — it is our home map. We run daily routes through Port Huron, Marysville, Fort Gratiot, Kimball, St. Clair, Marine City, Algonac, and west to Emmett, Capac, and Yale. That density means faster response, crews who already know local roads, and pricing that reflects neighborhood volume rather than long-distance penalties. As a veteran-owned business we bring discipline to scheduling and respect to every driveway in the county. Furniture, appliances, estates, construction debris, and yard waste all leave on our trucks. When you need junk gone anywhere in St. Clair County, call 810-336-5865 and work with the team that lives here.",
    localReferences: [
      "Port Huron metro & Blue Water Bridge area",
      "Marysville–St. Clair river towns",
      "Fort Gratiot & Kimball townships",
      "Marine City & Algonac shoreline",
      "Western villages: Emmett, Capac, Yale",
      "County roads connecting inland farms",
    ],
    nearbyLandmarks: [
      "Blue Water Bridge",
      "St. Clair River corridor",
      "Lake Huron shoreline parks",
      "County parks & fairgrounds",
      "I-69 / I-94 regional connectors",
    ],
    servicesBlurb:
      "Countywide we provide furniture and appliance removal, garage and basement cleanouts, estate and foreclosure clearing, construction and yard debris haul-away — with fast local scheduling across St. Clair County communities.",
    faqs: [
      {
        question: "Which St. Clair County cities do you serve?",
        answer:
          "We serve Port Huron, Marysville, Fort Gratiot, Kimball Township, St. Clair, Marine City, Algonac, Emmett, Capac, Yale, and surrounding townships — plus border communities like Richmond and Anchorville.",
      },
      {
        question: "Do rural township addresses cost more?",
        answer:
          "Pricing is driven by load volume. Most in-county rural stops use the same rate structure as city jobs. Extreme access issues are discussed before we start.",
      },
      {
        question: "Can businesses in St. Clair County book commercial cleanouts?",
        answer:
          "Yes. Offices, retail spaces, and light industrial sites book us for furniture, fixtures, and debris removal. Ask about scheduling outside peak customer hours.",
      },
      {
        question: "How do I book countywide junk removal?",
        answer:
          "Call or text 810-336-5865 with your city and photos. We confirm pricing and place you on the next efficient St. Clair County route.",
      },
    ],
    nearbySlugs: [
      "port-huron",
      "marysville",
      "st-clair",
      "marine-city",
      "fort-gratiot",
    ],
    image: "/images/cities/st-clair-county.webp",
    imageAlt:
      "Junk Command serving communities across St. Clair County, Michigan",
    isCounty: true,
  },
  {
    slug: "macomb-county",
    name: "Macomb County",
    county: "Macomb County",
    metaTitle: "Junk Removal Macomb County MI | Junk Command",
    metaDescription:
      "Junk removal for Macomb County, MI — Chesterfield, New Baltimore, Richmond & more. Veteran-owned Junk Command. Call 810-336-5865.",
    h1: "Junk Removal in Macomb County, Michigan",
    eyebrow: "Anchor Bay & Border Communities",
    intro:
      "Junk Command extends premium junk removal into northeastern Macomb County — Chesterfield, New Baltimore, Richmond, and neighboring Anchor Bay communities that connect naturally to our St. Clair County home base.",
    whyUs:
      "Macomb County’s northeastern edge shares roads, shorelines, and housing stock with our St. Clair routes, so we serve it as a true extension of our Blue Water operation — not a reluctant add-on. Chesterfield subdivisions, New Baltimore waterfront streets, and Richmond’s border lots get the same veteran-owned crew, volume pricing, and careful loading we built our reputation on in Port Huron. You will not deal with a national call center that does not know 23 Mile from County Line. When Macomb County homes need furniture gone, garages emptied, or estates cleared, Junk Command delivers Southeast Michigan reliability with local accountability. Call 810-336-5865 to put your address on our Macomb route.",
    localReferences: [
      "Chesterfield Township subdivisions",
      "New Baltimore harbor & downtown",
      "Richmond Main Street & Gratiot corridor",
      "23 Mile & County Line connectors",
      "Anchor Bay shoreline communities",
      "Northeastern Macomb residential pockets",
    ],
    nearbyLandmarks: [
      "Lake St. Clair / Anchor Bay",
      "New Baltimore Harbor",
      "Selfridge ANGB area corridors",
      "Gratiot Avenue commercial stretches",
      "Macomb–St. Clair border roads",
    ],
    servicesBlurb:
      "Across our Macomb County service zone we haul furniture, appliances, mattresses, garage clutter, remodel debris, and estate contents — focused on Chesterfield, New Baltimore, Richmond, and nearby Anchor Bay addresses.",
    faqs: [
      {
        question: "Which parts of Macomb County do you serve?",
        answer:
          "We focus on northeastern Macomb County communities including Chesterfield, New Baltimore, Richmond, and nearby Anchor Bay areas that connect to our St. Clair County routes.",
      },
      {
        question: "Are you as fast in Macomb as in Port Huron?",
        answer:
          "Macomb stops are built into our regular scheduling. Same-week service is standard, and we confirm timing based on route load. Call 810-336-5865 to check openings.",
      },
      {
        question: "Do HOA communities in Chesterfield allow your trucks?",
        answer:
          "We work in HOA neighborhoods frequently. Share any gate codes or parking rules when you book and we will comply with community guidelines.",
      },
      {
        question: "Can you handle large estate cleanouts in Macomb County?",
        answer:
          "Yes. Multi-room and multi-day estate jobs are common. We quote by volume and can schedule return trips if the property exceeds one truckload.",
      },
    ],
    nearbySlugs: [
      "chesterfield",
      "new-baltimore",
      "richmond",
      "anchorville",
      "st-clair-county",
    ],
    image: "/images/cities/macomb-county.webp",
    imageAlt:
      "Junk Command junk removal truck serving Macomb County, Michigan communities",
    isCounty: true,
  },
];

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

export const CITY_NAMES: string[] = CITIES.map((c) => c.name);
