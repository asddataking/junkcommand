import {
  BRAND,
  BRAND_LOGO,
  HOW_IT_WORKS,
  SITE_URL,
  SOCIAL_LINKS,
  SOCIAL_SHARE_IMAGE,
  SOCIAL_SHARE_IMAGE_HEIGHT,
  SOCIAL_SHARE_IMAGE_WIDTH,
} from "@/lib/constants";
import { SERVICES } from "@/data/services";
import { CITIES, CITY_NAMES } from "@/data/cities";
import { SCHEMA_SERVICE_AREAS } from "@/data/homepage-service-areas";
import { hasReviews, AGGREGATE, REVIEWS } from "@/data/reviews";
import {
  CURBSIDE_START,
  FULL_SERVICE_START,
  LOAD_TIERS,
} from "@/data/curbside-pricing";
import { PRICING_ITEMS } from "@/data/pricing";

type Crumb = { name: string; href: string };

const BUSINESS_ID = `${SITE_URL}/#business`;
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PHONE_E164 = "+18102420429";

function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function parseMinPrice(startingPrice?: string): number | undefined {
  if (!startingPrice) return undefined;
  const match = startingPrice.match(/\$(\d+)/);
  return match ? Number(match[1]) : undefined;
}

function openingHoursSpecification() {
  const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: weekday,
      opens: "07:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "17:00",
    },
  ];
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: BRAND.name,
    legalName: BRAND.name,
    url: SITE_URL,
    telephone: PHONE_E164,
    email: BRAND.email,
    slogan: BRAND.tagline,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      url: absoluteUrl(BRAND_LOGO),
      contentUrl: absoluteUrl(BRAND_LOGO),
    },
    image: absoluteUrl(SOCIAL_SHARE_IMAGE),
    sameAs: SOCIAL_LINKS.map((link) => link.href),
    foundingLocation: {
      "@type": "Place",
      name: "Port Huron, MI",
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: BRAND.name,
    url: SITE_URL,
    description:
      "Veteran-owned junk removal in Port Huron and the Blue Water Area. Curbside pickup from $99 and full-service from $129.",
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en-US",
  };
}

export function getLocalBusinessSchema() {
  const areaNames = Array.from(
    new Set([...SCHEMA_SERVICE_AREAS, ...CITY_NAMES]),
  );

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": BUSINESS_ID,
    name: BRAND.name,
    alternateName: "Junk Command Junk Removal",
    description:
      "Fast, professional junk removal in Port Huron, Marysville, Fort Gratiot, and throughout St. Clair County and the Blue Water Area. Curbside pickup from $99; full-service from $129.",
    url: SITE_URL,
    telephone: PHONE_E164,
    email: BRAND.email,
    image: [
      absoluteUrl(SOCIAL_SHARE_IMAGE),
      absoluteUrl("/images/dan-gage-luna.webp"),
      absoluteUrl(BRAND_LOGO),
    ],
    logo: { "@id": `${SITE_URL}/#logo` },
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    slogan: BRAND.tagline,
    sameAs: SOCIAL_LINKS.map((link) => link.href),
    parentOrganization: { "@id": ORGANIZATION_ID },
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.9709,
      longitude: -82.4249,
    },
    openingHoursSpecification: openingHoursSpecification(),
    knowsAbout: [
      "Junk removal",
      "Furniture removal",
      "Appliance removal",
      "Garage cleanouts",
      "Estate cleanouts",
      "Curbside junk pickup",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Junk Command Starting Prices",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Curbside Command",
          description:
            "Qualifying items placed outside for pickup. Confirmed price from photos.",
          url: `${SITE_URL}/pricing`,
          priceCurrency: "USD",
          price: String(CURBSIDE_START),
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            minPrice: CURBSIDE_START,
          },
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Full-Service Command",
          description:
            "We carry items out of your home or property. Confirmed price before loading.",
          url: `${SITE_URL}/pricing`,
          priceCurrency: "USD",
          price: String(FULL_SERVICE_START),
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            minPrice: FULL_SERVICE_START,
          },
          availability: "https://schema.org/InStock",
        },
      ],
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
    "@id": `${SITE_URL}/#junk-removal-service`,
    name: "Junk Removal",
    serviceType: "Junk Removal",
    description:
      "Full-service and curbside junk removal for homes and light commercial properties across Port Huron and the Blue Water Area.",
    url: `${SITE_URL}/services`,
    provider: { "@id": BUSINESS_ID },
    areaServed: CITY_NAMES.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      "@id": `${SITE_URL}/services#catalog`,
      name: "Junk Removal Services",
      itemListElement: SERVICES.map((service) => {
        const minPrice = parseMinPrice(service.startingPrice);
        return {
          "@type": "Offer",
          url: absoluteUrl(`/${service.slug}`),
          itemOffered: {
            "@type": "Service",
            "@id": `${SITE_URL}/${service.slug}#service`,
            name: service.title,
            description: service.description,
            url: absoluteUrl(`/${service.slug}`),
            image: absoluteUrl(service.image),
          },
          ...(minPrice
            ? {
                priceCurrency: "USD",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "USD",
                  minPrice,
                },
              }
            : {}),
        };
      }),
    },
  };
}

export function getFaqSchema(
  faqs: { question: string; answer: string }[],
  options?: { id?: string },
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(options?.id ? { "@id": options.id } : {}),
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
  const minPrice = parseMinPrice(service.startingPrice);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/${service.slug}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.description,
    url: `${SITE_URL}/${service.slug}`,
    image: absoluteUrl(service.image),
    provider: { "@id": BUSINESS_ID },
    areaServed: CITY_NAMES.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    ...(minPrice
      ? {
          offers: {
            "@type": "Offer",
            url: `${SITE_URL}/${service.slug}`,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "USD",
              minPrice,
            },
            description: `Starting at $${minPrice}`,
          },
        }
      : {}),
  };
}

export function getCityPageSchema(city: (typeof CITIES)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/service-areas/${city.slug}#service`,
    name: `Junk Removal in ${city.name}`,
    serviceType: "Junk Removal",
    description: city.intro,
    url: `${SITE_URL}/service-areas/${city.slug}`,
    image: absoluteUrl(city.image),
    provider: { "@id": BUSINESS_ID },
    areaServed: {
      "@type": city.isCounty ? "AdministrativeArea" : "City",
      name: city.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: city.county,
      },
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/service-areas/${city.slug}`,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        minPrice: CURBSIDE_START,
      },
      description: `Curbside junk pickup in ${city.name} from $${CURBSIDE_START}; full-service from $${FULL_SERVICE_START}.`,
    },
  };
}

export function getHowToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${SITE_URL}/#how-it-works`,
    name: "How Junk Command Works",
    description:
      "Request a quote, get upfront pricing, and let our local Port Huron crew handle the heavy lifting.",
    totalTime: "PT2H",
    step: HOW_IT_WORKS.map((item) => ({
      "@type": "HowToStep",
      position: item.step,
      name: item.title,
      text: item.description,
      url: `${SITE_URL}/#how-it-works`,
    })),
  };
}

export function getPricingOfferCatalogSchema() {
  const itemOffers = PRICING_ITEMS.filter((item) => !item.isCtaCard).map(
    (item) => ({
      "@type": "Offer",
      name: `${item.name} removal`,
      url: `${SITE_URL}/pricing`,
      priceCurrency: "USD",
      price: String(item.startingPrice),
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        minPrice: item.startingPrice,
      },
      availability: "https://schema.org/InStock",
      description: `Starting at $${item.startingPrice} for ${item.name.toLowerCase()} removal.`,
    }),
  );

  const loadOffers = LOAD_TIERS.map((tier) => ({
    "@type": "Offer",
    name: `${tier.name} (${tier.fillPercent}% load)`,
    url: `${SITE_URL}/pricing`,
    priceCurrency: "USD",
    price: String(tier.price),
    availability: "https://schema.org/InStock",
    description: `About ${tier.cubicYards} cubic yards of ordinary household junk.`,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${SITE_URL}/pricing#catalog`,
    name: "Junk Command Pricing",
    url: `${SITE_URL}/pricing`,
    itemListElement: [
      {
        "@type": "Offer",
        name: "Curbside Command",
        priceCurrency: "USD",
        price: String(CURBSIDE_START),
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          minPrice: CURBSIDE_START,
        },
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/pricing`,
      },
      {
        "@type": "Offer",
        name: "Full-Service Command",
        priceCurrency: "USD",
        price: String(FULL_SERVICE_START),
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          minPrice: FULL_SERVICE_START,
        },
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/pricing`,
      },
      ...itemOffers,
      ...loadOffers,
    ],
  };
}

export function getReviewSchema() {
  if (!hasReviews()) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#reviews`,
    name: BRAND.name,
    url: `${SITE_URL}/reviews`,
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
  const url = absoluteUrl(input.path);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: input.title,
    description: input.description,
    image: {
      "@type": "ImageObject",
      url: absoluteUrl(input.image),
      width: SOCIAL_SHARE_IMAGE_WIDTH,
      height: SOCIAL_SHARE_IMAGE_HEIGHT,
    },
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      "@type": "Person",
      name: input.authorName,
    },
    publisher: { "@id": ORGANIZATION_ID },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: "en-US",
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
    image: absoluteUrl(input.image),
    worksFor: { "@id": ORGANIZATION_ID },
  };
}

/** @deprecated Prefer getServiceCatalogSchema */
export function getServiceSchema() {
  return getServiceCatalogSchema();
}
