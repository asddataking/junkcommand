"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { CITIES } from "@/data/cities";

export function ServiceAreas() {
  const areas = CITIES.filter((c) => !c.isCounty).slice(0, 11);

  return (
    <section
      id="service-areas"
      className="scroll-mt-24 border-t border-[rgba(0,135,255,0.15)] py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Coverage
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-[0.06em] text-white sm:text-5xl">
            SERVICE AREAS
          </h2>
          <p className="mt-3 text-muted">
            Junk Command proudly serves Port Huron and communities across St.
            Clair and Macomb Counties. Same-day options available when
            scheduling allows — request a quote and we&apos;ll confirm
            availability fast.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <li key={area.slug}>
              <Link
                href={`/service-areas/${area.slug}`}
                className="flex items-center gap-3 rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-bright hover:text-bright"
              >
                <MapPin className="size-4 shrink-0 text-bright" aria-hidden />
                {area.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/service-areas"
              className="flex items-center gap-3 rounded-[2px] border border-dashed border-[rgba(0,135,255,0.35)] bg-transparent px-4 py-3 text-sm font-semibold text-muted transition-colors hover:border-bright hover:text-bright"
            >
              <MapPin className="size-4 shrink-0 text-bright/70" aria-hidden />
              View All Areas
            </Link>
          </li>
        </ul>

        <div className="mt-8 grid gap-4 text-sm text-muted md:grid-cols-2">
          <p>
            Whether you&apos;re in Port Huron, Marysville, Fort Gratiot, or
            Kimball Township, our local crew knows the roads and the timelines
            that matter for residential and light commercial cleanouts.
          </p>
          <p>
            From St. Clair and Marine City to Chesterfield and New Baltimore,
            Junk Command is built for fast response junk removal — furniture,
            appliances, garages, estates, and more.
          </p>
        </div>
      </div>
    </section>
  );
}
