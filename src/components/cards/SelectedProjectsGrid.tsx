import { projects as allProjects } from '@/data/projects';
import type { Project } from '@/components/projects/ProjectCard';
import { ProjectCard } from '@/components/projects/ProjectCard';
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
  const featuredIds = ['predictive-modeling', 'health-numerics'];
  const featured = allProjects.filter((p) => featuredIds.includes(p.id ?? ''));
  const remaining = allProjects.filter((p) => !featuredIds.includes(p.id ?? ''));
  const selectedProjects = selectProjects(remaining, remaining.length);

  return (
    <section className="w-full">
      {/* Featured */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 sm:gap-3 mb-4">
        {featured.map((project) => {
          const thumbnailSrc = resolveThumbnailSrc(project);
          const href = project.href ?? (project.id ? `/projects/${project.id}` : '#');
          const cardProject: Project = {
            ...project,
            featured: true,
            variant: 'dashboard',
            href,
            imageSrc: thumbnailSrc ?? `${import.meta.env.BASE_URL}images/placeholder.png`,
            ctaLabel: project.ctaLabel ?? (project.isNDA ? 'Open Summary →' : 'Open Case Study →'),
            isNDA: project.isNDA,
          };
          return (
            <Link
              key={project.id ?? project.title}
              to={href}
              className="block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300 rounded-lg"
              aria-label={`Open case study: ${project.title}`}
            >
              <ProjectCard project={cardProject} wrapHref />
            </Link>
          );
        })}
      </div>

      {/* Divider */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[11px] uppercase tracking-wide text-slate-500">Independent Projects</span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      {/* All Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 sm:gap-3">
        {selectedProjects.map((project) => {
          const thumbnailSrc = resolveThumbnailSrc(project);
          const href = project.href ?? (project.id ? `/projects/${project.id}` : '#');
          const cardProject: Project = {
            ...project,
            variant: 'dashboard',
            href,
            imageSrc: thumbnailSrc ?? `${import.meta.env.BASE_URL}images/placeholder.png`,
            ctaLabel: project.ctaLabel ?? (project.isNDA ? 'Open Summary →' : 'Open Case Study →'),
            isNDA: project.isNDA,
          };

          return (
            <Link
              key={project.id ?? project.title}
              to={href}
              className="block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300 rounded-lg"
              aria-label={`Open case study: ${project.title}`}
            >
              <ProjectCard project={cardProject} wrapHref />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
