"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { REVIEWS } from "@/lib/constants";
import { StarRating } from "@/components/ui/StarRating";

export function ReviewsCarousel() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((current) => (current + dir + REVIEWS.length) % REVIEWS.length);
    },
    [],
  );

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => go(1), 7000);
    return () => window.clearInterval(id);
  }, [go, reduceMotion]);

  const review = REVIEWS[index];

  return (
    <section
      id="reviews"
      className="scroll-mt-24 border-y border-[rgba(0,135,255,0.18)] bg-secondary py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
              Reviews
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[0.06em] text-white sm:text-5xl">
              WHAT CUSTOMERS SAY
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              className="rounded-[2px] border border-[rgba(0,135,255,0.45)] p-2 text-white hover:bg-[rgba(7,135,255,0.12)]"
              aria-label="Previous review"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="rounded-[2px] border border-[rgba(0,135,255,0.45)] p-2 text-white hover:bg-[rgba(7,135,255,0.12)]"
              aria-label="Next review"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div
          className="relative mt-10 overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-card p-8 sm:p-10"
          onTouchStart={(e) => setTouchStartX(e.changedTouches[0]?.clientX ?? null)}
          onTouchEnd={(e) => {
            if (touchStartX == null) return;
            const delta = (e.changedTouches[0]?.clientX ?? 0) - touchStartX;
            if (Math.abs(delta) > 50) go(delta < 0 ? 1 : -1);
            setTouchStartX(null);
          }}
        >
          <Quote className="absolute right-6 top-6 size-12 text-bright/20" aria-hidden />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={review.name}
              initial={reduceMotion ? false : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, x: -24 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl"
            >
              <StarRating className="mb-4" />
              <p className="text-xl leading-relaxed text-white sm:text-2xl">
                “{review.quote}”
              </p>
              <footer className="mt-6 text-sm text-muted">
                <cite className="not-italic font-semibold text-bright">
                  {review.name}
                </cite>
                <span className="mx-2 text-muted/60">·</span>
                {review.city}
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-8 flex gap-2" role="tablist" aria-label="Review slides">
            {REVIEWS.map((item, i) => (
              <button
                key={item.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show review ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-8 rounded-[1px] transition-colors ${
                  i === index ? "bg-bright" : "bg-[rgba(7,135,255,0.25)]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
