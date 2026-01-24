import { Link, useParams } from 'react-router-dom';


export type DataModelGuideBlock = {
  title: string;
  bullets: string[];
};

export type DataModel = {
  title?: string;
  subtitle?: string; // e.g. "(EHR Star Schema)"
  description?: string;

  // keep these (we won't render them in this section anymore)
  chips?: { label: string; value: string }[];

  bullets?: string[]; // optional (not required if you use guideBlocks)
  image?: string;
  caption?: string;
  expandText?: string;

  // ✅ NEW: Model Guide content (right column)
  guideTitle?: string; // e.g. "Model Guide"
  guideBlocks?: DataModelGuideBlock[];

  // ✅ Optional: right-top labels for image card
  leftLabel?: string; // e.g. "Star schema"
  rightLabel?: string; // e.g. "Power BI relationship view (simplified)"

  executiveSummary?: { heading?: string; narrative?: string; metrics?: { label: string; value: string }[]; };
};

type DataModelSectionProps = {
  model?: DataModel;
};

export function DataModelSection({ model }: DataModelSectionProps) {
  if (!model) return null;

  const { id } = useParams<{ id: string }>();

  const {
    title = "Data Model",
    subtitle = "(EHR Star Schema)",
    description,
    bullets = [],
    image,
    caption = "Star schema diagram",

    guideTitle = "Model Guide",
    guideBlocks = [],

    leftLabel = "Star schema",
    rightLabel = "Power BI relationship view (simplified)",
    executiveSummary,
  } = model;

  return (
    <section className="mt-10 sm:mt-12">
      {/* Box 1 — Data Model header (matches Project Background) */}
      <div className="rounded-2xl bg-white border border-slate-200 px-5 sm:px-6 lg:px-8 py-5 sm:py-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
            {title}{" "}
            <span className="text-slate-500 font-normal text-base sm:text-lg">
              {subtitle}
            </span>
          </h2>
        </div>

        {description && (
          <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-slate-600">
            {description}
          </p>
        )}
      </div>

      {/* spacing between boxes */}
      <div className="mt-6" />

      {/* Box 2 — Model Structure (LEFT schema, RIGHT model guide) */}
      <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm font-semibold text-slate-900">Model Structure</div>
          <div className="hidden lg:flex items-center gap-2 text-xs text-slate-500">
            <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-700">{leftLabel}</span>
            <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-700">{rightLabel}</span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT: Schema */}
          <div className="lg:col-span-8">
            {bullets.length > 0 && (
              <ul className="mb-4 space-y-2 text-sm sm:text-[15px] text-slate-700 list-disc pl-5">
                {bullets.map((b, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {image && (
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="text-xs sm:text-sm text-slate-500">{caption ?? ""}</div>

                  {id && (
  <Link
    to={`/projects/${id}/data-model`}
    className="
      inline-flex items-center gap-1.5
      rounded-full border border-slate-200 bg-white
      px-3 py-1.5
      text-xs sm:text-sm font-medium text-slate-700
      hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900
      focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2
      transition
    "
    aria-label="View data model details"
  >
    <span>Details</span>
    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
  </Link>
)}
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 sm:p-6 lg:p-8">
                  <img
                    src={image}
                    alt="Data Model"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: Model Guide — desktop only + collapsible */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="rounded-2xl bg-white border border-slate-200 p-5">
              <details open className="group">
                <summary className="list-none cursor-pointer flex items-center justify-between">
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-600">
                    {guideTitle}
                  </div>
                  <span className="text-slate-500 transition-transform group-open:rotate-180">▾</span>
                </summary>

                {guideBlocks.length ? (
                  <div className="mt-4 space-y-6">
                    {guideBlocks.map((block) => (
                      <div key={block.title}>
                        <div className="text-sm font-semibold text-slate-900">{block.title}</div>
                        <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc pl-4">
                          {block.bullets.map((b) => (
                            <li key={b} className="leading-relaxed">
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-3 text-sm text-slate-500">No model guide configured yet.</p>
                )}
              </details>
            </div>
          </div>
        </div>
      </div>

      {/* Box 3 — Executive Summary (separate module) */}
      {executiveSummary?.narrative && (
        <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-5 sm:p-6">
          <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-600">
            {executiveSummary.heading ?? "Executive Summary"}
          </div>

          <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-slate-700 whitespace-pre-line">
            {executiveSummary.narrative}
          </p>

          {executiveSummary.metrics?.length ? (
            <div className="mt-5 overflow-hidden rounded-xl bg-slate-50">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {executiveSummary.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="px-5 py-4 border-t border-slate-200 first:border-t-0 sm:border-t-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0"
                  >
                    <div className="text-xs text-slate-500">{m.label}</div>
                    <div className="mt-1 text-sm font-semibold text-slate-900">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      )}
    </section>
  );
}
