"use client";

import { BRAND } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { BorderBeam } from "@/components/magicui/border-beam";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { MediaImage } from "@/components/ui/MediaImage";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-[rgba(0,135,255,0.2)] py-14 sm:py-16">
      <div className="absolute inset-0">
        <MediaImage
          src="/images/crew-cta-bg.webp"
          alt=""
          fill
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#020305]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,135,255,0.22),transparent_60%)]" />
        <DotPattern width={20} height={20} cr={0.8} className="opacity-25" />
      </div>

      <BlurFade className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[10px] border border-[rgba(0,135,255,0.45)] bg-[#080B0F]/80 px-6 py-8 backdrop-blur-sm sm:px-10 sm:py-10">
          <BorderBeam
            size={140}
            duration={9}
            colorFrom="#18a0ff"
            colorTo="#0787ff"
          />
          <div className="relative z-10 flex flex-col items-center gap-6 text-center">
            <Logo compact />
            <div>
              <h2 className="font-display text-3xl tracking-[0.08em] text-white sm:text-5xl">
                READY TO CLEAR IT OUT?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-muted sm:text-base">
                Send us a few photos and get a confirmed price before pickup.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <ShimmerButton href="#quote" className="w-full sm:w-auto">
                Get My Curbside Price
              </ShimmerButton>
              <Button
                href="#full-service"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Request Full-Service Removal
              </Button>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Local. Veteran-owned. Transparent pricing. No surprise charges
              before loading.
            </p>
          </div>
          <p className="sr-only">Call {BRAND.phone} for a fast quote.</p>
        </div>
      </BlurFade>
    </section>
  );
}
