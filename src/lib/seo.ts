import type { Metadata } from "next";
import {
  BRAND,
  SITE_URL,
  SOCIAL_SHARE_IMAGE,
  SOCIAL_SHARE_IMAGE_ALT,
  SOCIAL_SHARE_IMAGE_HEIGHT,
  SOCIAL_SHARE_IMAGE_WIDTH,
} from "@/lib/constants";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  image = SOCIAL_SHARE_IMAGE,
  imageAlt = SOCIAL_SHARE_IMAGE_ALT,
  type = "website",
  noIndex = false,
}: PageSeoInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: BRAND.name,
      images: [
        {
          url: image,
          width: SOCIAL_SHARE_IMAGE_WIDTH,
          height: SOCIAL_SHARE_IMAGE_HEIGHT,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
