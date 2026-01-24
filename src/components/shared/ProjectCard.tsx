import { Link } from 'react-router-dom';
import { Calendar, ExternalLink } from 'lucide-react';
import { TagChip } from './TagChip';

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  summary: string;
  category: string;
  projectType: 'professional' | 'personal';
  status: 'Completed' | 'In Progress';
  lastUpdated: string;
  layoutType?: 'paintools' | 'default';
  thumbnail?: string;
  tags?: string[];
  heroImage?: string;
  workstreams?: {
    id: string;
    title: string;
    summary?: string;
    desc?: string;
    routeSlug?: string;
    href?: string;
    sections?: {
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
  return (
    <Link
      to={`/projects/${project.id}`}
      className="ehr-card group block"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Thumbnail */}
      <div className="aspect-video rounded-xl bg-gradient-to-br from-[hsl(var(--ehr-teal)/0.1)] to-[hsl(var(--ehr-lavender)/0.2)] mb-4 overflow-hidden">
        {project.thumbnail ? (
          <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
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
          <h3 className="font-semibold text-foreground group-hover:text-[hsl(var(--ehr-teal))] transition-colors line-clamp-1">
            {project.title}
          </h3>
          <span
            className={`text-xs px-2 py-1 rounded-full font-medium ${
              project.status === 'Completed'
                ? 'bg-[hsl(var(--ehr-teal)/0.15)] text-[hsl(var(--ehr-teal))]'
                : 'bg-[hsl(var(--ehr-coral)/0.15)] text-[hsl(var(--ehr-coral))]'
            }`}
          >
            {project.status}
          </span>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">{project.summary}</p>

        <div className="flex items-center justify-between">
          <TagChip label={project.category} variant={categoryColors[project.category] || 'teal'} size="sm" />
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            {project.lastUpdated}
          </span>
        </div>
      </div>
    </Link>
  );
}