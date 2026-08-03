import { Check, Truck } from "lucide-react";
import {
  CURBSIDE_START,
  FULL_SERVICE_START,
} from "@/data/curbside-pricing";
import { Button } from "@/components/ui/Button";
import { MediaImage } from "@/components/ui/MediaImage";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ShineBorder } from "@/components/magicui/shine-border";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { DotPattern } from "@/components/magicui/dot-pattern";

const BENEFITS = [
  "Lowest available pricing",
  "No need to be home",
  "Fast, flexible pickup",
  "Ideal for one or two items",
] as const;

type CurbsideCommandHighlightProps = {
  cityName: string;
};

export function CurbsideCommandHighlight({
  cityName,
}: CurbsideCommandHighlightProps) {
  return (
    <section
      aria-labelledby="curbside-command-heading"
      className="relative overflow-hidden border-y border-[rgba(0,135,255,0.35)] bg-[#080B0F]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(7,135,255,0.22),transparent_55%)]"
        aria-hidden
      />
      <DotPattern
        width={22}
        height={22}
        cr={0.9}
        className="opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent_72%)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-stretch gap-0 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-16">
        <div className="relative overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.45)] bg-[#020305]/75 p-6 sm:p-8 lg:rounded-r-none lg:border-r-0">
          <ShineBorder
            shineColor={["#0787ff", "#18a0ff", "#0787ff"]}
            duration={14}
            borderWidth={1}
            className="opacity-45"
          />
          <BorderBeam
            size={120}
            duration={11}
            colorFrom="#18a0ff"
            colorTo="#0787ff"
            borderWidth={1.25}
          />

          <div className="relative z-10">
            <AnimatedShinyText className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-bright">
              <Truck className="size-3.5" aria-hidden />
              Most Affordable Pickup
            </AnimatedShinyText>

            <p className="mt-4 inline-flex rounded-[2px] border border-bright/50 bg-bright/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-bright">
              Highlight · From ${CURBSIDE_START}
            </p>

            <h2
              id="curbside-command-heading"
              className="mt-4 font-display text-4xl tracking-[0.06em] text-white sm:text-5xl"
            >
              CURBSIDE COMMAND
            </h2>
            <p className="mt-2 font-display text-4xl tracking-[0.06em] text-bright sm:text-5xl">
              ${CURBSIDE_START}
              <span className="ml-2 text-base tracking-[0.14em] text-muted">
                STARTING IN {cityName.toUpperCase()}
              </span>
            </p>
            <p className="mt-4 max-w-xl text-muted">
              Place qualifying junk outside in {cityName}, send photos, and get a
              confirmed price before we roll. No waiting at home for most
              curbside pickups — our easiest route-based option.
            </p>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {BENEFITS.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2 text-sm text-white"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-bright"
                    aria-hidden
                  />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ShimmerButton href="/book-online">
                Get My Curbside Price
              </ShimmerButton>
              <Button href="/pricing" variant="secondary">
                Compare Full-Service from ${FULL_SERVICE_START}
              </Button>
            </div>
          </div>
        </div>

        <div className="relative min-h-[16rem] overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.45)] lg:min-h-full lg:rounded-l-none">
          <MediaImage
            src="/images/pricing/couch.webp"
            alt={`Couch ready for Curbside Command pickup in ${cityName}`}
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020305] via-[#020305]/55 to-[#020305]/15" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <p className="font-display text-2xl tracking-[0.08em] text-white sm:text-3xl">
              SET IT OUT. WE HAUL IT.
            </p>
            <p className="mt-2 max-w-sm text-sm text-muted">
              Mattresses, couches, recliners, and small piles — confirmed
              curbside pricing after photos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
