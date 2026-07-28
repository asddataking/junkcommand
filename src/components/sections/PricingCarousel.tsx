"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { PRICING_ITEMS } from "@/data/pricing";
import { PricingCard } from "@/components/sections/PricingCard";
import { PricingDisclaimer } from "@/components/sections/PricingDisclaimer";
import { BlurFade } from "@/components/magicui/blur-fade";

export function PricingCarousel() {
  const reduceMotion = useReducedMotion();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
    loop: false,
    skipSnaps: false,
    duration: reduceMotion ? 0 : 22,
  });

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    updateButtons();
    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      updateButtons();
    });
  }, [emblaApi, updateButtons]);

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="scroll-mt-24 border-b border-[rgba(0,135,255,0.15)] bg-[#020305] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade className="text-center">
          <h2
            id="pricing-heading"
            className="font-display text-4xl tracking-[0.08em] text-white sm:text-5xl"
          >
            SIMPLE,{" "}
            <span className="text-bright">UPFRONT PRICING</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            Most standard single-item pickups start at our $99 minimum. Need
            junk removal near Port Huron? Send photos for a fast, accurate quote
            before we load anything.
          </p>
        </BlurFade>

        <div className="relative mt-10">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y gap-4">
              {PRICING_ITEMS.map((item, index) => (
                <div
                  key={item.id}
                  className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[46%] md:basis-[32%] lg:basis-[23.5%]"
                >
                  <PricingCard item={item} priority={index < 2} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div
              className="flex items-center gap-2"
              role="tablist"
              aria-label="Pricing carousel pages"
            >
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={index === selectedIndex}
                  aria-label={`Go to pricing slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bright ${
                    index === selectedIndex
                      ? "w-7 bg-bright shadow-[0_0_12px_rgba(24,160,255,0.55)]"
                      : "w-2.5 bg-[rgba(0,135,255,0.35)] hover:bg-bright/70"
                  }`}
                  onClick={() => emblaApi?.scrollTo(index)}
                />
              ))}
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <button
                type="button"
                aria-label="Previous pricing items"
                disabled={!canScrollPrev}
                onClick={() => emblaApi?.scrollPrev()}
                className="inline-flex size-11 items-center justify-center rounded-[2px] border border-[rgba(0,135,255,0.45)] bg-[#080B0F] text-white transition-colors hover:border-bright hover:text-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bright disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft className="size-5" aria-hidden />
              </button>
              <button
                type="button"
                aria-label="Next pricing items"
                disabled={!canScrollNext}
                onClick={() => emblaApi?.scrollNext()}
                className="inline-flex size-11 items-center justify-center rounded-[2px] border border-[rgba(0,135,255,0.45)] bg-[#080B0F] text-white transition-colors hover:border-bright hover:text-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bright disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronRight className="size-5" aria-hidden />
              </button>
            </div>
          </div>
        </div>

        <PricingDisclaimer />
      </div>
    </section>
  );
}
