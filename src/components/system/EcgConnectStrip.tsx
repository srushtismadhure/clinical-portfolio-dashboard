import React from "react";

type EcgConnectStripProps = {
  href?: string;
  height?: number;
  label?: string;
};

export default function EcgConnectStrip({
  href = "#contact",
  height = 120,
  label = "Let's connect",
}: EcgConnectStripProps) {
  const uid = React.useId();
  const pathId = `ecgPath-${uid}`;
  const clipId = `clip-${uid}`;
  const glowId = `glow-${uid}`;

  const d =
    "M 0 60 " +
    "L 80 60 " +
    "C 95 60, 105 55, 115 60 " +
    "L 140 60 " +
    "L 150 35 L 160 85 L 170 60 " +
    "C 190 58, 205 65, 225 60 " +
    "L 300 60 " +
    "C 320 60, 335 55, 350 60 " +
    "L 380 60 " +
    "L 390 40 L 400 80 L 410 60 " +
    "C 430 58, 445 65, 465 60 " +
    "L 540 60 " +
    "C 560 60, 575 55, 590 60 " +
    "L 620 60 " +
    "L 630 35 L 640 85 L 650 60 " +
    "C 670 58, 685 65, 705 60 " +
    "L 820 60 " +
    "C 840 60, 860 55, 880 60 " +
    "L 920 60";

  const onClick = (e: React.MouseEvent) => {
    if (href.startsWith("#")) return;
    e.preventDefault();
    window.location.href = href;
  };

  return (
    <a
      href={href}
      onClick={onClick}
      className="block w-full rounded-md border border-slate-300 overflow-hidden"
      aria-label={label}
      title={label}
    >
      <div className="relative w-full" style={{ height }}>
        <div className="absolute inset-0 bg-[#071b14]" />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(34,197,94,0.18) 1px, transparent 1px), " +
              "linear-gradient(to bottom, rgba(34,197,94,0.18) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <svg
          className="absolute inset-0"
          viewBox="0 0 920 120"
          preserveAspectRatio="none"
        >
          <defs>
            <clipPath id={clipId}>
              <rect x="0" y="0" width="920" height="120" />
            </clipPath>

            <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <path id={pathId} d={d} />
          </defs>

          <path
            d={d}
            fill="none"
            stroke="rgba(34,197,94,0.55)"
            strokeWidth="3.5"
            filter={`url(#${glowId})`}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ecg-trace ecg-glow"
            clipPath={`url(#${clipId})`}
          />

          <path
            d={d}
            fill="none"
            stroke="rgb(34,197,94)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ecg-trace"
            clipPath={`url(#${clipId})`}
          />

          <text fill="rgba(34,197,94,0.9)" className="ecg-text">
            <textPath href={`#${pathId}`} startOffset="48%" textAnchor="middle">
              {label}
            </textPath>
          </text>
        </svg>

        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-10 bg-black/10 pointer-events-none" />

        <style>{`
          .ecg-trace {
            stroke-dasharray: 1200;
            stroke-dashoffset: 1200;
            animation: ecgDraw 2.8s linear infinite;
          }
          .ecg-glow {
            animation-duration: 2.8s;
          }
          .ecg-text {
            font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
            font-weight: 600;
            font-size: 18px;
            letter-spacing: 0.2px;
            opacity: 0.95;
          }
          @keyframes ecgDraw {
            0% { stroke-dashoffset: 1200; opacity: 0; }
            10% { opacity: 1; }
            100% { stroke-dashoffset: 0; opacity: 1; }
          }
          @media (prefers-reduced-motion: reduce) {
            .ecg-trace { animation: none; stroke-dashoffset: 0; }
          }
        `}</style>
      </div>
    </a>
  );
}
