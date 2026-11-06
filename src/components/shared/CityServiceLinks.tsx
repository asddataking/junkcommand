import Link from "next/link";
import { pagesInGroup } from "@/data/indexing";

const SERVICE_PAGES = pagesInGroup("services");

export function CityServiceLinks({
  cityName,
  heading = true,
  compact = false,
}: {
  cityName: string;
  heading?: boolean;
  compact?: boolean;
}) {
  return (
    <div>
      {heading ? (
        <h2
          className={
            compact
              ? "font-display text-xl tracking-[0.08em] text-white"
              : "font-display text-3xl tracking-[0.06em] text-white sm:text-4xl"
          }
        >
          {compact
            ? "SERVICES"
            : `JUNK REMOVAL SERVICES IN ${cityName.toUpperCase()}`}
        </h2>
      ) : null}
      <ul className={heading ? "mt-4 space-y-2" : "space-y-2"}>
        {SERVICE_PAGES.map((page) => (
          <li key={page.path}>
            <Link
              href={page.path}
              className="block text-sm text-muted transition-colors hover:text-bright"
            >
              {page.label} in {cityName}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/port-huron-trash-bulk-pickup"
            className="block text-sm text-muted transition-colors hover:text-bright"
          >
            Port Huron trash &amp; bulk pickup
          </Link>
        </li>
      </ul>
    </div>
  );
}
