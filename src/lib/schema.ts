import { BRAND, REVIEWS, SERVICE_AREAS, SERVICES, SITE_URL } from "./constants";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BRAND.name,
    description:
      "Fast, professional junk removal in Port Huron, Marysville, Fort Gratiot, and throughout St. Clair County.",
    url: SITE_URL,
    telephone: BRAND.phone,
    email: BRAND.email,
    image: `${SITE_URL}/images/junk-command-hero.webp`,
    priceRange: "$$",
    areaServed: SERVICE_AREAS.map((name) => ({
      "@type": "Place",
      name,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Port Huron",
      addressRegion: "MI",
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "250",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Junk Removal",
    provider: {
      "@type": "LocalBusiness",
      name: BRAND.name,
    },
    areaServed: SERVICE_AREAS.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Junk Removal Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };
}

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fast can Junk Command remove my junk?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer same-day service when availability allows. Request a quote and we'll text you back fast with timing and pricing.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide upfront pricing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You'll get clear, upfront pricing before we start — no surprise fees.",
        },
      },
      {
        "@type": "Question",
        name: "What areas do you service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `We service ${SERVICE_AREAS.join(", ")}, and surrounding areas.`,
        },
      },
      {
        "@type": "Question",
        name: "Can I send photos for a quote?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Upload photos with your quote request for a faster, more accurate estimate.",
        },
      },
    ],
  };
}

export function getReviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.name,
    review: REVIEWS.map((review) => ({
      "@type": "Review",
      reviewBody: review.quote,
      author: {
        "@type": "Person",
        name: review.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    })),
  };
}
