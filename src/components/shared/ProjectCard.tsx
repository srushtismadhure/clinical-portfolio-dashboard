import { Link } from 'react-router-dom';
import { Calendar, ExternalLink } from 'lucide-react';
import { TagChip } from './TagChip';

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  summary: string;
  overviewTitle?: string;
  overview?: string;
  category: string;
  dataSource?: string;
  projectType: 'professional' | 'personal';
  status: 'Completed' | 'In Progress';
  lastUpdated: string;
  featured?: boolean;
  layoutType?: 'paintools' | 'default';
  // Thumbnail image (served from /public)
  thumbnail?: string;
  thumbnailAlt?: string;
  // Backward/alternate naming support
  thumbnailSrc?: string;
  tags?: string[];
  heroImage?: string;
  workstreams?: {
    id: string;
    title: string;
    summary?: string;
    desc?: string;
    routeSlug?: string;
    href?: string;
    // NEW: workstream-level content for custom layouts (e.g., data-backend)
    overviewTitle?: string;
    overview?: string;
    cards?: {
      role?: { title?: string; bullets?: string[] };
      scope?: { title?: string; bullets?: string[] };
      constraints?: { title?: string; bullets?: string[] };
    };
    diagram?: { src?: string; alt?: string; caption?: string };
    // NEW: step-level content blocks (used by PainToolsWorkstreamDetail)
    steps?: {
      step3?: {
        title?: string;
        subtitle?: string;
        bullets?: { title: string; body: string }[];
        note?: string;
      };
    };
    // Analytics workstream additions (data-driven cards + timeline)
    analysisAreas?: {
      title: string;
      description: string;
    }[];
    solutionSteps?: {
      step: number;
      title: string;
      subtitle?: string;
      bullets: string[];
      icon?: string;
    }[];

    // Journey mapping boxes (experience layer)
    journey?: {
      title: string;
      subtitle: string;
      boxes: {
        id: string;
        title: string;
        subtitle: string;
        bullets: string[];
        risk: string;
        icon?: string;
      }[];
    };

    // Experience Design Methods & Tools table
    methodsTools?: {
      title: string;
      whatIDid: string;
      howIDidIt: string[];
      toolsUsed: {
        name: string;
        description: string;
        icon?: string;
      }[];
      outcome: string;
      whyItMatters: string;
    };

    wireframes?: {
      images: { src: string; alt?: string }[];
    };

    sections?: {
      overview?: string[];
      problem?: string[];
      owned?: string[];
      process?: string[];
      artifacts?: string[];
      results?: string[];
    };
  }[];
  dataModel?: {
    title?: string;
    subtitle?: string;
    description?: string;
    chips?: { label: string; value: string }[];
    bullets?: string[];
    image?: string;
    caption?: string;
    expandText?: string;

    // model guide additions
    guideTitle?: string;
    guideBlocks?: { title: string; bullets: string[] }[];
    leftLabel?: string;
    rightLabel?: string;
    executiveSummary?: {
      narrative?: string;
      metrics?: { label: string; value: string }[];
    };
    
  };

  // Optional, project-level executive summary (used by Value-Based Care page)
  executiveSummary?: {
    heading?: string;
    narrative?: string;
    metrics?: { label: string; value: string }[];
  };

  // Optional, project-level recommendations table (used by Value-Based Care page)
  recommendations?: {
    insight: string;
    metric: string;
    action: string;
  }[];

  heroSummary?: {
    problem?: string;
    solution?: string;
    tools?: string;
    outcome?: string;
    recommendation?: string;
    keyInsight?: string;
    recommendationBullets?: string[];
    evidence?: string[];
  };

  projectDoc?: {
    title?: string;
    description?: string;
    url?: string;
    bullets?: string[];
  };
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const categoryColors: Record<string, 'teal' | 'lavender' | 'cream' | 'coral' | 'blue'> = {
  Analytics: 'teal',
  'AI/LLM': 'lavender',
  'Data Engineering': 'blue',
  UX: 'coral',
  Dashboards: 'cream',
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const thumbnailSrc = project.thumbnail ?? project.thumbnailSrc;
  const thumbnailAlt = project.thumbnailAlt ?? `${project.title} preview`;
  const resolvedThumbnailSrc = thumbnailSrc
    ? `${import.meta.env.BASE_URL}${thumbnailSrc.replace(/^\//, '')}`
    : undefined;

  const isDarkCard = project.id === 'value-based-care';

  return (
    <Link
      to={`/projects/${project.id}`}
      className={
        isDarkCard
          ? 'ehr-card group block bg-[#0F1E36] text-white border border-slate-700/60'
          : 'ehr-card group block'
      }
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Thumbnail */}
      <div className={`aspect-video rounded-xl mb-4 overflow-hidden ${isDarkCard ? 'bg-[#0B162A]' : 'bg-[#0F1E36]'} p-3`}>
        {resolvedThumbnailSrc ? (
          <img
            src={resolvedThumbnailSrc}
            alt={thumbnailAlt}
            className="w-full h-full object-contain rounded-lg bg-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--ehr-teal)/0.2)] flex items-center justify-center">
              <ExternalLink className="w-8 h-8 text-[hsl(var(--ehr-teal))]" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className={`font-semibold ${isDarkCard ? 'text-white' : 'text-foreground'} group-hover:text-[hsl(var(--ehr-teal))] transition-colors line-clamp-1`}>
            {project.title}
          </h3>
          <span
            className={`text-xs px-2 py-1 rounded-full font-medium ${
              project.status === 'Completed'
                ? isDarkCard
                  ? 'bg-emerald-400/15 text-emerald-200'
                  : 'bg-[hsl(var(--ehr-teal)/0.15)] text-[hsl(var(--ehr-teal))]'
                : isDarkCard
                  ? 'bg-amber-400/15 text-amber-200'
                  : 'bg-[hsl(var(--ehr-coral)/0.15)] text-[hsl(var(--ehr-coral))]'
            }`}
          >
            {project.status}
          </span>
        </div>

        {project.overview ? (
          <div>
            <h3 className={`text-[11px] font-semibold uppercase tracking-wide ${isDarkCard ? 'text-slate-300' : 'text-slate-500'}`}>
              {project.overviewTitle ?? 'Project'}
            </h3>
            <p className={`mt-1 text-sm ${isDarkCard ? 'text-slate-200' : 'text-muted-foreground'} leading-relaxed line-clamp-2`}>
              {project.overview}
            </p>
          </div>
        ) : (
          <p className={`text-sm ${isDarkCard ? 'text-slate-200' : 'text-muted-foreground'} leading-relaxed line-clamp-2`}>
            {project.summary}
          </p>
        )}

        <div className="flex items-center justify-between">
          <TagChip label={project.category} variant={categoryColors[project.category] || 'teal'} size="sm" />
          <span className={`flex items-center gap-1 text-xs ${isDarkCard ? 'text-slate-200' : 'text-muted-foreground'}`}>
            <Calendar className="w-3 h-3" />
            {project.lastUpdated}
          </span>
        </div>
      </div>
    </Link>
  );
}
