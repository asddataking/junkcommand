"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useState,
  type ReactNode,
} from "react";
import { X } from "lucide-react";
import { BRAND } from "@/lib/constants";

type LaunchSoonContextValue = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const LaunchSoonContext = createContext<LaunchSoonContextValue | null>(null);

export function useLaunchSoonModal() {
  const ctx = useContext(LaunchSoonContext);
  if (!ctx) {
    throw new Error("useLaunchSoonModal must be used within LaunchSoonProvider");
  }
  return ctx;
}

function LaunchSoonModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-[2px] border border-[rgba(0,135,255,0.45)] bg-[#080B0F] p-6 shadow-[0_0_48px_rgba(7,135,255,0.25)] sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-[2px] border border-[rgba(0,135,255,0.35)] text-muted transition-colors hover:border-bright hover:text-white"
          aria-label="Close"
        >
          <X className="size-4" aria-hidden />
        </button>

        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bright">
          Coming Soon
        </p>
        <h2
          id={titleId}
          className="mt-3 font-display text-4xl tracking-[0.06em] text-white sm:text-5xl"
        >
          LAUNCHING IN THE NEXT 2 WEEKS
        </h2>
        <p id={descriptionId} className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          Junk Command is almost ready to roll. Stay tuned — we&apos;ll be
          taking quote requests very soon. Need something sooner? Call or text{" "}
          <a href={BRAND.phoneHref} className="font-semibold text-bright hover:text-white">
            {BRAND.phone}
          </a>
          .
        </p>

        {/* GHL newsletter embed — drop form markup here when ready */}
        <div
          id="ghl-newsletter-signup"
          className="mt-6 rounded-[2px] border border-dashed border-[rgba(0,135,255,0.35)] bg-[#020305] px-4 py-5 text-center"
        >
          <p className="text-sm font-semibold text-white">
            Newsletter signup coming soon
          </p>
          <p className="mt-1 text-xs text-muted">
            We&apos;ll add a signup form here so you can get launch updates.
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 inline-flex w-full items-center justify-center rounded-[2px] bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-[0_0_24px_rgba(7,135,255,0.35)] transition-colors hover:bg-bright"
        >
          Got It — Stay Tuned
        </button>
      </div>
    </div>
  );
}

export function LaunchSoonProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const path = href.split("?")[0]?.split("#")[0] ?? "";
      const isQuoteCta =
        href === "#quote" ||
        href.endsWith("/#quote") ||
        path === "/book-online";

      if (!isQuoteCta) return;

      event.preventDefault();
      openModal();
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [openModal]);

  return (
    <LaunchSoonContext.Provider value={{ open, openModal, closeModal }}>
      {children}
      <LaunchSoonModal open={open} onClose={closeModal} />
    </LaunchSoonContext.Provider>
  );
}
