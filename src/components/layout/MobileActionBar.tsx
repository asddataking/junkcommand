"use client";

import { FileText, MessageSquare, Phone } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { useEstimateModal } from "@/components/forms/EstimateModalProvider";
import { trackPhoneClick } from "@/lib/analytics";

export function MobileActionBar() {
  const { openModal } = useEstimateModal();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[rgba(0,135,255,0.35)] bg-[#020305]/95 backdrop-blur-md md:hidden">
      <div className="grid grid-cols-3">
        <a
          href={BRAND.phoneHref}
          className="flex flex-col items-center justify-center gap-1 px-2 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[rgba(7,135,255,0.12)] hover:text-bright"
          onClick={() =>
            trackPhoneClick({ cta_position: "mobile_bar", page_type: "site" })
          }
        >
          <Phone className="size-4 text-bright" aria-hidden />
          Call
        </a>
        <a
          href={BRAND.smsHref}
          className="flex flex-col items-center justify-center gap-1 px-2 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[rgba(7,135,255,0.12)] hover:text-bright"
        >
          <MessageSquare className="size-4 text-bright" aria-hidden />
          Text
        </a>
        <button
          type="button"
          className="flex flex-col items-center justify-center gap-1 px-2 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[rgba(7,135,255,0.12)] hover:text-bright"
          onClick={() =>
            openModal({ ctaPosition: "mobile_bar", pageType: "site" })
          }
        >
          <FileText className="size-4 text-bright" aria-hidden />
          Get Instant Quote
        </button>
      </div>
    </div>
  );
}
