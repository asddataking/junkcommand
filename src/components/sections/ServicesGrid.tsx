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
import { BlurFade } from "@/components/magicui/blur-fade";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { ShineBorder } from "@/components/magicui/shine-border";
import { BorderBeam } from "@/components/magicui/border-beam";

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
        </BlurFade>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-6">
          {SERVICES.map((service, index) => {
            const Icon = icons[index];
            return (
              <BlurFade key={service.slug} delay={index * 0.05}>
                <a
                  href={`/${service.slug}`}
                  className="group relative flex min-h-[9.5rem] flex-col items-center justify-center gap-3 overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.45)] bg-[#080B0F] px-3 py-6 text-center transition-colors hover:border-bright hover:bg-[#0B1016] sm:min-h-[10.5rem]"
                >
                  <ShineBorder
                    shineColor={["#0787ff", "#18a0ff", "#0787ff"]}
                    duration={12}
                    borderWidth={1}
                    className="opacity-70"
                  />
                  {index === 0 ? (
                    <BorderBeam
                      size={80}
                      duration={7}
                      colorFrom="#18a0ff"
                      colorTo="#004ea8"
                    />
                  ) : null}
                  <Icon
                    className="relative z-10 size-8 text-bright drop-shadow-[0_0_12px_rgba(24,160,255,0.55)] transition-transform duration-300 group-hover:scale-110"
                    aria-hidden
                  />
                  <h3 className="relative z-10 font-display text-sm tracking-[0.1em] text-white sm:text-base">
                    {service.title.replace(" Removal", "").toUpperCase()}
                  </h3>
                </a>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
