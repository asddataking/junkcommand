"use client";

import { motion, useReducedMotion } from "framer-motion";
import { COMMON_ITEM_CARDS } from "@/data/curbside-pricing";
import { useHomepageBooking } from "@/components/home/HomepageBookingContext";
import { BlurFade } from "@/components/magicui/blur-fade";
import { MediaImage } from "@/components/ui/MediaImage";
import { Button } from "@/components/ui/Button";

export function CommonItemPricing() {
  const reduceMotion = useReducedMotion();
  const { addItem, scrollToEstimator, applyPrefill } = useHomepageBooking();

  return (
    <section
      id="common-item-pricing"
      aria-labelledby="common-item-heading"
      className="scroll-mt-24 border-b border-[rgba(0,135,255,0.15)] bg-[#080B0F] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade className="text-center">
          <h2
            id="common-item-heading"
            className="font-display text-4xl tracking-[0.08em] text-white sm:text-5xl"
          >
            COMMON ITEM PRICING
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            Starting prices for popular pickups. Add an item to the estimator or
            send photos for a confirmed quote.
          </p>
        </BlurFade>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COMMON_ITEM_CARDS.map((card, index) => (
            <motion.li
              key={card.id}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={reduceMotion ? undefined : { y: -3 }}
              transition={{
                duration: 0.3,
                delay: reduceMotion ? 0 : index * 0.04,
              }}
              className="flex flex-col overflow-hidden rounded-[10px] border border-[rgba(0,135,255,0.3)] bg-[#020305]"
            >
              <div className="relative aspect-[16/10] bg-secondary">
                {card.image ? (
                  <MediaImage
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(24,160,255,0.25),transparent_55%)]" />
                )}
              </div>
              <div className="flex flex-1 flex-col p-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-bright">
                  {card.serviceLabel}
                </span>
                <h3 className="mt-2 font-display text-2xl tracking-[0.08em] text-white">
                  {card.name.toUpperCase()}
                </h3>
                <p className="mt-1 text-sm font-semibold text-white">
                  {card.priceLabel}
                </p>
                <p className="mt-2 text-xs text-muted">{card.disclaimer}</p>
                <Button
                  type="button"
                  variant="secondary"
                  className="mt-auto w-full !py-2.5 text-xs"
                  onClick={() => {
                    if (card.estimatorItemId) {
                      addItem(card.estimatorItemId);
                      scrollToEstimator();
                      return;
                    }
                    if (card.loadTierId) {
                      applyPrefill({
                        serviceType: "Command Load Pricing",
                        itemDescription: card.name,
                        details: `${card.name} — ${card.priceLabel}. Confirm from photos.`,
                        estimateRange: `$${card.startingPrice}`,
                        recommendedService: card.name,
                      });
                      return;
                    }
                    applyPrefill({
                      serviceType: "Full-Service Command",
                      itemDescription: card.name,
                      details: `${card.name} — ${card.priceLabel}. Confirm from photos.`,
                      estimateRange: `$${card.startingPrice}`,
                      recommendedService: "Full-Service Command",
                    });
                  }}
                >
                  {card.estimatorItemId ? "Add to Estimator" : "Get This Price"}
                </Button>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
