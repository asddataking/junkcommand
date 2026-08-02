"use client";

import { Check } from "lucide-react";
import {
  CURBSIDE_START,
  FULL_SERVICE_START,
} from "@/data/curbside-pricing";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Button } from "@/components/ui/Button";
import { ShineBorder } from "@/components/magicui/shine-border";

const curbsideBenefits = [
  "Lowest available pricing",
  "No need to be home",
  "Fast and flexible pickup",
  "Contactless service available",
  "Ideal for one or two items",
  "Perfect for route-based pickup days",
] as const;

const fullServiceBenefits = [
  "We carry everything out",
  "Loading is included",
  "Light cleanup is included",
  "Great for bulky furniture",
  "Ideal for cleanouts",
  "Final price confirmed before work begins",
] as const;

export function CommandPricing() {
  return (
    <section
      id="command-pricing"
      aria-labelledby="command-pricing-heading"
      className="scroll-mt-24 border-b border-[rgba(0,135,255,0.15)] bg-[#020305] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade className="text-center">
          <h2
            id="command-pricing-heading"
            className="font-display text-4xl tracking-[0.08em] text-white sm:text-5xl"
          >
            COMMAND PRICING
          </h2>
          <p className="mt-3 text-lg font-semibold text-bright">
            Simple. Transparent. No hidden surprises.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-muted">
            These prices cover our most common household-junk jobs. Your final
            price depends on item size, weight, access, location, and disposal
            requirements. We always confirm the price before loading anything.
          </p>
        </BlurFade>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <BlurFade className="h-full">
            <article className="relative flex h-full flex-col overflow-hidden rounded-[12px] border border-bright/60 bg-[rgba(8,11,15,0.92)] p-6 shadow-[0_0_40px_rgba(7,135,255,0.18)] backdrop-blur-sm sm:p-8">
              <ShineBorder
                shineColor={["#0787ff", "#18a0ff", "#0787ff"]}
                duration={14}
                borderWidth={1}
                className="opacity-50"
              />
              <div className="relative z-10 flex flex-1 flex-col">
                <span className="inline-flex w-fit rounded-full border border-bright/50 bg-bright/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-bright">
                  Most Popular
                </span>
                <h3 className="mt-4 font-display text-4xl tracking-[0.08em] text-white sm:text-5xl">
                  CURBSIDE COMMAND
                </h3>
                <p className="mt-3 font-display text-5xl tracking-[0.06em] text-bright">
                  ${CURBSIDE_START}
                  <span className="ml-2 text-lg tracking-[0.12em] text-muted">
                    STARTING AT
                  </span>
                </p>
                <p className="mt-4 max-w-xl text-muted">
                  Our easiest and most affordable option. Place the item outside,
                  send us photos, and receive a confirmed pickup price.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {curbsideBenefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm text-white"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-bright" aria-hidden />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <ShimmerButton href="#quote" className="w-full sm:w-auto">
                    Get My Curbside Price
                  </ShimmerButton>
                </div>
              </div>
            </article>
          </BlurFade>

          <BlurFade delay={0.08} className="h-full">
            <article className="flex h-full flex-col rounded-[12px] border border-[rgba(0,135,255,0.35)] bg-[rgba(8,11,15,0.85)] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-7">
              <h3 className="font-display text-3xl tracking-[0.08em] text-white">
                FULL-SERVICE COMMAND
              </h3>
              <p className="mt-3 font-display text-4xl tracking-[0.06em] text-white">
                ${FULL_SERVICE_START}
                <span className="ml-2 text-base tracking-[0.12em] text-muted">
                  STARTING AT
                </span>
              </p>
              <p className="mt-4 text-sm text-muted">
                Need the item removed from inside your home, garage, basement,
                attic, or apartment? We handle the lifting, loading, hauling, and
                light cleanup.
              </p>
              <ul className="mt-6 space-y-2.5">
                {fullServiceBenefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2 text-sm text-white"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-bright" aria-hidden />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <Button href="#full-service" className="w-full">
                  Request Full-Service Quote
                </Button>
              </div>
            </article>
          </BlurFade>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted">
          The price shown applies to a typical job that matches the description.
          Final pricing depends on size, weight, access, location, specialty
          disposal, and the photos provided. We confirm the final price before
          loading anything.
        </p>
      </div>
    </section>
  );
}
