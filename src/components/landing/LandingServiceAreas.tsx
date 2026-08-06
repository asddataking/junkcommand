import Link from "next/link";
import { MapPin } from "lucide-react";

type Area = {
  name: string;
  slug?: string;
};

export function LandingServiceAreas({
  title = "AREAS WE SERVE",
  intro,
  areas,
}: {
  title?: string;
  intro: string;
  areas: Area[];
}) {
  return (
    <section className="border-t border-[rgba(0,135,255,0.15)] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-3xl text-muted">{intro}</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <li key={area.name}>
              {area.slug ? (
                <Link
                  href={`/service-areas/${area.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-bright"
                >
                  <MapPin className="size-3.5 text-bright" aria-hidden />
                  {area.name}
                </Link>
              ) : (
                <span className="inline-flex items-center gap-2 text-sm text-muted">
                  <MapPin className="size-3.5 text-bright" aria-hidden />
                  {area.name}
                </span>
              )}
            </li>
          ))}
        </ul>
        <Link
          href="/service-areas"
          className="mt-6 inline-block text-sm font-semibold text-bright hover:text-white"
        >
          View all service areas →
        </Link>
      </div>
    </section>
  );
}
