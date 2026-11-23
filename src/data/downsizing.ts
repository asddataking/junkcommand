import {
  DELIVERY_AREAS,
  STOCK_PHOTO_CAPTION,
  type DeliveryPage,
} from "@/data/delivery";

export const DOWNSIZING_MOVING: DeliveryPage = {
  slug: "downsizing-moving",
  path: "/downsizing-moving",
  metaTitle:
    "Downsizing & Home Transition Services in Port Huron, MI | Junk Command",
  metaDescription:
    "Downsizing help in Port Huron and St. Clair County: unwanted-item removal, donation runs, furniture delivery, placement, and basic assembly. Call 810-242-0429.",
  eyebrow: "Downsizing & Home Transitions",
  h1: "Moving Into Less Space? We'll Help Handle the Rest.",
  intro:
    "Downsizing can be overwhelming. Junk Command helps simplify the transition by handling unwanted-item removal, donation runs, furniture delivery, placement and assembly — one local company for many of the jobs that come with a move into a smaller home.",
  image: "/images/expansion/downsizing-moving-hero.webp",
  imageAlt:
    "Stock photo of packed moving boxes in a living room. Illustrative only; not a Junk Command job.",
  primaryCta: { label: "Plan Your Home Transition", href: "#quote" },
  audienceTitle: "Who this is for",
  audience: [
    {
      title: "Seniors leaving a longtime home",
      description:
        "When a house holds decades of belongings, Junk Command can remove what will not come along, run donation drop-offs, and help place what stays.",
    },
    {
      title: "Families helping parents",
      description:
        "Adult children planning a move for a parent can use one local crew for removal, donation, delivery, and basic assembly.",
    },
    {
      title: "Apartment, condo, and smaller-home moves",
      description:
        "If the new place has less room, we can haul away the extra furniture and deliver or place the pieces you are keeping.",
    },
    {
      title: "Estate and property transitions",
      description:
        "When a property is changing hands and people still need items moved to a new home, this page is the right starting point. Full estate cleanouts stay on our estate cleanout page.",
    },
  ],
  process: [
    {
      title: "Fill out the estimate form",
      description:
        "Tell us what you need and upload photos in the Free Estimate form on this page.",
    },
    {
      title: "Junk Command sends your estimate",
      description:
        "We review your request and photos, then send your estimate.",
    },
    {
      title: "We schedule the work",
      description:
        "Once you approve the estimate, we schedule a time that works for the move.",
    },
  ],
  processCtas: true,
  features: [
    {
      title: "Unwanted Furniture & Household Removal",
      description:
        "Sofas, beds, and household goods that will not come to the new place are hauled away by the same Junk Command crew that handles junk removal.",
      image: "/images/expansion/downsizing-moving-boxes.webp",
      imageAlt:
        "Stock photo of cardboard moving boxes in a living room. Illustrative only; not a Junk Command job.",
      imageCaption: STOCK_PHOTO_CAPTION,
    },
    {
      title: "Donation Drop-Offs",
      description:
        "When items are clean and usable, we can run donation drop-offs to local partners instead of sending everything to disposal.",
      image: "/images/expansion/downsizing-donation.webp",
      imageAlt:
        "Stock photo of folded clothes in a plastic donation box. Illustrative only; not a Junk Command job.",
      imageCaption: STOCK_PHOTO_CAPTION,
    },
    {
      title: "Delivery to Family or Storage",
      description:
        "Keeping a dresser for a relative, or moving pieces into storage? We can deliver kept items to a family member or a storage unit.",
    },
    {
      title: "Placement in the New Home",
      description:
        "We can bring furniture into the new house, apartment, or condo and place it in the rooms you choose when access allows.",
      image: "/images/expansion/downsizing-moving-placement.webp",
      imageAlt:
        "Stock photo of a person carrying a box into a furnished living room. Illustrative only; not a Junk Command job.",
      imageCaption: STOCK_PHOTO_CAPTION,
    },
    {
      title: "Basic Assembly",
      description:
        "Beds, tables, and other household pieces can be assembled as part of the same project. Home gyms are not included.",
    },
    {
      title: "Packaging & Debris Removal",
      description:
        "Boxes, packing paper, and leftover debris from the move can go with us so the new place is easier to settle into.",
    },
  ],
  removalCta: {
    title: "Need a Full Property Cleanout Instead?",
    description:
      "If you are settling an estate or clearing an entire house for a listing, our estate cleanout page is the better fit. Downsizing is for a living-person move into a smaller space; estate cleanouts are for whole-property clearing.",
    href: "/estate-cleanout",
    linkLabel: "Estate Cleanouts",
  },
  crossSells: [
    {
      title: "Just Need Junk Hauled or Furniture Delivered?",
      description:
        "You can also book junk removal, furniture delivery, or assembly on their own if you do not need a full home-transition project.",
      href: "/furniture-removal",
      linkLabel: "Furniture Removal",
    },
  ],
  areasIntro:
    "Downsizing and home-transition help from Junk Command is available in Port Huron, St. Clair County, and the other towns we already serve.",
  areas: DELIVERY_AREAS,
  faqs: [
    {
      question: "How is this different from an estate cleanout?",
      answer:
        "Downsizing is for people moving into a smaller home who still need some items kept, delivered, or assembled. Estate cleanouts are for clearing a property, often after a death or for a sale. Many families use both. If you need the whole house emptied, start on the estate cleanout page.",
    },
    {
      question: "Can one company handle removal, donation, and delivery?",
      answer:
        "Yes. That is the point of this service. Tell Junk Command which parts you need — unwanted-item removal, donation drop-offs, delivery to family or storage, placement, or basic assembly — and we will quote the project.",
    },
    {
      question: "How do I get an estimate?",
      answer:
        "Fill out the Free Estimate form on this page with what you need and photos. Junk Command reviews your request and sends your estimate, then we schedule the work.",
    },
    {
      question: "What should I include in the quote form?",
      answer:
        "Use the Free Estimate form on this page. In the notes, describe the project, give an approximate item count, and say whether you need removal, donation, delivery, assembly, or a mix. Upload photos in the form.",
    },
    {
      question: "Do you serve Port Huron and St. Clair County?",
      answer:
        "Yes. Junk Command is based in Port Huron and already serves St. Clair County and the other towns listed on this site.",
    },
  ],
  formTitle: "PLAN YOUR HOME TRANSITION",
  formDescription:
    "Use the same Free Estimate form we use for every Junk Command quote. In the notes, describe the project, give an approximate item count, and tell us whether you need removal, donation, delivery, assembly, or a mix. Upload photos in the form.",
  formInstructions: [
    "Describe the project and the two addresses if you are moving between homes.",
    "Give an approximate item count.",
    "Tell us if you need removal, donation, delivery, assembly, or a combination.",
    "Upload photos in the form so Junk Command can review the job and send your estimate.",
  ],
  formEmbed: true,
  pageType: "downsizing_moving",
  endCtaTitle: "ONE LOCAL CREW FOR THE HARD PARTS.",
  endCtaDescription:
    "Downsizing help in Port Huron and St. Clair County — removal, donation, delivery, placement, and basic assembly.",
  endCtaLabel: "Plan Your Home Transition",
  relatedLinks: [
    { label: "Estate Cleanouts", href: "/estate-cleanout" },
    { label: "Furniture Removal", href: "/furniture-removal" },
    { label: "Furniture Pickup & Delivery", href: "/furniture-delivery" },
    { label: "Furniture Assembly", href: "/furniture-assembly" },
    { label: "Contact", href: "/contact" },
  ],
};
