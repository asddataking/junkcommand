import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getGbpMapsHref, getGbpReviewHref } from "@/lib/constants";

export function GoogleReviewCta({
  placeName,
}: {
  placeName?: string;
}) {
  const where = placeName ? ` in ${placeName}` : " in the Blue Water Area";

  return (
    <div className="rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-[#080B0F] p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
        Google Maps
      </p>
      <h2 className="mt-2 font-display text-2xl tracking-[0.08em] text-white sm:text-3xl">
        FOUND US FOR JUNK REMOVAL{placeName ? ` NEAR ${placeName.toUpperCase()}` : ""}?
      </h2>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
        Junk Command already shows up on Google Maps for local junk removal
        searches{where}. A Google review after the haul is the fastest way
        neighbors see a Port Huron crew instead of a distant franchise. We never
        write fake testimonials.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button
          href={getGbpReviewHref()}
          target="_blank"
          rel="noopener noreferrer"
          showArrow
        >
          <Star className="size-4" aria-hidden />
          Leave a Google review
        </Button>
        <Button
          href={getGbpMapsHref()}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
        >
          <MapPin className="size-4" aria-hidden />
          View us on Google Maps
        </Button>
      </div>
    </div>
  );
}
