"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { useEstimateModal } from "@/components/forms/EstimateModalProvider";

type FreeEstimateButtonProps = {
  children?: ReactNode;
  ctaPosition: string;
  locationSlug?: string;
  pageType?: string;
  className?: string;
  showArrow?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  shimmer?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">;

export function FreeEstimateButton({
  children = "Get a Free Estimate",
  ctaPosition,
  locationSlug,
  pageType,
  className,
  showArrow = true,
  variant = "primary",
  shimmer = false,
  onClick,
  ...props
}: FreeEstimateButtonProps) {
  const { openModal } = useEstimateModal();

  const handleClick: ButtonHTMLAttributes<HTMLButtonElement>["onClick"] = (
    event,
  ) => {
    openModal({ ctaPosition, locationSlug, pageType });
    onClick?.(event);
  };

  if (shimmer) {
    return (
      <ShimmerButton className={className} onClick={handleClick} {...props}>
        {children}
      </ShimmerButton>
    );
  }

  return (
    <Button
      type="button"
      variant={variant}
      showArrow={showArrow}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
}
