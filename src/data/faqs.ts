export type Faq = {
  id: string;
  question: string;
  answer: string;
  category:
    | "pricing"
    | "services"
    | "scheduling"
    | "process"
    | "areas"
    | "general";
};

export const FAQ_CATEGORIES: { id: Faq["category"]; label: string }[] = [
  { id: "pricing", label: "Pricing" },
  { id: "services", label: "Services" },
  { id: "scheduling", label: "Scheduling" },
  { id: "process", label: "How It Works" },
  { id: "areas", label: "Service Areas" },
  { id: "general", label: "General" },
];

export const FAQS: Faq[] = [
  {
    id: "cost-how-much",
    question: "How much does junk removal cost with Junk Command?",
    answer:
      "Junk Command prices by volume of space your items take in our truck, not by the hour. Most jobs start at our $99 minimum pickup, and larger loads are quoted upfront before we load anything. Text photos to 810-336-5865 for a fast, accurate estimate.",
    category: "pricing",
  },
  {
    id: "cost-minimum",
    question: "What is Junk Command’s minimum pickup price?",
    answer:
      "Our minimum junk removal rate is $99 for small loads and single-item pickups in the Port Huron area. If your pile is larger than a minimum load, we switch to volume pricing so you only pay for the space you use. You’ll always know the price before we start.",
    category: "pricing",
  },
  {
    id: "cost-volume",
    question: "How does volume pricing work?",
    answer:
      "Volume pricing is based on how much of our trailer or truck your junk fills — not how heavy each piece is. A few bulky couches can cost more than a pile of light boxes if they take more space. Junk Command quotes from photos or an on-site look so there are no surprises.",
    category: "pricing",
  },
  {
    id: "cost-free-quote",
    question: "Is the quote really free?",
    answer:
      "Yes. Junk Command provides free junk removal quotes with no obligation. Call or text 810-336-5865, send a few photos of what you need hauled, and we’ll reply with clear pricing. You only pay if you book the job.",
    category: "pricing",
  },
  {
    id: "cost-payment",
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit and debit cards, cash, and common digital payments after the job is complete. Payment is due once your junk is loaded and your space is clear. Junk Command never asks for full payment before we arrive.",
    category: "pricing",
  },
  {
    id: "cost-hidden-fees",
    question: "Are there hidden fees or extra charges?",
    answer:
      "No. Your quoted price covers labor, loading, hauling, and responsible disposal unless we discuss something unusual in advance. Extra charges only come up for items we flagged ahead of time — like certain hazardous materials we cannot take. If conditions change on site, we update you before loading.",
    category: "pricing",
  },
  {
    id: "cost-stairs",
    question: "Do stairs or hard-to-reach items cost more?",
    answer:
      "Stairs and tight access are a normal part of junk removal for Junk Command, and most standard stair jobs are included in the volume quote. Extremely difficult access or multi-level commercial moves may affect pricing, so tell us about stairs, elevators, or long carries when you request a quote.",
    category: "pricing",
  },
  {
    id: "cost-hot-tub",
    question: "How much does hot tub removal cost?",
    answer:
      "Hot tub removal is priced based on size, location, and whether the tub needs cut-down or disconnect help. Many residential hot tubs fall above the $99 minimum because of bulk and weight. Send photos and note access from the yard or deck so Junk Command can give you an exact quote.",
    category: "pricing",
  },
  {
    id: "cost-mattress",
    question: "How much does mattress removal cost?",
    answer:
      "Single mattress and box spring pickups often land near our $99 minimum, especially when access is straightforward. Pairing a mattress with other junk can improve overall value under volume pricing. Text pictures to 810-336-5865 for a firm price before we roll out.",
    category: "pricing",
  },
  {
    id: "services-what-taken",
    question: "What kinds of junk does Junk Command take?",
    answer:
      "We haul furniture, appliances, mattresses, garage clutter, yard waste, construction debris, hot tubs, sheds, and general household junk. Estate cleanouts, basement clearouts, and commercial cleanups are all part of what we do. If you are unsure about an item, send a photo and we will tell you whether we can take it.",
    category: "services",
  },
  {
    id: "services-hot-tub",
    question: "Do you remove hot tubs?",
    answer:
      "Yes. Junk Command specializes in hot tub and spa removal across Port Huron and St. Clair County. We handle the heavy lifting, break-down when needed, and haul-away so you do not need a rental truck or a weekend of wrestling with a dead spa. Call 810-336-5865 to schedule.",
    category: "services",
  },
  {
    id: "services-shed",
    question: "Can you remove old sheds?",
    answer:
      "Yes. We remove old sheds, playhouses, and similar backyard structures, including light demolition when needed. Junk Command clears the debris and hauls it away so your yard is ready for a new build or open space. Photos of the shed and access path help us quote accurately.",
    category: "services",
  },
  {
    id: "services-appliances",
    question: "Do you haul away old appliances?",
    answer:
      "Absolutely. Refrigerators, washers, dryers, stoves, dishwashers, and similar appliances are a core Junk Command service. We disconnect when it is safe and appropriate, protect doorways, and recycle whenever possible. Bundle multiple appliances for better volume pricing.",
    category: "services",
  },
  {
    id: "services-mattresses",
    question: "Will you pick up mattresses and box springs?",
    answer:
      "Yes. Mattress removal is one of our most requested single-item jobs in Port Huron and nearby towns. We haul mattresses, box springs, and bed frames from bedrooms, basements, and garages. Send photos for a fast quote and the soonest available window.",
    category: "services",
  },
  {
    id: "services-furniture",
    question: "Can you remove sofas, dressers, and other furniture?",
    answer:
      "Yes. Junk Command removes sofas, sectionals, recliners, dressers, tables, desks, and broken furniture of almost every kind. Stairs and tight hallways are included in the normal workflow. Usable pieces may be donated when condition allows.",
    category: "services",
  },
  {
    id: "services-garage",
    question: "Do you do full garage cleanouts?",
    answer:
      "Garage cleanouts are a Junk Command specialty. Point to what goes, keep what stays, and our crew loads the rest — tools, boxes, tires, furniture, and years of overflow. Most single-car garages finish in a couple of hours once we start.",
    category: "services",
  },
  {
    id: "services-estate",
    question: "Do you handle estate cleanouts?",
    answer:
      "Yes. We provide respectful estate and property cleanouts for families, executors, and realtors throughout St. Clair and Macomb Counties. Junk Command works room by room, separates donation-worthy items when possible, and keeps communication clear during a difficult time.",
    category: "services",
  },
  {
    id: "services-commercial",
    question: "Do you take commercial junk removal jobs?",
    answer:
      "Yes. Junk Command handles office cleanouts, retail clearances, warehouse decluttering, and light commercial debris jobs. We can work around business hours when needed and invoice as appropriate. Call 810-336-5865 to discuss volume, access, and timing.",
    category: "services",
  },
  {
    id: "services-construction",
    question: "Can you haul construction and renovation debris?",
    answer:
      "Yes. We remove drywall, lumber scraps, flooring, cabinets, and other post-renovation debris from homes and job sites. Junk Command is a flexible alternative to leaving a dumpster on your driveway for days. Hazardous materials like asbestos must be handled by specialty contractors — ask us if you are unsure.",
    category: "services",
  },
  {
    id: "services-not-taken",
    question: "What won’t Junk Command take?",
    answer:
      "We cannot accept hazardous waste, liquid chemicals, paint, oil, gasoline, propane tanks, asbestos, medical waste, or other regulated materials. If you're unsure, just ask—we're happy to help you find the proper disposal option. Text a photo to 810-336-5865 and we will tell you the safest next step.",
    category: "services",
  },
  {
    id: "scheduling-availability",
    question: "How quickly can you schedule a junk removal pickup?",
    answer:
      "We aim to get you the soonest available window that fits our route, but timing is never guaranteed until we confirm it. Call or text 810-336-5865 with photos and your address — we will tell you what openings we have and lock in a clear arrival window.",
    category: "scheduling",
  },
  {
    id: "scheduling-weekends",
    question: "Do you work weekends?",
    answer:
      "Yes. We run Saturday appointments and can schedule Sunday by appointment when demand and crew availability allow. Weekend junk removal is popular for garage cleanouts and move-outs, so booking ahead helps. Reach out and we will find a window that fits.",
    category: "scheduling",
  },
  {
    id: "scheduling-hours",
    question: "What are Junk Command’s hours?",
    answer:
      "We typically serve customers Monday through Friday from 7:00 AM to 7:00 PM and Saturdays from 8:00 AM to 5:00 PM, with Sunday available by appointment. Quote requests by text are answered quickly during business hours. If you need an early or late window, ask — we try to accommodate.",
    category: "scheduling",
  },
  {
    id: "scheduling-booking",
    question: "How do I book a junk removal appointment?",
    answer:
      "Booking is simple: call or text 810-336-5865, use our online booking form, or request a quote with photos. Junk Command confirms pricing, then locks in a time window that works for you. You will get a confirmation so you know when the crew is coming.",
    category: "scheduling",
  },
  {
    id: "scheduling-cancellation",
    question: "What is your cancellation policy?",
    answer:
      "We understand plans change. Please cancel or reschedule as soon as you can so we can free the slot for another customer. Reasonable notice keeps things fair for everyone; last-minute no-shows may affect future booking priority. Just call or text 810-336-5865 and we will help.",
    category: "scheduling",
  },
  {
    id: "scheduling-time-window",
    question: "Will you give me an exact arrival time?",
    answer:
      "We schedule arrival windows rather than a single minute-on-the-clock time, because load sizes and traffic vary. Junk Command texts when we are on the way so you are not left guessing. If you have a hard deadline, tell us when you book and we will plan accordingly.",
    category: "scheduling",
  },
  {
    id: "scheduling-weather",
    question: "Do you still show up in bad weather?",
    answer:
      "Light rain and typical Michigan weather rarely stop a Junk Command job. Severe storms, ice, or unsafe conditions may delay a visit for everyone’s safety. If weather looks risky, we will contact you to reschedule promptly.",
    category: "scheduling",
  },
  {
    id: "process-photos",
    question: "Can I text photos for a quote?",
    answer:
      "Yes — and it is the fastest way to get accurate pricing. Text clear photos of the junk pile, plus a shot of access (driveway, stairs, or side gate), to 810-336-5865. Junk Command reviews the volume and replies with an upfront quote, often within minutes during business hours.",
    category: "process",
  },
  {
    id: "process-home",
    question: "Do I need to be home during pickup?",
    answer:
      "Someone 18 or older should be available to confirm what goes and approve the final price before we load. If you cannot be there, we can sometimes work from written authorization and clear photos — ask us ahead of time. Locked gates or indoor items usually require on-site access.",
    category: "process",
  },
  {
    id: "process-prep",
    question: "How should I prepare for junk removal day?",
    answer:
      "Separate keepers from trash, unlock gates, and clear a path to the items when you can. Pets should be secured, and fragile valuables nearby should be moved aside. Junk Command does the heavy lifting — a little prep just helps us work faster and protect your property.",
    category: "process",
  },
  {
    id: "process-recycle",
    question: "Do you recycle what you haul?",
    answer:
      "Yes, whenever it is practical. Appliances, metals, and certain materials are routed for recycling instead of the landfill. Junk Command prioritizes responsible disposal so your cleanout is better for Southeast Michigan, not just faster for you.",
    category: "process",
  },
  {
    id: "process-donate",
    question: "Will you donate usable items?",
    answer:
      "When furniture, household goods, or other items are in good, usable condition, we make every effort to donate them to local partners. Donation depends on condition, demand, and what organizations can accept that day. Mention donation goals when you book so we can plan the load.",
    category: "process",
  },
  {
    id: "process-labor",
    question: "Do you do all the lifting and loading?",
    answer:
      "Yes. You point, we haul. Junk Command’s crew lifts, carries, and loads everything we agree to remove — including stairs and awkward corners. You do not need to rent a truck, recruit friends, or risk your back.",
    category: "process",
  },
  {
    id: "process-how-long",
    question: "How long does a typical junk removal take?",
    answer:
      "Many single-item and small pile jobs finish in under an hour. Full garage, basement, or estate cleanouts take longer depending on volume and access. Junk Command works efficiently so you get your space back the same visit whenever possible.",
    category: "process",
  },
  {
    id: "process-broom-clean",
    question: "Do you leave the area broom-clean?",
    answer:
      "We sweep up debris related to the items we remove and leave the work area tidy. We are not a full deep-cleaning service, but you should not be left with a trail of junk scraps. Our goal is a clear space you can use right away.",
    category: "process",
  },
  {
    id: "process-insurance",
    question: "Are you insured?",
    answer:
      "Yes. Junk Command carries insurance for peace of mind while we work on your property. Our veteran-owned crew is trained to protect floors, walls, and doorways during removal. If you need proof of insurance for a property manager or HOA, just ask.",
    category: "process",
  },
  {
    id: "areas-port-huron",
    question: "Where is Junk Command based?",
    answer:
      "Junk Command is a Port Huron, Michigan junk removal company serving St. Clair County and nearby communities. Being local means shorter response times and crews that know the area’s neighborhoods and roads. Call 810-336-5865 for service near you.",
    category: "areas",
  },
  {
    id: "areas-st-clair",
    question: "Do you serve all of St. Clair County?",
    answer:
      "Yes. We regularly serve Port Huron, Marysville, Fort Gratiot, Kimball, St. Clair, Marine City, Algonac, and surrounding St. Clair County towns. If your address is in the county, odds are strong that Junk Command can reach you. Text your city with photos for confirmation.",
    category: "areas",
  },
  {
    id: "areas-macomb",
    question: "Do you serve Macomb County?",
    answer:
      "Yes. Junk Command provides junk removal in northern and nearby Macomb County communities such as Richmond, Romeo, Armada, Lenox Township, New Baltimore, Chesterfield, Memphis, and surrounding areas. Travel and timing depend on the day’s route. Reach out with your address and we will confirm coverage and availability.",
    category: "areas",
  },
  {
    id: "areas-marysville",
    question: "Do you remove junk in Marysville and Fort Gratiot?",
    answer:
      "Absolutely. Marysville and Fort Gratiot are core Junk Command service areas just minutes from Port Huron. Garage cleanouts, appliance haul-away, and furniture removal are especially common there.",
    category: "areas",
  },
  {
    id: "areas-how-far",
    question: "How far will you travel for a junk removal job?",
    answer:
      "We focus on Port Huron, St. Clair County, and nearby Macomb County communities where we can deliver fast, reliable service. Larger volume jobs farther out may still work depending on scheduling. Share your city and load details and Junk Command will let you know.",
    category: "areas",
  },
  {
    id: "general-veteran",
    question: "Is Junk Command veteran-owned?",
    answer:
      "Yes. Junk Command is a veteran-owned junk removal company based in Port Huron, MI. That background shows up in how we show up — on time, mission-focused, and respectful of your property. Supporting a local veteran-owned business means your clutter fight stays in the community.",
    category: "general",
  },
  {
    id: "general-luna",
    question: "Who is Luna?",
    answer:
      "Luna is Junk Command’s Blue Heeler mascot and the face of our K-9 Cleanup Unit — a friendly reminder that we take clutter seriously without taking ourselves too seriously. You may see her on our branding and around the crew. She represents loyalty, energy, and a job done right.",
    category: "general",
  },
  {
    id: "general-why-choose",
    question: "Why choose Junk Command over a dumpster rental?",
    answer:
      "A dumpster sits on your driveway for days and still leaves you to do the heavy lifting. Junk Command arrives, loads everything, and leaves with the mess in one visit. Upfront volume pricing and donation/recycling options make it a cleaner, easier alternative for many Port Huron homes.",
    category: "general",
  },
  {
    id: "general-eco",
    question: "Is junk removal eco-friendly with Junk Command?",
    answer:
      "We divert as much as we can through donation and recycling before anything goes to the landfill. Metals, appliances, and usable household goods get a second life when condition allows. Choosing Junk Command means a faster cleanout with a more responsible disposal path.",
    category: "general",
  },
  {
    id: "general-contact",
    question: "What is the best way to reach Junk Command?",
    answer:
      "Call or text 810-336-5865 — texting photos is the quickest path to a quote. You can also email info@junkcommand.com or use the booking form on getjunkcommand.com. We respond fast during business hours across Port Huron and St. Clair County.",
    category: "general",
  },
  {
    id: "general-landlords",
    question: "Do you work with landlords and property managers?",
    answer:
      "Yes. Junk Command regularly clears rental turnovers, eviction leftovers, and storage pileups for landlords and managers. We can coordinate access, provide clear pricing, and move quickly between tenants. Ask about commercial-friendly scheduling when you call.",
    category: "general",
  },
  {
    id: "general-hoa",
    question: "Can you work within HOA or condo rules?",
    answer:
      "We are used to community rules around parking, elevator use, and quiet hours. Tell Junk Command about HOA or condo requirements when you book so we can plan load-out cleanly. Proof of insurance is available when property management requests it.",
    category: "general",
  },
  {
    id: "general-same-price",
    question: "Is the price the same if I add more junk on pickup day?",
    answer:
      "Your quote covers the volume we estimated from photos or our walkthrough. If you add a significant amount on site, we will recalculate before loading the extras so you stay in control. Small surprises are usually easy to fold into the quote with a quick conversation.",
    category: "general",
  },
  {
    id: "general-tip",
    question: "Is tipping expected?",
    answer:
      "Tips are never required. Many customers tip when the crew goes above and beyond, but Junk Command’s quoted price already covers professional service. A kind review after a great cleanout means just as much to our Port Huron team.",
    category: "general",
  },
];

export function getFaqsByCategory(category: Faq["category"]): Faq[] {
  return FAQS.filter((faq) => faq.category === category);
}

/** Homepage-visible FAQ set — keep in sync with FAQPage schema in layout.tsx */
export const HOMEPAGE_FAQS: Faq[] = [
  {
    id: "home-same-day",
    question: "Do you offer same day junk removal?",
    answer:
      "Same-day Port Huron junk removal is often available when our route has an opening. Call or text 810-336-5865 with photos and your address — we will tell you the soonest confirmed window. Timing is never guaranteed until we lock it in, but local Blue Water Area jobs usually move fastest.",
    category: "scheduling",
  },
  {
    id: "home-types-of-junk",
    question: "What types of junk do you remove?",
    answer:
      "We handle furniture removal, appliance removal, mattresses, garage cleanouts, estate cleanouts, construction debris removal, yard waste, hot tubs, sheds, and general household clutter. Trash hauling and debris removal for residential and light commercial jobs are our everyday work across St. Clair County.",
    category: "services",
  },
  {
    id: "home-furniture",
    question: "Do you remove furniture?",
    answer:
      "Yes. Sofas, sectionals, dressers, tables, desks, recliners, and broken furniture are among our most common pickups. Stairs and tight hallways are part of a normal job. Usable pieces may be donated when condition allows.",
    category: "services",
  },
  {
    id: "home-cost",
    question: "How much does junk removal cost?",
    answer:
      "Junk Command prices by volume of space your items take in our truck, not by the hour. Most jobs start at our $99 minimum pickup, and larger loads are quoted upfront before we load anything. Send photos to 810-336-5865 or visit our pricing page for a clear estimate.",
    category: "pricing",
  },
  {
    id: "home-areas",
    question: "What areas do you serve?",
    answer:
      "We provide Port Huron junk hauling plus service throughout the Blue Water Area — including Fort Gratiot, Kimball Township, Clyde Township, Marysville, St. Clair, Marine City, Algonac, Yale, Capac, Croswell, Lexington, Richmond, Lenox Township, Romeo, Armada, Imlay City, Chesterfield, New Baltimore, Memphis, and surrounding St. Clair and Macomb County communities.",
    category: "areas",
  },
  {
    id: "home-heavy-appliances",
    question: "Can you remove heavy appliances?",
    answer:
      "Absolutely. Refrigerators, washers, dryers, stoves, dishwashers, and similar heavy appliances are a core Junk Command service. We protect doorways, handle the lifting, and recycle whenever possible. Bundle multiple appliances for better volume pricing.",
    category: "services",
  },
  {
    id: "home-licensed-insured",
    question: "Are you licensed and insured?",
    answer:
      "Yes. Junk Command is a licensed, bonded, and insured junk removal company based in Port Huron. Our veteran-owned crew is trained to protect floors, walls, and driveways. Proof of insurance is available on request for property managers and HOAs.",
    category: "general",
  },
];

export function getHomepageFaqs(): Faq[] {
  return HOMEPAGE_FAQS;
}
