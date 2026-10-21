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
    const syncFormFocus = () => {
      window.setTimeout(() => {
        const active = document.activeElement;
        const formFocused =
          active instanceof HTMLIFrameElement &&
          (active.dataset.formId === "yw2y86G2nD6Vmzn2HjN2" ||
            (active.dataset.formName ?? "").toLowerCase() === "free estimate");
        document.body.classList.toggle("ghl-form-active", formFocused);
      }, 0);
    };
    window.addEventListener("focusin", syncFormFocus);
    window.addEventListener("blur", syncFormFocus);
    return () => {
      window.removeEventListener("focusin", syncFormFocus);
      window.removeEventListener("blur", syncFormFocus);
      document.body.classList.remove("ghl-form-active");
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const scrollY = window.scrollY;
    const { style } = document.body;
    const previous = {
      position: style.position,
      top: style.top,
      left: style.left,
      right: style.right,
      width: style.width,
      overflow: style.overflow,
    };
    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.left = "0";
    style.right = "0";
    style.width = "100%";
    style.overflow = "hidden";
    document.body.classList.add("estimate-modal-open");
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      style.position = previous.position;
      style.top = previous.top;
      style.left = previous.left;
      style.right = previous.right;
      style.width = previous.width;
      style.overflow = previous.overflow;
      document.body.classList.remove("estimate-modal-open");
      window.removeEventListener("keydown", onKey);
      window.scrollTo(0, scrollY);
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
