"use client";

import {
  Camera,
  CheckCircle2,
  Home,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { CURBSIDE_START } from "@/data/curbside-pricing";
import { Button } from "@/components/ui/Button";
import { MediaImage } from "@/components/ui/MediaImage";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { BorderBeam } from "@/components/magicui/border-beam";

const trustItems = [
  { icon: ShieldCheck, label: "Veteran Owned" },
  { icon: Home, label: "Local Family Business" },
  { icon: CheckCircle2, label: "Transparent Pricing" },
  { icon: Camera, label: "Fast Photo Estimates" },
  { icon: MapPin, label: "Port Huron Area Service" },
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[rgba(0,135,255,0.2)]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#020305]" />
        <MediaImage
          src="/images/junk-command-hero.webp"
          alt="Junk Command crew clearing clutter from a Port Huron property"
          fill
          priority
          className="object-cover object-center opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020305] via-[#020305]/90 to-[#020305]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020305] via-transparent to-[#020305]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(7,135,255,0.2),transparent_55%)]" />
        <DotPattern
          width={24}
          height={24}
          cr={1}
          className="opacity-30 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8 lg:py-20">
        <div className="space-y-7">
          <BlurFade delay={0.05} inView={false}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
              Port Huron &amp; Blue Water Area Junk Removal
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.75rem,8vw,4.75rem)] leading-[0.95] tracking-[0.04em] text-white">
              EASY CURBSIDE JUNK PICKUP
              <br />
              <span className="text-bright">STARTING AT ${CURBSIDE_START}</span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.12} inView={false}>
            <p className="max-w-xl text-base text-muted sm:text-lg">
              Place your unwanted item outside, send us a few photos, and receive
              a confirmed price before pickup. No complicated estimate, no waiting
              around, and no need to be home.
            </p>
            <p className="mt-3 max-w-xl text-sm text-muted/90">
              Starting price applies to qualifying items already outside and ready
              for pickup. Final pricing is confirmed from your photos.
            </p>
          </BlurFade>

          <BlurFade delay={0.18} inView={false}>
            <ul className="flex flex-wrap gap-2.5">
              {trustItems.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 border border-[rgba(0,135,255,0.4)] bg-[#080B0F]/85 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white"
                >
                  <Icon className="size-3.5 text-bright" aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
          </BlurFade>

          <BlurFade delay={0.24} inView={false}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <ShimmerButton href="#quote" className="w-full sm:w-auto">
                Get My Curbside Price
              </ShimmerButton>
              <Button
                href="#full-service"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                I Need Full-Service Removal
              </Button>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.15} direction="left" inView={false} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
            <div className="absolute inset-0 overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.45)]">
              <MediaImage
                src="/images/dan-gage-luna.webp"
                alt="Dan and Gage with Luna the Blue Heeler and the Junk Command truck and trailer"
                fill
                className="object-cover object-[center_35%]"
                sizes="(max-width: 1024px) 100vw, 44vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020305]/80 via-transparent to-transparent" />
              <BorderBeam
                size={120}
                duration={8}
                colorFrom="#18a0ff"
                colorTo="#0787ff"
                borderWidth={1.5}
              />
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
