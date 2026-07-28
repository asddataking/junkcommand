import { StarRating } from "@/components/ui/StarRating";
import type { Review } from "@/data/reviews";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex h-full flex-col rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-5 glow-border">
      <div className="flex items-center justify-between gap-3">
        <StarRating count={review.rating} />
        {review.service ? (
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-bright">
            {review.service}
          </span>
        ) : null}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
        “{review.quote}”
      </blockquote>
      <footer className="mt-4 border-t border-[rgba(0,135,255,0.15)] pt-3">
        <p className="text-sm font-semibold text-white">{review.name}</p>
        <p className="text-xs text-muted">{review.city}</p>
      </footer>
    </article>
  );
}
