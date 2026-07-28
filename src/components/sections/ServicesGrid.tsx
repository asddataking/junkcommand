"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Armchair,
  Building2,
  Hammer,
  Refrigerator,
  Waves,
  Warehouse,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { ServiceCard } from "@/components/sections/ServiceCard";

const icons = [Warehouse, Building2, Armchair, Refrigerator, Waves, Hammer];

export function ServicesGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="scroll-mt-24 bg-[#020305] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Services
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-[0.06em] text-white sm:text-5xl">
            WHAT WE HAUL
          </h2>
          <p className="mt-3 text-muted">
            From garage cleanouts to construction debris — Junk Command clears
            it fast so you can reclaim your space.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.35,
                delay: reduceMotion ? 0 : index * 0.05,
              }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
                icon={icons[index]}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
