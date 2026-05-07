import { projects as allProjects } from '@/data/projects';
import type { Project } from '@/components/projects/ProjectCard';
import { Link } from 'react-router-dom';

type ExtendedProject = Project & {
  description?: string;
  heroImage?: string;
  metrics?: string[];
  tech?: string[];
  thumbnail?: string;
  thumbnailSrc?: string;
};

function parseLastUpdated(value?: string) {
  if (!value) return 0;
  const normalized = value.includes('-') ? value : `${value} 01`;
  const ts = Date.parse(normalized);
  return Number.isNaN(ts) ? 0 : ts;
}

function sortByLastUpdatedDesc(projects: ExtendedProject[]) {
  return [...projects].sort(
    (a, b) => parseLastUpdated(b.lastUpdated) - parseLastUpdated(a.lastUpdated)
  );
}

function selectProjects(projects: ExtendedProject[], count = 4) {
  const preferredOrder = ['predictive-modeling', 'health-numerics', 'value-based-care'];
  const ordered = preferredOrder
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is ExtendedProject => Boolean(project));

  const remaining = projects.filter(
    (project) => !preferredOrder.includes(project.id)
  );

  return [...ordered, ...sortByLastUpdatedDesc(remaining)].slice(0, count);
}

function resolveThumbnailSrc(project: ExtendedProject) {
  const src =
    project.thumbnail ??
    project.thumbnailSrc ??
    project.heroImage ??
    project.imageSrc;
  return src ? `${import.meta.env.BASE_URL}${src.replace(/^\//, '')}` : undefined;
}

export function SelectedProjectsGrid() {
  const orderedProjects = selectProjects(allProjects as ExtendedProject[], allProjects.length);
  const topProjects = orderedProjects.slice(0, 4);
  const remaining = orderedProjects.slice(4);

  return (
    <section className="w-full rounded-md bg-[linear-gradient(180deg,rgba(248,250,252,0.9),rgba(241,245,249,0.6))] p-2 sm:p-0">
      {/* Desktop / Tablet cards (unchanged) */}
      <div className="hidden grid-cols-1 gap-4 sm:grid sm:grid-cols-2">
        {[...topProjects, ...remaining].map((project) => {
          const thumbnailSrc = resolveThumbnailSrc(project);
          const href = project.href ?? (project.id ? `/projects/${project.id}` : '#');
          const tech = project.tech ?? project.skills ?? [];
          const metrics = project.metrics ?? [];
          const description = project.description ?? project.problem ?? '';

          return (
            <Link
              key={project.id ?? project.title}
              to={href}
              className="group flex h-full cursor-pointer flex-col gap-3 rounded-md border border-white/70 bg-white/55 p-4 shadow-[0_10px_24px_rgba(148,163,184,0.16),inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-xl transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-300/60 focus:ring-offset-2 hover:-translate-y-0.5 hover:border-slate-200 hover:bg-white hover:shadow-[0_10px_24px_rgba(15,23,42,0.08)] hover:backdrop-blur-none"
              aria-label={`Open case study: ${project.title}`}
            >
              <h3 className="text-lg font-semibold text-slate-800">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                {tech.map((techItem: string) => (
                  <span key={techItem} className="data-tag">
                    {techItem}
                  </span>
                ))}
                {metrics.map((metric: string) => (
                  <span key={metric} className="data-tag">
                    {metric}
                  </span>
                ))}
              </div>

              {description ? (
                <p className="line-clamp-2 text-sm text-gray-600">
                  {description}
                </p>
              ) : null}

              <div className="relative h-48 flex-grow overflow-hidden rounded-md border border-gray-200/80 bg-slate-50">
                <img
                  src={thumbnailSrc ?? `${import.meta.env.BASE_URL}images/placeholder.png`}
                  alt={`${project.title} screenshot`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-white/18 backdrop-blur-[1px] transition-all duration-200 ease-in-out group-hover:bg-transparent group-hover:backdrop-blur-0" />
              </div>

              <span
                className="mt-auto inline-flex items-center justify-center rounded-md border border-gray-200 bg-white/70 px-3 py-2 text-sm font-medium text-slate-700 transition-all duration-200 ease-in-out group-hover:bg-white"
              >
                {project.ctaLabel ?? 'Open Case Study →'}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Mobile compact grid */}
      <div className="grid grid-cols-2 gap-3.5 sm:hidden">
        {[...topProjects, ...remaining].map((project) => {
          const href = project.href ?? (project.id ? `/projects/${project.id}` : '#');
          const tech = project.tech ?? project.skills ?? [];
          const description = project.description ?? project.problem ?? '';

          return (
            <Link
              key={project.id ?? project.title}
              to={href}
              className="flex cursor-pointer flex-col gap-2 rounded-md border border-white/70 bg-white/55 p-3 shadow-[0_8px_20px_rgba(148,163,184,0.14),inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-xl transition-all duration-200 ease-in-out active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-slate-300/60 focus:ring-offset-2 hover:border-slate-200 hover:bg-white hover:shadow-[0_8px_18px_rgba(15,23,42,0.08)] hover:backdrop-blur-none"
              aria-label={`Open case study: ${project.title}`}
            >
              <h3 className="line-clamp-2 text-[15px] font-semibold leading-snug text-slate-800">
                {project.title}
              </h3>
              {description ? (
                <p className="line-clamp-2 text-[13px] leading-snug text-gray-600">
                  {description}
                </p>
              ) : null}
              {tech.length > 0 && (
                <div className="mt-1 flex flex-wrap gap-1.5 text-[11px] text-gray-500">
                  {tech.slice(0, 3).map((techItem: string) => (
                    <span
                      key={techItem}
                      className="data-tag"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
