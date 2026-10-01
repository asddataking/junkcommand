import Link from "next/link";
import { pagesInGroup } from "@/data/indexing";

const AREA_PAGES = pagesInGroup("areas");

export function AreasWeServe({
  heading = "Areas we serve",
  intro = "Junk Command is based in Port Huron and hauls junk across St. Clair County, plus Romeo, Imlay City, and Lapeer on routes we already run.",
}: {
  heading?: string;
  intro?: string;
}) {
  return (
    <div>
      <h2 className="font-display text-3xl tracking-[0.06em] text-white sm:text-4xl">
        {heading.toUpperCase()}
      </h2>
      <p className="mt-4 leading-relaxed text-muted">{intro}</p>
      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
        {AREA_PAGES.map((city) => (
          <li key={city.path}>
            <Link
              href={city.path}
              className="flex items-center rounded-[2px] border border-[rgba(0,135,255,0.25)] bg-card px-4 py-3 text-sm text-white transition-colors hover:border-bright hover:text-bright"
            >
              Junk removal in {city.label}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-muted">
        City trash and bulk pickup is a different service than a junk hauler.{" "}
        <Link
          href="/port-huron-trash-bulk-pickup"
          className="font-semibold text-bright hover:text-white"
        >
          Port Huron trash &amp; bulk pickup
        </Link>{" "}
        explains when the city cart is enough and when to call us.
      </p>
    </div>
  );
}
