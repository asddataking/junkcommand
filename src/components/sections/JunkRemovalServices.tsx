"use client";

import Link from "next/link";
import {
  Armchair,
  Building2,
  Hammer,
  Refrigerator,
  Waves,
  Warehouse,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { BlurFade } from "@/components/magicui/blur-fade";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";

const icons = [Warehouse, Building2, Armchair, Refrigerator, Waves, Hammer];

export function JunkRemovalServices() {
  return (
    <section
      id="services"
      aria-labelledby="junk-removal-services-heading"
      className="scroll-mt-24 border-b border-[rgba(0,135,255,0.15)] bg-[#020305] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade className="text-center">
          <AnimatedShinyText className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Full-Service Local Hauling
          </AnimatedShinyText>
          <h2
            id="junk-removal-services-heading"
            className="mt-3 font-display text-4xl tracking-[0.08em] text-white sm:text-5xl"
          >
            OUR JUNK{" "}
            <span className="text-bright">REMOVAL SERVICES</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            From garage cleanouts to construction debris, our veteran-owned junk
            removal company handles furniture removal, appliance removal, and
            full-service hauling across St. Clair County.
          </p>
        </BlurFade>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {SERVICES.map((service, index) => {
            const Icon = icons[index];
            return (
              <li key={service.slug}>
                <BlurFade delay={index * 0.04}>
                  <Link
                    href={`/${service.slug}`}
                    className="group flex h-full flex-col items-center gap-3 rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-[#080B0F] px-3 py-5 text-center transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-bright hover:shadow-[0_0_24px_rgba(7,135,255,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bright"
                  >
                    <span className="flex size-12 items-center justify-center rounded-[2px] border border-[rgba(0,135,255,0.45)] bg-[#020305] text-bright shadow-[0_0_16px_rgba(7,135,255,0.2)] transition-colors group-hover:border-bright">
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <span className="font-display text-lg leading-tight tracking-[0.08em] text-white sm:text-xl">
                      {service.title}
                    </span>
                  </Link>
                </BlurFade>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
