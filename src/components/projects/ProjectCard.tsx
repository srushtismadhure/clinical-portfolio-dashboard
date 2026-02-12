import React from "react";

export type Project = {
  id?: string;
  title: string;
  href?: string;
  imageSrc?: string;
  ctaLabel?: string;
  isNDA?: boolean;
  imagePosition?: "top" | "center";
  lastUpdated?: string;
  problem?: string;
  featured?: boolean;
  skills?: string[];
  variant?: "dashboard" | "gallery";
  status?: string;
  showFullThumb?: boolean;
  hero?: boolean;
};

function ExternalLinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M14 5h5v5M10 14l9-9M19 14v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProjectCard({ project, wrapHref = false }: { project: Project; wrapHref?: boolean }) {
  const isNDA = Boolean(project.isNDA);
  const cta =
    project.ctaLabel ?? (isNDA ? "Open Summary →" : "Open Case Study →");
  const objectPosition =
    project.imagePosition === "top" ? "object-top" : "object-center";
  const href = project.href ?? "#";
  const imageSrc =
    project.imageSrc ??
    `${import.meta.env.BASE_URL}images/placeholder.png`;
  const variant = project.variant ?? "dashboard";
  const showFullThumb = Boolean(project.showFullThumb && variant === "dashboard");
  const thumbHeight =
    variant === "dashboard"
      ? "aspect-[16/9]"
      : project.featured
      ? "h-[240px] md:h-[260px] lg:h-[280px]"
      : "h-[220px] md:h-[240px] lg:h-[260px]";

  const isArchive = variant === "archive";

  return (
    <article
      className={[
        "group flex flex-col h-full gap-4",
        isArchive
          ? "rounded-xl border-slate-800 bg-slate-900 text-slate-100 shadow-sm p-4"
          : "rounded-xl border border-[#E5E7EB] bg-white shadow-sm p-5",
      ].join(" ")}
    >
      <header className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3
            className={[
              "font-semibold text-slate-900 leading-snug",
              "text-base md:text-lg",
            ].join(" ")}
          >
            {project.title}
          </h3>
          {project.skills && project.skills.length ? (
            <p
              className={[
                "mt-1 text-xs leading-snug tracking-tight text-slate-500",
                "line-clamp-1",
              ].join(" ")}
            >
              {(() => {
                const skills = project.skills.slice(0, 5);
                const extra = project.skills.length - skills.length;
                const base = skills.join(" • ");
                return extra > 0 ? `${base} • +${extra} more` : base;
              })()}
            </p>
          ) : null}
          {project.problem ? (
            <p
              className={[
                "mt-2 text-sm leading-snug text-slate-600",
                "line-clamp-2",
              ].join(" ")}
            >
              {project.problem}
            </p>
          ) : null}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {isNDA ? (
            <span className="text-[11px] text-slate-500">NDA</span>
          ) : null}
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            aria-label={`Open ${project.title}`}
            title="Open"
          >
            <ExternalLinkIcon className="h-4 w-4" />
          </a>
        </div>
      </header>

      <div className="mt-3">
        <div
          className={[
            "relative overflow-hidden rounded-md border",
            showFullThumb ? "bg-slate-100" : "bg-white",
            thumbHeight,
            isArchive ? "border-white/10 bg-white/95 rounded-lg" : "border-slate-200",
            variant === "dashboard" ? "group" : "",
          ].join(" ")}
        >
          <img
            src={imageSrc}
            alt={`${project.title} thumbnail`}
            className={[
              "w-full h-full",
              showFullThumb
                ? "object-contain object-center"
                : ["object-cover", objectPosition].join(" "),
              variant === "dashboard"
                ? "contrast-105 saturate-105 transition-all duration-200 ease-out"
                : "grayscale contrast-95 saturate-75 transition-[filter] duration-200 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:saturate-100",
              isNDA && variant !== "dashboard" ? "blur-[1.5px]" : "",
            ].join(" ")}
            loading="lazy"
          />
          {variant === "dashboard" ? (
            <div className="pointer-events-none absolute inset-0 bg-white/20 transition-opacity duration-200 group-hover:opacity-0" />
          ) : null}
          {isNDA && variant !== "dashboard" ? (
            <div className="absolute left-2 top-2">
              <span className="text-[11px] px-2 py-1 rounded-md border bg-white/90 text-slate-700">
                NDA / De-identified
              </span>
            </div>
          ) : null}
        </div>
      </div>

      <footer className="mt-4">
        {wrapHref ? (
          <span
            className={[
              "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold",
              isArchive
                ? "border-slate-700 bg-slate-800 text-slate-100"
                : "bg-[color:var(--brand)] text-white shadow-sm",
            ].join(" ")}
            aria-hidden="true"
          >
            {cta}
          </span>
        ) : (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className={[
              "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold",
              isArchive
                ? "border-slate-700 bg-slate-800 text-slate-100 hover:bg-slate-700 hover:text-white"
                : "bg-[color:var(--brand)] text-white hover:bg-[color:var(--brand-hover)] shadow-sm",
            ].join(" ")}
          >
            {cta}
          </a>
        )}
      </footer>
    </article>
  );
}
