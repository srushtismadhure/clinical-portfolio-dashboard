import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

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

  // Optional context label for the role line (e.g., domain/system type)
  contextLabel?: string;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const thumbnailSrc = project.thumbnail ?? project.thumbnailSrc;
  const thumbnailAlt = project.thumbnailAlt ?? `${project.title} preview`;
  const resolvedThumbnailSrc = thumbnailSrc
    ? `${import.meta.env.BASE_URL}${thumbnailSrc.replace(/^\//, '')}`
    : undefined;

  const isDarkCard = true; // apply unified dark style to all cards
  const roleLine = [
    project.subtitle ?? (project as any).role ?? undefined,
    project.contextLabel ?? undefined,
  ]
    .filter(Boolean)
    .join(' · ');

  return (
    <div className="w-full max-w-[460px] mx-auto">
      <Link
        to={`/projects/${project.id}`}
        className={`ehr-card group block h-full transition-colors duration-200 ease-out p-3 ${
          isDarkCard
            ? 'bg-[#0F1E36] text-white border border-slate-700/60 hover:bg-slate-50 hover:text-[#0F1E36] hover:border-slate-200'
            : 'bg-white text-foreground hover:bg-slate-50 hover:text-[#0F1E36]'
        }`}
        style={{ animationDelay: `${index * 100}ms` }}
      >
      {/* Thumbnail */}
      <div className="relative w-full h-36 sm:h-40 lg:h-44 overflow-hidden rounded-lg mb-2 border border-slate-200 bg-white">
        {resolvedThumbnailSrc ? (
          <img
            src={resolvedThumbnailSrc}
            alt={thumbnailAlt}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--ehr-teal)/0.2)] flex items-center justify-center">
              <ExternalLink className="w-7 h-7 text-[hsl(var(--ehr-teal))]" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-4 pb-4 pt-2 space-y-2">
        <div className="mt-1">
          <div className="flex items-start gap-3">
            <span className="mt-1 h-6 w-1 rounded-full bg-emerald-400/70" />
            <div className="min-w-0 min-h-[96px]">
              <h3 className="text-lg font-semibold leading-tight text-white group-hover:text-[#0F1E36] transition-colors duration-200 ease-out">
                {project.title}
              </h3>
              {roleLine && (
                <p className="mt-1 text-sm font-medium text-white/70 group-hover:text-slate-600 transition-colors duration-200 ease-out">
                  {roleLine}
                </p>
              )}
              <p className="mt-1 text-sm leading-snug text-white/70 group-hover:text-slate-500 transition-colors duration-200 ease-out line-clamp-2">
                {project.summary}
              </p>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}
