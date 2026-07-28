"use client";

import { REVIEWS } from "@/lib/constants";
import { StarRating } from "@/components/ui/StarRating";
import { BlurFade } from "@/components/magicui/blur-fade";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { ShineBorder } from "@/components/magicui/shine-border";
import { DotPattern } from "@/components/magicui/dot-pattern";

export function ReviewsCarousel() {
  return (
    <section
      id="reviews"
      className="relative scroll-mt-24 overflow-hidden border-y border-[rgba(0,135,255,0.18)] bg-[#020305] py-16 sm:py-20"
    >
      <DotPattern
        width={24}
        height={24}
        cr={0.8}
        className="opacity-15 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade className="text-center">
          <AnimatedShinyText className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Read What Your Neighbors Are Saying
          </AnimatedShinyText>
          <h2 className="mt-3 font-display text-4xl tracking-[0.08em] text-white sm:text-5xl">
            FIVE-STAR SERVICE
          </h2>
        </BlurFade>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <BlurFade key={review.name} delay={index * 0.08}>
              <figure className="relative h-full overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-[#080B0F] p-6">
                <ShineBorder
                  shineColor={["#0787ff", "#18a0ff", "#0787ff"]}
                  duration={14 + index * 2}
                  borderWidth={1}
                  className="opacity-45"
                />
                <StarRating className="relative z-10 mb-4" />
                <blockquote className="relative z-10 text-base leading-relaxed text-white">
                  “{review.quote}”
                </blockquote>
                <figcaption className="relative z-10 mt-5 text-sm">
                  <span className="font-semibold text-bright">{review.name}</span>
                  <span className="mx-2 text-muted/50">·</span>
                  <span className="text-muted">{review.city}</span>
                </figcaption>
              </figure>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
