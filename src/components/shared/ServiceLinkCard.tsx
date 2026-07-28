import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Armchair,
  BedDouble,
  Building2,
  Fence,
  Hammer,
  HardHat,
  Home,
  Monitor,
  Package,
  Refrigerator,
  Sofa,
  Trees,
  Truck,
  Tv,
  Warehouse,
  Waves,
  Leaf,
  Recycle,
} from "lucide-react";
import type { Service } from "@/data/services";

const ICON_MAP: Record<string, LucideIcon> = {
  "furniture-removal": Armchair,
  "appliance-removal": Refrigerator,
  "mattress-removal": BedDouble,
  "couch-removal": Sofa,
  "garage-cleanout": Warehouse,
  "basement-cleanout": Home,
  "estate-cleanout": Building2,
  "storage-unit-cleanout": Package,
  "hoarder-cleanout": Truck,
  "foreclosure-cleanout": HardHat,
  "hot-tub-removal": Waves,
  "shed-removal": Fence,
  "deck-removal": Hammer,
  "construction-debris-removal": Hammer,
  "yard-debris-removal": Leaf,
  "brush-removal": Trees,
  "electronics-recycling": Recycle,
  "tv-removal": Tv,
  "refrigerator-removal": Monitor,
};

export function ServiceLinkCard({ service }: { service: Service }) {
  const Icon = ICON_MAP[service.slug] ?? Truck;

  return (
    <Link
      href={`/${service.slug}`}
      className="group relative flex min-h-48 flex-col justify-end overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.4)] bg-card transition-transform duration-300 hover:-translate-y-1 hover:border-bright glow-border"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(2,3,5,0.25) 0%, rgba(2,3,5,0.94) 72%), url('${service.image}'), linear-gradient(145deg, #0B1016, #041018)`,
        }}
        aria-hidden
      />
      <div className="relative z-10 space-y-2 p-4">
        <Icon
          className="size-6 text-bright drop-shadow-[0_0_10px_rgba(24,160,255,0.55)]"
          aria-hidden
        />
        <h3 className="font-display text-xl leading-none tracking-[0.08em] text-white sm:text-2xl">
          {service.title}
        </h3>
        <p className="text-xs leading-relaxed text-muted sm:text-sm">
          {service.intro.slice(0, 110)}…
        </p>
      </div>
    </Link>
  );
}
