"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  Clock3,
  MapPinned,
  ShieldCheck,
  Tag,
  Truck,
} from "lucide-react";

const TRUST_ITEMS = [
  { icon: BadgeCheck, label: "Veteran Owned" },
  { icon: MapPinned, label: "Locally Operated" },
  { icon: Tag, label: "Upfront Pricing" },
  { icon: Clock3, label: "Fast Scheduling" },
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Truck, label: "Family Operated" },
] as const;

export function TrustBar() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Trust signals"
      className="border-b border-[rgba(0,135,255,0.2)] bg-[#080B0F]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-px bg-[rgba(0,135,255,0.15)] sm:grid-cols-3 lg:grid-cols-6">
          {TRUST_ITEMS.map(({ icon: Icon, label }, index) => (
            <motion.li
              key={label}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.3,
                delay: reduceMotion ? 0 : index * 0.04,
              }}
              className="flex items-center gap-3 bg-[#080B0F] px-4 py-5 sm:justify-center sm:px-3"
            >
              <Icon
                className="size-4 shrink-0 text-bright drop-shadow-[0_0_8px_rgba(24,160,255,0.45)]"
                aria-hidden
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white sm:text-center">
                {label}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
