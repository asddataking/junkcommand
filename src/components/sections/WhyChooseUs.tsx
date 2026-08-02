"use client";

import { Check } from "lucide-react";
import { WHY_CHOOSE } from "@/lib/constants";
import { MediaImage } from "@/components/ui/MediaImage";
import { BlurFade } from "@/components/magicui/blur-fade";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { ShineBorder } from "@/components/magicui/shine-border";
import { BorderBeam } from "@/components/magicui/border-beam";

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <BlurFade>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.4)] bg-card">
            <MediaImage
              src="/images/dan-gage-luna.webp"
              alt="Dan and Gage with Luna beside the Junk Command truck and trailer, mission ready for Port Huron junk removal"
              fill
              loading="lazy"
              className="object-cover object-[38%_36%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020305] via-transparent to-transparent" />
            <BorderBeam
              size={110}
              duration={10}
              colorFrom="#18a0ff"
              colorTo="#0787ff"
              borderWidth={1.25}
            />
            <div className="absolute bottom-4 left-4 right-4 overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.45)] bg-black/70 px-4 py-3">
              <ShineBorder
                shineColor={["#0787ff", "#18a0ff"]}
                duration={12}
                borderWidth={1}
                className="opacity-40"
              />
              <p className="relative z-10 font-display text-xl tracking-[0.1em] text-white">
                MISSION READY
              </p>
              <p className="relative z-10 text-xs uppercase tracking-[0.18em] text-bright">
                Local crew · Fast turnaround
              </p>
            </div>
          </div>
        </BlurFade>

        <div>
          <BlurFade>
            <AnimatedShinyText className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
              Built Different
            </AnimatedShinyText>
            <h2 className="mt-3 font-display text-4xl tracking-[0.06em] text-white sm:text-5xl">
              WHY CHOOSE JUNK COMMAND?
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              As a veteran-owned Port Huron junk removal company, we run every
              job like a mission — clear communication, clean work, and debris
              removal done right so your space is ready when we leave.
            </p>
          </BlurFade>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {WHY_CHOOSE.map((item, index) => (
              <BlurFade key={item.title} delay={0.05 * index}>
                <li className="h-full rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-5">
                  <div className="mb-3 flex size-8 items-center justify-center rounded-[2px] border border-[rgba(0,135,255,0.45)] bg-secondary text-bright">
                    <Check className="size-4" aria-hidden />
                  </div>
                  <h3 className="font-display text-xl tracking-[0.08em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                </li>
              </BlurFade>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
