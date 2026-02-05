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
      ? "h-[180px] md:h-[200px] lg:h-[220px]"
      : project.featured
      ? "h-[240px] md:h-[260px] lg:h-[280px]"
      : "h-[220px] md:h-[240px] lg:h-[260px]";

  const isArchive = variant === "archive";

  return (
    <article
      className={[
        "group rounded-lg border p-4",
        isArchive
          ? "rounded-xl border-slate-800 bg-slate-900 text-slate-100 shadow-sm"
          : "border-slate-200 bg-slate-50",
      ].join(" ")}
    >
      <header className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold text-slate-900 leading-snug">
          {project.title}
        </h3>
        <div className="flex items-center gap-2 shrink-0">
          {isNDA ? (
            <span className="text-[11px] text-slate-500">NDA</span>
          ) : null}
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md border bg-white p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            aria-label={`Open ${project.title}`}
            title="Open"
          >
            <ExternalLinkIcon className="h-4 w-4" />
          </a>
        </div>
      </header>

      {project.skills && project.skills.length ? (
        <p
          className={[
            "mt-1 text-xs leading-snug tracking-tight",
            isArchive ? "text-slate-300" : "text-slate-500",
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
            "mt-1 text-xs md:text-sm leading-snug",
            isArchive ? "text-slate-200" : "text-slate-600",
          ].join(" ")}
        >
          {project.problem}
        </p>
      ) : null}

      <div className="mt-3">
        <div
          className={[
            "relative overflow-hidden rounded-md border",
            showFullThumb ? "bg-slate-100" : "bg-white",
            thumbHeight,
            isArchive ? "border-white/10 bg-white/95 rounded-lg" : "",
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
                ? "grayscale contrast-110 opacity-95 blur-[3px] group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100 group-hover:blur-0 transition-all duration-200 ease-out motion-reduce:transition-none motion-reduce:blur-0"
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

      <footer className="mt-3">
        {wrapHref ? (
          <span
            className={[
              "inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md border text-sm font-medium",
              isArchive
                ? "border-slate-700 bg-slate-800 text-slate-100"
                : "border-slate-200 bg-white text-slate-700",
            ].join(" ")}
          >
            {cta}
          </span>
        ) : (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className={[
              "inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md border text-sm font-medium",
              isArchive
                ? "border-slate-700 bg-slate-800 text-slate-100 hover:bg-slate-700 hover:text-white"
                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900",
            ].join(" ")}
          >
            {cta}
          </a>
        )}
      </footer>
    </article>
  );
}
