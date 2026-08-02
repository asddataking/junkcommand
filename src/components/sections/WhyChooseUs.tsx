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
            src="/images/trailer.webp"
            alt="Dan and Gage with the Junk Command trailer, mission ready for Port Huron junk removal"
            fill
            loading="lazy"
            className="object-cover object-[18%_42%] scale-[1.28]"
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
            As a veteran-owned Port Huron junk removal company, we make Curbside
            Command the easy default and Full-Service Command the premium
            hands-off option — clear communication, transparent pricing, and
            debris removal done right.
          </p>

          <ul className="mt-8 space-y-5">
            {WHY_CHOOSE.map((item, index) => (
              <motion.li
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: reduceMotion ? 0 : index * 0.05,
                }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 inline-flex shrink-0 items-center gap-1.5 rounded-full border border-bright/40 bg-bright/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-bright">
                  <Check className="size-3" aria-hidden />
                  {item.title}
                </span>
                <p className="pt-0.5 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
