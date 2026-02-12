import { Link } from 'react-router-dom';
import {
  Lightbulb,
  Database,
  BarChart3,
  FlaskConical,
  Wrench,
  ShieldCheck,
  Radar,
  ArrowLeft,
  ClipboardList,
  Network,
  Server,
  Activity,
} from 'lucide-react';
import type { Project } from '@/components/shared/ProjectCard';


type PainToolsDetailProps = {
  project: Project;
};

export default function PainToolsDetail({ project }: PainToolsDetailProps) {
  // ✅ Icon map keys MUST match workstream.routeSlug or workstream.id from projects.ts
  const workstreamIcons: Record<string, React.ElementType> = {
    'product-workflow': Lightbulb,
    'data-backend': Database,
    'analytics-insights': BarChart3,
    'experimentation-testing': FlaskConical,
    'feature-engineering': Wrench,
    'model-development': Database,
    'validation-performance': ShieldCheck,
    'deployment-monitoring': Radar,
  };

  const capabilityCards = [
    {
      id: 'data-backend',
      title: 'Data Architecture & HIPAA Controls',
      icon: Server,
      href: `/projects/${project.id}/workstreams/data-backend`,
      bullets: [
        'Gathered requirements from clinical, engineering, and product stakeholders.',
        'Developed HIPAA compliant database structure to collect diverse sources of data.',
        'Set data grain, primary keys, access boundaries, and internationalization standards.',
        'Established BAAs and aligned cloud infrastructure with HIPAA security and access requirements.',
      ],
    },
    {
      id: 'analytics-insights',
      title: 'Analytics & Insights',
      icon: BarChart3,
      href: `/projects/${project.id}/workstreams/analytics-insights`,
      bullets: [
        'De-identified all user-level data to remove PHI and direct identifiers from beta analysis.',
        'Defined a normalized baseline period and outcome score for that period.',
        'Used Excel pivot tables to analyze 10K+ records and surface decision-driving trends.',
        'Segmented users based on stakeholder requirements.',
        'Informed feature and stakeholder decisions for product direction.',
      ],
    },
    {
      id: 'product-workflow',
      title: 'Data Flow & Experience Design',
      icon: ClipboardList,
      href: `/projects/${project.id}/workstreams/product-workflow`,
      bullets: [
        'Defined user personas through qualitative and quantitative research.',
        'Mapped user journeys and end-to-end flows to inform product and development decisions.',
        'Designed data flow structures to support analytics, workflows, and system integration.',
      ],
    },
    {
      id: 'experimentation-testing',
      title: 'Product Roadmap & Analytics',
      icon: Activity,
      href: `/projects/${project.id}/workstreams/experimentation-testing`,
      bullets: [
        'Set the product roadmap and launch priorities for the app.',
        'Contributed to major product design decisions using research and data insights.',
        'Deprioritized low-impact features based on data to maintain focus.',
      ],
    },
  ];

  const accentById: Record<string, string> = {
    'data-backend': 'bg-sky-200',
    'analytics-insights': 'bg-emerald-200',
    'product-workflow': 'bg-amber-200',
    'experimentation-testing': 'bg-indigo-200',
  };

  const skillsById: Record<string, string> = {
    'data-backend': 'SQL · Data Modeling · ERDs · Firebase · HIPAA · PHI De-ID · Access Controls · Cloud Security',
    'analytics-insights': 'EDA · Baselines & Metrics · Segmentation · De-ID Pipelines · Excel',
    'product-workflow': 'User Research · Personas · Journey Mapping · Flow Design · PRDs · Systems Thinking',
    'experimentation-testing': 'Product Strategy · Roadmapping · Prioritization · Analytics-Driven Decisions · Launch Planning',
  };

  return (
    <div className="space-y-6">
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
        <div className="rounded-lg border border-[#E3D9CB] bg-[#FBF8F2] p-4 sm:p-5 mb-6 sm:mb-7 shadow-[0_6px_16px_rgba(15,23,42,0.06)]">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 leading-tight">
            PainTools – Femtech startup
          </h1>
          <div className="mt-2 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4 text-sm text-slate-700">
              <div className="flex items-start gap-1">
                <span className="text-sm font-semibold text-slate-900">Role:</span>
                <span className="text-sm text-slate-700">Product, Data & Analytics Lead</span>
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
              const accent =
                card.id === 'data-backend'
                  ? 'bg-sky-200'
                  : card.id === 'analytics-insights'
                  ? 'bg-emerald-200'
                  : card.id === 'product-workflow'
                  ? 'bg-amber-200'
                  : 'bg-indigo-200';
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
                <div key={card.id} className="relative overflow-visible h-full">
                  {/* Folder tab with color strip + notch */}
                  <div className="absolute left-6 top-0 z-10 -translate-y-1/2" aria-hidden>
                    <div className="relative">
                      <div className="h-7 w-36 rounded-t-md border border-[#D8CFC1] bg-[#FFFDF7] shadow-[0_2px_6px_rgba(15,23,42,0.12)]" />
                      <div className="absolute right-0 top-0 h-7 w-10 bg-[#F6F1E8]" />
                      <div className={`absolute left-3 top-2 h-2.5 w-16 rounded-sm ${accent}`} />
                    </div>
                  </div>

                  {/* Folder body */}
                  <div className="relative rounded-md lg:rounded-sm border border-[#cfc7b8] bg-[#F6F1E8] shadow-[0_4px_10px_rgba(15,23,42,0.08)] lg:shadow-[0_3px_8px_rgba(15,23,42,0.10)] h-full flex flex-col">
                    <div className="absolute inset-0 translate-x-[4px] translate-y-[4px] rounded-md border border-[#dcd4c7] bg-[#f9f4eb] opacity-80 -z-10" aria-hidden />
                    <div className="p-4 pt-6 lg:p-3 lg:pt-5 flex-1 flex flex-col">
                      {/* Header */}
                      <div className="flex items-start gap-4 rounded-sm bg-white/40 px-2 py-1">
                        <div className="flex h-10 w-10 lg:h-9 lg:w-9 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
                          <Icon className="w-5 h-5 text-slate-700" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg lg:text-base font-semibold text-slate-900">{card.title}</h3>
                          {skillsById[card.id] && (
                            <div className="mt-1 text-xs font-normal tracking-wide text-slate-400">
                              {skillsById[card.id]}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Paper inset */}
                      <div className="mt-5 rounded-md lg:rounded-sm border border-[#DED6CA] bg-[#FFFDF7] p-4 lg:p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),inset_0_0_0_1px_rgba(255,255,255,0.35)] flex-1">
                        <div className="mb-3 text-[11px] font-semibold tracking-wide text-slate-500">
                          {heading}
                        </div>
                        <ul className="space-y-2.5 text-sm text-slate-700">
                          {card.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-3 leading-relaxed">
                              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500">
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
