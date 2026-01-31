import { Link } from 'react-router-dom';
import {
  Lightbulb,
  Database,
  BarChart3,
  FlaskConical,
  Wrench,
  ShieldCheck,
  Radar,
  Map,
  PenTool,
  Target,
  CheckSquare,
  ArrowLeft,
} from 'lucide-react';
import type { Project } from '@/components/shared/ProjectCard';


type PainToolsDetailProps = {
  project: Project;
};

export default function PainToolsDetail({ project }: PainToolsDetailProps) {
  // ✅ Icon map keys MUST match workstream.routeSlug or workstream.id from projects.ts
  const workstreamIcons: Record<string, React.ElementType> = {
    // PainTools keys
    'product-workflow': Lightbulb,
    'data-backend': Database,
    'analytics-insights': BarChart3,
    'experimentation-testing': FlaskConical,

    // Predictive Modeling keys (if you're reusing this layout there)
    'feature-engineering': Wrench,
    'model-development': Database,
    'validation-performance': ShieldCheck,
    'deployment-monitoring': Radar,
  };

  return (
    <div className="space-y-6">
      {/* Back link */}
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>

      {/* Header */}
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-semibold text-slate-900">
          PainTools — Digital Health Platform
        </h1>
        <p className="text-slate-600">End-to-end product, data, and analytics leadership</p>
      </header>

      {/* Main two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT: Overview */}
        <div className="lg:col-span-1 space-y-6">
          <div className="ehr-card">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Overview</h2>
            <p className="text-slate-600 leading-relaxed">
              Led product analytics and experience design at PainTools, owning data models and translating
              user needs into digital care workflows.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-sm bg-slate-100 text-slate-700">
                Digital Health
              </span>
              <span className="px-3 py-1 rounded-full text-sm bg-slate-100 text-slate-700">
                Product Management
              </span>
              <span className="px-3 py-1 rounded-full text-sm bg-slate-100 text-slate-700">
                Healthcare Analytics
              </span>
            </div>

            <div className="mt-5 border-t border-slate-200 pt-4 hidden md:block">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <span>Skills at a glance</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm bg-slate-100 text-slate-700">
                  Product Design
                </span>
                <span className="px-3 py-1 rounded-full text-sm bg-slate-100 text-slate-700">
                  Backend Architecture
                </span>
                <span className="px-3 py-1 rounded-full text-sm bg-slate-100 text-slate-700">
                  Analytics & Experimentation
                </span>
                <span className="px-3 py-1 rounded-full text-sm bg-slate-100 text-slate-700">
                  Workflow Design
                </span>
                <span className="px-3 py-1 rounded-full text-sm bg-slate-100 text-slate-700">
                  Data Operations
                </span>
              </div>
            </div>

            {/* Illustration placeholder */}
            <div className="mt-6 h-40 rounded-xl bg-slate-50 border border-slate-200" />
          </div>
        </div>

        {/* RIGHT: Workstreams + Capability stacks */}
        <div className="lg:col-span-2 space-y-4">
          {project.workstreams && project.workstreams.length > 0 ? (
            <>
              {/* Keep ONLY these two clickable workstreams */}
              {project.workstreams
                .filter((ws) => {
                  const slug = ws.routeSlug ?? ws.id;
                  return slug === 'data-backend' || slug === 'analytics-insights';
                })
                .map((workstream) => {
                  const slug = workstream.routeSlug ?? workstream.id;
                  const Icon = workstreamIcons[slug] ?? Lightbulb;
                  const href = `/projects/${project.id}/workstreams/${slug}`;

                  return (
                    <Link
                      key={workstream.id}
                      to={href}
                      className="ehr-card flex items-start justify-between gap-4 group hover:bg-slate-50/60 transition-colors"
                      aria-label={`View details: ${workstream.title}`}
                    >
                      <div className="flex items-start gap-3">
                        <Icon className="w-7 h-7 text-slate-700" />
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900">
                            {workstream.title}
                          </h3>
                          <p className="text-slate-600 mt-1">
                            {workstream.desc ?? workstream.summary}
                          </p>
                        </div>
                      </div>

                      <span className="text-slate-700 group-hover:text-slate-900 text-sm font-medium whitespace-nowrap">
                        View Details →
                      </span>
                    </Link>
                  );
                })}

              {/* Capability stacks (new pages) */}
              <div className="space-y-4">
                {[
                  {
                    slug: 'user-data-workflow-mapping',
                    icon: Map,
                    title: 'User, Data & Workflow Mapping',
                    description:
                      'Established a shared understanding of users, workflows, and data touchpoints.',
                  },
                  {
                    slug: 'human-centered-experience-design',
                    icon: PenTool,
                    title: 'Human-Centered Experience Design',
                    description:
                      'Created usable, patient- and provider-centered experiences informed by research.',
                  },
                  {
                    slug: 'product-definition-feature-strategy',
                    icon: Target,
                    title: 'Product Definition & Feature Strategy',
                    description:
                      'Defined what to build, why it mattered, and what to deprioritize.',
                  },
                  // {
                  //   slug: 'execution-planning-delivery',
                  //   icon: CheckSquare,
                  //   title: 'Execution, Planning & Delivery',
                  //   description:
                  //     'Drove work forward through clear planning, ownership, and deadlines.',
                  // },
                ].map((stack) => {
                  const href = `/projects/${project.id}/workstreams/${stack.slug}`;
                  const Icon = stack.icon;

                  return (
                    <Link
                      key={stack.slug}
                      to={href}
                      className="ehr-card flex items-start justify-between gap-4 group hover:bg-slate-50/60 transition-colors"
                      aria-label={`View details: ${stack.title}`}
                    >
                      <div className="flex items-start gap-3">
                        <Icon className="w-7 h-7 text-slate-700" />
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold text-slate-900">{stack.title}</h3>
                          <p className="text-slate-600 mt-1">{stack.description}</p>
                        </div>
                      </div>

                      <span className="text-slate-700 group-hover:text-slate-900 text-sm font-medium whitespace-nowrap">
                        View Details →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="ehr-card">
              <h3 className="text-lg font-semibold text-slate-900">Workstreams</h3>
              <p className="text-sm text-slate-600 mt-2">No workstreams configured.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
