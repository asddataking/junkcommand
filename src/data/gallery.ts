export type GalleryCategory =
  | "Garage"
  | "Estate"
  | "Furniture"
  | "Yard"
  | "Construction";

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  location: string;
};

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "Garage",
  "Estate",
  "Furniture",
  "Yard",
  "Construction",
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "garage-port-huron-1",
    title: "Two-Car Garage Reset",
    category: "Garage",
    beforeImage: "/images/gallery/garage-before-1.webp",
    afterImage: "/images/gallery/garage-after-1.webp",
    beforeAlt: "Cluttered two-car garage in Port Huron before junk removal",
    afterAlt: "Cleared Port Huron garage after Junk Command cleanout",
    location: "Port Huron, MI",
  },
  {
    id: "garage-marysville-2",
    title: "Workshop Garage Cleanout",
    category: "Garage",
    beforeImage: "/images/gallery/garage-before-2.webp",
    afterImage: "/images/gallery/garage-after-2.webp",
    beforeAlt: "Marysville garage packed with tools, lumber, and scrap",
    afterAlt: "Marysville garage floor cleared after professional haul-away",
    location: "Marysville, MI",
  },
  {
    id: "estate-fort-gratiot-1",
    title: "Whole-Home Estate Clearance",
    category: "Estate",
    beforeImage: "/images/gallery/estate-before-1.webp",
    afterImage: "/images/gallery/estate-after-1.webp",
    beforeAlt: "Estate home living room filled with belongings before cleanout",
    afterAlt: "Empty estate living room after Junk Command removal",
    location: "Fort Gratiot, MI",
  },
  {
    id: "estate-st-clair-2",
    title: "Basement Estate Sort & Haul",
    category: "Estate",
    beforeImage: "/images/gallery/estate-before-2.webp",
    afterImage: "/images/gallery/estate-after-2.webp",
    beforeAlt: "St. Clair basement packed with decades of stored items",
    afterAlt: "Cleared basement after estate cleanout in St. Clair",
    location: "St. Clair, MI",
  },
  {
    id: "furniture-kimball-1",
    title: "Sofa & Bedroom Set Removal",
    category: "Furniture",
    beforeImage: "/images/gallery/furniture-before-1.webp",
    afterImage: "/images/gallery/furniture-after-1.webp",
    beforeAlt: "Old sofa and bedroom furniture staged for removal",
    afterAlt: "Room cleared after furniture removal by Junk Command",
    location: "Kimball Township, MI",
  },
  {
    id: "furniture-port-huron-2",
    title: "Office Furniture Haul-Away",
    category: "Furniture",
    beforeImage: "/images/gallery/furniture-before-2.webp",
    afterImage: "/images/gallery/furniture-after-2.webp",
    beforeAlt: "Desks and office chairs piled for junk removal",
    afterAlt: "Empty office space after furniture haul-away in Port Huron",
    location: "Port Huron, MI",
  },
  {
    id: "yard-marine-city-1",
    title: "Yard Waste & Brush Clearance",
    category: "Yard",
    beforeImage: "/images/gallery/yard-before-1.webp",
    afterImage: "/images/gallery/yard-after-1.webp",
    beforeAlt: "Brush piles and yard debris along a Marine City fence line",
    afterAlt: "Clean fence line after yard waste removal",
    location: "Marine City, MI",
  },
  {
    id: "yard-algonac-2",
    title: "Deck & Patio Junk Removal",
    category: "Yard",
    beforeImage: "/images/gallery/yard-before-2.webp",
    afterImage: "/images/gallery/yard-after-2.webp",
    beforeAlt: "Patio cluttered with broken furniture and planters",
    afterAlt: "Cleared patio after Junk Command yard cleanup in Algonac",
    location: "Algonac, MI",
  },
  {
    id: "construction-richmond-1",
    title: "Renovation Debris Pickup",
    category: "Construction",
    beforeImage: "/images/gallery/construction-before-1.webp",
    afterImage: "/images/gallery/construction-after-1.webp",
    beforeAlt: "Construction debris and drywall scraps after a remodel",
    afterAlt: "Jobsite cleared after construction debris removal",
    location: "Richmond, MI",
  },
  {
    id: "construction-chesterfield-2",
    title: "Post-Demo Cleanup",
    category: "Construction",
    beforeImage: "/images/gallery/construction-before-2.webp",
    afterImage: "/images/gallery/construction-after-2.webp",
    beforeAlt: "Demolition debris stacked in a Chesterfield driveway",
    afterAlt: "Driveway cleared after Junk Command construction haul",
    location: "Chesterfield, MI",
  },
  {
    id: "garage-fort-gratiot-3",
    title: "Single-Car Garage Rescue",
    category: "Garage",
    beforeImage: "/images/gallery/garage-before-3.webp",
    afterImage: "/images/gallery/garage-after-3.webp",
    beforeAlt: "Single-car garage overflowing with boxes and scrap",
    afterAlt: "Open garage bay ready for parking after cleanout",
    location: "Fort Gratiot, MI",
  },
  {
    id: "estate-port-huron-3",
    title: "Garage + Shed Estate Combo",
    category: "Estate",
    beforeImage: "/images/gallery/estate-before-3.webp",
    afterImage: "/images/gallery/estate-after-3.webp",
    beforeAlt: "Estate property shed packed with mixed household junk",
    afterAlt: "Empty shed after estate cleanout in Port Huron",
    location: "Port Huron, MI",
  },
];

export function getGalleryByCategory(
  category: GalleryCategory | "All",
): GalleryItem[] {
  if (category === "All") return GALLERY_ITEMS;
  return GALLERY_ITEMS.filter((item) => item.category === category);
}
