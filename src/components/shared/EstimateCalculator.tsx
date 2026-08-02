"use client";

import { useMemo, useState } from "react";
import {
  CURBSIDE_START,
  FULL_SERVICE_START,
  LOAD_TIERS,
} from "@/data/curbside-pricing";
import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const SERVICE_OPTIONS = [
  {
    id: "curbside",
    label: "Curbside Command",
    hint: `Items already outside — from $${CURBSIDE_START}`,
    price: CURBSIDE_START,
  },
  {
    id: "full-service",
    label: "Full-Service Command",
    hint: `We carry items out — from $${FULL_SERVICE_START}`,
    price: FULL_SERVICE_START,
  },
  ...LOAD_TIERS.map((tier) => ({
    id: tier.id,
    label: `${tier.name} (${tier.fillPercent}%)`,
    hint: tier.examples[0],
    price: tier.price,
  })),
] as const;

export function EstimateCalculator() {
  const [serviceId, setServiceId] = useState<(typeof SERVICE_OPTIONS)[number]["id"]>(
    "curbside",
  );

  const estimate = useMemo(() => {
    const selected =
      SERVICE_OPTIONS.find((o) => o.id === serviceId) ?? SERVICE_OPTIONS[0];
    const low = selected.price;
    const high =
      selected.id === "curbside" || selected.id === "full-service"
        ? Math.round(selected.price * 1.2)
        : selected.price;
    return { low, high, selected };
  }, [serviceId]);

  return (
    <div className="rounded-[8px] border border-[rgba(0,135,255,0.4)] bg-card p-5 glow-border sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
        Command Pricing Guide
      </p>
      <h2 className="mt-2 font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
        BALLPARK YOUR PRICE
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        This tool gives a planning range only. Final pricing is confirmed from
        photos — always upfront before we load. For a detailed item estimator,
        use the homepage Build Your Pickup Estimate tool.
      </p>

      <fieldset className="mt-8">
        <legend className="text-sm font-semibold text-white">Service / load</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {SERVICE_OPTIONS.map((option) => {
            const selected = serviceId === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setServiceId(option.id)}
                className={`rounded-[6px] border px-4 py-3 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bright ${
                  selected
                    ? "border-bright bg-[rgba(7,135,255,0.12)]"
                    : "border-[rgba(0,135,255,0.3)] hover:border-bright/70"
                }`}
              >
                <span className="block text-sm font-semibold text-white">
                  {option.label}
                </span>
                <span className="mt-1 block text-xs text-muted">{option.hint}</span>
                <span className="mt-2 block text-sm text-bright">
                  From ${option.price}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-8 flex flex-col gap-4 border-t border-[rgba(0,135,255,0.2)] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            Estimated range
          </p>
          <p className="mt-1 font-display text-4xl tracking-[0.06em] text-white">
            ${estimate.low}
            {estimate.high !== estimate.low ? ` – $${estimate.high}` : null}
          </p>
          <p className="mt-1 text-xs text-muted">
            Curbside from ${CURBSIDE_START}. Full-service from $
            {FULL_SERVICE_START}. Not a final quote.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <Button href="/#quote" showArrow>
            Confirm With Photos
          </Button>
          <a
            href={BRAND.smsHref}
            className="text-sm font-semibold text-bright hover:text-white"
          >
            Or text photos to {BRAND.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
