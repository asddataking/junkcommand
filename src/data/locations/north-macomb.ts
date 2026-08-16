import type { LocationPage } from "@/data/locations/types";
import {
  SERVICE_PRESETS,
  buildLocationImages,
} from "@/data/locations/images";

export const NORTH_MACOMB_LOCATIONS: LocationPage[] = [
  {
    slug: "memphis",
    name: "Memphis",
    county: "Macomb / St. Clair County",
    regionId: "north-macomb",
    layout: "gallery",
    eyebrow: "Serving Memphis",
    metaTitle: "Junk Removal Memphis MI | Junk Command",
    metaDescription:
      "Need junk removal in Memphis, Michigan? Junk Command serves this Macomb–St. Clair border town for furniture, appliances, garages, and estates. Get a free estimate.",
    h1: "Junk Removal in Memphis, MI",
    heroIntro:
      "Memphis sits on the Macomb and St. Clair County line, which is why it is a natural Junk Command stop — not an edge-of-the-map maybe. We haul furniture, appliances, garage clutter, and rural debris for village and country properties.",
    localIntro: [
      "Memphis is a true border town. Village homes, Main Street businesses, and rural roads can feel connected to Richmond, Capac, Emmett, and Armada all at once. Customers should not have to guess whether a “Macomb hauler” or a “St. Clair hauler” will show up. We already run both sides of the line.",
      "Jobs here range from a Main Street basement to a farm garage, an inherited house, or a rental that needs to be empty. Gravel drives, barns, older stairs, and village parking can all show up on the same route.",
      "If you are between communities, we can usually combine the trip. We also serve [Richmond](/service-areas/richmond), [Armada](/service-areas/armada), [Capac](/service-areas/capac), and the [St. Clair](/service-areas/st-clair) area when the load and the day’s map line up. [Estate cleanouts](/estate-cleanout) and [garage cleanouts](/garage-cleanout) are the larger Memphis requests.",
    ],
    featuredServiceSlugs: [...SERVICE_PRESETS.village],
    servicesIntro:
      "Memphis pickups often mix [furniture removal](/furniture-removal), [appliance removal](/appliance-removal), boxed household junk, and outbuilding contents. [Shed](/shed-removal) and garage overflow is common on the rural edges of town.",
    cleanoutHeading: "More Than Just Junk Pickup",
    cleanoutBody: [
      "Border-town properties are rarely one-room jobs. Inherited homes, moving cleanouts, rental turnovers, and whole-property work are why people call instead of borrowing a trailer.",
      "Junk Command can clear the house, garage, and extra building in a coordinated visit. Send photos of each area so the quote matches the property, not just the sofa in the living room.",
    ],
    midCtaTitle: "Got Junk in Memphis?",
    midCtaDescription:
      "Village house, rural garage, or a full-property cleanout — send photos and Junk Command will quote a pickup on the county line.",
    nearbySlugs: ["richmond", "armada", "capac", "st-clair"],
    faqs: [
      {
        question: "Do you serve both the Macomb and St. Clair sides of Memphis?",
        answer:
          "Yes. Memphis is on our regular border-town route. Confirm the address with your photos and we will treat it as one service area.",
      },
      {
        question: "How much does junk removal cost in Memphis?",
        answer:
          "Volume and access. Rural carries and packed outbuildings can change the quote. Photos of every area that needs to be cleared help.",
      },
      {
        question: "Can you clean out a barn and a house together?",
        answer:
          "Yes, when the contents are household junk, furniture, appliances, and non-hazardous debris. We will tell you if it looks like more than one load.",
      },
      {
        question: "Do I have to move items to the curb?",
        answer:
          "No. Full-service removal means we come to the items when they are safely accessible.",
      },
      {
        question: "How soon can you schedule?",
        answer:
          "Memphis fits routes we already run toward Richmond, Capac, and Armada. Same-day or next-day service may be available depending on the schedule.",
      },
    ],
    images: buildLocationImages(
      "Memphis",
      "the Macomb–St. Clair border",
      "village",
    ),
  },
  {
    slug: "richmond",
    name: "Richmond",
    county: "Macomb County",
    regionId: "north-macomb",
    layout: "editorial",
    eyebrow: "Serving Richmond",
    metaTitle: "Junk Removal Richmond MI | Junk Command",
    metaDescription:
      "Need junk removal in Richmond, Michigan? Junk Command hauls furniture, appliances, and property cleanouts between the Blue Water Area and northern Macomb. Get a free estimate.",
    h1: "Junk Removal in Richmond, MI",
    heroIntro:
      "Richmond sits where Macomb County, St. Clair County, farms, subdivisions, and Main Street businesses meet. Junk Command provides junk removal and cleanouts for homes, rentals, and properties along Gratiot and the county line.",
    localIntro: [
      "Richmond is a connector town — Main Street businesses, Gratiot Avenue traffic, family neighborhoods, and rural roads toward Memphis and Armada. Property turnover is real here: rentals, inherited houses, storefront resets, and garages that have been storage for years.",
      "Because Richmond sits between the Blue Water Area and northern Macomb County, it is a key stop on routes we already run with Memphis, Chesterfield, New Baltimore, and Capac. You should recognize the coverage: we serve this border on purpose.",
      "If you are turning a rental or clearing a house for sale, [estate cleanouts](/estate-cleanout) and [furniture removal](/furniture-removal) usually overlap. We also serve [Memphis](/service-areas/memphis), [Armada](/service-areas/armada), [New Baltimore](/service-areas/new-baltimore), and [Chesterfield](/service-areas/chesterfield).",
    ],
    featuredServiceSlugs: [...SERVICE_PRESETS.village],
    servicesIntro:
      "Richmond jobs include storefront fixtures, garage clutter, estate furniture, rental debris, and [appliance removal](/appliance-removal) from basements or utility rooms. [Garage cleanouts](/garage-cleanout) and [basement cleanouts](/basement-cleanout) are the residential workhorses.",
    cleanoutHeading: "More Than Just Junk Pickup",
    cleanoutBody: [
      "A Richmond cleanout can look suburban in the front and rural in the back — house, garage, and an outbuilding on the same property. Junk Command plans for that mix instead of quoting only the living-room sofa.",
      "We help with inherited homes, rental turnovers, moving cleanouts, foreclosure leftovers, and whole-property jobs. Landlords and realtors can send photos and a deadline; we will be direct about the next available window.",
    ],
    midCtaTitle: "Got Junk in Richmond?",
    midCtaDescription:
      "Main Street, subdivision, or a county-line property — send photos and Junk Command will quote junk removal in Richmond, Michigan.",
    nearbySlugs: ["memphis", "armada", "new-baltimore", "chesterfield"],
    faqs: [
      {
        question: "How much does junk removal cost in Richmond?",
        answer:
          "We quote by truck volume and access. Downtown parking, stairs, or a long rural carry can affect the price. Photos keep the estimate honest.",
      },
      {
        question: "Can you help with a rental turnover?",
        answer:
          "Yes. Left-behind furniture, appliances, bags, and garage items are a common Richmond request and can often be combined into one visit.",
      },
      {
        question: "Do you take furniture and appliances together?",
        answer:
          "Yes. Combining bulky items is usually more efficient than two separate pickups.",
      },
      {
        question: "Do I need to be home?",
        answer:
          "Someone should confirm keepers versus junk, or leave clear instructions. We walk the pile before loading.",
      },
      {
        question: "How fast can you get to Richmond?",
        answer:
          "Richmond is on our regular northeastern Macomb / county-line route. Same-day or next-day service may be available depending on the schedule.",
      },
    ],
    images: buildLocationImages(
      "Richmond",
      "northern Macomb and the Blue Water border",
      "village",
    ),
  },
  {
    slug: "armada",
    name: "Armada",
    county: "Macomb County",
    regionId: "north-macomb",
    layout: "split",
    eyebrow: "Serving Armada",
    metaTitle: "Junk Removal Armada MI | Junk Command",
    metaDescription:
      "Need junk removal in Armada, Michigan? Junk Command handles village homes, estates, garages, and larger rural properties. Get a free estimate.",
    h1: "Junk Removal in Armada, MI",
    heroIntro:
      "Armada is village streets, fairgrounds-area traffic, and rural north Macomb roads toward Romeo, Richmond, and Memphis. Junk Command provides junk removal and property cleanouts for homeowners who need a crew that can handle both a living room and a barn.",
    localIntro: [
      "Armada’s residential core is compact, but the surrounding roads open into larger lots, outbuildings, and farm-adjacent properties. Main Street, Armada Ridge Road, and 32 Mile are the corridors that connect this village to Romeo and Richmond. That mix is the point: a polite village pickup one hour and a gravel-drive cleanout the next.",
      "Estate furniture, garage overflow, old appliances, and barn storage are the loads we see most. We ask about access before the truck rolls because village parking and long rural carries are both normal here.",
      "If the job is bigger than a few pieces, [estate cleanouts](/estate-cleanout) and [garage cleanouts](/garage-cleanout) are the right fit. We also serve [Richmond](/service-areas/richmond), [Memphis](/service-areas/memphis), [Romeo](/service-areas/romeo), and [Almont](/service-areas/almont).",
    ],
    featuredServiceSlugs: [...SERVICE_PRESETS.rural],
    servicesIntro:
      "Armada customers book [furniture removal](/furniture-removal), [appliance removal](/appliance-removal), garage and shed contents, and [yard debris](/yard-debris-removal) that piled up around outbuildings. Larger properties often add [construction debris](/construction-debris-removal) after a remodel or tear-out.",
    cleanoutHeading: "More Than Just Junk Pickup",
    cleanoutBody: [
      "Armada is where whole-property cleanouts show their value. Inherited homes, garages that became warehouses, and rural buildings with years of stored furniture are the jobs that stall a sale or a move.",
      "Junk Command can work the house and the outbuildings together when photos show the full picture. We quote by volume, plan the drive, and leave the property clearer than we found it — without promising a storefront we do not have in town.",
    ],
    midCtaTitle: "Got Junk in Armada?",
    midCtaDescription:
      "Furniture, appliances, garage clutter, or an entire property — send Junk Command a few photos and we will help you figure out the easiest way to get it gone.",
    nearbySlugs: ["richmond", "memphis", "romeo", "almont"],
    faqs: [
      {
        question: "How much does junk removal cost in Armada?",
        answer:
          "Cost follows volume and access. A village sofa pickup and a rural garage-plus-barn cleanout are different quotes. Photos of each area are the fastest way to get a real number.",
      },
      {
        question: "Does Junk Command provide same-day junk removal in Armada?",
        answer:
          "Same-day or next-day service may be available depending on the schedule. Armada sits on our north Macomb route with Romeo, Richmond, and Memphis.",
      },
      {
        question: "Can you clean out an entire house?",
        answer:
          "Yes. Whole-home and estate cleanouts are a regular Armada request, especially on larger lots with extra buildings.",
      },
      {
        question: "Do I have to move everything outside first?",
        answer:
          "No. We remove items from rooms, garages, sheds, and barns when they are safely accessible.",
      },
      {
        question: "Can I send photos for an estimate?",
        answer:
          "Yes. Use the free estimate form or text 810-242-0429. Include the driveway or parking if access is tight.",
      },
      {
        question: "Do you remove furniture and appliances?",
        answer:
          "Yes. Combining furniture and appliances in one Armada visit is common and usually more efficient.",
      },
    ],
    images: buildLocationImages(
      "Armada",
      "north Macomb County",
      "rural",
    ),
  },
  {
    slug: "romeo",
    name: "Romeo",
    county: "Macomb County",
    regionId: "north-macomb",
    layout: "gallery",
    eyebrow: "Serving Romeo",
    metaTitle: "Junk Removal Romeo MI | Junk Command",
    metaDescription:
      "Need junk removal in Romeo, Michigan? Junk Command hauls furniture, appliances, and estate contents from village homes and nearby north Macomb properties. Get a free estimate.",
    h1: "Junk Removal in Romeo, MI",
    heroIntro:
      "Romeo homeowners and shop owners call Junk Command for junk removal in and around the historic village — furniture, appliances, garage clutter, and estate contents with upfront pricing.",
    localIntro: [
      "Romeo blends historic village streets, nearby subdivisions, and orchard-country roads that connect to Armada, Richmond, and the M-53 corridor toward Almont. Van Dyke, 32 Mile, and Main Street are the reference points most people use when they describe the property.",
      "The work here is often careful work: older homes, finished interiors, village parking, and businesses that cannot have a messy pile out front. Estate furniture, basement boxes, garage overflow, and patio sets after a downsizing are typical.",
      "If you are preparing a house for showings or clearing a shop after a remodel, [estate cleanouts](/estate-cleanout) and [furniture removal](/furniture-removal) usually overlap. We also serve [Armada](/service-areas/armada), [Richmond](/service-areas/richmond), and [Almont](/service-areas/almont).",
    ],
    featuredServiceSlugs: [...SERVICE_PRESETS.village],
    servicesIntro:
      "Romeo pickups include sofas, dining sets, [appliance removal](/appliance-removal), [garage cleanouts](/garage-cleanout), and [basement cleanouts](/basement-cleanout). Village businesses sometimes add fixtures or leftover remodel debris to the same load.",
    cleanoutHeading: "More Than Just Junk Pickup",
    cleanoutBody: [
      "Historic and village properties in Romeo need a cleanout crew that protects trim, floors, and the front of the house. Junk Command handles inherited homes, move-outs, garages, basements, and whole-property jobs with that standard.",
      "We do not operate a Romeo office. We serve Romeo. Send photos and we will tell you how the job fits our north Macomb route and what the load looks like before we arrive.",
    ],
    midCtaTitle: "Got Junk in Romeo?",
    midCtaDescription:
      "Village furniture, a packed garage, or an estate cleanout — send photos and Junk Command will quote a Romeo pickup.",
    nearbySlugs: ["armada", "richmond", "almont", "memphis"],
    faqs: [
      {
        question: "Can you work in the historic village with limited parking?",
        answer:
          "Yes. Mention village parking, alleys, or tight streets when you send photos so we can plan staging.",
      },
      {
        question: "How much does junk removal cost in Romeo?",
        answer:
          "Volume and access. Older stairs and long carries from a basement can affect the quote. Photos help us confirm it first.",
      },
      {
        question: "Do you handle estate cleanouts?",
        answer:
          "Yes. Estate and inherited-home cleanouts are a regular Romeo request. We walk the property so keepers stay.",
      },
      {
        question: "Do you take appliances?",
        answer:
          "Yes. Refrigerators, washers, dryers, and similar appliances can be combined with furniture and household junk.",
      },
      {
        question: "How soon can you schedule Romeo?",
        answer:
          "Romeo sits on our north Macomb route with Armada and Richmond. Same-day or next-day service may be available depending on the schedule.",
      },
    ],
    images: buildLocationImages(
      "Romeo",
      "the north Macomb villages",
      "village",
    ),
  },
];
