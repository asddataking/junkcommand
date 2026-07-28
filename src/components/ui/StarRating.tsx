import { Star } from "lucide-react";

export function StarRating({
  count = 5,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label={`${count} star rating`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="size-4 fill-gold text-gold"
          aria-hidden
        />
      ))}
    </div>
  );
}
