import { CtaBanner } from "@/components/shared/CtaBanner";
import { BRAND } from "@/lib/constants";

export function LandingEndCta({
  title,
  description,
  primaryHref = "#quote",
  primaryLabel = "Request Delivery",
}: {
  title: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <CtaBanner
      title={title}
      description={description}
      primaryHref={primaryHref}
      primaryLabel={primaryLabel}
      secondaryHref={BRAND.phoneHref}
      secondaryLabel={`Call ${BRAND.phone}`}
    />
  );
}
