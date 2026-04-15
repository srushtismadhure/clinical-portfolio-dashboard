import { Link } from 'react-router-dom';
import {
  Lightbulb,
  Database,
  FlaskConical,
  Wrench,
  ShieldCheck,
  Radar,
  ArrowLeft,
  Network,
} from 'lucide-react';
import type { Project } from '@/components/shared/ProjectCard';


type PainToolsDetailProps = {
  project: Project;
};

function FaDatabaseIcon({ className }: { className?: string }) {
  return (
    <i
      className={`fa-solid fa-database text-[20px] leading-none ${className ?? ''}`}
      aria-hidden="true"
    />
  );
}

function FaBoxIcon({ className }: { className?: string }) {
  return (
    <i
      className={`fa-solid fa-box text-[20px] leading-none ${className ?? ''}`}
      aria-hidden="true"
    />
  );
}

function FaRobotIcon({ className }: { className?: string }) {
  return (
    <i
      className={`fa-solid fa-robot text-[20px] leading-none ${className ?? ''}`}
      aria-hidden="true"
    />
  );
}

function FaChartAreaIcon({ className }: { className?: string }) {
  return (
    <i
      className={`fa-solid fa-chart-area text-[20px] leading-none ${className ?? ''}`}
      aria-hidden="true"
    />
  );
}

export default function PainToolsDetail({ project }: PainToolsDetailProps) {
  const capabilityCards = [
    {
      id: 'data-backend',
      title: 'Data Architecture, ETL & Security',
      icon: FaDatabaseIcon,
      href: `/projects/${project.id}/workstreams/data-backend`,
      bullets: [
        <>
          Gathered requirements from clinical stakeholders, engineering, and product teams to
          design <strong>HIPAA-compliant</strong> database architecture to support{' '}
          <strong>longitudinal pain tracking</strong>.
        </>,
        'Set data grain, primary keys, access boundaries, and internationalization standards.',
        <>
          Developed <strong>ETL pipelines</strong> integrating pain assessments, behavioral logs,
          and utilization metrics into a centralized database.
        </>,
      ],
    },
    {
      id: 'experimentation-testing',
      title: 'Product Operations & Analytics',
      icon: FaBoxIcon,
      href: `/projects/${project.id}/workstreams/experimentation-testing`,
      bullets: [
        <>
          Defined product roadmap and launch priorities for application, enabling on-time{' '}
          <strong>Q3 launch</strong> with full cross-functional alignment.
        </>,
        <>
          Centralized roadmap, strategy, and customer feedback into tagged system, reducing
          information retrieval time by <strong>3 hours weekly</strong> across product and
          engineering teams.
        </>,
        'Analyzed beta user data to inform product prioritization, enabling leadership to deprioritize 20% of low-impact features.',
      ],
    },
    {
      id: 'product-workflow',
      title: 'AI/LLM Evaluation & Product Quality',
      icon: FaRobotIcon,
      href: `/projects/${project.id}/workstreams/product-workflow`,
      bullets: [
        'Developed evaluation metrics and Excel-based framework for assessing AI-generated outputs, categorizing 100 responses by quality, tone, and alignment with company guardrails.',
        'Tested LLM outputs across 200 user scenarios to identify clinical overreach instances, uncovering 15 failure pattern categories that informed prompt refinement strategies.',
        'Generated comparison datasets which provided structured feedback that guided fine-tuning priorities and improved output consistency.',
      ],
    },
    {
      id: 'analytics-insights',
      title: 'Analytics & Insights',
      icon: FaChartAreaIcon,
      href: `/projects/${project.id}/workstreams/analytics-insights`,
      bullets: [
        'De-identified 50K patient records, removing PHI and direct identifiers to create compliant beta analysis dataset for product evaluation.',
        'Established normalized baseline periods to enable longitudinal assessments and cohort analysis across beta populations.',
        'Analyzed risk factors and engagement patterns across pain, anxiety, and depression metrics to surface churn and retention drivers informing product strategy.',
        'Visualized behavioral trends and clinical outcomes using Excel dashboards, providing stakeholders with actionable insights on user engagement.',
      ],
    },
  ];

  const accentById: Record<string, string> = {
    'data-backend': 'bg-[#CBD9E3]',
    'analytics-insights': 'bg-[#D7DECA]',
    'product-workflow': 'bg-[#E8D6B9]',
    'experimentation-testing': 'bg-[#D9D4E2]',
  };

  const tabLabelById: Record<string, string> = {
    'data-backend': 'Data Architecture',
    'analytics-insights': 'Analytics',
    'product-workflow': 'Experience Design',
    'experimentation-testing': 'Roadmap',
  };

  const skillsById: Record<string, string> = {
    'data-backend': 'SQL · Data Modeling · ERDs · ETL Pipelines · HIPAA Compliance · PHI Security · Access Controls · Cloud Infrastructure · Firebase · Reporting & Visualization',
    'analytics-insights': 'EDA · Baselines & Metrics · Segmentation · De-ID Pipelines · Excel',
    'product-workflow': 'LLM Evaluation · Output Quality Testing · Guardrails & Safety · AI Governance · Evaluation Frameworks · Bias Detection',
    'experimentation-testing': 'Roadmapping · Prioritization · Launch Planning · Cross-Functional Coordination · Data-Driven Decisions',
  };

  return (
    <div className="paintools-dossier space-y-6">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Back link */}
        <div className="mb-3">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>

        {/* Header */}
        <div className="dossier-card dossier-card-flat mb-6 sm:mb-7 p-4 sm:p-5">
  <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 leading-tight">
    PainTools
  </h1>
  <p className="mt-1 text-sm sm:text-base text-slate-700 leading-snug">
    AI-Powered Chronic Pain Management Platform
  </p>
  <div className="mt-2 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
    <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4 text-sm text-slate-700">
      <div className="flex items-start gap-1">
        <span className="text-sm font-semibold text-slate-900">Role:</span>
        <span className="text-sm text-slate-700">Healthcare Business Analyst (Product & Operations)</span>
      </div>
      <div className="inline-flex items-center gap-2 rounded-md border border-[#E6D8C6] bg-[#FFF8EC] px-2.5 py-1 text-xs text-slate-700">
        <span aria-hidden="true">🔒</span>
        <span>File details are classified due to NDA.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Capability cards grid only */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 items-stretch auto-rows-fr">
              {capabilityCards.map((card) => {
                const Icon = card.icon;
                const accent = accentById[card.id] ?? 'bg-[#CBD9E3]';
                const heading =
                  card.id === 'data-backend'
                    ? 'Owned full database development'
                    : card.id === 'analytics-insights'
                    ? 'Data driven insights for stakeholders'
                    : card.id === 'product-workflow'
                    ? 'Human interaction design'
                    : card.id === 'experimentation-testing'
                    ? 'Led key decisions'
                    : card.title;

                return (
                  <div key={card.id} className="relative h-full overflow-visible pt-4">
                    <div className="dossier-tab" aria-hidden>
                      <span className={`dossier-tab-accent ${accent}`} />
                      <span className="dossier-tab-label">{tabLabelById[card.id] ?? 'Case File'}</span>
                    </div>

                    <div className="dossier-card h-full flex flex-col">
                      <div className="flex-1 p-3.5 pt-4 lg:p-3.5 lg:pt-4">
                        {/* Header */}
                        <div className="flex items-start gap-3.5 rounded-[2px] border border-[#D2C0A8] bg-white/45 px-3 py-2">
                          <div className="dossier-stamp h-10 w-10 lg:h-9 lg:w-9">
                            <Icon className="w-5 h-5 text-slate-700" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg lg:text-base font-semibold text-slate-900">{card.title}</h3>
                            {skillsById[card.id] && (
                              <div className="mt-1 text-xs font-normal tracking-wide text-[#7C6F61]">
                                {skillsById[card.id]}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Paper inset */}
                        <div className="dossier-sheet mt-3.5 flex-1 p-3.5 lg:p-3.5">
                          <div className="dossier-kicker mb-4">
                            {heading}
                          </div>
                          <ul className="space-y-2.5 text-sm text-slate-700">
                            {card.bullets.map((b, index) => (
                              <li key={`${card.id}-${index}`} className="flex items-start gap-3 leading-relaxed">
                                <span className="dossier-stamp mt-0.5 inline-flex h-5 w-5 items-center justify-center text-slate-500">
                                  <svg
                                    viewBox="0 0 24 24"
                                    className="h-3 w-3"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                  >
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                </span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
