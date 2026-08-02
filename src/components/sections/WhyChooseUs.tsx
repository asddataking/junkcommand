"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { WHY_CHOOSE } from "@/lib/constants";
import { MediaImage } from "@/components/ui/MediaImage";

export function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.4)] bg-card">
          <MediaImage
            src="/images/dan-gage-luna.webp"
            alt="Dan and Gage with Luna beside the Junk Command truck and trailer, mission ready for Port Huron junk removal"
            fill
            loading="lazy"
            className="object-cover object-[32%_38%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020305] via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 rounded-[2px] border border-[rgba(0,135,255,0.45)] bg-black/70 px-4 py-3">
            <p className="font-display text-xl tracking-[0.1em] text-white">
              MISSION READY
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-bright">
              Local crew · Fast turnaround
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Built Different
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-[0.06em] text-white sm:text-5xl">
            WHY CHOOSE JUNK COMMAND?
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            As a veteran-owned Port Huron junk removal company, we run every job
            like a mission — clear communication, clean work, and debris
            removal done right so your space is ready when we leave.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {WHY_CHOOSE.map((item, index) => (
              <motion.li
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: reduceMotion ? 0 : index * 0.05 }}
                className="rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-5"
              >
                <div className="mb-3 flex size-8 items-center justify-center rounded-[2px] border border-[rgba(0,135,255,0.45)] bg-secondary text-bright">
                  <Check className="size-4" aria-hidden />
                </div>
                <h3 className="font-display text-xl tracking-[0.08em] text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
