"use client";

import { useMemo, useState } from "react";
import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const LOAD_OPTIONS = [
  { id: "single", label: "1–2 items", multiplier: 1, hint: "Mattress, recliner, or small pile" },
  { id: "quarter", label: "1/4 truck", multiplier: 2.2, hint: "Few furniture pieces or appliances" },
  { id: "half", label: "1/2 truck", multiplier: 3.8, hint: "Garage corner or small cleanout" },
  { id: "full", label: "Full truck", multiplier: 6.5, hint: "Full garage or multi-room clear" },
] as const;

const ADDONS = [
  { id: "stairs", label: "Stairs / difficult access", amount: 25 },
  { id: "hot-tub", label: "Hot tub / shed breakdown", amount: 75 },
  { id: "soonest", label: "Soonest available preferred", amount: 0 },
] as const;

const BASE = 99;

export function EstimateCalculator() {
  const [loadId, setLoadId] = useState<(typeof LOAD_OPTIONS)[number]["id"]>("quarter");
  const [addons, setAddons] = useState<string[]>([]);

  const estimate = useMemo(() => {
    const load = LOAD_OPTIONS.find((o) => o.id === loadId) ?? LOAD_OPTIONS[1];
    const addonTotal = ADDONS.filter((a) => addons.includes(a.id)).reduce(
      (sum, a) => sum + a.amount,
      0,
    );
    const low = Math.round(BASE * load.multiplier + addonTotal);
    const high = Math.round(low * 1.25);
    return { low, high, load };
  }, [loadId, addons]);

  function toggleAddon(id: string) {
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  return (
    <div className="rounded-[2px] border border-[rgba(0,135,255,0.4)] bg-card p-5 glow-border sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
        Instant Estimator
      </p>
      <h2 className="mt-2 font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
        BALLPARK YOUR PRICE
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        This tool gives a planning range only. Final pricing is confirmed from
        photos or an on-site look — always upfront before we load.
      </p>

      <fieldset className="mt-8">
        <legend className="text-sm font-semibold text-white">Load size</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {LOAD_OPTIONS.map((option) => {
            const selected = loadId === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setLoadId(option.id)}
                className={`rounded-[2px] border px-4 py-3 text-left transition-colors ${
                  selected
                    ? "border-bright bg-[rgba(7,135,255,0.12)]"
                    : "border-[rgba(0,135,255,0.3)] hover:border-bright/70"
                }`}
              >
                <span className="block text-sm font-semibold text-white">
                  {option.label}
                </span>
                <span className="mt-1 block text-xs text-muted">{option.hint}</span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold text-white">Add-ons</legend>
        <div className="mt-3 space-y-2">
          {ADDONS.map((addon) => (
            <label
              key={addon.id}
              className="flex cursor-pointer items-center gap-3 rounded-[2px] border border-[rgba(0,135,255,0.25)] px-4 py-3 text-sm text-muted hover:border-bright/50"
            >
              <input
                type="checkbox"
                checked={addons.includes(addon.id)}
                onChange={() => toggleAddon(addon.id)}
                className="size-4 accent-[var(--primary)]"
              />
              <span className="flex-1 text-white">{addon.label}</span>
              {addon.amount > 0 ? (
                <span className="text-xs text-bright">+${addon.amount}</span>
              ) : (
                <span className="text-xs text-muted">Ask</span>
              )}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-8 flex flex-col gap-4 border-t border-[rgba(0,135,255,0.2)] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            Estimated range
          </p>
          <p className="mt-1 font-display text-4xl tracking-[0.06em] text-white">
            ${estimate.low} – ${estimate.high}
          </p>
          <p className="mt-1 text-xs text-muted">
            Minimum pickup starts at ${BASE}. Not a final quote.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <Button href="/book-online" showArrow>
            Lock In My Free Quote
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
