"use client";

import {
  BadgeCheck,
  Clock3,
  MapPinned,
  ShieldCheck,
  Tag,
  Truck,
} from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";

const TRUST_ITEMS = [
  { icon: BadgeCheck, label: "Veteran Owned" },
  { icon: MapPinned, label: "Locally Operated" },
  { icon: Tag, label: "Upfront Pricing" },
  { icon: Clock3, label: "Fast Scheduling" },
  { icon: ShieldCheck, label: "Bonded & Insured" },
  { icon: Truck, label: "Family Operated" },
] as const;

function TrustChip({
  icon: Icon,
  label,
}: {
  icon: (typeof TRUST_ITEMS)[number]["icon"];
  label: string;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-[2px] border border-[rgba(0,135,255,0.28)] bg-[#080B0F] px-4 py-3">
      <Icon
        className="size-4 shrink-0 text-bright drop-shadow-[0_0_8px_rgba(24,160,255,0.45)]"
        aria-hidden
      />
      <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
        {label}
      </span>
    </div>
  );
}

export function TrustBar() {
  return (
    <section
      aria-label="Trust signals"
      className="relative overflow-hidden border-b border-[rgba(0,135,255,0.2)] bg-[#080B0F]"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#080B0F] to-transparent sm:w-20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#080B0F] to-transparent sm:w-20"
        aria-hidden
      />

      <Marquee
        pauseOnHover
        className="py-4 [--duration:32s] [--gap:0.75rem]"
      >
        {TRUST_ITEMS.map((item) => (
          <TrustChip key={item.label} {...item} />
        ))}
      </Marquee>

      {/* Accessible static list for screen readers / SEO */}
      <ul className="sr-only">
        {TRUST_ITEMS.map(({ label }) => (
          <li key={label}>{label}</li>
        ))}
      </ul>
    </section>
  );
}
