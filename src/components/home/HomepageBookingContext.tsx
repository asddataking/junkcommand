"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { ServiceType } from "@/data/curbside-pricing";
import type { SelectedEstimateItem } from "@/lib/estimate";

export type EstimatePrefill = {
  serviceType: ServiceType;
  itemDescription: string;
  details: string;
  estimateRange?: string;
  recommendedService?: string;
};

type EstimatorQuantities = Record<string, number>;

type HomepageBookingContextValue = {
  quantities: EstimatorQuantities;
  setQuantity: (itemId: string, quantity: number) => void;
  addItem: (itemId: string, amount?: number) => void;
  clearEstimator: () => void;
  selection: SelectedEstimateItem[];
  prefill: EstimatePrefill | null;
  applyPrefill: (prefill: EstimatePrefill) => void;
  clearPrefill: () => void;
  scrollToQuote: () => void;
  scrollToEstimator: () => void;
};

const HomepageBookingContext =
  createContext<HomepageBookingContextValue | null>(null);

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function HomepageBookingProvider({ children }: { children: ReactNode }) {
  const [quantities, setQuantities] = useState<EstimatorQuantities>({});
  const [prefill, setPrefill] = useState<EstimatePrefill | null>(null);

  const setQuantity = useCallback((itemId: string, quantity: number) => {
    setQuantities((prev) => {
      const next = { ...prev };
      if (quantity <= 0) {
        delete next[itemId];
      } else {
        next[itemId] = quantity;
      }
      return next;
    });
  }, []);

  const addItem = useCallback((itemId: string, amount = 1) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] ?? 0) + amount,
    }));
  }, []);

  const clearEstimator = useCallback(() => {
    setQuantities({});
  }, []);

  const selection = useMemo<SelectedEstimateItem[]>(
    () =>
      Object.entries(quantities).map(([id, quantity]) => ({ id, quantity })),
    [quantities],
  );

  const applyPrefill = useCallback((next: EstimatePrefill) => {
    setPrefill(next);
    scrollToId("quote");
  }, []);

  const clearPrefill = useCallback(() => setPrefill(null), []);

  const value = useMemo<HomepageBookingContextValue>(
    () => ({
      quantities,
      setQuantity,
      addItem,
      clearEstimator,
      selection,
      prefill,
      applyPrefill,
      clearPrefill,
      scrollToQuote: () => scrollToId("quote"),
      scrollToEstimator: () => scrollToId("estimator"),
    }),
    [
      quantities,
      setQuantity,
      addItem,
      clearEstimator,
      selection,
      prefill,
      applyPrefill,
      clearPrefill,
    ],
  );

  return (
    <HomepageBookingContext.Provider value={value}>
      {children}
    </HomepageBookingContext.Provider>
  );
}

export function useHomepageBooking() {
  const ctx = useContext(HomepageBookingContext);
  if (!ctx) {
    throw new Error(
      "useHomepageBooking must be used within HomepageBookingProvider",
    );
  }
  return ctx;
}

/** Optional hook for components that may render outside the provider */
export function useHomepageBookingOptional() {
  return useContext(HomepageBookingContext);
}
