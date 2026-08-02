"use client";

import { useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { LOAD_TIERS } from "@/data/curbside-pricing";
import { useHomepageBooking } from "@/components/home/HomepageBookingContext";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

const FILL_STEPS = [25, 50, 75, 100] as const;

export function CommandLoadPricing() {
  const reduceMotion = useReducedMotion();
  const { applyPrefill } = useHomepageBooking();
  const [fill, setFill] = useState<(typeof FILL_STEPS)[number]>(25);

  const tier = useMemo(
    () => LOAD_TIERS.find((t) => t.fillPercent === fill) ?? LOAD_TIERS[0],
    [fill],
  );

  const onSliderChange = (value: number) => {
    const nearest = FILL_STEPS.reduce((prev, curr) =>
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev,
    );
    setFill(nearest);
  };

  const getLoadPrice = () => {
    applyPrefill({
      serviceType: "Command Load Pricing",
      itemDescription: `${tier.name} — ${tier.fillPercent}% trailer load`,
      details: [
        `Selected load tier: ${tier.name} (${tier.fillPercent}%)`,
        `Price: $${tier.price}`,
        `Approx. volume: ${tier.cubicYards} cubic yards`,
        `Examples: ${tier.examples.join("; ")}`,
        "Preliminary load selection. Confirm final price from photos before pickup.",
      ].join("\n"),
      estimateRange: `$${tier.price}`,
      recommendedService: `${tier.name} (Command Load)`,
    });
  };

  return (
    <section
      id="load-pricing"
      aria-labelledby="load-pricing-heading"
      className="scroll-mt-24 border-b border-[rgba(0,135,255,0.15)] bg-[#020305] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade className="max-w-3xl">
          <h2
            id="load-pricing-heading"
            className="font-display text-4xl tracking-[0.08em] text-white sm:text-5xl"
          >
            COMMAND LOAD PRICING
          </h2>
          <p className="mt-3 text-muted">
            Have more than one or two items? Use the slider to see which cleanup
            size best fits your job. This represents our compact utility trailer
            (about 4&apos; × 9&apos; × 2&apos; deep, ~2.67 cubic yards) — not a
            large commercial junk truck.
          </p>
        </BlurFade>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
          <BlurFade>
            <div className="rounded-[12px] border border-[rgba(0,135,255,0.35)] bg-[#080B0F] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bright">
                Junk Command Utility Trailer
              </p>
              <div className="relative mt-6 mx-auto aspect-[16/9] max-w-lg">
                <svg
                  viewBox="0 0 320 180"
                  className="h-full w-full"
                  role="img"
                  aria-label={`Trailer filled approximately ${fill} percent`}
                >
                  <rect
                    x="20"
                    y="40"
                    width="240"
                    height="90"
                    rx="6"
                    fill="#020305"
                    stroke="rgba(24,160,255,0.55)"
                    strokeWidth="2"
                  />
                  <defs>
                    <clipPath id="trailer-clip">
                      <rect x="24" y="44" width="232" height="82" rx="4" />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#trailer-clip)">
                    <rect
                      x="24"
                      y={126 - (82 * fill) / 100}
                      width="232"
                      height={(82 * fill) / 100}
                      fill="rgba(24,160,255,0.55)"
                      style={{
                        transition: reduceMotion
                          ? undefined
                          : "y 0.25s ease, height 0.25s ease",
                      }}
                    />
                  </g>
                  <text
                    x="140"
                    y="92"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="22"
                    fontFamily="var(--font-bebas), sans-serif"
                  >
                    {fill}%
                  </text>
                  <circle cx="70" cy="145" r="14" fill="#111" stroke="#18a0ff" />
                  <circle cx="210" cy="145" r="14" fill="#111" stroke="#18a0ff" />
                  <rect
                    x="250"
                    y="70"
                    width="40"
                    height="20"
                    rx="3"
                    fill="#080B0F"
                    stroke="rgba(24,160,255,0.45)"
                  />
                </svg>
              </div>

              <label
                htmlFor="load-slider"
                className="mt-6 block text-sm font-semibold text-white"
              >
                Load size: {tier.name}
              </label>
              <input
                id="load-slider"
                type="range"
                min={25}
                max={100}
                step={25}
                value={fill}
                onChange={(e) => onSliderChange(Number(e.target.value))}
                className="mt-3 w-full accent-[#18a0ff]"
                aria-valuemin={25}
                aria-valuemax={100}
                aria-valuenow={fill}
                aria-valuetext={`${tier.name}, ${fill} percent, ${tier.price} dollars`}
              />
              <div className="mt-2 flex justify-between text-xs text-muted">
                {FILL_STEPS.map((step) => (
                  <button
                    key={step}
                    type="button"
                    className={`rounded px-1 py-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-bright ${
                      fill === step ? "text-bright" : ""
                    }`}
                    onClick={() => setFill(step)}
                  >
                    {step}%
                  </button>
                ))}
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.08}>
            <div className="rounded-[12px] border border-[rgba(0,135,255,0.4)] bg-[rgba(8,11,15,0.9)] p-6 backdrop-blur-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bright">
                {tier.fillPercent}% Full
              </p>
              <h3 className="mt-2 font-display text-4xl tracking-[0.08em] text-white">
                {tier.name.toUpperCase()}
              </h3>
              <p className="mt-3 font-display text-5xl tracking-[0.06em] text-bright">
                ${tier.price}
              </p>
              <p className="mt-2 text-sm text-muted">
                About {tier.cubicYards} cubic yards of ordinary household junk.
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                Good for
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white">
                {tier.examples.map((example) => (
                  <li key={example}>• {example}</li>
                ))}
              </ul>
              <div className="mt-8">
                <ShimmerButton
                  type="button"
                  className="w-full sm:w-auto"
                  onClick={getLoadPrice}
                >
                  Get My Load Price
                </ShimmerButton>
              </div>
              <p className="mt-4 text-xs text-muted">
                Labor, loading, transportation, and standard disposal for ordinary
                household junk are included unless otherwise stated. Heavy
                materials require separate pricing.
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
