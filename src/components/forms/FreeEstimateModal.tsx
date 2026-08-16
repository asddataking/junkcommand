"use client";

import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";
import { GhlFormEmbed } from "@/components/forms/GhlFormEmbed";
import type { EstimateModalOpenOptions } from "@/components/forms/EstimateModalProvider";
import { getPageUrl } from "@/lib/analytics";

export function FreeEstimateModal({
  open,
  onClose,
  options,
}: {
  open: boolean;
  onClose: () => void;
  options: EstimateModalOpenOptions | null;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return undefined;
    closeRef.current?.focus();

    const node = dialogRef.current;
    if (!node) return undefined;

    const onFocus = (event: FocusEvent) => {
      if (!node.contains(event.target as Node)) {
        event.preventDefault();
        closeRef.current?.focus();
      }
    };
    document.addEventListener("focusin", onFocus);
    return () => document.removeEventListener("focusin", onFocus);
  }, [open]);

  if (!open) return null;

  const pageUrl = getPageUrl();

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-[#020305]/80 backdrop-blur-sm"
        aria-label="Close free estimate form"
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-[10px] border border-[rgba(0,135,255,0.45)] bg-[#080B0F] shadow-[0_0_48px_rgba(7,135,255,0.28)] sm:rounded-[10px]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-[rgba(0,135,255,0.25)] px-4 py-4 sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-bright">
              Free Estimate
            </p>
            <h2
              id={titleId}
              className="mt-1 font-display text-2xl tracking-[0.08em] text-white sm:text-3xl"
            >
              GET A FREE ESTIMATE
            </h2>
            <p className="mt-1 text-sm text-muted">
              Send a few photos and we will confirm pricing before pickup.
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-[2px] border border-[rgba(0,135,255,0.4)] text-white transition-colors hover:border-bright hover:text-bright"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>
        </div>
        <div className="overflow-y-auto px-3 py-3 sm:px-5 sm:py-5">
          <GhlFormEmbed
            embedId="modal-free-estimate"
            minHeightClassName="min-h-[70vh] sm:min-h-[640px]"
            query={{
              page_url: pageUrl,
              location_slug: options?.locationSlug,
              cta_position: options?.ctaPosition,
              page_type: options?.pageType,
            }}
          />
        </div>
      </div>
    </div>
  );
}
