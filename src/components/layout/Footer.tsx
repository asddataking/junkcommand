import { Facebook, Instagram, MapPin } from "lucide-react";
import { BRAND, SERVICE_AREAS } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";
import { MascotBadge } from "@/components/ui/MascotBadge";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(0,135,255,0.25)] bg-[#080B0F] pb-24 md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm text-muted">{BRAND.tagline}</p>
          <MascotBadge
            size="sm"
            caption="Luna · K-9 Cleanup Unit"
            className="items-start"
          />
        </div>

        <div>
          <h2 className="font-display text-xl tracking-[0.12em] text-white">
            Contact Us
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a href={BRAND.phoneHref} className="hover:text-bright">
                {BRAND.phone}
              </a>
            </li>
            <li>
              <a href={BRAND.smsHref} className="hover:text-bright">
                Text Us
              </a>
            </li>
            <li>
              <a href={BRAND.emailHref} className="hover:text-bright">
                {BRAND.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl tracking-[0.12em] text-white">
            Service Areas
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {SERVICE_AREAS.map((area) => (
              <li key={area} className="flex items-center gap-2">
                <MapPin className="size-3.5 text-bright" aria-hidden />
                {area}
              </li>
            ))}
            <li className="text-muted/80">Surrounding Areas</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl tracking-[0.12em] text-white">
            Follow Us
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-bright"
              >
                <Facebook className="size-4" aria-hidden />
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-bright"
              >
                <Instagram className="size-4" aria-hidden />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-bright"
              >
                <MapPin className="size-4" aria-hidden />
                Google Business Profile
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[rgba(0,135,255,0.15)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Junk Command Junk Removal. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a id="privacy" href="#privacy" className="hover:text-white">
              Privacy Policy
            </a>
            <a id="terms" href="#terms" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
