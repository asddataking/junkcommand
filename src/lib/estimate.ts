import {
  CURBSIDE_START,
  ESTIMATOR_ITEMS,
  FULL_SERVICE_START,
  LOAD_TIERS,
  type EstimatorItem,
  type LoadTier,
  getEstimatorItem,
} from "@/data/curbside-pricing";

export type SelectedEstimateItem = {
  id: string;
  quantity: number;
};

export type EstimateLine = {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
  lineTotal: number;
  category: EstimatorItem["category"];
};

export type EstimateResult = {
  lines: EstimateLine[];
  itemCount: number;
  bulkyCount: number;
  low: number;
  high: number;
  pickupType: "Curbside Command" | "Command Load Pricing" | "Full-Service Command";
  recommendedService: string;
  savingsNote: string;
  loadRecommendation?: LoadTier;
  disclaimer: string;
  isEmpty: boolean;
};

function addonUnitPrice(item: EstimatorItem, isFirstQualifying: boolean): number {
  if (item.isAddonOnly) {
    return item.startingPrice;
  }
  if (isFirstQualifying) {
    return Math.max(item.startingPrice, CURBSIDE_START);
  }

  switch (item.category) {
    case "small":
      return 25;
    case "bulky":
      return 40;
    case "appliance":
      return 50;
    case "specialty":
      return item.startingPrice;
    case "addon":
      return item.startingPrice;
    default:
      return 30;
  }
}

function expandSelection(selection: SelectedEstimateItem[]): EstimatorItem[] {
  const expanded: EstimatorItem[] = [];
  for (const selected of selection) {
    if (selected.quantity <= 0) continue;
    const item = getEstimatorItem(selected.id);
    if (!item) continue;
    for (let i = 0; i < selected.quantity; i += 1) {
      expanded.push(item);
    }
  }
  return expanded;
}

function recommendLoadTier(itemTotal: number, bulkyCount: number): LoadTier | undefined {
  if (bulkyCount < 3 && itemTotal < LOAD_TIERS[0].price) {
    return undefined;
  }
  const suitable =
    LOAD_TIERS.find((tier) => tier.price >= itemTotal * 0.9) ??
    LOAD_TIERS[LOAD_TIERS.length - 1];
  if (suitable.price + 20 < itemTotal || bulkyCount >= 3) {
    return suitable;
  }
  return undefined;
}

export function calculateCurbsideEstimate(
  selection: SelectedEstimateItem[],
): EstimateResult {
  const expanded = expandSelection(selection);
  const disclaimer =
    "This is a preliminary estimate. Final pricing depends on actual size, weight, access, disposal requirements, and the photos you submit.";

  if (expanded.length === 0) {
    return {
      lines: [],
      itemCount: 0,
      bulkyCount: 0,
      low: 0,
      high: 0,
      pickupType: "Curbside Command",
      recommendedService: "Curbside Command",
      savingsNote: `Save versus Full-Service Command (from $${FULL_SERVICE_START}) when items are already outside.`,
      disclaimer,
      isEmpty: true,
    };
  }

  let firstQualifyingAssigned = false;
  const lineMap = new Map<string, EstimateLine>();
  let runningTotal = 0;
  let bulkyCount = 0;

  for (const item of expanded) {
    const isQualifying = !item.isAddonOnly;
    if (item.category === "bulky" || item.category === "appliance" || item.category === "specialty") {
      bulkyCount += 1;
    }

    const isFirstQualifying = isQualifying && !firstQualifyingAssigned;
    if (isFirstQualifying) firstQualifyingAssigned = true;

    // Addon-only with no qualifying item still floors at CURBSIDE_START later
    const unit = addonUnitPrice(item, isFirstQualifying);
    runningTotal += unit;

    const existing = lineMap.get(item.id);
    if (existing) {
      existing.quantity += 1;
      existing.lineTotal += unit;
    } else {
      lineMap.set(item.id, {
        id: item.id,
        name: item.name,
        quantity: 1,
        unitPrice: unit,
        lineTotal: unit,
        category: item.category,
      });
    }
  }

  // If only add-ons were selected, floor at curbside minimum
  if (!firstQualifyingAssigned) {
    runningTotal = Math.max(runningTotal, CURBSIDE_START);
  } else {
    runningTotal = Math.max(runningTotal, CURBSIDE_START);
  }

  const loadRecommendation = recommendLoadTier(runningTotal, bulkyCount);
  let low = runningTotal;
  let high = Math.round(runningTotal * 1.15);
  let pickupType: EstimateResult["pickupType"] = "Curbside Command";
  let recommendedService = "Curbside Command";

  if (loadRecommendation && loadRecommendation.price <= runningTotal) {
    pickupType = "Command Load Pricing";
    recommendedService = `${loadRecommendation.name} (Command Load)`;
    low = loadRecommendation.price;
    high = loadRecommendation.price;
  } else if (loadRecommendation) {
    // Suggest load as alternative when close
    recommendedService = `Curbside Command — or ${loadRecommendation.name} load if the pile grows`;
  }

  const savings = Math.max(0, FULL_SERVICE_START - CURBSIDE_START);
  const savingsNote =
    pickupType === "Curbside Command"
      ? `Curbside typically saves about $${savings}+ versus Full-Service starting at $${FULL_SERVICE_START} when items are already outside.`
      : `Load pricing can beat stacking many single-item minimums. We confirm the final price from photos.`;

  return {
    lines: Array.from(lineMap.values()),
    itemCount: expanded.length,
    bulkyCount,
    low,
    high,
    pickupType,
    recommendedService,
    savingsNote,
    loadRecommendation,
    disclaimer,
    isEmpty: false,
  };
}

export function formatEstimateRange(low: number, high: number): string {
  if (low <= 0) return "—";
  if (low === high) {
    return `$${low}`;
  }
  return `$${low}–$${high}`;
}

export function selectionSummary(selection: SelectedEstimateItem[]): string {
  return selection
    .filter((s) => s.quantity > 0)
    .map((s) => {
      const item = getEstimatorItem(s.id);
      return `${item?.name ?? s.id} × ${s.quantity}`;
    })
    .join(", ");
}

export function buildEstimateDetailsText(
  selection: SelectedEstimateItem[],
  result: EstimateResult,
  loadTier?: LoadTier | null,
): string {
  const parts: string[] = [];
  if (selection.some((s) => s.quantity > 0)) {
    parts.push(`Selected items: ${selectionSummary(selection)}`);
  }
  if (!result.isEmpty) {
    parts.push(
      `Preliminary estimate: ${formatEstimateRange(result.low, result.high)}`,
    );
    parts.push(`Recommended service: ${result.recommendedService}`);
  }
  if (loadTier) {
    parts.push(
      `Selected load tier: ${loadTier.name} (${loadTier.fillPercent}%) — $${loadTier.price}`,
    );
  }
  parts.push(
    "Note: Preliminary estimate only. Confirm final price from photos before pickup.",
  );
  return parts.join("\n");
}

/** Catalog lookup helper for UI */
export function listEstimatorCatalog(): EstimatorItem[] {
  return ESTIMATOR_ITEMS;
}
