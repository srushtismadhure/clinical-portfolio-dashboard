import { projects as allProjects } from '@/data/projects';
import type { Project } from '@/components/shared/ProjectCard';
import {
  Brain,
  Database,
  LayoutGrid,
  LineChart,
  ExternalLink,
  Image,
} from 'lucide-react';
import { Link } from 'react-router-dom';

type BucketKey =
  | 'data-engineering'
  | 'machine-learning'
  | 'system-design'
  | 'analytics-integration';

const buckets: {
  key: BucketKey;
  label: string;
  Icon: typeof Database;
}[] = [
  { key: 'data-engineering', label: 'Data Engineering', Icon: Database },
  { key: 'machine-learning', label: 'Machine Learning & AI', Icon: Brain },
  { key: 'system-design', label: 'Healthcare System Design', Icon: LayoutGrid },
  { key: 'analytics-integration', label: 'Analytics & Integration', Icon: LineChart },
];

const outcomePillStyles: Record<Project['status'], string> = {
  Completed: 'text-primary bg-[hsl(var(--primary)/0.12)]',
  'In Progress':
    'text-[hsl(var(--clinical-text-muted))] bg-[hsl(var(--clinical-primary-muted))]',
};

function mapCategoryToBucket(category: string): BucketKey {
  const normalized = category.toLowerCase();

  if (normalized.includes('data engineering')) return 'data-engineering';
  if (normalized.includes('machine learning') || normalized.includes('ai') || normalized.includes('ml')) {
    return 'machine-learning';
  }
  if (
    normalized.includes('ux') ||
    normalized.includes('design') ||
    normalized.includes('system') ||
    normalized.includes('product') ||
    normalized.includes('portal')
  ) {
    return 'system-design';
  }
  if (
    normalized.includes('analytics') ||
    normalized.includes('integration') ||
    normalized.includes('dashboard')
  ) {
    return 'analytics-integration';
  }

  return 'analytics-integration';
}

function resolveThumbnailSrc(project: Project) {
  const src = project.thumbnail ?? project.thumbnailSrc ?? project.heroImage;
  return src ? `${import.meta.env.BASE_URL}${src.replace(/^\//, '')}` : undefined;
}

function parseLastUpdated(value?: string) {
  if (!value) return 0;
  const normalized = value.includes('-') ? value : `${value} 01`;
  const ts = Date.parse(normalized);
  return Number.isNaN(ts) ? 0 : ts;
}

function selectFeaturedProject(projects: Project[]) {
  if (projects.length === 0) return undefined;
  const featured = projects.find((project) => project.featured);
  if (featured) return featured;
  const sorted = [...projects].sort(
    (a, b) => parseLastUpdated(b.lastUpdated) - parseLastUpdated(a.lastUpdated)
  );
  return sorted[0] ?? projects[0];
}

function formatTools(tags?: string[]) {
  if (!tags || tags.length === 0) return undefined;
  const primary = tags.slice(0, 2).join(', ');
  const extra = tags.length > 2 ? ` +${tags.length - 2}` : '';
  return `${primary}${extra}`;
}

export function ProjectQuadrantGrid() {
  const grouped = buckets.reduce(
    (acc, bucket) => {
      acc[bucket.key] = [];
      return acc;
    },
    {} as Record<BucketKey, Project[]>
  );

  allProjects.forEach((project) => {
    const bucketKey = mapCategoryToBucket(project.category);
    grouped[bucketKey].push(project);
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
      {buckets.map((bucket) => {
        const bucketProjects = grouped[bucket.key];
        const selectedProject = selectFeaturedProject(bucketProjects);

        return (
          <div key={bucket.key} className="system-module min-w-0">
            <div className="system-module-header">
              <div className="flex items-center gap-1.5">
                <bucket.Icon className="w-3 h-3 text-primary/70" />
                <span className="system-module-label">{bucket.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-[9px] text-primary/70 tabular-nums">
                  n={bucketProjects.length}
                </span>
                <Link
                  to="/projects"
                  className="text-[9px] text-primary/70 hover:text-primary transition-colors"
                >
                  View all
                </Link>
              </div>
            </div>

            <div className="system-module-content py-2">
              {selectedProject ? (
                <div className="table-row-hover flex items-start gap-2 rounded-md border border-[hsl(var(--clinical-border))] bg-white/90 p-2">
                  <div className="h-16 w-24 flex-shrink-0 overflow-hidden rounded-md border border-[hsl(var(--clinical-border))] bg-white">
                    {(() => {
                      const thumbnailSrc = resolveThumbnailSrc(selectedProject);
                      if (thumbnailSrc) {
                        return (
                          <img
                            src={thumbnailSrc}
                            alt={
                              selectedProject.thumbnailAlt ??
                              `${selectedProject.title} preview`
                            }
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        );
                      }
                      return (
                        <div className="flex h-full w-full flex-col items-center justify-center gap-1 text-[8px] text-[hsl(var(--clinical-text-muted))]">
                          <Image className="h-3.5 w-3.5" />
                          <span>No preview</span>
                        </div>
                      );
                    })()}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-[11px] font-medium text-[hsl(var(--clinical-text))] truncate">
                          {selectedProject.title}
                        </p>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {selectedProject.dataSource ? (
                            <span className="data-tag text-[8px]">
                              {selectedProject.dataSource}
                            </span>
                          ) : null}
                          {formatTools(selectedProject.tags) ? (
                            <span className="data-tag text-[8px]">
                              {formatTools(selectedProject.tags)}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span
                          className={`text-[8px] font-medium px-1.5 py-0.5 rounded-sm ${outcomePillStyles[selectedProject.status]}`}
                        >
                          {selectedProject.status}
                        </span>
                        {selectedProject.projectDoc?.url ? (
                          <a
                            href={selectedProject.projectDoc.url}
                            target="_blank"
                            rel="noreferrer"
                            className="w-5 h-5 rounded hover:bg-[hsl(var(--primary)/0.1)] flex items-center justify-center transition-colors"
                            aria-label={`Open ${selectedProject.title} link`}
                          >
                            <ExternalLink className="w-2.5 h-2.5 text-primary/60" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="rounded-md border border-[hsl(var(--clinical-border))] bg-white/90 px-3 py-2 text-[10px] text-[hsl(var(--clinical-text-muted))]">
                  No projects available yet.
                </div>
              )}
            </div>

            <div className="system-module-footer">
              <span>Grouped by portfolio category mapping</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
