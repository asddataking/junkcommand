import type { LocationPage } from "@/data/locations/types";
import {
  SERVICE_PRESETS,
  buildLocationImages,
} from "@/data/locations/images";

export const SOUTHERN_LAPEER_LOCATIONS: LocationPage[] = [
  {
    slug: "almont",
    name: "Almont",
    county: "Lapeer County",
    regionId: "southern-lapeer",
    layout: "editorial",
    eyebrow: "Serving Almont",
    metaTitle: "Junk Removal Almont MI | Junk Command",
    metaDescription:
      "Need junk removal in Almont, Michigan? Junk Command hauls furniture, appliances, estates, and garage clutter for M-53 homeowners. Get a free estimate.",
    h1: "Junk Removal in Almont, MI",
    heroIntro:
      "Almont sits on M-53 between Romeo and Imlay City — village homes, larger residential lots, and the kind of garages and estates that collect years of furniture. Junk Command provides junk removal without making you manage a dumpster.",
    localIntro: [
      "Almont is a southern Lapeer County village with a residential core and larger properties on the roads that lead toward Dryden, Romeo, and Imlay City. Homeowners here often call because a garage, an inherited house, or a move has produced more bulky stuff than friends and a weekend can handle.",
      "M-53 makes Almont a natural stop on routes we already run between north Macomb and the I-69 corridor. The work is mostly residential: sofas, appliances, packed garages, and estate contents — not commercial dumpster service.",
      "If you are clearing a house for family or a sale, [estate cleanouts](/estate-cleanout) and [garage cleanouts](/garage-cleanout) are the services that fit. We also serve [Dryden](/service-areas/dryden), [Romeo](/service-areas/romeo), [Armada](/service-areas/armada), and [Imlay City](/service-areas/imlay-city).",
    ],
    featuredServiceSlugs: [...SERVICE_PRESETS.village],
    servicesIntro:
      "Almont requests typically include [furniture removal](/furniture-removal), [appliance removal](/appliance-removal), garage resets, and [basement cleanouts](/basement-cleanout). Larger lots sometimes add [yard debris](/yard-debris-removal) sitting with the household pile.",
    cleanoutHeading: "More Than Just Junk Pickup",
    cleanoutBody: [
      "Almont’s higher-value jobs are estates, inherited homes, and whole-property cleanouts on larger residential lots. Garages and basements are usually part of the same visit.",
      "Junk Command can coordinate the house and the extra buildings so you are not left with “just the barn” after the living room is empty. Send photos of each space that needs to be cleared.",
    ],
    midCtaTitle: "Got Junk in Almont?",
    midCtaDescription:
      "Garage, estate furniture, or a whole-house cleanout — send a few photos and Junk Command will quote junk removal in Almont, Michigan.",
    nearbySlugs: ["dryden", "romeo", "imlay-city", "armada"],
    faqs: [
      {
        question: "How much does junk removal cost in Almont?",
        answer:
          "We quote by volume and access. A single appliance and a packed garage-plus-house cleanout are different jobs. Photos get you a confirmed range.",
      },
      {
        question: "Do you handle estate cleanouts in Almont?",
        answer:
          "Yes. Inherited homes and estate contents are a core reason we serve southern Lapeer County. We confirm keepers with you before loading.",
      },
      {
        question: "Can you take furniture from an upstairs bedroom?",
        answer:
          "Yes, when the stairs and path are safely accessible. Mention tight turns or long carries with your photos.",
      },
      {
        question: "Do I have to move items to the driveway?",
        answer:
          "No. Full-service means we come to the items inside the home or garage when it is safe to do so.",
      },
      {
        question: "How soon can you schedule Almont?",
        answer:
          "Almont sits between our north Macomb and I-69 routes. Same-day or next-day service may be available depending on the schedule.",
      },
    ],
    images: buildLocationImages(
      "Almont",
      "southern Lapeer County",
      "village",
    ),
  },
  {
    slug: "dryden",
    name: "Dryden",
    county: "Lapeer County",
    regionId: "southern-lapeer",
    layout: "split",
    eyebrow: "Serving Dryden",
    metaTitle: "Junk Removal Dryden MI | Junk Command",
    metaDescription:
      "Need junk removal in Dryden, Michigan? Junk Command handles rural and village property cleanouts between Almont and Metamora. Get a free estimate.",
    h1: "Junk Removal in Dryden, MI",
    heroIntro:
      "Dryden is village streets and township roads in southern Lapeer County — larger lots, garages, and outbuildings that collect household junk over years. Junk Command provides junk removal and cleanouts for homeowners who are done moving it themselves.",
    localIntro: [
      "Dryden sits between Almont and Metamora, with a small village core and rural residential roads around it. The properties here often have more than one place stuff hides: the garage, a shed, a basement, and the back of a barn. That is a cleanout pattern, not a curbside bag pattern.",
      "We serve Dryden as part of southern Lapeer coverage, not as a one-off. Routes that already include Almont, Metamora, Attica, and Imlay City make a Dryden stop practical when photos come in with a real timeline.",
      "If the job spans buildings, [garage cleanouts](/garage-cleanout) and [estate cleanouts](/estate-cleanout) are the right language. We also serve [Almont](/service-areas/almont), [Metamora](/service-areas/metamora), and [Attica](/service-areas/attica).",
    ],
    featuredServiceSlugs: [...SERVICE_PRESETS.rural],
    servicesIntro:
      "Dryden loads include [furniture removal](/furniture-removal), [appliance removal](/appliance-removal), shed and garage contents, and mixed [yard debris](/yard-debris-removal). Light [construction debris](/construction-debris-removal) can ride along after a remodel when it is non-hazardous.",
    cleanoutHeading: "More Than Just Junk Pickup",
    cleanoutBody: [
      "Rural Dryden properties are where whole-property cleanouts matter. Inherited homes, moving piles, and outbuildings full of furniture are the jobs that eat weekends if you try to DIY them.",
      "Send photos of each building. We will tell you whether it is one coordinated visit or more than one load, and we will quote before anything hits the truck.",
    ],
    midCtaTitle: "Got Junk in Dryden?",
    midCtaDescription:
      "Village garage or a township property with extra buildings — send photos and Junk Command will quote a southern Lapeer pickup.",
    nearbySlugs: ["almont", "metamora", "attica", "imlay-city"],
    faqs: [
      {
        question: "Do you serve Dryden Township as well as the village?",
        answer:
          "Yes. Confirm the address with your photos. We serve Dryden-area residential and rural properties in southern Lapeer County.",
      },
      {
        question: "How are larger-lot cleanouts priced?",
        answer:
          "By volume and access. Long gravel drives and multiple buildings can mean more than one load. We discuss that up front.",
      },
      {
        question: "Can you clear a shed and a basement together?",
        answer:
          "Yes, when the contents fit the scheduled truck space. Combining areas is common in Dryden.",
      },
      {
        question: "What items are not accepted?",
        answer:
          "Hazardous chemicals, fuels, paints, and similar restricted materials. Ask when you send photos if you are unsure.",
      },
      {
        question: "How soon can you come to Dryden?",
        answer:
          "Dryden fits our southern Lapeer routing. Same-day or next-day service may be available depending on the schedule.",
      },
    ],
    images: buildLocationImages(
      "Dryden",
      "southern Lapeer County",
      "rural",
    ),
  },
  {
    slug: "metamora",
    name: "Metamora",
    county: "Lapeer County",
    regionId: "southern-lapeer",
    layout: "gallery",
    eyebrow: "Serving Metamora",
    metaTitle: "Junk Removal Metamora MI | Junk Command",
    metaDescription:
      "Need junk removal in Metamora, Michigan? Junk Command hauls furniture, appliances, and estate contents from village and larger-lot homes. Get a free estimate.",
    h1: "Junk Removal in Metamora, MI",
    heroIntro:
      "Metamora is a southern Lapeer County village surrounded by larger residential properties. Junk Command provides junk removal and cleanouts for homeowners, estates, and garages — scheduled service, not a fake local office.",
    localIntro: [
      "Metamora sits between Lapeer and the Oxford-area roads, with a village center and the kind of larger lots and outbuildings common in this part of Lapeer County. The housing mix is residential and estate-leaning: homes where a garage, a barn, or a spare building has quietly become storage.",
      "We serve Metamora from our Port Huron operation as part of southern Lapeer coverage with Dryden, Almont, and Lapeer. That is service-area language on purpose. There is no Metamora storefront — just a crew that will show up at the property when the job is booked.",
      "Estate furniture, packed garages, and whole-house contents are the usual reasons people call. [Estate cleanouts](/estate-cleanout) and [garage cleanouts](/garage-cleanout) do most of the work. We also serve [Lapeer](/service-areas/lapeer), [Dryden](/service-areas/dryden), and [Almont](/service-areas/almont).",
    ],
    featuredServiceSlugs: [...SERVICE_PRESETS.rural],
    servicesIntro:
      "Metamora jobs often combine [furniture removal](/furniture-removal), [appliance removal](/appliance-removal), garage and barn contents, and [yard debris](/yard-debris-removal) around the buildings. Larger cleanouts may include light [construction debris](/construction-debris-removal) after a renovation.",
    cleanoutHeading: "More Than Just Junk Pickup",
    cleanoutBody: [
      "Metamora’s cleanout work is frequently whole-property work: inherited homes, move-outs, garages, and extra buildings. Those are higher-value jobs because they take planning, not just a strong back.",
      "Send photos of the house and any outbuildings. We will quote the volume, flag access issues, and schedule a crew that matches the property instead of guessing from a single living-room picture.",
    ],
    midCtaTitle: "Got Junk in Metamora?",
    midCtaDescription:
      "Estate contents, a packed garage, or a larger-lot cleanout — send photos and Junk Command will quote junk removal in Metamora, Michigan.",
    nearbySlugs: ["lapeer", "dryden", "almont", "attica"],
    faqs: [
      {
        question: "Do you have a Metamora location?",
        answer:
          "No. Junk Command is based in Port Huron and serves Metamora as a service area. We come to your property for scheduled junk removal — we do not operate a local office there.",
      },
      {
        question: "How much does junk removal cost in Metamora?",
        answer:
          "Volume and access. Larger lots and extra buildings can mean more than one load. Photos of each area produce a useful quote.",
      },
      {
        question: "Can you handle an estate property?",
        answer:
          "Yes. Estate and inherited-home cleanouts are a primary reason we serve Metamora and southern Lapeer County.",
      },
      {
        question: "Do I have to empty the garage onto the driveway first?",
        answer:
          "No. We can work from the garage and outbuildings when access is safe.",
      },
      {
        question: "How soon can you schedule Metamora?",
        answer:
          "Metamora fits our southern Lapeer routing with Lapeer, Dryden, and Almont. Same-day or next-day service may be available depending on the schedule.",
      },
    ],
    images: buildLocationImages(
      "Metamora",
      "southern Lapeer County",
      "rural",
    ),
  },
];
