import type { LocationPage } from "@/data/locations/types";
import {
  SERVICE_PRESETS,
  buildLocationImages,
} from "@/data/locations/images";

export const I69_CORRIDOR_LOCATIONS: LocationPage[] = [
  {
    slug: "capac",
    name: "Capac",
    county: "St. Clair County",
    regionId: "i69-corridor",
    layout: "split",
    eyebrow: "Serving Capac",
    metaTitle: "Junk Removal Capac MI | Junk Command",
    metaDescription:
      "Need junk removal or a property cleanout in Capac, Michigan? Junk Command hauls furniture, appliances, garages, and rural debris along I-69. Get a free estimate.",
    h1: "Junk Removal in Capac, MI",
    heroIntro:
      "Capac sits on the I-69 corridor between village streets and surrounding farm roads. Junk Command provides junk removal and property cleanouts for homeowners, landlords, and families who need a local-feeling crew — not a dumpster in the drive for a week.",
    localIntro: [
      "Capac is a small I-69 town with Main Street storefronts, village homes, and larger properties just outside town. The corridor connects naturally toward Emmett, Yale, Memphis, and Imlay City, which is why this is a regular western route for a Port Huron-based crew.",
      "Jobs here tend to be mixed and practical: a rental house that needs to be empty, a garage that became storage, a barn corner full of furniture, or appliances replaced and left behind. Rural drives and village parking both show up, sometimes on the same day.",
      "If the property has more than a few bulky items, treat it as a cleanout. Our [garage cleanout](/garage-cleanout) and [estate cleanout](/estate-cleanout) services cover the household side; [furniture removal](/furniture-removal) and [appliance removal](/appliance-removal) usually ride along. We also serve [Imlay City](/service-areas/imlay-city) and [Memphis](/service-areas/memphis) on neighboring routes.",
    ],
    featuredServiceSlugs: [...SERVICE_PRESETS.rural],
    servicesIntro:
      "Capac loads often include household furniture, freezers, garage shelving, estate contents, and light debris from a remodel or move. [Yard debris](/yard-debris-removal) and [construction debris](/construction-debris-removal) can be included when they are mixed, non-hazardous, and part of a broader property cleanup.",
    cleanoutHeading: "More Than Just Junk Pickup",
    cleanoutBody: [
      "Village and rural Capac properties collect stuff across the house, garage, and outbuildings. Junk Command is set up for that kind of mixed cleanout — inherited homes, rental turnovers, moving piles, and whole-property jobs.",
      "You do not have to run a dump trailer yourself. Send photos of each area that needs to be cleared and we will tell you whether it is one load or a dedicated cleanout day.",
    ],
    midCtaTitle: "Got Junk in Capac?",
    midCtaDescription:
      "Garage, barn, rental house, or the whole property — send a few photos and Junk Command will quote an I-69 corridor pickup.",
    nearbySlugs: ["imlay-city", "memphis", "emmett", "yale"],
    faqs: [
      {
        question: "How much does junk removal cost in Capac?",
        answer:
          "We quote by how much space the load takes in the truck, plus access. Rural drives and outbuildings can affect the number. Photos of each pile help.",
      },
      {
        question: "Do you clean out farms and larger lots?",
        answer:
          "We remove household junk, furniture, appliances, and non-hazardous debris from homes, garages, barns, and sheds. Hazardous farm chemicals and drums are not accepted.",
      },
      {
        question: "Can you take a whole garage in one visit?",
        answer:
          "Often yes. If the garage is packed wall to wall, it may be more than one load. We discuss that from photos before we schedule.",
      },
      {
        question: "Do I have to bring everything to the driveway?",
        answer:
          "No. We come to the items when they are safely accessible, including garages and outbuildings.",
      },
      {
        question: "How soon can you get to Capac?",
        answer:
          "Capac is on our I-69 corridor route. Same-day or next-day service may be available depending on the schedule.",
      },
    ],
    images: buildLocationImages("Capac", "the I-69 corridor", "rural"),
  },
  {
    slug: "imlay-city",
    name: "Imlay City",
    county: "Lapeer County",
    regionId: "i69-corridor",
    layout: "editorial",
    eyebrow: "Serving Imlay City",
    metaTitle: "Junk Removal Imlay City MI | Junk Command",
    metaDescription:
      "Need junk removal or a property cleanout in Imlay City, Michigan? Junk Command removes furniture, appliances, garage clutter, and more along I-69 and M-53. Get a free estimate.",
    h1: "Junk Removal in Imlay City, MI",
    heroIntro:
      "Need junk gone without the hassle? Junk Command provides straightforward junk removal and property cleanout services throughout Imlay City and the surrounding Lapeer County area.",
    localIntro: [
      "From homes near downtown Imlay City to larger properties outside town along the I-69 and M-53 corridors, Junk Command helps homeowners, landlords, and property managers get unwanted stuff out without turning the cleanup into a weekend-long project. Main Street businesses, neighborhood streets, and farm roads toward Capac and Attica all sit on the same western route we already run.",
      "Imlay City is a practical Lapeer County stop — not a random pin on a franchise map. The housing mix is real: village lots, older interiors, rental turnovers, and acreage just outside town where a garage and a shed both have a decade of overflow.",
      "Cleaning out an entire property? Our [estate cleanout](/estate-cleanout) service can handle furniture, appliances, and miscellaneous household junk. For a packed garage, [garage cleanout](/garage-cleanout) is usually the right starting point. We are also nearby when you need junk hauled in [Capac](/service-areas/capac), [Attica](/service-areas/attica), [Almont](/service-areas/almont), or [Lapeer](/service-areas/lapeer).",
    ],
    featuredServiceSlugs: [...SERVICE_PRESETS.village],
    servicesIntro:
      "Imlay City requests most often include [furniture removal](/furniture-removal), [appliance removal](/appliance-removal), garage and basement resets, and storefront leftovers after a remodel. [Storage unit cleanouts](/storage-unit-cleanout) come up when a household has been parking extras off-site during a move.",
    cleanoutHeading: "More Than Just Junk Pickup",
    cleanoutBody: [
      "I-69 corridor properties are often more than a sofa at the curb. Inherited homes, rental turnovers, moving cleanouts, and whole-house jobs are a regular part of our Imlay City work.",
      "We can clear garages, basements, storage units, and living spaces in one coordinated visit. Send photos of each area so we can match truck space and crew time to the actual property — not a guess from a one-line description.",
    ],
    midCtaTitle: "Got Junk in Imlay City?",
    midCtaDescription:
      "Furniture, appliances, garage clutter, or an entire property — send Junk Command a few photos and we will help you figure out the easiest way to get it gone.",
    nearbySlugs: ["capac", "attica", "almont", "lapeer"],
    faqs: [
      {
        question: "How much does junk removal cost in Imlay City?",
        answer:
          "Pricing depends on volume and access. Photos of the pile, large furniture, and stairs or long drives help us confirm a range before we arrive. Call or text 810-242-0429.",
      },
      {
        question: "Does Junk Command provide same-day junk removal in Imlay City?",
        answer:
          "Same-day or next-day service may be available depending on the schedule and how Imlay City fits that day’s I-69 / M-53 route. Send photos and your deadline and we will confirm the soonest practical window.",
      },
      {
        question: "Can you clean out an entire house?",
        answer:
          "Yes. Whole-home and estate cleanouts are a core part of our Imlay City work. We walk the property so keepers stay and junk leaves.",
      },
      {
        question: "Do I have to move everything outside first?",
        answer:
          "No. If items are safely accessible, we remove them from rooms, garages, basements, and outbuildings.",
      },
      {
        question: "Can I send photos for an estimate?",
        answer:
          "Yes. Use the free estimate form on this page or text photos to 810-242-0429. Include a shot of parking or the driveway if access is tight.",
      },
      {
        question: "Do you remove furniture and appliances?",
        answer:
          "Yes. Sofas, mattresses, refrigerators, washers, dryers, and similar bulky items are everyday Imlay City loads and can usually be combined in one visit.",
      },
    ],
    images: buildLocationImages(
      "Imlay City",
      "Lapeer County along I-69 and M-53",
      "village",
    ),
  },
  {
    slug: "attica",
    name: "Attica",
    county: "Lapeer County",
    regionId: "i69-corridor",
    layout: "gallery",
    eyebrow: "Serving Attica",
    metaTitle: "Junk Removal Attica MI | Junk Command",
    metaDescription:
      "Need junk removal in Attica, Michigan? Junk Command handles residential and rural property cleanouts along I-69 between Imlay City and Lapeer. Get a free estimate.",
    h1: "Junk Removal in Attica, MI",
    heroIntro:
      "Attica Township sits on I-69 between Imlay City and Lapeer — residential streets, larger lots, and rural properties that collect garage and outbuilding overflow. Junk Command provides junk removal and cleanouts without the dumpster-in-the-yard routine.",
    localIntro: [
      "Attica is the kind of Lapeer County community where a “quick junk pickup” often turns into a garage, a shed, and a basement. I-69 makes it a logical stop between Imlay City and Lapeer, and the surrounding roads connect toward Dryden and the rest of southern Lapeer County.",
      "Properties here are more spread out than in a dense city. That usually means longer drives, mixed household and outdoor junk, and items that have been stored because there was always “room in the back.” We plan truck placement and carry distance from photos before we quote.",
      "If you are clearing space after a move, an inherited property, or years of postponing the garage, [garage cleanouts](/garage-cleanout) and [estate cleanouts](/estate-cleanout) are the services that fit. We also serve [Imlay City](/service-areas/imlay-city) and [Lapeer](/service-areas/lapeer) on the same corridor.",
    ],
    featuredServiceSlugs: [...SERVICE_PRESETS.rural],
    servicesIntro:
      "Attica jobs lean toward garages, sheds, [furniture removal](/furniture-removal), [appliance removal](/appliance-removal), and mixed debris. [Yard debris](/yard-debris-removal) and light [construction debris](/construction-debris-removal) can be part of the load when they are non-hazardous and sitting with the household junk.",
    cleanoutHeading: "More Than Just Junk Pickup",
    cleanoutBody: [
      "Larger Attica properties are where whole-property cleanouts pay off. Inherited homes, moving piles, foreclosure leftovers, and garages that have not been emptied in years are the jobs we come west for.",
      "We can work house, garage, and outbuilding in one coordinated visit when photos show the full scope. You get a volume-based quote and a crew that treats rural access as normal — not an extra hassle.",
    ],
    midCtaTitle: "Got Junk in Attica?",
    midCtaDescription:
      "Garage, shed, house, or all three — send Junk Command a few photos and we will quote an I-69 pickup for Attica Township.",
    nearbySlugs: ["imlay-city", "lapeer", "dryden", "capac"],
    faqs: [
      {
        question: "Do you serve Attica Township, not just the village?",
        answer:
          "Yes. We serve Attica Township properties along the I-69 corridor and surrounding residential and rural roads. Confirm your address when you send photos.",
      },
      {
        question: "How is a rural cleanout priced?",
        answer:
          "Still by volume and access. Long carries from a back building or a packed garage can change the quote. Photos of each area keep it accurate.",
      },
      {
        question: "Can you remove junk from a shed and the house together?",
        answer:
          "Yes, if it fits the scheduled load. Combining buildings is common in Attica and usually cheaper than two trips.",
      },
      {
        question: "What will you not take?",
        answer:
          "Hazardous chemicals, paints, fuels, and similar restricted items. See our what-we-don’t-take page or ask when you send photos.",
      },
      {
        question: "How soon can you schedule Attica?",
        answer:
          "Attica fits our I-69 corridor routing. Same-day or next-day service may be available depending on the schedule.",
      },
    ],
    images: buildLocationImages(
      "Attica",
      "Lapeer County along I-69",
      "rural",
    ),
  },
  {
    slug: "lapeer",
    name: "Lapeer",
    county: "Lapeer County",
    regionId: "i69-corridor",
    layout: "split",
    eyebrow: "Serving Lapeer",
    metaTitle: "Junk Removal Lapeer MI | Junk Command",
    metaDescription:
      "Need junk removal or a property cleanout in Lapeer, Michigan? Junk Command hauls furniture, appliances, storage, and estate contents. Get a free estimate.",
    h1: "Junk Removal in Lapeer, MI",
    heroIntro:
      "Lapeer is the county seat — a mix of city neighborhoods, rentals, downtown properties, and surrounding residential roads off I-69. Junk Command provides junk removal, storage cleanouts, and whole-property jobs for homeowners and property managers.",
    localIntro: [
      "Lapeer has a real downtown, established neighborhoods, rental housing, and the kind of property turnover you expect in a county seat: moves, estate settlements, storage units, and houses that need to be emptied before a sale. I-69 and the roads toward Attica, Imlay City, and Metamora make it a logical extension of our western coverage.",
      "This is not a claim that we have a Lapeer storefront. Junk Command is based in Port Huron and serves customers throughout Lapeer. The point of this page is simple: if you live here, we already run the corridor and we will treat the job like a local stop.",
      "Residential, rental, estate, and storage jobs all show up. [Storage unit cleanouts](/storage-unit-cleanout), [estate cleanouts](/estate-cleanout), and [foreclosure cleanouts](/foreclosure-cleanout) are the higher-value calls. We also serve [Attica](/service-areas/attica), [Imlay City](/service-areas/imlay-city), and [Metamora](/service-areas/metamora).",
    ],
    featuredServiceSlugs: [...SERVICE_PRESETS.countySeat],
    servicesIntro:
      "Lapeer customers book [furniture removal](/furniture-removal), [appliance removal](/appliance-removal), garage and basement resets, and light [construction debris](/construction-debris-removal) after a remodel. Landlords often combine leftover tenant items with a broader cleanout so the unit is actually rentable again.",
    cleanoutHeading: "More Than Just Junk Pickup",
    cleanoutBody: [
      "County-seat jobs are frequently deadline jobs: a closing, a probate timeline, a tenant out, or a storage unit that has to be empty this month. Junk Command handles inherited homes, rental turnovers, eviction leftovers where applicable, moving cleanouts, garages, basements, and storage units.",
      "Send photos of the rooms that need to be cleared. We will tell you whether you need a short pickup or a full-property crew, and we will quote before we load.",
    ],
    midCtaTitle: "Got Junk in Lapeer?",
    midCtaDescription:
      "House, garage, storage unit, or rental turnover — send photos and Junk Command will quote junk removal in Lapeer, Michigan.",
    nearbySlugs: ["attica", "imlay-city", "metamora", "dryden"],
    faqs: [
      {
        question: "How much does junk removal cost in Lapeer?",
        answer:
          "Volume-based pricing with access factored in. A storage unit, a single appliance, and a whole-house cleanout are different quotes. Photos get you a useful number first.",
      },
      {
        question: "Do you empty storage units in Lapeer?",
        answer:
          "Yes. Storage-unit cleanouts are a regular request. Tell us the unit size and send photos of the contents, including anything stacked in the back.",
      },
      {
        question: "Can you clean out a rental after a tenant leaves?",
        answer:
          "Yes. Left-behind furniture, appliances, bags, and garage items can usually be combined into one visit so the property can be turned faster.",
      },
      {
        question: "Do you have an office in Lapeer?",
        answer:
          "No. Junk Command is based in Port Huron and serves Lapeer as a service area. There is no local storefront — just scheduled pickups at your property.",
      },
      {
        question: "Is same-day service guaranteed?",
        answer:
          "No. Same-day or next-day service may be available depending on the schedule. We will be honest about the next window when you send photos.",
      },
      {
        question: "Can I send photos for an estimate?",
        answer:
          "Yes. Use the form on this page or text 810-242-0429. That is the fastest way to get a confirmed range.",
      },
    ],
    images: buildLocationImages(
      "Lapeer",
      "Lapeer County",
      "urban",
    ),
  },
];
