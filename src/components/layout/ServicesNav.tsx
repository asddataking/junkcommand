"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { SERVICES_NAV } from "@/lib/constants";

export function DesktopServicesNav() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const buttonId = useId();
  const menuId = useId();

  useEffect(() => {
    if (!open) return undefined;
    const onPointer = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        id={buttonId}
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-[0.14em] text-muted transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bright"
      >
        {SERVICES_NAV.label}
        <ChevronDown
          className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open ? (
        <div
          id={menuId}
          role="menu"
          aria-labelledby={buttonId}
          className="absolute left-0 top-[calc(100%+0.75rem)] z-50 w-[min(40rem,calc(100vw-2rem))] rounded-[2px] border border-[rgba(0,135,255,0.35)] bg-[#080B0F] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
        >
          <div className="grid gap-6 sm:grid-cols-3">
            {SERVICES_NAV.groups.map((group) => (
              <div key={group.label}>
                <Link
                  href={group.href}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="text-xs font-semibold uppercase tracking-[0.16em] text-bright hover:text-white"
                >
                  {group.label}
                </Link>
                <ul className="mt-3 space-y-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        role="menuitem"
                        onClick={() => setOpen(false)}
                        className="block text-sm text-muted transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bright">
                More services
              </p>
              <ul className="mt-3 space-y-2">
                {SERVICES_NAV.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      role="menuitem"
                      onClick={() => setOpen(false)}
                      className="block text-sm text-muted transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function MobileServicesNav({ onNavigate }: { onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between rounded-[2px] px-3 py-3 text-left text-sm font-semibold uppercase tracking-[0.14em] text-muted hover:bg-[rgba(7,135,255,0.08)] hover:text-white"
      >
        {SERVICES_NAV.label}
        <ChevronDown
          className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open ? (
        <div id={panelId} className="space-y-4 px-3 pb-3">
          {SERVICES_NAV.groups.map((group) => (
            <div key={group.label}>
              <Link
                href={group.href}
                onClick={onNavigate}
                className="block py-1 text-xs font-semibold uppercase tracking-[0.16em] text-bright hover:text-white"
              >
                {group.label}
              </Link>
              <ul className="mt-1 border-l border-[rgba(0,135,255,0.25)] pl-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onNavigate}
                      className="block rounded-[2px] py-2 text-sm text-muted hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <ul>
            {SERVICES_NAV.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  className="block rounded-[2px] py-2 text-sm font-semibold text-muted hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
