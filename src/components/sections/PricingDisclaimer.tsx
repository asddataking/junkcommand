import { Truck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function PricingDisclaimer() {
  return (
    <div className="mt-8 space-y-4">
      <div className="relative overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.4)] bg-[#080B0F] p-5 shadow-[0_0_28px_rgba(7,135,255,0.12)] sm:p-6 lg:p-7">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(7,135,255,0.14),transparent_55%)]"
          aria-hidden
        />

        <div className="relative z-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10">
          <div className="flex gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-[2px] border border-[rgba(0,135,255,0.5)] bg-[#020305] text-bright shadow-[0_0_18px_rgba(7,135,255,0.25)]">
              <Truck className="size-6" aria-hidden />
            </div>
            <div>
              <h3 className="font-display text-2xl tracking-[0.06em] text-white sm:text-3xl">
                Our minimum pickup charge is $99.
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                This typically covers one standard item placed in an accessible
                location. Exact pricing for{" "}
                <span className="text-white">furniture removal</span> and{" "}
                <span className="text-white">appliance removal</span> depends on
                size, weight, access, and disposal needs.
              </p>
            </div>
          </div>

          <div className="rounded-[2px] border border-[rgba(0,135,255,0.28)] bg-[#020305]/70 p-4 sm:p-5">
            <h3 className="font-display text-xl tracking-[0.08em] text-white sm:text-2xl">
              Have multiple items?
            </h3>
            <p className="mt-2 text-sm text-muted">
              Bundle pricing is usually more affordable for cleanouts and
              multi-item pickups.
            </p>
            <Button href="#quote" className="mt-4 w-full sm:w-auto" showArrow>
              Upload Photos &amp; Get an Exact Quote
            </Button>
          </div>
        </div>
      </div>

      <p className="text-center text-xs leading-relaxed text-muted sm:text-sm">
        Final pricing is confirmed before work begins and may vary based on item
        size, weight, quantity, access, labor, and disposal requirements.
      </p>
    </div>
  );
}
