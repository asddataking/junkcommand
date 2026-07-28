"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({
  items,
  idPrefix = "faq",
}: {
  items: FaqItem[];
  idPrefix?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[rgba(0,135,255,0.2)] border border-[rgba(0,135,255,0.3)] rounded-[2px]">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `${idPrefix}-panel-${index}`;
        const buttonId = `${idPrefix}-button-${index}`;
        return (
          <div key={item.question} className="bg-card">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-semibold text-white transition-colors hover:text-bright sm:px-5 sm:text-base"
                onClick={() => setOpenIndex(open ? null : index)}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`size-5 shrink-0 text-bright transition-transform ${open ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="px-4 pb-4 text-sm leading-relaxed text-muted sm:px-5"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
