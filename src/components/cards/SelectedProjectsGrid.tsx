import { projects as allProjects } from '@/data/projects';
import type { Project } from '@/components/shared/ProjectCard';
import { Link } from 'react-router-dom';
import { ExternalLink, Image } from 'lucide-react';

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
  const src = project.thumbnail ?? project.thumbnailSrc ?? project.heroImage;
  return src ? `${import.meta.env.BASE_URL}${src.replace(/^\//, '')}` : undefined;
}

export function SelectedProjectsGrid() {
  const selectedProjects = selectProjects(allProjects, 4);

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 sm:gap-3">
        {selectedProjects.map((project) => {
          const thumbnailSrc = resolveThumbnailSrc(project);
          const link = project.id ? `/projects/${project.id}` : undefined;

          const CardTag = link ? Link : 'div';
          const cardProps = link ? { to: link } : {};

          return (
            <CardTag
              key={project.id}
              {...cardProps}
              className={[
                'group block w-full overflow-hidden',
                'rounded-[6px] border border-slate-300 bg-white',
                'shadow-[0_1px_2px_rgba(16,24,40,0.06)]',
                'transition-colors hover:border-slate-400',
                link ? 'cursor-pointer' : '',
              ].join(' ')}
            >
              <div className="flex h-8 items-center justify-between bg-slate-100 px-2.5 border-b border-slate-300">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="h-4 w-0.5 bg-slate-400/70" />
                  <span className="text-[10px] lg:text-[1.02rem] font-medium text-slate-700 truncate">
                    {project.title}
                  </span>
                </div>
                <ExternalLink className="h-3 w-3 text-slate-400" />
              </div>

              <div className="border-y border-slate-300 bg-white p-1">
                <div className="w-full border border-slate-300 bg-white overflow-hidden">
                  <div className="aspect-[16/8] w-full bg-[hsl(var(--clinical-surface))]">
                  {thumbnailSrc ? (
                    <img
                      src={thumbnailSrc}
                      alt={project.thumbnailAlt ?? `${project.title} preview`}
                      className="block h-full w-full object-cover grayscale contrast-[0.97] brightness-[0.98] transition-[filter] duration-200 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Image className="h-6 w-6 text-slate-300" />
                    </div>
                  )}
                  </div>
                </div>
              </div>

              <div className="bg-white px-2.5 py-1">
                <div className="text-[11px] lg:text-[1.02rem] text-slate-800">
                  {project.title}
                </div>
                <div className="text-[9px] lg:text-[0.95rem] text-slate-500 truncate">
                  <span className="opacity-0 select-none" aria-hidden="true">
                    4 highlights (click to open)
                  </span>
                </div>
              </div>
            </CardTag>
          );
        })}
      </div>
    </section>
  );
}
