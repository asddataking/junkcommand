import { BRAND, BRAND_LOGO, SITE_URL, SOCIAL_SHARE_IMAGE } from "@/lib/constants";
import { SERVICES } from "@/data/services";
import { CITIES, CITY_NAMES } from "@/data/cities";
import { SCHEMA_SERVICE_AREAS } from "@/data/homepage-service-areas";
import { hasReviews, AGGREGATE, REVIEWS } from "@/data/reviews";

type Crumb = { name: string; href: string };

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BRAND.name,
    url: SITE_URL,
    telephone: BRAND.phone,
    email: BRAND.email,
    logo: `${SITE_URL}${BRAND_LOGO}`,
    image: `${SITE_URL}${SOCIAL_SHARE_IMAGE}`,
    sameAs: [],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: BRAND.name,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function getLocalBusinessSchema() {
  const areaNames = Array.from(
    new Set([...SCHEMA_SERVICE_AREAS, ...CITY_NAMES]),
  );

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: BRAND.name,
    description:
      "Fast, professional junk removal in Port Huron, Marysville, Fort Gratiot, and throughout St. Clair County and the Blue Water Area.",
    url: SITE_URL,
    telephone: BRAND.phone,
    email: BRAND.email,
    image: `${SITE_URL}${SOCIAL_SHARE_IMAGE}`,
    priceRange: "$$",
    areaServed: areaNames.map((name) => ({
      "@type": "Place",
      name,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Port Huron",
      addressRegion: "MI",
      addressCountry: "US",
    },
    ...(hasReviews()
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: String(AGGREGATE.rating),
            reviewCount: String(AGGREGATE.count),
            bestRating: "5",
            worstRating: "1",
          },
        }
      : {}),
  };
}

export function getServiceCatalogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Junk Removal",
    provider: {
      "@type": "LocalBusiness",
      name: BRAND.name,
      "@id": `${SITE_URL}/#business`,
    },
    areaServed: CITY_NAMES.map((name) => ({
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
          url: `${SITE_URL}/${service.slug}`,
        },
      })),
    },
  };
}

export function getFaqSchema(
  faqs: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.href.startsWith("http")
        ? crumb.href
        : `${SITE_URL}${crumb.href === "/" ? "" : crumb.href}`,
    })),
  };
}

export function getServicePageSchema(service: (typeof SERVICES)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${SITE_URL}/${service.slug}`,
    image: `${SITE_URL}${service.image}`,
    provider: {
      "@type": "LocalBusiness",
      name: BRAND.name,
      telephone: BRAND.phone,
      "@id": `${SITE_URL}/#business`,
    },
    areaServed: CITY_NAMES.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    offers: service.startingPrice
      ? {
          "@type": "Offer",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          description: `Starting at ${service.startingPrice}`,
        }
      : undefined,
  };
}

export function getCityPageSchema(city: (typeof CITIES)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Junk Removal in ${city.name}`,
    description: city.intro,
    url: `${SITE_URL}/service-areas/${city.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: BRAND.name,
      telephone: BRAND.phone,
      "@id": `${SITE_URL}/#business`,
    },
    areaServed: {
      "@type": city.isCounty ? "AdministrativeArea" : "City",
      name: city.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: city.county,
      },
    },
  };
}

export function getReviewSchema() {
  if (!hasReviews()) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(AGGREGATE.rating),
      reviewCount: String(AGGREGATE.count),
      bestRating: "5",
      worstRating: "1",
    },
    review: REVIEWS.slice(0, 10).map((review) => ({
      "@type": "Review",
      reviewBody: review.quote,
      author: {
        "@type": "Person",
        name: review.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(review.rating),
        bestRating: "5",
      },
    })),
  };
}

export function getArticleSchema(input: {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    image: `${SITE_URL}${input.image}`,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      "@type": "Person",
      name: input.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${BRAND_LOGO}`,
      },
    },
    mainEntityOfPage: `${SITE_URL}${input.path}`,
  };
}

export function getPersonSchema(input: {
  name: string;
  jobTitle: string;
  description: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: input.name,
    jobTitle: input.jobTitle,
    description: input.description,
    image: `${SITE_URL}${input.image}`,
    worksFor: {
      "@type": "Organization",
      name: BRAND.name,
    },
  };
}

/** Legacy helpers used by root layout */
export function getServiceSchema() {
  return getServiceCatalogSchema();
}
