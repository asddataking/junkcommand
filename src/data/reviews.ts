export type Review = {
  id: string;
  name: string;
  city: string;
  citySlug?: string;
  rating: 5 | 4;
  quote: string;
  service?: string;
  date: string;
};

export const AGGREGATE = { rating: 5, count: 250 } as const;

export const REVIEWS: Review[] = [
  {
    id: "rev-sarah-t-port-huron",
    name: "Sarah T.",
    city: "Port Huron, MI",
    citySlug: "port-huron",
    rating: 5,
    quote:
      "They showed up within two hours and had my garage cleaned out in no time. Professional, friendly, and the price matched the quote exactly.",
    service: "Garage Cleanout",
    date: "2025-11-12",
  },
  {
    id: "rev-mike-r-marysville",
    name: "Mike R.",
    city: "Marysville, MI",
    citySlug: "marysville",
    rating: 5,
    quote:
      "Best price I found and a super professional crew. Highly recommend Junk Command for anyone in Marysville who needs junk gone fast.",
    service: "Furniture Removal",
    date: "2025-10-28",
  },
  {
    id: "rev-dave-l-fort-gratiot",
    name: "Dave L.",
    city: "Fort Gratiot, MI",
    citySlug: "fort-gratiot",
    rating: 5,
    quote:
      "I had an old hot tub and shed removed. Fast, friendly, and hassle-free from quote to haul-away.",
    service: "Hot Tub Removal",
    date: "2025-09-15",
  },
  {
    id: "rev-jennifer-k-kimball",
    name: "Jennifer K.",
    city: "Kimball, MI",
    citySlug: "kimball",
    rating: 5,
    quote:
      "Texted photos in the morning and they cleared my basement that afternoon. Stairs were no problem and they left everything tidy.",
    service: "Basement Cleanout",
    date: "2025-12-03",
  },
  {
    id: "rev-tom-h-st-clair",
    name: "Tom H.",
    city: "St. Clair, MI",
    citySlug: "st-clair",
    rating: 5,
    quote:
      "Junk Command hauled three appliances and a broken sectional for a fair flat price. Veteran-owned crew that actually shows up when they say they will.",
    service: "Appliance Removal",
    date: "2025-08-22",
  },
  {
    id: "rev-lisa-m-marine-city",
    name: "Lisa M.",
    city: "Marine City, MI",
    citySlug: "marine-city",
    rating: 5,
    quote:
      "Estate cleanout after my parents’ house sold. Respectful, thorough, and they donated what they could. Made a hard week much easier.",
    service: "Estate Cleanout",
    date: "2025-07-09",
  },
  {
    id: "rev-chris-p-algonac",
    name: "Chris P.",
    city: "Algonac, MI",
    citySlug: "algonac",
    rating: 5,
    quote:
      "Same-day mattress and box spring pickup on a Saturday. Quick text quote, on-time arrival, done in under 20 minutes.",
    service: "Mattress Removal",
    date: "2026-01-18",
  },
  {
    id: "rev-amanda-b-richmond",
    name: "Amanda B.",
    city: "Richmond, MI",
    citySlug: "richmond",
    rating: 5,
    quote:
      "We filled half their trailer with years of garage overflow. Transparent volume pricing and zero pressure. Will use Junk Command again.",
    service: "Garage Cleanout",
    date: "2025-11-30",
  },
  {
    id: "rev-kevin-w-new-baltimore",
    name: "Kevin W.",
    city: "New Baltimore, MI",
    citySlug: "new-baltimore",
    rating: 4,
    quote:
      "Solid service overall. Arrival was a bit later in the window than I hoped, but the crew worked hard and the fridge and washer were gone same day.",
    service: "Appliance Removal",
    date: "2025-06-14",
  },
  {
    id: "rev-nicole-s-chesterfield",
    name: "Nicole S.",
    city: "Chesterfield, MI",
    citySlug: "chesterfield",
    rating: 5,
    quote:
      "Rental turnover cleanout done before the next tenant moved in. Landlords — call these guys. Fast and reasonably priced.",
    service: "Property Cleanout",
    date: "2025-10-05",
  },
  {
    id: "rev-ryan-d-port-huron",
    name: "Ryan D.",
    city: "Port Huron, MI",
    citySlug: "port-huron",
    rating: 5,
    quote:
      "Construction debris from a kitchen remodel disappeared in one visit. Beats leaving a dumpster in the driveway for a week.",
    service: "Construction Debris Removal",
    date: "2026-02-11",
  },
  {
    id: "rev-patricia-g-marysville",
    name: "Patricia G.",
    city: "Marysville, MI",
    citySlug: "marysville",
    rating: 5,
    quote:
      "They took an old couch up from the basement without scuffing the walls. Courteous guys and a clear $99-range quote for the small load.",
    service: "Couch Removal",
    date: "2025-05-27",
  },
  {
    id: "rev-brandon-c-fort-gratiot",
    name: "Brandon C.",
    city: "Fort Gratiot, MI",
    citySlug: "fort-gratiot",
    rating: 5,
    quote:
      "Yard waste and broken fencing hauled away before a weekend cookout. Booked Thursday, done Friday. Local and reliable.",
    service: "Yard Waste Removal",
    date: "2025-08-01",
  },
  {
    id: "rev-stephanie-a-kimball",
    name: "Stephanie A.",
    city: "Kimball, MI",
    citySlug: "kimball",
    rating: 5,
    quote:
      "Hot tub removal looked impossible until Junk Command cut it down and carried it out. Worth every penny.",
    service: "Hot Tub Removal",
    date: "2026-03-04",
  },
  {
    id: "rev-greg-f-st-clair",
    name: "Greg F.",
    city: "St. Clair, MI",
    citySlug: "st-clair",
    rating: 5,
    quote:
      "Storage unit cleanout so I could finally cancel the rental. They emptied it in one trip and recycled a ton of metal.",
    service: "Storage Unit Cleanout",
    date: "2025-09-29",
  },
  {
    id: "rev-michelle-v-marine-city",
    name: "Michelle V.",
    city: "Marine City, MI",
    citySlug: "marine-city",
    rating: 4,
    quote:
      "Good experience. Price was a little higher than I guessed from photos alone, but they explained the volume honestly and the work was excellent.",
    service: "Furniture Removal",
    date: "2025-04-18",
  },
  {
    id: "rev-derek-j-algonac",
    name: "Derek J.",
    city: "Algonac, MI",
    citySlug: "algonac",
    rating: 5,
    quote:
      "Shed demo and haul-away in an afternoon. Yard looks bigger already. Easy communication the whole way.",
    service: "Shed Removal",
    date: "2025-12-19",
  },
  {
    id: "rev-helen-r-richmond",
    name: "Helen R.",
    city: "Richmond, MI",
    citySlug: "richmond",
    rating: 5,
    quote:
      "As a senior, I needed help with heavy junk I couldn’t lift. The crew was patient, careful, and never made me feel rushed.",
    service: "General Junk Removal",
    date: "2026-01-07",
  },
  {
    id: "rev-anthony-m-new-baltimore",
    name: "Anthony M.",
    city: "New Baltimore, MI",
    citySlug: "new-baltimore",
    rating: 5,
    quote:
      "Office cleanout for our small shop — desks, chairs, and old electronics. On time and professional. Will hire Junk Command again.",
    service: "Commercial Cleanout",
    date: "2025-11-01",
  },
  {
    id: "rev-crystal-n-chesterfield",
    name: "Crystal N.",
    city: "Chesterfield, MI",
    citySlug: "chesterfield",
    rating: 5,
    quote:
      "Three mattresses and a dresser gone before my move. Texted photos, got a quote, booked online. Seamless.",
    service: "Mattress Removal",
    date: "2026-02-26",
  },
  {
    id: "rev-jason-b-port-huron",
    name: "Jason B.",
    city: "Port Huron, MI",
    citySlug: "port-huron",
    rating: 5,
    quote:
      "Foreclosure cleanout under a tight deadline. Junk Command hustled and got the property realtor-ready. Impressed.",
    service: "Foreclosure Cleanout",
    date: "2025-07-21",
  },
  {
    id: "rev-erin-l-marysville",
    name: "Erin L.",
    city: "Marysville, MI",
    citySlug: "marysville",
    rating: 5,
    quote:
      "Loved that they donated my still-good dresser set instead of dumping it. Felt good supporting a local veteran-owned business.",
    service: "Furniture Removal",
    date: "2025-10-14",
  },
  {
    id: "rev-paul-s-fort-gratiot",
    name: "Paul S.",
    city: "Fort Gratiot, MI",
    citySlug: "fort-gratiot",
    rating: 5,
    quote:
      "Washer, dryer, and fridge removed the same day my new appliances arrived. Perfect timing and no floor damage.",
    service: "Appliance Removal",
    date: "2026-03-15",
  },
  {
    id: "rev-diane-c-kimball",
    name: "Diane C.",
    city: "Kimball, MI",
    citySlug: "kimball",
    rating: 5,
    quote:
      "Full two-car garage reclaim. I kept labeling keep piles and they handled the rest. House already feels lighter.",
    service: "Garage Cleanout",
    date: "2025-06-30",
  },
  {
    id: "rev-matt-o-st-clair",
    name: "Matt O.",
    city: "St. Clair, MI",
    citySlug: "st-clair",
    rating: 5,
    quote:
      "Called about a dead hot tub on a Sunday and they fit me in that week. Straight shooters on price and schedule.",
    service: "Hot Tub Removal",
    date: "2025-08-17",
  },
  {
    id: "rev-rachel-p-marine-city",
    name: "Rachel P.",
    city: "Marine City, MI",
    citySlug: "marine-city",
    rating: 5,
    quote:
      "Basement flood leftovers and ruined furniture — gone. Empathetic crew during a stressful cleanup. Thank you Junk Command.",
    service: "Basement Cleanout",
    date: "2025-05-08",
  },
  {
    id: "rev-travis-k-algonac",
    name: "Travis K.",
    city: "Algonac, MI",
    citySlug: "algonac",
    rating: 5,
    quote:
      "Deck tear-off debris and old patio furniture hauled in one run. Fair volume price and a broom-clean finish.",
    service: "Construction Debris Removal",
    date: "2026-04-02",
  },
  {
    id: "rev-susan-w-richmond",
    name: "Susan W.",
    city: "Richmond, MI",
    citySlug: "richmond",
    rating: 5,
    quote:
      "Booked for a Saturday morning garage clearout. Crew arrived in the window, worked hard, and took card payment on the spot.",
    service: "Garage Cleanout",
    date: "2025-09-06",
  },
];

export function getReviewsByCity(citySlug: string): Review[] {
  return REVIEWS.filter((review) => review.citySlug === citySlug);
}

export function getFeaturedReviews(limit = 6): Review[] {
  return [...REVIEWS]
    .sort((a, b) => {
      if (b.rating !== a.rating) return b.rating - a.rating;
      return b.date.localeCompare(a.date);
    })
    .slice(0, limit);
}
