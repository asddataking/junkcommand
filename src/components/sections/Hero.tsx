"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Clock3, MapPin, ShieldCheck } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { MediaImage } from "@/components/ui/MediaImage";
import { StarRating } from "@/components/ui/StarRating";

const trustItems = [
  { icon: Clock3, label: "Same-Day Service" },
  { icon: CheckCircle2, label: "Upfront Pricing" },
  { icon: ShieldCheck, label: "Licensed & Insured" },
] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-[rgba(0,135,255,0.2)]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#020305]" />
        <MediaImage
          src="/images/junk-command-hero.webp"
          alt="Junk Command crew clearing clutter from a Port Huron property"
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020305] via-[#020305]/92 to-[#020305]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020305] via-transparent to-[#020305]/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(7,135,255,0.18),transparent_55%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-24">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="space-y-7"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Port Huron · St. Clair County
          </p>

          <h1 className="font-display text-[clamp(3rem,9vw,5.5rem)] leading-[0.92] tracking-[0.04em] text-white">
            TAKE COMMAND
            <br />
            <span className="text-bright">OF YOUR CLUTTER.</span>
          </h1>

          <p className="max-w-xl text-base text-muted sm:text-lg">
            Fast. Reliable. Professional Junk Removal.
          </p>

          <ul className="flex flex-wrap gap-3">
            {trustItems.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-[#080B0F]/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white"
              >
                <Icon className="size-3.5 text-bright" aria-hidden />
                {label}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#quote" showArrow className="w-full sm:w-auto">
              Get My Free Quote
            </Button>
            <Button
              href={BRAND.phoneHref}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Call Now {BRAND.phone}
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <StarRating />
            <p className="text-sm text-muted">
              <span className="font-semibold text-white">250+</span> five-star
              reviews
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
            <MapPin className="size-4 text-bright" aria-hidden />
            <span>
              Servicing Port Huron, Marysville, St. Clair County & Surrounding
              Areas
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
          className="relative"
        >
          <div className="glow-border-strong relative aspect-[4/5] overflow-hidden rounded-[2px] bg-[#080B0F] sm:aspect-[5/4] lg:aspect-[4/5]">
            <MediaImage
              src="/images/dan-gage-luna.webp"
              alt="Dan and Gage with Luna the Blue Heeler wearing Junk Command K-9 Cleanup Unit vest"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020305] via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="rounded-[2px] border border-[rgba(0,135,255,0.45)] bg-black/70 px-4 py-3 backdrop-blur-sm">
                <p className="font-display text-2xl tracking-[0.12em] text-white">
                  JUNK COMMAND
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-bright">
                  K-9 Cleanup Unit · Luna
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
