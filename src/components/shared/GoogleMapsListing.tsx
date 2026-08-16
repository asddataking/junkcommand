import { MapPin, Phone, Star } from "lucide-react";
import { GoogleMapsEmbed } from "@/components/shared/GoogleMapsEmbed";
import { Button } from "@/components/ui/Button";
import {
  BRAND,
  GBP,
  HOURS_SUMMARY,
  LOCATION,
  MAPS_SEARCH_QUERY,
  SERVICE_RADIUS_MILES,
  getGbpMapsHref,
  getGbpReviewHref,
} from "@/lib/constants";

export function GoogleMapsListing({
  heading = "Find Junk Command on Google Maps",
  zoom = 11,
}: {
  heading?: string;
  zoom?: number;
}) {
  return (
    <section
      aria-labelledby="google-maps-heading"
      className="border-t border-[rgba(0,135,255,0.15)] py-16 sm:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
            Google Maps
          </p>
          <h2
            id="google-maps-heading"
            className="mt-3 font-display text-3xl tracking-[0.06em] text-white sm:text-4xl"
          >
            {heading.toUpperCase()}
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Junk Command is a service-area junk removal company based in{" "}
            {LOCATION.displayLine}. We come to your property across the Blue
            Water Area — search {GBP.category.toLowerCase()} near Port Huron on
            Google Maps, then book a photo quote here.
          </p>
          <div className="mt-6">
            <GoogleMapsEmbed
              query={MAPS_SEARCH_QUERY}
              label={`${GBP.name} junk removal on Google Maps — ${LOCATION.displayLine}`}
              zoom={zoom}
              lat={LOCATION.geo.latitude}
              lng={LOCATION.geo.longitude}
              showOpenLink={false}
            />
          </div>
        </div>

        <div className="rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-[#080B0F] p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-bright">
            Name · Area · Phone
          </p>
          <h3 className="mt-2 font-display text-2xl tracking-[0.08em] text-white">
            {GBP.name}
          </h3>
          <p className="mt-1 text-sm text-muted">{GBP.category}</p>
          <ul className="mt-6 space-y-3 text-sm text-white">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-bright" aria-hidden />
              <span>
                {LOCATION.displayLine}
                <br />
                Service-area business — we come to you within about{" "}
                {SERVICE_RADIUS_MILES} miles
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0 text-bright" aria-hidden />
              <a href={BRAND.phoneHref} className="hover:text-bright">
                {BRAND.phone}
              </a>
            </li>
            <li className="text-muted">{HOURS_SUMMARY}</li>
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <Button
              href={getGbpMapsHref()}
              target="_blank"
              rel="noopener noreferrer"
              showArrow
            >
              View listing on Google Maps
            </Button>
            <Button
              href={getGbpReviewHref()}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              <Star className="size-4" aria-hidden />
              Leave a Google review
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
