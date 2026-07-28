"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type MediaImageProps = Omit<ImageProps, "onError"> & {
  fallbackClassName?: string;
};

/**
 * next/image wrapper that falls back to a neon gradient when the asset
 * is missing or fails to decode (useful until real photos are added).
 */
export function MediaImage({
  className = "",
  fallbackClassName = "",
  alt,
  ...props
}: MediaImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`absolute inset-0 bg-gradient-to-br from-[#0B1016] via-[#041018] to-[#020305] ${fallbackClassName}`}
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(24,160,255,0.28),transparent_55%)]" />
        <span className="sr-only">{alt}</span>
      </div>
    );
  }

  return (
    <Image
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      {...props}
    />
  );
}
