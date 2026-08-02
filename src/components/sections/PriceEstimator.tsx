"use client";

import {
  Armchair,
  BookOpen,
  Box,
  Microwave,
  Minus,
  Plus,
  Sofa,
  Table2,
} from "lucide-react";
import { ESTIMATOR_ITEMS } from "@/data/curbside-pricing";
import { useHomepageBooking } from "@/components/home/HomepageBookingContext";
import {
  buildEstimateDetailsText,
  calculateCurbsideEstimate,
  formatEstimateRange,
} from "@/lib/estimate";
import { BlurFade } from "@/components/magicui/blur-fade";
import { MediaImage } from "@/components/ui/MediaImage";
import { Button } from "@/components/ui/Button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

function ItemIcon({
  icon,
}: {
  icon?: (typeof ESTIMATOR_ITEMS)[number]["icon"];
}) {
  const className = "size-6 text-bright";
  switch (icon) {
    case "chair":
      return <Armchair className={className} aria-hidden />;
    case "bookshelf":
      return <BookOpen className={className} aria-hidden />;
    case "bag":
      return <Box className={className} aria-hidden />;
    case "appliance":
      return <Microwave className={className} aria-hidden />;
    case "desk":
      return <Table2 className={className} aria-hidden />;
    case "sectional":
      return <Sofa className={className} aria-hidden />;
    default:
      return <Box className={className} aria-hidden />;
  }
}

export function PriceEstimator() {
  const {
    quantities,
    setQuantity,
    addItem,
    clearEstimator,
    selection,
    applyPrefill,
  } = useHomepageBooking();

  const result = calculateCurbsideEstimate(selection);

  const confirmWithPhotos = () => {
    applyPrefill({
      serviceType:
        result.pickupType === "Command Load Pricing"
          ? "Command Load Pricing"
          : "Curbside Command",
      itemDescription: selection
        .filter((s) => s.quantity > 0)
        .map((s) => {
          const item = ESTIMATOR_ITEMS.find((i) => i.id === s.id);
          return `${item?.name ?? s.id} × ${s.quantity}`;
        })
        .join(", "),
      details: buildEstimateDetailsText(selection, result),
      estimateRange: formatEstimateRange(result.low, result.high),
      recommendedService: result.recommendedService,
    });
  };

  return (
    <section
      id="estimator"
      aria-labelledby="estimator-heading"
      className="scroll-mt-24 border-b border-[rgba(0,135,255,0.15)] bg-[#080B0F] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade className="max-w-3xl">
          <h2
            id="estimator-heading"
            className="font-display text-4xl tracking-[0.08em] text-white sm:text-5xl"
          >
            BUILD YOUR PICKUP ESTIMATE
          </h2>
          <p className="mt-3 text-muted">
            Select the items you need removed to see a preliminary estimate.
            Upload photos afterward and Junk Command will confirm your exact
            price.
          </p>
        </BlurFade>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
          <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {ESTIMATOR_ITEMS.map((item) => {
              const qty = quantities[item.id] ?? 0;
              return (
                <li
                  key={item.id}
                  className="flex flex-col rounded-[8px] border border-[rgba(0,135,255,0.3)] bg-[#020305]/80 p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="relative flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-[6px] border border-[rgba(0,135,255,0.35)] bg-card">
                      {item.image ? (
                        <MediaImage
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      ) : (
                        <ItemIcon icon={item.icon} />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold text-white">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-bright">
                        {item.isAddonOnly
                          ? `+$${item.startingPrice}`
                          : `From $${item.startingPrice}`}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-2">
                    <div
                      className="inline-flex items-center rounded-[6px] border border-[rgba(0,135,255,0.35)]"
                      role="group"
                      aria-label={`${item.name} quantity`}
                    >
                      <button
                        type="button"
                        className="flex size-9 items-center justify-center text-white transition-colors hover:bg-[rgba(7,135,255,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bright"
                        aria-label={`Decrease ${item.name}`}
                        onClick={() => setQuantity(item.id, Math.max(0, qty - 1))}
                      >
                        <Minus className="size-4" aria-hidden />
                      </button>
                      <span className="min-w-8 text-center text-sm font-semibold text-white">
                        {qty}
                      </span>
                      <button
                        type="button"
                        className="flex size-9 items-center justify-center text-white transition-colors hover:bg-[rgba(7,135,255,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bright"
                        aria-label={`Increase ${item.name}`}
                        onClick={() => setQuantity(item.id, qty + 1)}
                      >
                        <Plus className="size-4" aria-hidden />
                      </button>
                    </div>
                    <Button
                      type="button"
                      variant="secondary"
                      className="!px-3 !py-2 text-xs"
                      onClick={() => addItem(item.id)}
                    >
                      Add
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[12px] border border-[rgba(0,135,255,0.45)] bg-[#020305] p-5 shadow-[0_0_30px_rgba(7,135,255,0.12)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bright">
                Estimated Curbside Price
              </p>
              <p className="mt-3 font-display text-4xl tracking-[0.06em] text-white">
                {result.isEmpty
                  ? "—"
                  : formatEstimateRange(result.low, result.high)}
              </p>

              {!result.isEmpty ? (
                <ul className="mt-4 max-h-40 space-y-1.5 overflow-y-auto text-sm text-muted">
                  {result.lines.map((line) => (
                    <li key={line.id}>
                      {line.name} × {line.quantity}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm text-muted">
                  Add items to build a preliminary estimate.
                </p>
              )}

              <dl className="mt-5 space-y-2 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-muted">Pickup type</dt>
                  <dd className="text-right text-white">{result.pickupType}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-muted">Recommended</dt>
                  <dd className="text-right text-white">
                    {result.isEmpty ? "—" : result.recommendedService}
                  </dd>
                </div>
              </dl>

              {!result.isEmpty ? (
                <p className="mt-4 text-xs leading-relaxed text-bright/90">
                  {result.savingsNote}
                </p>
              ) : null}

              {result.loadRecommendation ? (
                <p className="mt-3 rounded-[6px] border border-amber-400/40 bg-amber-400/10 px-3 py-2 text-xs text-amber-100">
                  Your selection may fit {result.loadRecommendation.name} load
                  pricing better (${result.loadRecommendation.price}). Compare
                  with Command Load Pricing below.
                </p>
              ) : null}

              <p className="mt-4 text-xs leading-relaxed text-muted">
                {result.disclaimer}
              </p>

              <div className="mt-5 space-y-3">
                <ShimmerButton
                  type="button"
                  className="w-full"
                  onClick={confirmWithPhotos}
                  disabled={result.isEmpty}
                >
                  Confirm My Price With Photos
                </ShimmerButton>
                <Button
                  type="button"
                  variant="secondary"
                  className="w-full"
                  onClick={clearEstimator}
                >
                  Clear Estimate
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
