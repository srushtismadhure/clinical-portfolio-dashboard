import React from "react";
import {
  Database,
  Code2,
  Sigma,
  BarChart3,
  Layers3,
  Cloud,
} from "lucide-react";

type Tool = { label: string; Icon: React.ElementType };

const tools: Tool[] = [
  { label: "SQL", Icon: Database },
  { label: "Python", Icon: Code2 },
  { label: "R", Icon: Sigma },
  { label: "Power BI", Icon: BarChart3 },
  { label: "Databricks", Icon: Layers3 },
  { label: "Azure", Icon: Cloud },
];

type Props = {
  compact?: boolean; // for mobile mini version if you want
};

export function ClinicalAnalyticsToolkit({ compact = false }: Props) {
  return (
    <section
      className={[
        "toolkit-cabinet relative overflow-hidden rounded-3xl border border-slate-200",
        compact ? "p-4" : "p-5",
      ].join(" ")}
    >
      {/* Bolts */}
      <span className="toolkit-bolt absolute left-4 top-4 h-2.5 w-2.5 rounded-full" />
      <span className="toolkit-bolt absolute right-4 top-4 h-2.5 w-2.5 rounded-full" />
      <span className="toolkit-bolt absolute left-4 bottom-4 h-2.5 w-2.5 rounded-full" />
      <span className="toolkit-bolt absolute right-4 bottom-4 h-2.5 w-2.5 rounded-full" />

      {/* Frame lip */}
      <div className="toolkit-frame rounded-2xl border border-slate-200 p-4">
        {/* Header */}
        <div className={compact ? "mb-3" : "mb-4"}>
          <p className="text-xs font-semibold tracking-[0.22em] text-slate-700 uppercase">
            Clinical Analytics Toolkit
          </p>
          {!compact && (
            <p className="mt-1 text-sm text-slate-500">
              Ready-to-deploy skills for healthcare systems
            </p>
          )}
          {compact && (
            <p className="mt-1 text-xs text-slate-500">
              Ready-to-deploy skills
            </p>
          )}
        </div>

        {/* Tray */}
        <div className="toolkit-tray relative rounded-2xl border border-slate-200 p-4">
          {/* Glass overlay */}
          <div className="toolkit-glass pointer-events-none absolute inset-0 rounded-2xl" />

          {/* Tools grid */}
          <div
            className={[
              "grid gap-3",
              compact ? "grid-cols-2" : "grid-cols-2",
            ].join(" ")}
          >
            {tools.map(({ label, Icon }) => (
              <div
                key={label}
                className={[
                  "flex items-center gap-2 rounded-xl border border-slate-200 bg-white",
                  compact ? "px-3 py-2" : "px-4 py-3",
                  "shadow-[0_1px_0_rgba(15,23,42,0.03)]",
                ].join(" ")}
              >
                <Icon className="h-4 w-4 text-slate-600" aria-hidden="true" />
                <span className="text-sm font-semibold text-slate-700">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Status bar */}
          <div className="mt-4 rounded-xl border border-slate-200 bg-white px-4 py-3">
            <div className="flex items-center justify-between">
              <span className="text-xs tracking-[0.22em] text-slate-500 uppercase">
                Status
              </span>
              <span className="text-xs font-semibold tracking-[0.22em] text-slate-700 uppercase">
                Operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
