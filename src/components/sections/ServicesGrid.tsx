"use client";

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
import { BlurFade } from "@/components/magicui/blur-fade";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";

const icons = [Warehouse, Building2, Armchair, Refrigerator, Waves, Hammer];

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-b border-[rgba(0,135,255,0.15)] bg-[#020305] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade className="text-center">
          <AnimatedShinyText className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            We Handle the Heavy Stuff
          </AnimatedShinyText>
          <h2 className="mt-3 font-display text-4xl tracking-[0.08em] text-white sm:text-5xl">
            FULL SERVICE JUNK REMOVAL
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            From garage cleanouts to construction debris — see what we haul and
            get it gone fast.
          </p>
        </BlurFade>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <BlurFade key={service.slug} delay={index * 0.05}>
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
                slug={service.slug}
                icon={icons[index]}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
