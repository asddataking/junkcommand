"use client";

import { useMemo, useState } from "react";
import { ReviewCard } from "@/components/shared/ReviewCard";
import type { Review } from "@/data/reviews";

type RatingFilter = "all" | "5" | "4";

export function ReviewsWall({ reviews }: { reviews: Review[] }) {
  const cities = useMemo(() => {
    const set = new Set(reviews.map((r) => r.city));
    return Array.from(set).sort();
  }, [reviews]);

  const [city, setCity] = useState<string>("all");
  const [rating, setRating] = useState<RatingFilter>("all");

  const filtered = useMemo(() => {
    return reviews.filter((review) => {
      const cityOk = city === "all" || review.city === city;
      const ratingOk =
        rating === "all" || String(review.rating) === rating;
      return cityOk && ratingOk;
    });
  }, [reviews, city, rating]);

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-[2px] border border-[rgba(0,135,255,0.3)] bg-card p-4 sm:flex-row sm:items-end sm:p-5">
        <div className="flex-1">
          <label
            htmlFor="review-city"
            className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted"
          >
            Filter by city
          </label>
          <select
            id="review-city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-[#020305] px-3 py-3 text-sm text-white outline-none focus:border-bright"
          >
            <option value="all">All cities</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label
            htmlFor="review-rating"
            className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted"
          >
            Filter by rating
          </label>
          <select
            id="review-rating"
            value={rating}
            onChange={(e) => setRating(e.target.value as RatingFilter)}
            className="w-full rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-[#020305] px-3 py-3 text-sm text-white outline-none focus:border-bright"
          >
            <option value="all">All ratings</option>
            <option value="5">5 stars</option>
            <option value="4">4 stars</option>
          </select>
        </div>
        <p className="text-sm text-muted sm:pb-3">
          Showing{" "}
          <span className="font-semibold text-white">{filtered.length}</span> of{" "}
          {reviews.length}
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-muted">
          No reviews match those filters. Try another city or rating.
        </p>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
}
