import { MapPin } from "lucide-react";
import {
  getGbpMapsHref,
  getGoogleMapsEmbedSrc,
} from "@/lib/constants";

type GoogleMapsEmbedProps = {
  query: string;
  label: string;
  className?: string;
  zoom?: number;
  lat?: number;
  lng?: number;
  showOpenLink?: boolean;
};

export function GoogleMapsEmbed({
  query,
  label,
  className = "",
  zoom = 11,
  lat,
  lng,
  showOpenLink = true,
}: GoogleMapsEmbedProps) {
  const src = getGoogleMapsEmbedSrc({ query, zoom, lat, lng });

  return (
    <div className={className}>
      <div className="overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-[#080B0F]">
        <iframe
          title={label}
          src={src}
          className="h-72 w-full min-h-64 sm:h-80"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      {showOpenLink ? (
        <a
          href={getGbpMapsHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-bright hover:text-white"
        >
          <MapPin className="size-3.5" aria-hidden />
          Open Junk Command on Google Maps
        </a>
      ) : null}
    </div>
  );
}
