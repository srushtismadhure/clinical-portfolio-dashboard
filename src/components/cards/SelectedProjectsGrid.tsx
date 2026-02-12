import { projects as allProjects } from '@/data/projects';
import type { Project } from '@/components/projects/ProjectCard';
import { Link } from 'react-router-dom';

function parseLastUpdated(value?: string) {
  if (!value) return 0;
  const normalized = value.includes('-') ? value : `${value} 01`;
  const ts = Date.parse(normalized);
  return Number.isNaN(ts) ? 0 : ts;
}

function sortByLastUpdatedDesc(projects: Project[]) {
  return [...projects].sort(
    (a, b) => parseLastUpdated(b.lastUpdated) - parseLastUpdated(a.lastUpdated)
  );
}

function selectProjects(projects: Project[], count = 4) {
  const preferredOrder = ['predictive-modeling', 'health-numerics', 'value-based-care'];
  const ordered = preferredOrder
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is Project => Boolean(project));

  const remaining = projects.filter(
    (project) => !preferredOrder.includes(project.id)
  );

  return [...ordered, ...sortByLastUpdatedDesc(remaining)].slice(0, count);
}

function resolveThumbnailSrc(project: Project) {
  const src =
    (project as any).thumbnail ??
    (project as any).thumbnailSrc ??
    (project as any).heroImage ??
    project.imageSrc;
  return src ? `${import.meta.env.BASE_URL}${src.replace(/^\//, '')}` : undefined;
}

export function SelectedProjectsGrid() {
  const orderedProjects = selectProjects(allProjects, allProjects.length);
  const topProjects = orderedProjects.slice(0, 4);
  const remaining = orderedProjects.slice(4);

  return (
    <section className="w-full rounded-xl bg-[#F7F9FB]">
      {/* Desktop / Tablet cards (unchanged) */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 md:px-6 lg:px-8 py-8">
        {[...topProjects, ...remaining].map((project) => {
          const thumbnailSrc = resolveThumbnailSrc(project);
          const href = project.href ?? (project.id ? `/projects/${project.id}` : '#');
          const tech = (project as any).tech ?? project.skills ?? project.tags ?? [];
          const metrics = (project as any).metrics ?? [];
          const description = (project as any).description ?? project.problem ?? project.summary ?? '';

          return (
            <Link
              key={project.id ?? project.title}
              to={href}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col group cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300 hover:border-slate-300"
              aria-label={`Open case study: ${project.title}`}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-3 text-xs text-gray-600">
                {tech.map((techItem: string) => (
                  <span key={techItem} className="px-2 py-1 bg-gray-100 rounded-full">
                    {techItem}
                  </span>
                ))}
                {metrics.map((metric: string) => (
                  <span key={metric} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">
                    {metric}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                {description}
              </p>

              <div className="flex-grow relative h-48 overflow-hidden rounded-xl border border-gray-100 group">
                <img
                  src={thumbnailSrc ?? `${import.meta.env.BASE_URL}images/placeholder.png`}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 transition-all duration-200 group-hover:bg-white/10 group-hover:backdrop-blur-none" />
              </div>

              <span
                className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-lg border border-slate-700 bg-white text-slate-700 text-sm font-medium hover:bg-slate-100 hover:border-slate-700 hover:text-slate-900 hover:shadow-sm transition"
              >
                {project.ctaLabel ?? 'Open Case Study →'}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Mobile compact grid */}
      <div className="grid grid-cols-2 gap-4 px-3 py-5 sm:hidden">
        {[...topProjects, ...remaining].map((project) => {
          const href = project.href ?? (project.id ? `/projects/${project.id}` : '#');
          const tech = (project as any).tech ?? project.skills ?? project.tags ?? [];
          const description = (project as any).description ?? project.problem ?? project.summary ?? '';

          return (
            <Link
              key={project.id ?? project.title}
              to={href}
              className="rounded-xl border border-slate-200 bg-white shadow-sm p-3 flex flex-col gap-1.5 cursor-pointer transition active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300"
              aria-label={`Open case study: ${project.title}`}
            >
              <h3 className="text-[15px] font-semibold text-slate-900 leading-snug line-clamp-2">
                {project.title}
              </h3>
              <p className="text-[12.5px] text-slate-600 leading-snug line-clamp-2">
                {description}
              </p>
              {tech.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-1 text-[11px] text-slate-500">
                  {tech.slice(0, 3).map((techItem: string) => (
                    <span
                      key={techItem}
                      className="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200"
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
