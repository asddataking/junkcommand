"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ClipboardList,
  MessageCircle,
  Sparkles,
  Truck,
} from "lucide-react";
import { HOW_IT_WORKS } from "@/lib/constants";

const icons = [ClipboardList, MessageCircle, Truck, Sparkles];

export function HowItWorks() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 border-y border-[rgba(0,135,255,0.15)] bg-[#0B1016] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl tracking-[0.08em] text-white sm:text-5xl">
          How It Works
        </h2>

        <ol className="mt-10 grid gap-6 md:grid-cols-4 md:gap-4">
          {HOW_IT_WORKS.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.li
                key={item.step}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="relative flex gap-4 md:flex-col md:items-start"
              >
                <div className="relative flex shrink-0 items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(0,135,255,0.55)] bg-[#080B0F] text-bright">
                    <Icon className="size-6" aria-hidden />
                  </div>
                  {index < HOW_IT_WORKS.length - 1 ? (
                    <ArrowRight
                      className="absolute -right-8 hidden size-5 text-primary/60 md:block xl:-right-10"
                      aria-hidden
                    />
                  ) : null}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bright">
                    Step {item.step}
                  </p>
                  <h3 className="mt-1 font-display text-2xl tracking-[0.08em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
