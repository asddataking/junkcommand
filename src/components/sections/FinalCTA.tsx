"use client";

import { BRAND } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";
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
        <div className="relative overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.45)] bg-[#080B0F]/80 px-6 py-8 backdrop-blur-sm sm:px-10 sm:py-10">
          <BorderBeam
            size={140}
            duration={9}
            colorFrom="#18a0ff"
            colorTo="#0787ff"
          />
          <div className="relative z-10 flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
              <Logo compact />
              <div>
                <h2 className="font-display text-3xl tracking-[0.08em] text-white sm:text-4xl">
                  READY TO TAKE COMMAND?
                </h2>
                <p className="mt-2 max-w-xl text-sm text-muted sm:text-base">
                  Let Junk Command handle your junk, so you don&apos;t have to.
                </p>
              </div>
            </div>
            <ShimmerButton href="#quote" className="w-full shrink-0 md:w-auto">
              Get Started Now
            </ShimmerButton>
          </div>
          <p className="sr-only">Call {BRAND.phone} for same-day options.</p>
        </div>
      </BlurFade>
    </section>
  );
}
