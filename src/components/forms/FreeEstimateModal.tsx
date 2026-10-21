"use client";

import { useEffect, useId, useRef } from "react";
import Link from "next/link";
import { Phone, X } from "lucide-react";
import { GhlFormEmbed } from "@/components/forms/GhlFormEmbed";
import { PhoneLink } from "@/components/forms/PhoneLink";
import type { EstimateModalOpenOptions } from "@/components/forms/EstimateModalProvider";
import { getPageUrl } from "@/lib/analytics";
import { BRAND } from "@/lib/constants";

export function FreeEstimateModal({
  open,
  onClose,
  options,
}: {
  open: boolean;
  onClose: () => void;
  options: EstimateModalOpenOptions | null;
}) {
  const shellRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return undefined;
    const shell = shellRef.current;
    const dialog = dialogRef.current;
    dialog?.focus();

    const viewport = window.visualViewport;
    const syncViewport = () => {
      if (!shell) return;
      const height = viewport?.height ?? window.innerHeight;
      const offset = viewport?.offsetTop ?? 0;
      shell.style.setProperty("--estimate-vvh", `${Math.round(height)}px`);
      shell.style.setProperty("--estimate-vv-offset", `${Math.round(offset)}px`);
    };
    syncViewport();
    viewport?.addEventListener("resize", syncViewport);
    viewport?.addEventListener("scroll", syncViewport);
    window.addEventListener("resize", syncViewport);

    const onFocus = (event: FocusEvent) => {
      const node = dialogRef.current;
      const target = event.target;
      if (!node || !(target instanceof Node) || node.contains(target)) return;
      if (document.activeElement && node.contains(document.activeElement)) return;
      if (target instanceof HTMLIFrameElement) return;
      node.focus();
    };
    document.addEventListener("focusin", onFocus);

    return () => {
      viewport?.removeEventListener("resize", syncViewport);
      viewport?.removeEventListener("scroll", syncViewport);
      window.removeEventListener("resize", syncViewport);
      document.removeEventListener("focusin", onFocus);
    };
  }, [open]);

  if (!open) return null;

  const pageUrl = getPageUrl();

  return (
    <div ref={shellRef} className="estimate-modal">
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
        tabIndex={-1}
        className="estimate-modal__panel outline-none"
      >
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-[rgba(0,135,255,0.25)] px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6 sm:py-4">
          <div className="min-w-0">
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
            <div className="mt-3 flex flex-wrap gap-2">
              <PhoneLink
                ctaPosition="estimate_modal"
                pageType={options?.pageType}
                locationSlug={options?.locationSlug}
                className="inline-flex min-h-11 items-center gap-2 rounded-[2px] border border-[rgba(0,135,255,0.45)] px-3 text-sm font-semibold text-white"
              >
                <Phone className="size-4 text-bright" aria-hidden />
                Call {BRAND.phone}
              </PhoneLink>
              <Link
                href="/contact"
                onClick={onClose}
                className="inline-flex min-h-11 items-center rounded-[2px] border border-[rgba(0,135,255,0.45)] px-3 text-sm font-semibold text-bright"
              >
                Open the contact form
              </Link>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-[2px] border border-[rgba(0,135,255,0.4)] text-white transition-colors hover:border-bright hover:text-bright"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>
        </div>
        <div className="estimate-modal__body pb-[env(safe-area-inset-bottom)]">
          <GhlFormEmbed
            embedId="modal-free-estimate"
            layout="fill"
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
