import Image from "next/image";
import portrait from "@/public/youssef-elbasiouny.jpg";
import { profile } from "@/lib/site";

// Hero graphic: the portrait sits at the centre of a circuit board, routing
// signals between the three layers the bio describes — embedded hardware, AI,
// and cloud/web. Geometry is in a 480×476 viewBox centred on (240, 244).

const modules = [
  { x: 148, y: 20, label: "AI & ML", sub: "RAG · Vision · DNN", led: "fill-secondary" },
  { x: 12, y: 396, label: "EMBEDDED", sub: "ATmega · ESP32 · C", led: "fill-tertiary" },
  { x: 284, y: 396, label: "CLOUD & WEB", sub: "Next.js · Supabase", led: "fill-primary" },
];

// Path direction is the direction the pulse travels.
const signalPaths = [
  { d: "M104 396 V336 L136 304", delay: "0s" },
  { d: "M240 124 V84", delay: "1.2s" },
  { d: "M344 304 L376 336 V396", delay: "2.4s" },
];

const staticTraces = [
  "M210 128 V84",
  "M270 128 V84",
  "M196 428 H284",
  "M120 244 H56",
  "M360 244 H424",
  "M136 184 L104 152 V120",
  "M344 184 L376 152 V120",
];

const vias = [
  [56, 244],
  [424, 244],
  [104, 120],
  [376, 120],
];

export function SystemDiagram() {
  return (
    <div className="relative">
      <svg viewBox="0 0 480 476" className="h-auto w-full" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient
            id="sd-accent"
            gradientUnits="userSpaceOnUse"
            x1="120"
            y1="124"
            x2="360"
            y2="364"
          >
            <stop offset="0" style={{ stopColor: "var(--primary)" }} />
            <stop offset="1" style={{ stopColor: "var(--secondary)" }} />
          </linearGradient>
          <radialGradient id="sd-glow">
            <stop offset="0" style={{ stopColor: "var(--primary)" }} stopOpacity="0.3" />
            <stop offset="1" style={{ stopColor: "var(--primary)" }} stopOpacity="0" />
          </radialGradient>
          <pattern id="sd-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="12" cy="12" r="1" className="fill-primary/25" />
          </pattern>
        </defs>

        <rect
          x="1"
          y="1"
          width="478"
          height="474"
          rx="26"
          className="fill-surface/70 stroke-line"
        />
        <rect x="1" y="1" width="478" height="474" rx="26" fill="url(#sd-dots)" />
        <circle cx="240" cy="244" r="200" fill="url(#sd-glow)" />

        {staticTraces.map((d) => (
          <path key={d} d={d} className="trace" />
        ))}
        {vias.map(([cx, cy]) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="3.5"
            strokeWidth="1.5"
            className="fill-surface stroke-primary/60"
          />
        ))}

        {signalPaths.map(({ d, delay }) => (
          <g key={d}>
            <path d={d} className="trace" />
            <path
              d={d}
              pathLength={100}
              className="trace-pulse"
              style={{ animationDelay: delay }}
            />
          </g>
        ))}

        {/* Flow annotations */}
        <g className="fill-tertiary font-mono" fontSize="10">
          <text x="114" y="372">
            sense
          </text>
          <text x="282" y="108">
            infer
          </text>
          <text x="366" y="372" textAnchor="end">
            serve
          </text>
        </g>

        {/* Rings around the portrait */}
        <circle
          cx="240"
          cy="244"
          r="120"
          fill="none"
          strokeWidth="1.5"
          strokeDasharray="2 9"
          strokeLinecap="round"
          className="orbit stroke-primary/60"
        />
        <g className="orbit orbit-fast">
          <circle cx="240" cy="124" r="4" className="fill-tertiary" />
          <circle cx="240" cy="364" r="2.5" className="fill-secondary" />
        </g>
        <circle
          cx="240"
          cy="244"
          r="104"
          fill="none"
          stroke="url(#sd-accent)"
          strokeWidth="2.5"
        />

        {/* Layer modules */}
        {modules.map(({ x, y, label, sub, led }) => (
          <g key={label}>
            <rect
              x={x}
              y={y}
              width="184"
              height="64"
              rx="12"
              className="fill-surface stroke-primary/30"
            />
            <circle cx={x + 18} cy={y + 23} r="3.5" className={led} />
            <text
              x={x + 30}
              y={y + 27.5}
              fontSize="13"
              fontWeight="600"
              letterSpacing="1.5"
              className="fill-fg font-mono"
            >
              {label}
            </text>
            <text x={x + 16} y={y + 48} fontSize="10.5" className="fill-muted font-mono">
              {sub}
            </text>
          </g>
        ))}
      </svg>

      {/* Sized and placed to sit inside the r=104 ring: 192/480 wide, centred on (240, 244). */}
      <div className="absolute top-[51.26%] left-1/2 w-[40%] -translate-x-1/2 -translate-y-1/2">
        <Image
          src={portrait}
          alt={profile.portraitAlt}
          sizes="(min-width: 1024px) 200px, 40vw"
          placeholder="blur"
          loading="eager"
          className="aspect-square w-full rounded-full object-cover shadow-xl ring-4 ring-surface"
        />
      </div>
    </div>
  );
}
