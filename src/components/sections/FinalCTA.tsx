"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,135,255,0.18),transparent_60%)]" />
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
          Ready When You Are
        </p>
        <h2 className="mt-3 font-display text-4xl tracking-[0.06em] text-white sm:text-6xl">
          TAKE COMMAND TODAY
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          Get a free quote in minutes. Call, text, or fill out the form — Junk
          Command will clear the clutter so you can take back your space.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="#quote" showArrow>
            Get My Free Quote
          </Button>
          <Button href={BRAND.phoneHref} variant="secondary">
            Call {BRAND.phone}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
