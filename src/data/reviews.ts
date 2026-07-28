export type Review = {
  id: string;
  name: string;
  city: string;
  citySlug?: string;
  rating: 5 | 4;
  quote: string;
  service?: string;
  date: string;
};

/** Only publish real verified reviews. Keep empty until customers leave feedback. */
export const AGGREGATE = { rating: 0, count: 0 } as const;

export const REVIEWS: Review[] = [];

export function getReviewsByCity(citySlug: string): Review[] {
  return REVIEWS.filter((review) => review.citySlug === citySlug);
}

export function getFeaturedReviews(limit = 6): Review[] {
  return [...REVIEWS]
    .sort((a, b) => {
      if (b.rating !== a.rating) return b.rating - a.rating;
      return b.date.localeCompare(a.date);
    })
    .slice(0, limit);
}

export function hasReviews() {
  return REVIEWS.length > 0 && AGGREGATE.count > 0;
}
