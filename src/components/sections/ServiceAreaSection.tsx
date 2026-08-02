"use client";

import Link from "next/link";
import { Check, Shield } from "lucide-react";
import { HOMEPAGE_SERVICE_AREAS } from "@/data/homepage-service-areas";
import { MichiganServiceMap } from "@/components/sections/MichiganServiceMap";
import { Button } from "@/components/ui/Button";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShineBorder } from "@/components/magicui/shine-border";

function scrollToQuoteAddress() {
  const quote = document.getElementById("quote");
  quote?.scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(() => {
    document.getElementById("serviceAddress")?.focus();
  }, 450);
}

export function ServiceAreaSection() {
  return (
    <section
      id="service-areas"
      aria-labelledby="service-areas-heading"
      className="scroll-mt-24 border-t border-[rgba(0,135,255,0.15)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="relative overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.4)] bg-[#080B0F] p-5 shadow-[0_0_40px_rgba(7,135,255,0.12)] sm:p-7 lg:p-8">
            <ShineBorder
              shineColor={["#0787ff", "#18a0ff", "#0787ff"]}
              duration={16}
              borderWidth={1}
              className="opacity-40"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,135,255,0.12),transparent_65%)]"
              aria-hidden
            />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.9fr_0.95fr] lg:items-center lg:gap-8">
              <div className="order-1">
                <h2
                  id="service-areas-heading"
                  className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.05]"
                >
                  WE SERVE PORT HURON &amp; ST. CLAIR COUNTY
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                  Junk Command provides fast, professional{" "}
                  <span className="text-white">Port Huron junk removal</span>{" "}
                  and{" "}
                  <span className="text-white">Blue Water Area junk removal</span>{" "}
                  — plus trusted{" "}
                  <span className="text-white">
                    Kimball Township junk removal
                  </span>
                  ,{" "}
                  <span className="text-white">Fort Gratiot junk removal</span>,
                  and{" "}
                  <span className="text-white">Marysville junk removal</span>{" "}
                  for residential and light commercial jobs.
                </p>

                <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {HOMEPAGE_SERVICE_AREAS.map((area) => (
                    <li
                      key={area.name}
                      className="flex items-center gap-2.5 text-sm text-white"
                    >
                      <Check
                        className="size-4 shrink-0 text-bright"
                        aria-hidden
                      />
                      {area.slug ? (
                        <Link
                          href={`/service-areas/${area.slug}`}
                          className="transition-colors hover:text-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bright"
                        >
                          {area.name}
                        </Link>
                      ) : (
                        <span>{area.name}</span>
                      )}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-sm text-muted">
                  Not sure whether we serve your address? Send us your ZIP code
                  for a fast answer on{" "}
                  <span className="text-white">
                    junk removal near Port Huron
                  </span>
                  .
                </p>

                <Button
                  className="mt-5 hidden w-full sm:w-auto lg:inline-flex"
                  onClick={scrollToQuoteAddress}
                >
                  Check My Address
                </Button>
              </div>

              <div className="order-2">
                <MichiganServiceMap />
              </div>

              <div className="order-3 space-y-4">
                <div className="rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-[#020305]/80 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-bright">
                    Our Promise
                  </p>
                  <h3 className="mt-2 font-display text-2xl tracking-[0.08em] text-white">
                    LOCAL CREW. CLEAR PRICING.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Fast, friendly, and hassle-free junk removal from a
                    veteran-owned Port Huron team — upfront quotes before we
                    load, and a broom-clean finish when we leave.
                  </p>
                </div>

                <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  <Shield className="size-3.5 text-bright" aria-hidden />
                  <span>Veteran Owned</span>
                  <span className="text-bright/40" aria-hidden>
                    •
                  </span>
                  <span>Locally Operated</span>
                  <span className="text-bright/40" aria-hidden>
                    •
                  </span>
                  <span>Family Focused</span>
                </p>

                <Button
                  className="w-full lg:hidden"
                  onClick={scrollToQuoteAddress}
                >
                  Check My Address
                </Button>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
