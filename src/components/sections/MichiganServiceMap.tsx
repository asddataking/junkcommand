type MichiganServiceMapProps = {
  className?: string;
};

/**
 * Decorative stylized Michigan silhouette with a Port Huron / St. Clair
 * County pin. Not a legal service-boundary map.
 */
export function MichiganServiceMap({ className = "" }: MichiganServiceMapProps) {
  return (
    <div
      className={`relative mx-auto flex max-w-sm items-center justify-center lg:max-w-none ${className}`}
      role="img"
      aria-label="Decorative map of Michigan highlighting Junk Command service coverage around Port Huron and St. Clair County"
    >
      <span
        className="pointer-events-none absolute inset-0 flex items-center justify-center font-display text-[7rem] tracking-[0.12em] text-bright/[0.06] sm:text-[8.5rem]"
        aria-hidden
      >
        JC
      </span>

      <div
        className="pointer-events-none absolute left-[58%] top-[48%] h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(24,160,255,0.38),transparent_68%)] blur-md"
        aria-hidden
      />

      <svg
        viewBox="0 0 220 260"
        className="relative z-10 h-[220px] w-auto sm:h-[260px] lg:h-[300px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient
            id="miFill"
            x1="40"
            y1="10"
            x2="180"
            y2="250"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0C4578" />
            <stop offset="0.5" stopColor="#0A2F52" />
            <stop offset="1" stopColor="#061525" />
          </linearGradient>
          <filter id="miGlow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Upper Peninsula */}
        <path
          d="M18 72 C34 54 62 46 92 44 C118 42 142 48 164 58 C178 65 192 68 204 62 C210 59 214 64 210 70 C200 82 180 84 162 80 C144 76 128 70 110 74 C94 78 82 90 66 98 C50 106 34 108 24 98 C16 90 12 80 18 72 Z"
          fill="url(#miFill)"
          stroke="#18a0ff"
          strokeWidth="1.6"
          filter="url(#miGlow)"
        />

        {/* Lower Peninsula mitten */}
        <path
          d="M72 112 C88 104 108 102 126 108 C142 114 154 126 162 142 C168 154 172 168 174 184 C176 204 174 222 166 236 C156 252 140 258 122 256 C106 254 94 244 88 228 C84 216 84 202 82 188 C80 172 74 158 64 148 C54 138 44 128 48 118 C52 108 62 116 72 112 Z"
          fill="url(#miFill)"
          stroke="#18a0ff"
          strokeWidth="1.8"
          filter="url(#miGlow)"
        />

        {/* Thumb / eastern St. Clair County */}
        <path
          d="M154 126 C168 118 182 124 188 138 C192 148 192 162 186 172 C180 182 168 184 160 176 C154 170 152 156 152 144 C152 136 152 130 154 126 Z"
          fill="#0E528E"
          stroke="#18a0ff"
          strokeWidth="1.3"
        />

        {/* Port Huron pin */}
        <g transform="translate(182 152)">
          <circle cx="0" cy="0" r="20" fill="rgba(24,160,255,0.16)" />
          <circle cx="0" cy="0" r="11" fill="rgba(24,160,255,0.28)" />
          <path
            d="M0 -15 C-7.5 -15 -13 -9 -13 -1.5 C-13 8 0 20 0 20 C0 20 13 8 13 -1.5 C13 -9 7.5 -15 0 -15 Z"
            fill="#18a0ff"
            filter="url(#miGlow)"
          />
          <circle cx="0" cy="-2.5" r="3.8" fill="#020305" />
        </g>
      </svg>
    </div>
  );
}
