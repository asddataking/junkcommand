"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { FreeEstimateModal } from "@/components/forms/FreeEstimateModal";
import {
  bindGhlAnalyticsListeners,
  getPageUrl,
  trackEstimateModalOpen,
  type AnalyticsContext,
} from "@/lib/analytics";

export type EstimateModalOpenOptions = {
  ctaPosition: string;
  locationSlug?: string;
  pageType?: string;
};

type EstimateModalContextValue = {
  open: boolean;
  openModal: (options: EstimateModalOpenOptions) => void;
  closeModal: () => void;
  options: EstimateModalOpenOptions | null;
};

const EstimateModalContext = createContext<EstimateModalContextValue | null>(
  null,
);

export function useEstimateModal() {
  const value = useContext(EstimateModalContext);
  if (!value) {
    throw new Error("useEstimateModal must be used within EstimateModalProvider");
  }
  return value;
}

export function EstimateModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [options, setOptions] = useState<EstimateModalOpenOptions | null>(null);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  const openModal = useCallback((next: EstimateModalOpenOptions) => {
    setOptions(next);
    setHasOpened(true);
    setOpen(true);
    const payload: AnalyticsContext = {
      cta_position: next.ctaPosition,
      location_slug: next.locationSlug,
      page_type: next.pageType,
      page_url: getPageUrl(),
    };
    trackEstimateModalOpen(payload);
  }, []);

  useEffect(() => {
    return bindGhlAnalyticsListeners();
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("estimate-modal-open");
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove("estimate-modal-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeModal]);

  const value = useMemo(
    () => ({ open, openModal, closeModal, options }),
    [open, openModal, closeModal, options],
  );

  return (
    <EstimateModalContext.Provider value={value}>
      {children}
      {hasOpened ? (
        <FreeEstimateModal
          open={open}
          onClose={closeModal}
          options={options}
        />
      ) : null}
    </EstimateModalContext.Provider>
  );
}
