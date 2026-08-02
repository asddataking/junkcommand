"use client";

import { AlertTriangle } from "lucide-react";
import { SPECIALTY_ITEMS } from "@/data/curbside-pricing";
import { useHomepageBooking } from "@/components/home/HomepageBookingContext";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export function SpecialtyPricingNotice() {
  const { applyPrefill } = useHomepageBooking();

  return (
    <section
      id="specialty-pricing"
      aria-labelledby="specialty-pricing-heading"
      className="scroll-mt-24 border-b border-[rgba(0,135,255,0.15)] bg-[#020305] py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="rounded-[10px] border border-amber-400/35 bg-[rgba(120,80,10,0.18)] p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <AlertTriangle
                className="mt-1 size-6 shrink-0 text-amber-300"
                aria-hidden
              />
              <div>
                <h2
                  id="specialty-pricing-heading"
                  className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl"
                >
                  SOME ITEMS REQUIRE SPECIAL PRICING
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                  Heavy materials and specialty disposal items are not priced by
                  ordinary trailer volume. Send photos so we can quote accurately
                  before pickup.
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {SPECIALTY_ITEMS.map((item) => (
                    <li
                      key={item}
                      className="rounded-[4px] border border-amber-300/25 px-3 py-1.5 text-xs text-amber-50"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <ShimmerButton
                    type="button"
                    onClick={() =>
                      applyPrefill({
                        serviceType: "Specialty or Heavy Item",
                        itemDescription: "Specialty / heavy item pricing request",
                        details:
                          "Customer requested specialty or heavy-item pricing. Confirm from photos.",
                        recommendedService: "Specialty or Heavy Item",
                      })
                    }
                  >
                    Send Photos for Specialty Pricing
                  </ShimmerButton>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
