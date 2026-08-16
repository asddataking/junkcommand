"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { BRAND } from "@/lib/constants";
import { trackPhoneClick } from "@/lib/analytics";

type PhoneLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: ReactNode;
  ctaPosition?: string;
  locationSlug?: string;
  pageType?: string;
  sms?: boolean;
};

export function PhoneLink({
  children,
  ctaPosition = "phone",
  locationSlug,
  pageType,
  sms = false,
  onClick,
  ...props
}: PhoneLinkProps) {
  return (
    <a
      href={sms ? BRAND.smsHref : BRAND.phoneHref}
      onClick={(event) => {
        trackPhoneClick({
          cta_position: ctaPosition,
          location_slug: locationSlug,
          page_type: pageType,
        });
        onClick?.(event);
      }}
      {...props}
    >
      {children ?? (sms ? `Text ${BRAND.phone}` : `Call ${BRAND.phone}`)}
    </a>
  );
}
