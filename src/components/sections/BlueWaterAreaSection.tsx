import Link from "next/link";
import { MapPin } from "lucide-react";
import { BLUE_WATER_AREAS } from "@/data/homepage-service-areas";
import { BlurFade } from "@/components/magicui/blur-fade";

export function BlueWaterAreaSection() {
  return (
    <section
      id="blue-water-area"
      aria-labelledby="blue-water-area-heading"
      className="scroll-mt-24 border-t border-[rgba(0,135,255,0.15)] bg-[#020305] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Local Coverage
          </p>
          <h2
            id="blue-water-area-heading"
            className="mt-3 font-display text-4xl tracking-[0.06em] text-white sm:text-5xl"
          >
            SERVING THE BLUE WATER AREA
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            Junk Command proudly serves Port Huron junk removal customers and
            neighbors across the Blue Water Area — from river towns and lake
            communities to inland townships that need reliable trash hauling,
            debris removal, furniture removal, garage cleanouts, and house
            cleanouts. Tap your city below for local service details.
          </p>
        </BlurFade>

        <BlurFade delay={0.08}>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {BLUE_WATER_AREAS.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/service-areas/${area.slug}`}
                  className="flex items-center gap-2.5 rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card px-4 py-3 text-sm text-white transition-colors hover:border-bright hover:text-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bright"
                >
                  <MapPin className="size-4 shrink-0 text-bright" aria-hidden />
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </BlurFade>
      </div>
    </section>
  );
}
