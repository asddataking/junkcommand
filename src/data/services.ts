export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  intro: string;
  description: string;
  image: string;
  imageAlt: string;
  benefits: string[];
  process: { title: string; description: string }[];
  whatWeTake: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  startingPrice?: string;
};

export const SERVICES: Service[] = [
  {
    slug: "furniture-removal",
    title: "Furniture Removal",
    shortTitle: "Furniture",
    metaTitle: "Furniture Removal Port Huron MI | Junk Command",
    metaDescription:
      "Professional furniture removal in Port Huron & St. Clair County. Sofas, beds, desks, and more hauled away fast. Free quotes. Call 810-336-5865.",
    h1: "Furniture Removal in Southeast Michigan",
    eyebrow: "Heavy Lifting Done Right",
    intro:
      "When old sofas, dressers, and dining sets are blocking your space, Junk Command hauls them out fast — no rental trucks, no strained backs, no leftover mess.",
    description:
      "Junk Command provides professional furniture removal across Port Huron, Marysville, Fort Gratiot, and Southeast Michigan. Our veteran-owned crew lifts, carries, and disposes of bulky furniture the right way — with upfront pricing and respectful service.",
    image: "/images/services/furniture-removal.webp",
    imageAlt:
      "Junk Command crew removing a sofa and furniture from a Port Huron home",
    benefits: [
      "We do all the heavy lifting — stairs and tight hallways included",
      "Upfront pricing before we load a single piece",
      "Donation and recycling when items are in usable condition",
      "Fast scheduling across St. Clair County",
    ],
    process: [
      {
        title: "Send photos or describe the load",
        description:
          "Text or upload pictures of the furniture you need removed for a fast, accurate quote.",
      },
      {
        title: "Lock in your time window",
        description:
          "We confirm pricing and schedule a pickup that fits your day.",
      },
      {
        title: "We clear it out",
        description:
          "Our crew arrives on time, protects floors and doorways, and leaves the space broom-clean.",
      },
    ],
    whatWeTake: [
      "Sofas and sectionals",
      "Beds and bed frames",
      "Dressers and armoires",
      "Dining tables and chairs",
      "Desks and office furniture",
      "Bookshelves and entertainment centers",
      "Recliners and loveseats",
      "Broken or water-damaged furniture",
    ],
    faqs: [
      {
        question: "How much does furniture removal cost?",
        answer:
          "Most single-item furniture pickups start near our $99 minimum. Larger loads are priced by volume. Send photos for an exact quote before we arrive.",
      },
      {
        question: "Do you remove furniture from upstairs?",
        answer:
          "Yes. Stairs and multi-level homes are part of the job. Tell us about access when you request a quote so we can plan the crew size.",
      },
      {
        question: "Can you donate usable furniture?",
        answer:
          "When items are clean and structurally sound, we route them to local donation partners whenever possible instead of the landfill.",
      },
    ],
    relatedSlugs: ["couch-removal", "mattress-removal", "estate-cleanout"],
    startingPrice: "$99+",
  },
  {
    slug: "appliance-removal",
    title: "Appliance Removal",
    shortTitle: "Appliances",
    metaTitle: "Appliance Removal Port Huron MI | Junk Command",
    metaDescription:
      "Fridge, washer, dryer, and stove removal in Port Huron & St. Clair County. Fast, insured appliance haul-away. Call Junk Command at 810-336-5865.",
    h1: "Appliance Removal Near You",
    eyebrow: "White Goods Gone",
    intro:
      "Old refrigerators, washers, and ranges are too heavy for most households. We disconnect guidance, haul, and dispose of appliances responsibly across Southeast Michigan.",
    description:
      "From dead refrigerators to stacked laundry pairs, Junk Command handles appliance removal with the strength and care your home deserves. Serving Port Huron, Macomb County, and surrounding communities.",
    image: "/images/services/appliance-removal.webp",
    imageAlt:
      "Junk Command removing a refrigerator and appliances from a Michigan home",
    benefits: [
      "Fridges, freezers, washers, dryers, stoves, and dishwashers",
      "Responsible disposal and recycling of scrap metal",
      "Careful movement through kitchens, basements, and laundry rooms",
      "Bundle appliances with other junk for better volume pricing",
    ],
    process: [
      {
        title: "List your appliances",
        description:
          "Tell us the type, size, and location — basement units and tight corners welcome.",
      },
      {
        title: "Get a clear quote",
        description:
          "We price the haul before arrival so there are no surprises on site.",
      },
      {
        title: "We remove and recycle",
        description:
          "Our team loads appliances and routes materials for proper disposal and scrap recycling.",
      },
    ],
    whatWeTake: [
      "Refrigerators and freezers",
      "Washers and dryers",
      "Stoves, ovens, and ranges",
      "Dishwashers",
      "Microwaves and range hoods",
      "Water heaters (drained)",
      "Window AC units",
      "Trash compactors",
    ],
    faqs: [
      {
        question: "Do I need to disconnect my appliances first?",
        answer:
          "Please unplug electric units and shut off water/gas lines when safe to do so. If you are unsure, tell us when booking — we will guide you before arrival.",
      },
      {
        question: "Can you take a fridge with food still inside?",
        answer:
          "Please empty and defrost refrigerators when possible. We can still remove them, but emptied units move faster and safer.",
      },
      {
        question: "Do you recycle appliances?",
        answer:
          "Yes. We prioritize scrap metal recycling and proper handling whenever facilities accept the material.",
      },
    ],
    relatedSlugs: ["refrigerator-removal", "electronics-recycling", "garage-cleanout"],
    startingPrice: "$99+",
  },
  {
    slug: "mattress-removal",
    title: "Mattress Removal",
    shortTitle: "Mattresses",
    metaTitle: "Mattress Removal Port Huron MI | Junk Command",
    metaDescription:
      "Mattress and box spring removal in Port Huron, Marysville & St. Clair County. Fast pickup, clean haul-away. Call 810-336-5865 for a free quote.",
    h1: "Mattress Removal in Port Huron & Beyond",
    eyebrow: "Sleep Better Without the Old Mattress",
    intro:
      "Old mattresses are awkward, heavy, and often banned from curbside pickup. Junk Command removes mattresses and box springs quickly so your bedroom is clear again.",
    description:
      "Whether you bought a new bed or are clearing a rental, our crew hauls mattresses, box springs, and frames from homes across St. Clair and Macomb Counties.",
    image: "/images/services/mattress-removal.webp",
    imageAlt: "Junk Command hauling a mattress and box spring from a home",
    benefits: [
      "Mattresses, box springs, and bed frames in one visit",
      "No waiting for bulk trash day",
      "Clean removal from bedrooms, basements, and storage",
      "Affordable single-item pricing starting near $99",
    ],
    process: [
      {
        title: "Tell us size and location",
        description:
          "King, queen, twin — upstairs or basement — we plan the path before we arrive.",
      },
      {
        title: "Schedule pickup",
        description:
          "Mattress removal is available throughout Port Huron and nearby towns — send photos for timing.",
      },
      {
        title: "We haul it away",
        description:
          "Wrapped and carried out carefully so hallways and walls stay protected.",
      },
    ],
    whatWeTake: [
      "Twin, full, queen, and king mattresses",
      "Box springs and foundations",
      "Memory foam and hybrid mattresses",
      "Bunk beds and loft beds",
      "Adjustable bed bases",
      "Cribs and toddler beds",
      "Air mattresses and frames",
      "Stained or damaged mattresses",
    ],
    faqs: [
      {
        question: "How much is mattress removal?",
        answer:
          "Most mattress pickups fall near our minimum service rate. Pairing a mattress with other junk can improve overall value. Text photos for exact pricing.",
      },
      {
        question: "Will the city take my mattress at the curb?",
        answer:
          "Many Southeast Michigan municipalities restrict mattress disposal. Professional removal avoids tickets and leftover bulk piles.",
      },
      {
        question: "Do you take stained mattresses?",
        answer:
          "Yes. We remove mattresses in any condition — stained, torn, or broken.",
      },
    ],
    relatedSlugs: ["furniture-removal", "couch-removal", "basement-cleanout"],
    startingPrice: "$99+",
  },
  {
    slug: "couch-removal",
    title: "Couch Removal",
    shortTitle: "Couches",
    metaTitle: "Couch & Sofa Removal Port Huron MI | Junk Command",
    metaDescription:
      "Couch, sofa, and sectional removal in Port Huron & St. Clair County. We haul the heavy stuff. Free quotes. Call Junk Command 810-336-5865.",
    h1: "Couch & Sofa Removal",
    eyebrow: "Sectionals & Sofas Cleared Fast",
    intro:
      "Oversized couches and stuck sectionals are our specialty. Junk Command navigates stairs, tight doors, and awkward angles so you never have to drag a sofa again.",
    description:
      "From single loveseats to massive L-shaped sectionals, we provide couch removal throughout Port Huron, Marysville, Chesterfield, and the Thumb region.",
    image: "/images/services/couch-removal.webp",
    imageAlt: "Junk Command crew carrying a sectional sofa out of a living room",
    benefits: [
      "Sofas, sectionals, recliners, and sleeper sofas",
      "Doorway and stair expertise",
      "Donation routing for clean, usable pieces",
      "Combine with other furniture for one flat volume price",
    ],
    process: [
      {
        title: "Snap a photo",
        description:
          "A quick picture of the couch and the exit path helps us quote accurately.",
      },
      {
        title: "Approve the price",
        description:
          "You get clear pricing before we show up — no surprise fees after loading.",
      },
      {
        title: "We take the couch",
        description:
          "Our team disassembles sectionals when needed and loads everything for disposal or donation.",
      },
    ],
    whatWeTake: [
      "Standard sofas and loveseats",
      "Sectionals and modular couches",
      "Recliners and theater seats",
      "Sleeper sofas and futons",
      "Outdoor patio furniture sets",
      "Office lobby couches",
      "Torn or pet-damaged sofas",
      "Leather and microfiber furniture",
    ],
    faqs: [
      {
        question: "Can you remove a sectional through a narrow door?",
        answer:
          "Usually yes. We separate sections and plan the route. Share doorway photos if you are concerned about fit.",
      },
      {
        question: "Do you remove couches from apartments?",
        answer:
          "Yes. We work in houses, apartments, and condos across our service area. Note any elevator or HOA rules when booking.",
      },
      {
        question: "What if my couch is ruined?",
        answer:
          "Condition does not matter. We haul damaged, stained, or broken couches every week.",
      },
    ],
    relatedSlugs: ["furniture-removal", "mattress-removal", "estate-cleanout"],
    startingPrice: "$99+",
  },
  {
    slug: "garage-cleanout",
    title: "Garage Cleanouts",
    shortTitle: "Garage",
    metaTitle: "Garage Cleanout Port Huron MI | Junk Command",
    metaDescription:
      "Full garage cleanouts in Port Huron, Marysville & St. Clair County. Reclaim your space in one visit. Veteran-owned. Call 810-336-5865.",
    h1: "Garage Cleanout Services",
    eyebrow: "Park in Your Garage Again",
    intro:
      "Years of tools, boxes, sports gear, and forgotten projects disappear in a single visit. Junk Command runs efficient garage cleanouts that restore usable space fast.",
    description:
      "Our Port Huron-based crew specializes in full and partial garage cleanouts across Southeast Michigan — sorting, loading, and disposing so you can finally park inside again.",
    image: "/images/services/garage-cleanout.webp",
    imageAlt:
      "Before and after style garage cleanout by Junk Command in Michigan",
    benefits: [
      "Full or partial garage clearouts",
      "We sort junk from keepers if you want guidance on-site",
      "Tools, tires, furniture, and general clutter removed",
      "Transparent volume-based pricing",
    ],
    process: [
      {
        title: "Walk us through the pile",
        description:
          "Point out what stays and what goes — or let us clear everything marked for removal.",
      },
      {
        title: "We load the truck",
        description:
          "Heavy lifting, bagging, and sweeping are included so the garage feels finished.",
      },
      {
        title: "Dispose the right way",
        description:
          "Recyclables and donation-worthy items are separated from true waste whenever possible.",
      },
    ],
    whatWeTake: [
      "Boxed clutter and storage totes",
      "Old tools and workbenches",
      "Sports equipment",
      "Tires and scrap (within limits)",
      "Lawn equipment and broken mowers",
      "Furniture stored in the garage",
      "Paint cans (acceptable condition)",
      "General household junk",
    ],
    faqs: [
      {
        question: "How long does a garage cleanout take?",
        answer:
          "Most single-car garage cleanouts finish in under two hours once we start. Larger two-car or packed garages may take longer — we quote based on volume.",
      },
      {
        question: "Do I need to bag everything first?",
        answer:
          "No. We can handle loose piles. Bagging small items helps speed things up if you want a lower labor time, but it is never required.",
      },
      {
        question: "Can you leave certain items?",
        answer:
          "Absolutely. Mark keepers clearly or walk the crew through the garage before we load.",
      },
    ],
    relatedSlugs: ["basement-cleanout", "shed-removal", "yard-debris-removal"],
    startingPrice: "Volume-based",
  },
  {
    slug: "basement-cleanout",
    title: "Basement Cleanouts",
    shortTitle: "Basement",
    metaTitle: "Basement Cleanout Port Huron MI | Junk Command",
    metaDescription:
      "Basement cleanouts in Port Huron & St. Clair County. Stairs, water damage clutter, and years of storage — cleared by Junk Command. 810-336-5865.",
    h1: "Basement Cleanout Experts",
    eyebrow: "Below-Grade Clutter Cleared",
    intro:
      "Basements collect everything you are not ready to decide on. We haul the heavy, the musty, and the forgotten — carefully up the stairs and out of your home.",
    description:
      "Junk Command performs basement cleanouts for homeowners, landlords, and estate families throughout St. Clair County and northern Macomb County.",
    image: "/images/services/basement-cleanout.webp",
    imageAlt: "Junk Command crew carrying junk up basement stairs for removal",
    benefits: [
      "Stair-safe hauling by an experienced crew",
      "Old furniture, boxes, and unfinished project piles",
      "Helpful for flood cleanups and moisture-damaged items",
      "Respectful service in lived-in family homes",
    ],
    process: [
      {
        title: "Assess the volume",
        description:
          "Photos or an on-site look let us price the cleanout accurately before work starts.",
      },
      {
        title: "Protect the path",
        description:
          "We mind railings, walls, and flooring on the way up from the basement.",
      },
      {
        title: "Leave it clear",
        description:
          "Junk is loaded and the work area is left neat so you can reclaim the space immediately.",
      },
    ],
    whatWeTake: [
      "Stored furniture and mattresses",
      "Boxes of household clutter",
      "Old carpet and padding",
      "Exercise equipment",
      "Dehumidifiers and appliances",
      "Holiday decorations you no longer want",
      "Broken shelving and cabinets",
      "General basement junk",
    ],
    faqs: [
      {
        question: "Can you clean out a wet or musty basement?",
        answer:
          "Yes. We remove water-damaged items and clutter after leaks or floods. Tell us about conditions so we bring the right gear.",
      },
      {
        question: "Do you carry items up narrow basement stairs?",
        answer:
          "Daily. Narrow stairs are common in older Port Huron and Marysville homes — we plan the crew accordingly.",
      },
      {
        question: "Will you sweep after?",
        answer:
          "We leave the removal area tidy. Full deep-cleaning is not included unless arranged separately.",
      },
    ],
    relatedSlugs: ["garage-cleanout", "estate-cleanout", "hoarder-cleanout"],
    startingPrice: "Volume-based",
  },
  {
    slug: "estate-cleanout",
    title: "Estate Cleanouts",
    shortTitle: "Estate",
    metaTitle: "Estate Cleanout Port Huron MI | Junk Command",
    metaDescription:
      "Respectful estate cleanouts in Port Huron & St. Clair County. Full-home clearing for families, executors, and realtors. Call 810-336-5865.",
    h1: "Estate Cleanout Services",
    eyebrow: "Respectful. Thorough. Local.",
    intro:
      "Settling an estate is emotional enough. Junk Command handles full-property cleanouts with dignity — clearing rooms, garages, and yards so families can move forward.",
    description:
      "We partner with families, executors, and realtors on estate cleanouts across Southeast Michigan, combining speed with careful handling of remaining belongings.",
    image: "/images/services/estate-cleanout.webp",
    imageAlt:
      "Junk Command performing a respectful estate cleanout in Southeast Michigan",
    benefits: [
      "Full-home and partial estate clearing",
      "Coordination with families and realtors",
      "Donation and discard sorting when requested",
      "Discreet, professional crews",
    ],
    process: [
      {
        title: "Walkthrough & plan",
        description:
          "We identify what stays, what is donated, and what is removed — room by room if needed.",
      },
      {
        title: "Systematic clearing",
        description:
          "Furniture, household goods, and garage items are removed on a schedule that fits closing dates.",
      },
      {
        title: "Ready for the next chapter",
        description:
          "Properties are left broom-clean and ready for sale, renovation, or transfer.",
      },
    ],
    whatWeTake: [
      "Entire household contents",
      "Furniture and mattresses",
      "Kitchen and appliance items",
      "Garage and shed contents",
      "Yard debris and outdoor furniture",
      "Electronics and TVs",
      "Basement and attic clutter",
      "Items left after estate sales",
    ],
    faqs: [
      {
        question: "How quickly can you complete an estate cleanout?",
        answer:
          "Many homes are cleared in one to two days depending on volume. We work around closing timelines whenever possible.",
      },
      {
        question: "Can you work with our realtor?",
        answer:
          "Yes. We regularly coordinate access, timing, and invoices with real estate professionals across St. Clair County.",
      },
      {
        question: "Do you help with donations?",
        answer:
          "When requested, we separate donation-worthy items and route them to local partners.",
      },
    ],
    relatedSlugs: ["foreclosure-cleanout", "hoarder-cleanout", "storage-unit-cleanout"],
    startingPrice: "Custom quote",
  },
  {
    slug: "storage-unit-cleanout",
    title: "Storage Unit Cleanouts",
    shortTitle: "Storage",
    metaTitle: "Storage Unit Cleanout Port Huron MI | Junk Command",
    metaDescription:
      "Storage unit cleanouts near Port Huron & St. Clair County. End the rental, clear the unit, reclaim your budget. Call 810-336-5865.",
    h1: "Storage Unit Cleanout",
    eyebrow: "Stop Paying for Clutter",
    intro:
      "If your storage unit has become an expensive junk drawer, we empty it fast — furniture, boxes, and forgotten projects — so you can cancel the rental.",
    description:
      "Junk Command clears storage units throughout Southeast Michigan with flexible scheduling that works around facility access hours.",
    image: "/images/services/storage-unit-cleanout.webp",
    imageAlt: "Junk Command emptying a storage unit filled with household junk",
    benefits: [
      "Full unit wipeouts or partial removals",
      "Works with most storage facility access rules",
      "Furniture, boxes, and mixed junk welcome",
      "Helps you stop monthly storage fees ASAP",
    ],
    process: [
      {
        title: "Share unit size and photos",
        description:
          "A few photos of the open unit let us quote without wasting your time on-site.",
      },
      {
        title: "Meet at the facility",
        description:
          "We arrive during your access window and load everything marked for removal.",
      },
      {
        title: "Leave it empty",
        description:
          "Sweep-out ready so you can return the unit and end the rental.",
      },
    ],
    whatWeTake: [
      "Furniture and mattresses",
      "Boxes and totes",
      "Appliances",
      "Exercise gear",
      "Business inventory leftovers",
      "Electronics",
      "Seasonal decorations",
      "General mixed junk",
    ],
    faqs: [
      {
        question: "Do you need facility approval?",
        answer:
          "You are responsible for access. We work within the facility rules and hours you provide.",
      },
      {
        question: "Can you clear a 10x20 unit in one trip?",
        answer:
          "Often yes. Extremely dense units may need additional volume — we quote honestly from photos.",
      },
      {
        question: "What if I want to keep a few items?",
        answer:
          "Mark keepers clearly or move them aside before we arrive. We only take what you designate.",
      },
    ],
    relatedSlugs: ["estate-cleanout", "garage-cleanout", "furniture-removal"],
    startingPrice: "Volume-based",
  },
  {
    slug: "hoarder-cleanout",
    title: "Hoarder Cleanouts",
    shortTitle: "Hoarder",
    metaTitle: "Hoarder Cleanout Port Huron MI | Junk Command",
    metaDescription:
      "Discreet hoarder cleanout services in Port Huron & St. Clair County. Non-judgmental crews, thorough clearing. Call Junk Command 810-336-5865.",
    h1: "Hoarder House Cleanouts",
    eyebrow: "Judgment-Free. Mission-Focused.",
    intro:
      "Hoarding situations need patience, discretion, and a strong crew. Junk Command clears homes with respect for the people involved — never shame, always results.",
    description:
      "Our team handles light to severe hoarder cleanouts across Port Huron and Southeast Michigan, coordinating with families and property managers as needed.",
    image: "/images/services/hoarder-cleanout.webp",
    imageAlt: "Discreet Junk Command crew performing a hoarder cleanout",
    benefits: [
      "Non-judgmental, professional service",
      "Multi-day projects welcome",
      "Sorting assistance when families request it",
      "Discrete trucks and respectful crews",
    ],
    process: [
      {
        title: "Confidential consultation",
        description:
          "We discuss scope, safety concerns, and goals privately before work begins.",
      },
      {
        title: "Phased clearing",
        description:
          "Large jobs are broken into manageable stages so progress stays steady and safe.",
      },
      {
        title: "Restore usable space",
        description:
          "Rooms are cleared and left ready for cleaning, repairs, or re-occupancy.",
      },
    ],
    whatWeTake: [
      "Packed rooms of household items",
      "Furniture buried under clutter",
      "Papers and recyclables in bulk",
      "Damaged goods and trash",
      "Garage and yard overflow",
      "Appliances and electronics",
      "Biohazard-adjacent items (case-by-case)",
      "Outdoor debris piles",
    ],
    faqs: [
      {
        question: "Are your crews discreet?",
        answer:
          "Yes. We treat every job with privacy and professionalism — no commentary, no judgment.",
      },
      {
        question: "Can family members help sort?",
        answer:
          "Absolutely. Many families work alongside us to save sentimental items while we haul the rest.",
      },
      {
        question: "Do you handle severe cases?",
        answer:
          "We handle a wide range of conditions. If specialized remediation is required, we will tell you upfront.",
      },
    ],
    relatedSlugs: ["estate-cleanout", "basement-cleanout", "foreclosure-cleanout"],
    startingPrice: "Custom quote",
  },
  {
    slug: "foreclosure-cleanout",
    title: "Foreclosure Cleanouts",
    shortTitle: "Foreclosure",
    metaTitle: "Foreclosure Cleanout Port Huron MI | Junk Command",
    metaDescription:
      "Fast foreclosure and eviction cleanouts in St. Clair & Macomb County. Realtor-ready properties. Call Junk Command at 810-336-5865.",
    h1: "Foreclosure & Eviction Cleanouts",
    eyebrow: "Property-Ready Fast",
    intro:
      "Banks, realtors, and investors call Junk Command when a property needs to be emptied on a deadline. We clear trash, furniture, and debris so listings can move.",
    description:
      "Foreclosure cleanouts, eviction cleanups, and vacant property clearing across Southeast Michigan — priced clearly and executed on schedule.",
    image: "/images/services/foreclosure-cleanout.webp",
    imageAlt: "Junk Command clearing a foreclosed property in Michigan",
    benefits: [
      "Deadline-driven scheduling for closings",
      "Invoicing friendly to realtors and asset managers",
      "Full interior and garage clearing",
      "Yard debris and curb-appeal junk removed",
    ],
    process: [
      {
        title: "Send access details",
        description:
          "Lockbox codes, agent contacts, and target dates keep the job moving.",
      },
      {
        title: "Clear the property",
        description:
          "We remove interior junk, abandoned furniture, and exterior debris.",
      },
      {
        title: "Broom-clean handoff",
        description:
          "Properties are left ready for contractors, cleaners, or showings.",
      },
    ],
    whatWeTake: [
      "Abandoned furniture",
      "Trash and debris",
      "Appliances left behind",
      "Garage and shed contents",
      "Yard waste piles",
      "Mattresses and carpet remnants",
      "Electronics",
      "Construction leftovers",
    ],
    faqs: [
      {
        question: "Can you invoice my brokerage?",
        answer:
          "Yes. We work with realtors, investors, and property managers and can provide detailed invoices.",
      },
      {
        question: "How fast can you turn a foreclosure?",
        answer:
          "Often within a few days of booking, depending on volume and access. Rush jobs are available when scheduling allows.",
      },
      {
        question: "Do you remove trash left on the lawn?",
        answer:
          "Yes. Exterior debris and curb piles are commonly included in foreclosure cleanouts.",
      },
    ],
    relatedSlugs: ["estate-cleanout", "construction-debris-removal", "garage-cleanout"],
    startingPrice: "Custom quote",
  },
  {
    slug: "hot-tub-removal",
    title: "Hot Tub Removal",
    shortTitle: "Hot Tubs",
    metaTitle: "Hot Tub Removal Port Huron MI | Junk Command",
    metaDescription:
      "Hot tub and spa removal in Port Huron & St. Clair County. We cut, haul, and dispose of broken or unwanted hot tubs. Call 810-336-5865.",
    h1: "Hot Tub & Spa Removal",
    eyebrow: "The Heavy Job Done Right",
    intro:
      "Dead hot tubs are a backyard eyesore and a nightmare to move. Junk Command cuts, breaks down, and hauls spas so your patio is usable again.",
    description:
      "Professional hot tub removal for homeowners across Port Huron, Marysville, Fort Gratiot, and surrounding Michigan communities.",
    image: "/images/services/hot-tub-removal.webp",
    imageAlt: "Junk Command dismantling and removing a backyard hot tub",
    benefits: [
      "In-ground surround and deck-access experience",
      "Breakdown and haul in one visit",
      "Electrical disconnect guidance before arrival",
      "Efficient single-visit cleanouts",
    ],
    process: [
      {
        title: "Drain and disconnect",
        description:
          "Please drain the tub and shut off power. We will coach you through prep when you book.",
      },
      {
        title: "Breakdown on site",
        description:
          "We cut and section the spa as needed for safe removal from tight yards.",
      },
      {
        title: "Haul and dispose",
        description:
          "Debris is loaded and taken for proper disposal — yard left clear.",
      },
    ],
    whatWeTake: [
      "Above-ground hot tubs",
      "Portable spas",
      "Swim spas (case-by-case)",
      "Broken and non-working tubs",
      "Hot tub covers and steps",
      "Pumps and equipment packs",
      "Surrounding debris",
      "Related patio junk",
    ],
    faqs: [
      {
        question: "How much does hot tub removal cost?",
        answer:
          "Most hot tub removals are quoted individually based on access, size, and whether cutting is required. Send photos for a firm price.",
      },
      {
        question: "Do I need to drain it first?",
        answer:
          "Yes — please drain the water before we arrive. It makes removal safer and faster.",
      },
      {
        question: "Can you remove a tub from a fenced backyard?",
        answer:
          "Yes. Gate width and access photos help us plan. We regularly remove tubs from tight Michigan yards.",
      },
    ],
    relatedSlugs: ["deck-removal", "shed-removal", "yard-debris-removal"],
    startingPrice: "Custom quote",
  },
  {
    slug: "shed-removal",
    title: "Shed Removal",
    shortTitle: "Sheds",
    metaTitle: "Shed Removal Port Huron MI | Junk Command",
    metaDescription:
      "Old shed removal in Port Huron & St. Clair County. We demolish and haul backyard sheds fast. Free quotes. Call 810-336-5865.",
    h1: "Shed Demolition & Removal",
    eyebrow: "Backyard Structures Cleared",
    intro:
      "Rotting sheds and unused storage buildings steal yard space. We demolish and haul them so you can reclaim your property without renting equipment.",
    description:
      "Junk Command provides shed removal and light demolition across St. Clair County, Macomb County, and nearby Southeast Michigan towns.",
    image: "/images/services/shed-removal.webp",
    imageAlt: "Junk Command demolishing and hauling away an old backyard shed",
    benefits: [
      "Wood and metal shed tear-down",
      "Contents removal available in the same visit",
      "Concrete pad leave-in or discuss separately",
      "Clean haul-away of all debris",
    ],
    process: [
      {
        title: "Photo the shed",
        description:
          "Size, material, and yard access determine the quote and crew plan.",
      },
      {
        title: "Demolish safely",
        description:
          "We take the structure down methodically and protect nearby landscaping when possible.",
      },
      {
        title: "Haul every board",
        description:
          "Debris leaves with us — no leftover pile for you to deal with.",
      },
    ],
    whatWeTake: [
      "Wood storage sheds",
      "Metal garden sheds",
      "Plastic resin sheds",
      "Shed contents and shelving",
      "Playhouses (case-by-case)",
      "Lean-tos and small outbuildings",
      "Collapsed or storm-damaged sheds",
      "Associated yard debris",
    ],
    faqs: [
      {
        question: "Do you remove the concrete pad?",
        answer:
          "Standard shed removal covers the structure and debris. Pad or foundation removal can be quoted separately.",
      },
      {
        question: "Can you empty the shed first?",
        answer:
          "Yes. Many customers combine shed contents cleanout with demolition for one efficient visit.",
      },
      {
        question: "Are permits required?",
        answer:
          "Most residential shed removals do not require a permit, but HOA or local rules vary — we can discuss your situation when you book.",
      },
    ],
    relatedSlugs: ["deck-removal", "yard-debris-removal", "garage-cleanout"],
    startingPrice: "Custom quote",
  },
  {
    slug: "deck-removal",
    title: "Deck Removal",
    shortTitle: "Decks",
    metaTitle: "Deck Removal Port Huron MI | Junk Command",
    metaDescription:
      "Deck demolition and removal in Port Huron & St. Clair County. Rotten decks hauled away. Call Junk Command 810-336-5865 for a free quote.",
    h1: "Deck Demolition & Removal",
    eyebrow: "Unsafe Decks Gone",
    intro:
      "When a deck is rotting, warped, or ready for replacement, we tear it down and haul every board — preparing your yard for the next project.",
    description:
      "Professional deck removal for Michigan homeowners who need safe, thorough demolition without managing a dumpster themselves.",
    image: "/images/services/deck-removal.webp",
    imageAlt: "Junk Command tearing down and removing a wooden deck",
    benefits: [
      "Wood deck tear-down and haul-away",
      "Railings, stairs, and framing included",
      "Coordination with rebuild timelines",
      "Cleaner site for your contractor",
    ],
    process: [
      {
        title: "Estimate from photos",
        description:
          "Share size, height, and access. We return a clear demolition quote.",
      },
      {
        title: "Demo day",
        description:
          "Boards, joists, and railings come down systematically for safe removal.",
      },
      {
        title: "Debris out",
        description:
          "All wood waste is loaded and hauled — site left ready for the next step.",
      },
    ],
    whatWeTake: [
      "Elevated wood decks",
      "Ground-level decks",
      "Stairs and railings",
      "Privacy screens attached to decks",
      "Composite decking (case-by-case)",
      "Old patio furniture on the deck",
      "Hot tubs sitting on decks",
      "Related lumber scrap",
    ],
    faqs: [
      {
        question: "Do you remove footings and posts in the ground?",
        answer:
          "Above-grade structure removal is standard. Below-grade footings can be discussed as an add-on depending on depth and access.",
      },
      {
        question: "Can you remove a deck with a hot tub on it?",
        answer:
          "Yes — we often combine hot tub removal and deck demolition into one project.",
      },
      {
        question: "Will you protect my siding and landscaping?",
        answer:
          "We work carefully around the home. Mention delicate landscaping when booking so we can plan protection.",
      },
    ],
    relatedSlugs: ["hot-tub-removal", "shed-removal", "construction-debris-removal"],
    startingPrice: "Custom quote",
  },
  {
    slug: "construction-debris-removal",
    title: "Construction Debris Removal",
    shortTitle: "Construction",
    metaTitle: "Construction Debris Removal Port Huron MI | Junk Command",
    metaDescription:
      "Construction and renovation debris removal in Port Huron & St. Clair County. Post-demo cleanup without the dumpster hassle. 810-336-5865.",
    h1: "Construction Debris Removal",
    eyebrow: "Job-Site Cleanup",
    intro:
      "Renovations create mountains of scrap. Skip the dumpster rental — Junk Command hauls construction debris on your schedule so trades can keep moving.",
    description:
      "We remove renovation debris, demo scrap, and job-site junk for homeowners and contractors throughout Southeast Michigan.",
    image: "/images/services/construction-debris-removal.webp",
    imageAlt: "Junk Command loading construction debris after a home renovation",
    benefits: [
      "Drywall, lumber, flooring, and fixture scrap",
      "Flexible pickup for phased renovations",
      "Contractor-friendly scheduling",
      "No long-term dumpster sitting in your driveway",
    ],
    process: [
      {
        title: "Pile it or point to it",
        description:
          "Stack debris in an accessible spot or show us the work area — we load it all.",
      },
      {
        title: "We haul the scrap",
        description:
          "Heavy materials are loaded efficiently so your project stays on track.",
      },
      {
        title: "Site cleared",
        description:
          "Crews can return to work without navigating leftover piles.",
      },
    ],
    whatWeTake: [
      "Drywall and plaster",
      "Lumber and framing scrap",
      "Tile and flooring remnants",
      "Cabinets and countertops",
      "Doors and windows",
      "Insulation (bagged)",
      "Fixture tear-outs",
      "General renovation junk",
    ],
    faqs: [
      {
        question: "Is this cheaper than a dumpster?",
        answer:
          "For many one-time cleanups, yes — especially when you do not want a container blocking the driveway for days.",
      },
      {
        question: "Do you take concrete and brick?",
        answer:
          "Limited amounts may be accepted depending on weight. Tell us what you have so we can quote accurately.",
      },
      {
        question: "Can contractors set up recurring pickups?",
        answer:
          "Yes. Talk to us about repeat job-site hauls across your Southeast Michigan projects.",
      },
    ],
    relatedSlugs: ["yard-debris-removal", "deck-removal", "foreclosure-cleanout"],
    startingPrice: "Volume-based",
  },
  {
    slug: "yard-debris-removal",
    title: "Yard Debris Removal",
    shortTitle: "Yard Debris",
    metaTitle: "Yard Debris Removal Port Huron MI | Junk Command",
    metaDescription:
      "Yard debris and landscaping waste removal in Port Huron & St. Clair County. Storm piles, brush, and outdoor junk hauled away. 810-336-5865.",
    h1: "Yard Debris Removal",
    eyebrow: "Outdoor Clutter Cleared",
    intro:
      "Storm fall, landscaping leftovers, and backyard junk piles do not belong on your curb for weeks. We haul yard debris so your property looks cared for again.",
    description:
      "Junk Command removes yard debris, outdoor junk, and landscaping waste across Port Huron, the Blue Water area, and surrounding counties.",
    image: "/images/services/yard-debris-removal.webp",
    imageAlt: "Junk Command hauling yard debris and brush from a Michigan property",
    benefits: [
      "Storm debris and fallen limb piles",
      "Old patio furniture and outdoor junk",
      "Faster than waiting for municipal bulk pickup",
      "Bundle with brush removal for a full yard reset",
    ],
    process: [
      {
        title: "Show us the pile",
        description:
          "Photos of the debris heap help us bring the right truck and crew size.",
      },
      {
        title: "We load from the yard",
        description:
          "No need to drag everything to the curb — we come to the pile.",
      },
      {
        title: "Property looks finished",
        description:
          "Debris leaves with us so mowing and outdoor living can resume.",
      },
    ],
    whatWeTake: [
      "Branch and brush piles",
      "Leaves and bagged yard waste",
      "Old fencing sections",
      "Patio furniture",
      "Planters and pots",
      "Play sets (case-by-case)",
      "Storm-damaged materials",
      "General outdoor junk",
    ],
    faqs: [
      {
        question: "Do you take grass clippings?",
        answer:
          "Bagged yard waste is generally fine. Very large volumes of loose clippings may need special handling — ask when booking.",
      },
      {
        question: "Can you haul after a storm?",
        answer:
          "Yes. We prioritize storm debris pickups when scheduling allows across St. Clair County.",
      },
      {
        question: "Do I need to cut branches to a certain length?",
        answer:
          "Cutting helps us pack the truck, but it is not required. We can manage most piles as-is.",
      },
    ],
    relatedSlugs: ["brush-removal", "shed-removal", "hot-tub-removal"],
    startingPrice: "Volume-based",
  },
  {
    slug: "brush-removal",
    title: "Brush Removal",
    shortTitle: "Brush",
    metaTitle: "Brush Removal Port Huron MI | Junk Command",
    metaDescription:
      "Brush and branch pile removal in Port Huron & St. Clair County. Land clearing leftovers hauled fast. Call Junk Command 810-336-5865.",
    h1: "Brush & Branch Pile Removal",
    eyebrow: "Clear the Lot",
    intro:
      "After tree work or lot clearing, brush piles linger. Junk Command loads branches and brush so your property is clean without burning or waiting on city pickup.",
    description:
      "Brush removal services for homeowners and property managers throughout Southeast Michigan — efficient loading and complete haul-away.",
    image: "/images/services/brush-removal.webp",
    imageAlt: "Junk Command loading a large brush and branch pile for removal",
    benefits: [
      "Branch and brush pile haul-away",
      "Post-tree-service cleanup",
      "No burn permits or weekend bonfires needed",
      "Combine with general yard debris",
    ],
    process: [
      {
        title: "Estimate the pile",
        description:
          "A photo with something for scale (fence, truck, person) helps us quote volume.",
      },
      {
        title: "Load it up",
        description:
          "We pack brush efficiently to maximize each haul.",
      },
      {
        title: "Leave the ground clear",
        description:
          "Your yard or lot is left free of the pile you hired us to erase.",
      },
    ],
    whatWeTake: [
      "Branch piles",
      "Shrub and hedge trimmings",
      "Storm-fallen limbs",
      "Land-clearing brush",
      "Small logs (reasonable diameter)",
      "Mixed yard brush",
      "Bagged brush",
      "Associated leafy debris",
    ],
    faqs: [
      {
        question: "Do you chip brush on site?",
        answer:
          "We haul brush away rather than chip on site. If you need chipping, ask and we can discuss options.",
      },
      {
        question: "Is there a size limit on logs?",
        answer:
          "Large diameter trunks may be limited by weight. Share photos so we can confirm what we can take.",
      },
      {
        question: "Can you access a backyard pile?",
        answer:
          "Yes, as long as we can reach it with our equipment path. Gate width details help.",
      },
    ],
    relatedSlugs: ["yard-debris-removal", "shed-removal", "construction-debris-removal"],
    startingPrice: "Volume-based",
  },
  {
    slug: "electronics-recycling",
    title: "Electronics Recycling",
    shortTitle: "Electronics",
    metaTitle: "Electronics Recycling & Removal Port Huron MI | Junk Command",
    metaDescription:
      "Electronics removal and recycling in Port Huron & St. Clair County. TVs, computers, and e-waste hauled responsibly. Call 810-336-5865.",
    h1: "Electronics Removal & Recycling",
    eyebrow: "E-Waste Done Right",
    intro:
      "Old TVs, computers, and printers should not sit in the garage forever. We remove electronics and route them toward responsible recycling channels.",
    description:
      "Junk Command helps Southeast Michigan households clear e-waste piles with convenient pickup and responsible handling.",
    image: "/images/services/electronics-recycling.webp",
    imageAlt: "Junk Command collecting electronics for responsible recycling",
    benefits: [
      "TVs, monitors, computers, and peripherals",
      "Convenient home pickup",
      "Bundle with other junk for one visit",
      "Better than curbside abandonment",
    ],
    process: [
      {
        title: "List your electronics",
        description:
          "Note TV sizes and quantities so we can quote and prepare.",
      },
      {
        title: "We pick up",
        description:
          "Items are carried out and loaded — no need to lift heavy CRT TVs yourself.",
      },
      {
        title: "Responsible routing",
        description:
          "Electronics are directed toward appropriate recycling or disposal pathways.",
      },
    ],
    whatWeTake: [
      "Flat-screen and CRT TVs",
      "Computer towers and laptops",
      "Monitors and printers",
      "Stereos and speakers",
      "Gaming consoles",
      "DVD and media players",
      "Cables and power supplies (boxed)",
      "Office electronics",
    ],
    faqs: [
      {
        question: "Do you wipe hard drives?",
        answer:
          "Please remove or destroy sensitive data before pickup. We can discuss handling, but data security is the owner's responsibility.",
      },
      {
        question: "Are there extra fees for TVs?",
        answer:
          "Large TVs and CRTs may affect pricing due to handling and disposal costs. Photos help us quote accurately.",
      },
      {
        question: "Can electronics be part of a garage cleanout?",
        answer:
          "Yes — e-waste is commonly included in larger cleanouts.",
      },
    ],
    relatedSlugs: ["tv-removal", "appliance-removal", "garage-cleanout"],
    startingPrice: "$99+",
  },
  {
    slug: "tv-removal",
    title: "TV Removal",
    shortTitle: "TVs",
    metaTitle: "TV Removal Port Huron MI | Junk Command",
    metaDescription:
      "TV removal in Port Huron & St. Clair County. Big screens and old CRTs hauled away. Fast service from Junk Command. Call 810-336-5865.",
    h1: "TV Removal Service",
    eyebrow: "Big Screens Out",
    intro:
      "Wall-mounted TVs and bulky CRTs are awkward to transport. We remove televisions of all sizes so upgrades do not leave old screens in the spare room.",
    description:
      "Fast TV removal across Port Huron, Marysville, Chesterfield, and the greater Blue Water region.",
    image: "/images/services/tv-removal.webp",
    imageAlt: "Junk Command removing a large flat-screen TV from a living room",
    benefits: [
      "Flat screens and CRT televisions",
      "Wall-mount removal assistance when accessible",
      "Flexible scheduling when openings are available",
      "Add stands, soundbars, and electronics in one trip",
    ],
    process: [
      {
        title: "Tell us the size",
        description:
          "Screen size and whether it is wall-mounted affects the plan and quote.",
      },
      {
        title: "We take it down and out",
        description:
          "Our crew handles the awkward carry so you do not risk injury or damaged walls.",
      },
      {
        title: "Proper disposal path",
        description:
          "TVs are removed for appropriate electronics handling — not left at the curb.",
      },
    ],
    whatWeTake: [
      "LED and LCD TVs",
      "Plasma screens",
      "CRT tube televisions",
      "TV stands and consoles",
      "Soundbars and speakers",
      "Cable boxes and receivers",
      "Projectors",
      "Broken or non-working TVs",
    ],
    faqs: [
      {
        question: "Will you unmount my TV?",
        answer:
          "When safely accessible, yes. Please have power disconnected. Complex custom mounts may need your input.",
      },
      {
        question: "Do you take broken TVs?",
        answer:
          "Yes. Working or not, we remove them.",
      },
      {
        question: "Can I add a TV to a furniture pickup?",
        answer:
          "Absolutely — combining items usually improves overall value versus multiple trips.",
      },
    ],
    relatedSlugs: ["electronics-recycling", "furniture-removal", "appliance-removal"],
    startingPrice: "$99+",
  },
  {
    slug: "refrigerator-removal",
    title: "Refrigerator Removal",
    shortTitle: "Refrigerators",
    metaTitle: "Refrigerator Removal Port Huron MI | Junk Command",
    metaDescription:
      "Refrigerator and freezer removal in Port Huron & St. Clair County. Heavy appliance haul-away done right. Call Junk Command 810-336-5865.",
    h1: "Refrigerator & Freezer Removal",
    eyebrow: "The Heaviest Appliance",
    intro:
      "Fridges and freezers are among the hardest items to move. Junk Command extracts them from kitchens, garages, and basements — then hauls them for proper disposal.",
    description:
      "Refrigerator removal for homeowners and landlords across St. Clair County and northern Macomb County, with careful handling through tight spaces.",
    image: "/images/services/refrigerator-removal.webp",
    imageAlt: "Junk Command crew removing a refrigerator from a kitchen",
    benefits: [
      "Kitchen, garage, and basement fridge removal",
      "Side-by-sides, top-freezers, and chest freezers",
      "Scrap and recycling-minded disposal",
      "Pair with other appliance removals",
    ],
    process: [
      {
        title: "Empty and unplug",
        description:
          "Please empty food and unplug the unit. Defrosting helps prevent water spills.",
      },
      {
        title: "We navigate the path",
        description:
          "Doors, floors, and corners are protected as we roll the fridge out.",
      },
      {
        title: "Gone the same visit",
        description:
          "The appliance leaves on our truck — your space is immediately freer.",
      },
    ],
    whatWeTake: [
      "Standard refrigerators",
      "Side-by-side and French door fridges",
      "Mini fridges",
      "Chest freezers",
      "Upright freezers",
      "Garage fridges",
      "Commercial units (case-by-case)",
      "Non-working refrigerators",
    ],
    faqs: [
      {
        question: "Do you remove the doors for tight exits?",
        answer:
          "When needed, yes. We come prepared for tight Michigan ranch and older-home doorways.",
      },
      {
        question: "Is freon handling included?",
        answer:
          "We route refrigerators through proper disposal channels that address refrigerant requirements.",
      },
      {
        question: "Can you take a fridge from the basement?",
        answer:
          "Yes — basement refrigerator removal is a common request. Share stair photos for the best quote.",
      },
    ],
    relatedSlugs: ["appliance-removal", "electronics-recycling", "basement-cleanout"],
    startingPrice: "$99+",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}

export function getRelatedServices(service: Service): Service[] {
  return service.relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => Boolean(s));
}

export function getFeaturedServices(): Service[] {
  const featured = [
    "garage-cleanout",
    "estate-cleanout",
    "furniture-removal",
    "appliance-removal",
    "hot-tub-removal",
    "construction-debris-removal",
  ];
  return featured
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => Boolean(s));
}
