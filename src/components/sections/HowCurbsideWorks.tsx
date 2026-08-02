"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Camera,
  Check,
  Clock3,
  DollarSign,
  MapPin,
  Shield,
  Sparkles,
  Truck,
} from "lucide-react";
import { CURBSIDE_START, FULL_SERVICE_START } from "@/data/curbside-pricing";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { BlurFade } from "@/components/magicui/blur-fade";

const steps = [
  {
    step: "01",
    title: "Send Photos",
    description:
      "Upload two to four clear photos of your unwanted items.",
    icon: Camera,
  },
  {
    step: "02",
    title: "Get Your Price",
    description:
      "Junk Command reviews the photos and texts you a confirmed price.",
    icon: DollarSign,
  },
  {
    step: "03",
    title: "We Pick It Up",
    description:
      "Place the items outside and we handle the hauling and disposal.",
    icon: Truck,
  },
] as const;

const loveFeatures = [
  { icon: DollarSign, label: "Lower pricing than inside removal" },
  { icon: Clock3, label: "No need to wait at home" },
  { icon: Camera, label: "Easy photo estimates" },
  { icon: MapPin, label: "Flexible route-based pickup" },
  { icon: Sparkles, label: "Contactless service available" },
  { icon: Check, label: "Confirmed pricing before pickup" },
  { icon: Shield, label: "Veteran-owned local company" },
  { icon: Truck, label: "Fast service throughout the Blue Water Area" },
] as const;

export function HowCurbsideWorks() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="how-curbside-works"
      aria-labelledby="how-curbside-heading"
      className="scroll-mt-24 border-b border-[rgba(0,135,255,0.15)] bg-[#020305] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Curbside Command
          </p>
          <h2
            id="how-curbside-heading"
            className="mt-3 font-display text-4xl tracking-[0.08em] text-white sm:text-5xl"
          >
            HOW CURBSIDE COMMAND WORKS
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            The easiest way to book Port Huron junk hauling — photos in, confirmed
            price out, junk gone.
          </p>
        </BlurFade>

        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.li
                key={item.step}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.35,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
                className="rounded-[8px] border border-[rgba(0,135,255,0.35)] bg-[rgba(8,11,15,0.85)] p-6 shadow-[0_0_28px_rgba(7,135,255,0.08)] backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl tracking-[0.12em] text-bright">
                    {item.step}
                  </span>
                  <span className="flex size-11 items-center justify-center rounded-[6px] border border-[rgba(0,135,255,0.4)] bg-[#020305] text-bright">
                    <Icon className="size-5" aria-hidden />
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl tracking-[0.08em] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </motion.li>
            );
          })}
        </ol>

        <div className="mt-10 flex justify-center">
          <ShimmerButton href="#quote">Get My Curbside Price</ShimmerButton>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-3xl tracking-[0.06em] text-white">
              WHY CUSTOMERS LOVE CURBSIDE COMMAND
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {loveFeatures.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-start gap-3 rounded-[6px] border border-[rgba(0,135,255,0.25)] bg-card px-4 py-3 text-sm text-white"
                >
                  <Icon className="mt-0.5 size-4 shrink-0 text-bright" aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[8px] border border-bright/50 bg-[rgba(7,135,255,0.1)] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-bright">
                Most Popular
              </p>
              <h4 className="mt-2 font-display text-2xl tracking-[0.08em] text-white">
                CURBSIDE COMMAND
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>• Items already outside</li>
                <li>• Fastest service</li>
                <li>• Lowest price from ${CURBSIDE_START}</li>
                <li>• Flexible pickup window</li>
              </ul>
            </div>
            <div className="rounded-[8px] border border-[rgba(0,135,255,0.3)] bg-card p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                Premium Option
              </p>
              <h4 className="mt-2 font-display text-2xl tracking-[0.08em] text-white">
                FULL-SERVICE COMMAND
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>• We enter the property</li>
                <li>• We carry everything</li>
                <li>• More precise appointment</li>
                <li>• Starting at ${FULL_SERVICE_START}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
