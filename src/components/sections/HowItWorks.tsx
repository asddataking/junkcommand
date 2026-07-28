"use client";

import {
  ClipboardList,
  MessageCircle,
  Sparkles,
  Truck,
} from "lucide-react";
import { HOW_IT_WORKS } from "@/lib/constants";
import { BlurFade } from "@/components/magicui/blur-fade";
import { DotPattern } from "@/components/magicui/dot-pattern";

const icons = [ClipboardList, MessageCircle, Truck, Sparkles];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-24 overflow-hidden border-b border-[rgba(0,135,255,0.15)] bg-[#020305] py-16 sm:py-20"
    >
      <DotPattern
        width={22}
        height={22}
        cr={0.9}
        className="opacity-20 [mask-image:linear-gradient(to_bottom,white,transparent)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade className="text-center">
          <h2 className="font-display text-4xl tracking-[0.08em] text-white sm:text-5xl">
            HOW IT WORKS
          </h2>
        </BlurFade>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {HOW_IT_WORKS.map((item, index) => {
            const Icon = icons[index];
            return (
              <li
                key={item.step}
                className="relative flex flex-col items-center text-center"
              >
                <BlurFade delay={index * 0.08} className="flex w-full flex-col items-center">
                  {index < HOW_IT_WORKS.length - 1 ? (
                    <div
                      className="pointer-events-none absolute left-[calc(50%+2.25rem)] top-7 hidden h-px w-[calc(100%-1.5rem)] bg-gradient-to-r from-bright/70 to-bright/10 lg:block"
                      aria-hidden
                    />
                  ) : null}
                  <div className="glow-border relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(0,135,255,0.65)] bg-[#080B0F] text-bright shadow-[0_0_24px_rgba(7,135,255,0.25)]">
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <h3 className="mt-5 font-display text-xl tracking-[0.1em] text-white">
                    {item.title.toUpperCase()}
                  </h3>
                  <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </BlurFade>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
