"use client";

import Link from "next/link";

/** Geographic outline of Michigan (Lower + Upper Peninsula) from public US states GeoJSON. */
const MICHIGAN_OUTLINE =
  "M237.7 265.6 193.0 266.9 193.0 264.7 154.0 264.7 126.5 264.7 133.2 260.4 137.7 253.0 141.9 248.5 145.0 242.1 146.8 233.1 146.1 223.3 136.3 204.2 139.4 197.0 137.2 188.3 144.8 179.4 146.4 172.0 145.3 168.0 150.8 166.4 151.5 161.0 160.0 159.5 166.5 153.6 165.9 165.5 169.4 166.1 173.7 160.1 173.9 150.0 176.6 147.4 185.6 145.8 182.7 138.8 188.7 132.8 196.1 132.4 204.4 136.2 212.6 136.8 216.5 141.5 222.7 141.8 233.0 146.2 236.6 146.0 242.2 153.0 237.7 156.8 242.0 161.7 243.6 167.3 241.6 179.6 235.0 182.7 233.3 189.0 225.4 191.2 221.0 198.8 222.7 201.7 230.6 204.4 236.8 200.2 244.0 191.7 255.4 188.5 261.0 191.0 264.4 195.7 267.8 209.4 268.4 216.3 272.0 224.6 268.6 236.5 263.1 238.3 263.0 234.0 259.4 235.3 255.2 245.2 248.5 249.0 246.5 256.6 238.2 262.9 Z M169.9 133.7 170.4 137.7 166.1 138.4 167.9 132.8 Z M101.2 154.7 96.2 151.2 99.3 146.5 91.5 145.8 94.6 141.3 94.9 135.5 88.0 131.5 84.3 127.4 70.2 124.1 65.8 125.2 51.7 120.3 17.8 113.7 14.1 108.0 8.0 106.1 20.8 102.6 26.6 98.7 41.1 97.0 50.5 92.1 54.8 92.0 58.4 88.5 68.7 83.7 74.0 79.5 81.7 76.8 89.1 79.1 76.1 89.3 73.1 92.7 73.2 98.8 79.6 94.1 90.9 94.9 99.8 98.1 107.7 107.1 112.1 108.8 120.4 107.3 122.4 109.3 130.7 110.4 148.4 102.8 157.6 102.1 169.9 102.4 178.2 99.9 184.5 99.7 185.8 109.0 192.3 110.2 198.8 108.8 201.5 110.9 205.9 108.2 215.4 107.3 215.6 118.9 220.0 123.8 226.5 125.0 227.2 121.8 233.5 121.8 236.9 125.2 234.1 127.7 216.0 125.6 207.3 127.0 197.9 123.0 195.2 126.7 196.5 129.7 192.3 129.0 186.2 124.5 175.5 121.8 170.1 121.6 164.8 125.9 156.2 127.0 146.8 126.1 143.0 127.9 142.1 131.5 131.8 134.6 132.3 130.3 127.8 129.4 126.0 133.9 118.4 134.1 115.0 136.1 109.9 143.8 100.5 153.8 Z M61.1 59.6 52.8 63.8 48.5 64.3 48.8 60.9 69.6 53.1 65.6 58.5 Z";

/** Port Huron pin in the same projected viewBox as MICHIGAN_OUTLINE. */
const PORT_HURON = { x: 265.0, y: 224.8 } as const;

export function MichiganServiceMap() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <svg
        viewBox="0 0 280 320"
        className="h-auto w-full"
        role="img"
        aria-label="Map of Michigan highlighting Port Huron service area"
      >
        <defs>
          <linearGradient id="miFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(7,135,255,0.22)" />
            <stop offset="100%" stopColor="rgba(7,135,255,0.08)" />
          </linearGradient>
          <filter id="miGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d={MICHIGAN_OUTLINE}
          fill="url(#miFill)"
          stroke="rgba(7,135,255,0.85)"
          strokeWidth="2.2"
          strokeLinejoin="round"
          filter="url(#miGlow)"
        />

        <g transform={`translate(${PORT_HURON.x} ${PORT_HURON.y})`}>
          <circle r="18" fill="rgba(7,135,255,0.18)" className="animate-pulse" />
          <circle r="8" fill="#0787FF" stroke="#E8F4FF" strokeWidth="2" />
          <circle r="3" fill="#E8F4FF" />
        </g>
      </svg>

      <div className="mt-4 text-center">
        <p className="font-display text-lg tracking-[0.1em] text-white">
          Port Huron, MI
        </p>
        <p className="mt-1 text-sm text-muted">
          Serving the Blue Water Area & surrounding communities
        </p>
        <Link
          href="/service-areas"
          className="mt-3 inline-flex text-sm font-semibold text-bright transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bright"
        >
          View all service areas →
        </Link>
      </div>
    </div>
  );
}
