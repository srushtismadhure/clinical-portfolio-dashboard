import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Lightbulb, RefreshCcw, Building2, BarChart3 } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { TagChip } from '@/components/shared/TagChip';
import { projects, projectDetails } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { DollarSign, Activity, Users } from 'lucide-react';
import PainToolsDetail from '@/pages/PainToolsDetail';
import { DataModelSection } from '@/components/sections/DataModelSection';
import ProjectSidebarNav, { ProjectNavItem } from '@/components/project/ProjectSidebarNav';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import HealthNumericsTemplate from '@/components/projects/templates/HealthNumericsTemplate';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'approach', label: 'Approach' },
  { id: 'tools', label: 'Tools & Tech' },
  { id: 'results', label: 'Results' },
  { id: 'lessons', label: 'Lessons' },
];


const POWER_BI_IMAGE_URL = `${import.meta.env.BASE_URL}images/powerbifinal.png`;

const PROJECT_DOC_FALLBACK_URL = 'https://example.com/project-document.pdf';

type PowerBIFrameProps = {
  imageSrc: string;
  alt: string;
};

function PowerBIFrame({ imageSrc, alt }: PowerBIFrameProps) {
  return (
    <div className="w-full">
      <div className="rounded-[14px] border-[3px] border-slate-900 bg-[#0B1220] p-3">
        <div className="rounded-[10px] border-[2px] border-[#0B0F1A] bg-[#0B1220] overflow-hidden">
          <div className="w-full aspect-video">
            <img
              src={imageSrc}
              alt={alt}
              className="w-full h-full block object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CopilotNoteCard() {
  return (
    <aside className="w-full max-w-[320px] bg-white rounded-xl border border-gray-100 shadow-sm p-4">
      <div className="flex items-center gap-2 text-slate-900">
        <Lightbulb className="h-4 w-4 text-slate-600" />
        <div className="text-xs font-semibold uppercase tracking-wide">
          Copilot Usage
        </div>
      </div>
      <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-slate-700">
        <li>Drafted initial DAX measures and KPI calculations</li>
        <li>Helped refactor/clean query logic and naming for consistency</li>
      </ul>
    </aside>
  );
}


export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const details = id ? projectDetails[id] : null;

  // Guard: project not found
  if (!project || !details) {
    return (
      <Layout
        title="Project Not Found"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/projects' },
        ]}

      >
  
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">Project not found</p>
          <Link to="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  console.log('[ProjectDetail]', { paramId: id, projectId: project.id, layoutType: project.layoutType });

  // ✅ Derived data MUST be declared before any returns
  const projectDoc = project.projectDoc;
  const projectDocUrl = projectDoc?.url ?? PROJECT_DOC_FALLBACK_URL;

  const recommendationBullets =
    project.heroSummary?.recommendationBullets ??
    project.heroSummary?.recommendation
      ?.split('\n')
      .map((line) => line.replace(/^[-*•]\s*/, '').trim())
      .filter(Boolean) ??
    [];

  const evidenceItems = project.heroSummary?.evidence ?? details.results?.slice(0, 4) ?? [];
  const toolsLine = project.heroSummary?.tools ?? details.tools?.join(' · ') ?? 'N/A';

  const keyInsight =
    project.heroSummary?.keyInsight ??
    project.heroSummary?.outcome ??
    details.results?.[0] ??
    'N/A';

    const problemLine = project.heroSummary?.problem ?? details.problem ?? 'N/A';

    // Keep it tight: max 2 actions
    const actions = (project.heroSummary?.recommendationBullets ?? recommendationBullets).slice(0, 2);
    
    const builtWith = toolsLine;
    // File: src/pages/ProjectDetail.tsx  (after guard, with other derived vars)
    const [showMoreActions, setShowMoreActions] = useState(false);
    const navItems: ProjectNavItem[] = [
      { id: 'overview', label: 'Overview' },
      { id: 'executive-summary', label: 'Executive Summary' },
      { id: 'key-metrics', label: 'Key Metrics' },
      { id: 'dashboard', label: 'Dashboard' },
      { id: 'recommendations', label: 'Recommendations' },
      { id: 'data-model', label: 'Data Model' },
      { id: 'data-cleaning', label: 'Data Cleaning' },
      { id: 'insights-next-steps', label: 'Insights & Next Steps' },
    ];
    const activeId = useScrollSpy(navItems.map((item) => item.id));
    const onJump = (sectionId: string) => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${sectionId}`);
    };


  // ✅ Custom layout branch: Predictive Modeling uses PainToolsDetail when layoutType === 'paintools'
  // ✅ Custom hub layout branch (only if project opts in)
if (project.layoutType === 'paintools') {
  return (
    <Layout
      title={project.title}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '/projects' },
        { label: project.title },
      ]}
    >
      <PainToolsDetail project={project} />
    </Layout>
  );
}

// ✅ Custom template branch: Health Numerics uses its own layout when template is set
if (project.template === 'health-numerics') {
  return (
    <Layout
      title="Health Numerics"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '/projects' },
        { label: 'Health Numerics' },
      ]}
    >
      <HealthNumericsTemplate project={project} details={details} />
    </Layout>
  );
}

  // ✅ Default layout for all other projects
  return (
    <Layout
      title={project.title}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '/projects' },
      ]}
      contentClassName="flex-1 overflow-auto p-0"
    >
      <div className="min-h-screen bg-transparent">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr]">
            <aside className="hidden lg:block bg-transparent">
              <div className="sticky top-0 h-screen overflow-hidden p-6">
                <ProjectSidebarNav
                  title={project.title}
                  subtitle={project.subtitle}
                  status={project.status}
                  items={navItems}
                  activeId={activeId}
                  onJump={onJump}
                />
              </div>
            </aside>

            <main className="min-w-0">
              <div className="h-screen overflow-y-auto">
                {/* Narrative wrapper (includes background, dashboard, and rest) */}
                <div className="mx-auto max-w-[1200px] w-full px-4 sm:px-6 lg:px-10 pb-10 pt-8">
                  <div className="lg:hidden mb-4">
                    <label
                      htmlFor="project-sections"
                      className="block text-xs font-semibold tracking-wide text-slate-500 mb-2"
                  >
                    Sections
                  </label>
                  <select
                    id="project-sections"
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
                    value={activeId}
                    onChange={(event) => onJump(event.target.value)}
                  >
                    {navItems.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>
        {/* Main Content */}
        <div className="max-w-full">
          {/* Back Button */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Standard Project Header */}
          {/* Standard Project Header */}
<div className="mb-2 md:mb-3">
  <h1 className="text-lg md:text-xl font-semibold text-slate-900">
    {project.title}
  </h1>

  <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
    {project.subtitle && <span className="truncate">{project.subtitle}</span>}
    {project.subtitle && project.status && <span className="hidden sm:inline">•</span>}
    {project.status && (
      <span className="inline-flex items-center rounded-full border border-slate-300 bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700">
        Status: {project.status}
      </span>
    )}
  </div>
</div>
          {/* Project Background (above dashboard) */}
          {/* Project Background (FULL-WIDTH inside your page container) */}
{/* Project Background */}
{project.id === 'value-based-care' && <div id="overview" className="scroll-mt-24" />}
<section className="mt-6 sm:mt-7 lg:mt-8 w-full">
  <div
    className="
      bg-white
      rounded-xl
      px-5 sm:px-6 lg:px-8
      py-5 sm:py-6
    "
  >
    <h2 className="text-base sm:text-lg font-semibold text-slate-900">
      Project Background
    </h2>

    <div className="mt-3 space-y-4 text-sm sm:text-[15px] leading-relaxed sm:leading-[1.7] text-slate-700">
      <p>
        Value-based care shifts healthcare reimbursement from volume to outcomes,
        requiring health systems to actively manage inpatient utilization, length
        of stay (LOS), avoidable readmissions, and cost efficiency across service
        lines. While enterprise EHR systems capture vast amounts of encounter-level
        data, many organizations lack an integrated view that connects clinical
        utilization, payer mix, and financial risk at the episode level—limiting
        their ability to intervene proactively under value-based contracts.
      </p>

      <p>
        This project simulates an enterprise analytics platform for a large,
        integrated, Mayo Clinic–style health system using synthetic EHR data to
        analyze inpatient encounters, departmental costs, payer mix, and outcomes.
      </p>
    </div>
  </div>
</section>

<section id="dashboard" className="mt-8 mb-10">
  <div className="grid gap-6 lg:grid-cols-[4fr_1fr] items-start">
    <div className="h-full">
      <PowerBIFrame
        imageSrc={POWER_BI_IMAGE_URL}
        alt={`${project.title} dashboard`}
      />
      <div className="mt-2 px-1 text-[11px] text-slate-500">
        Data: Synthetic EHR • Period: 2024 • Refresh: Jan 2026
      </div>
      <div className="mt-4 lg:hidden">
        <CopilotNoteCard />
      </div>
    </div>

    <div className="hidden lg:block">
      <div className="sticky top-6 space-y-4">
        <aside className="rounded-2xl border border-slate-300 bg-white p-6 lg:p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="space-y-6">
            {/* Problem */}
            <div className="space-y-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Problem
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {project.heroSummary?.problem ?? details.problem?.[0] ?? 'N/A'}
              </p>
            </div>

          </div>
        </aside>
        <CopilotNoteCard />
      </div>
    </div>
  </div>
</section>

<div className="mt-6 sm:mt-8 lg:mt-10" />

          {/* Key Insights (below dashboard) — hidden on mobile */}
          {/* Key Insights — hidden on small screens */}
<section id="key-metrics" className="mt-12 mb-12">
  <h2 className="text-lg font-semibold text-slate-900 mb-6">
    Key Metrics
  </h2>

  <div className="grid grid-cols-3 gap-6">
    {/* Card 1 */}
    <div className="rounded-xl bg-white p-6">
      <DollarSign className="h-5 w-5 text-slate-700 stroke-[1.5] mb-4" />

      <h3 className="text-sm font-semibold text-slate-900 mb-2">
        Inpatient Care Is the Primary Cost Driver
      </h3>
      <p className="hidden sm:block text-sm text-slate-700 leading-relaxed">
        87% of total costs are concentrated in inpatient encounters, with
        significant variation by service line.
      </p>
    </div>

    {/* Card 2 */}
    <div className="rounded-xl bg-white p-6">
      <Activity className="h-5 w-5 text-slate-700 stroke-[1.5] mb-4" />

      <h3 className="text-sm font-semibold text-slate-900 mb-2">
        ICU Encounters Are Extreme Cost Outliers
      </h3>
      <p className="hidden sm:block text-sm text-slate-700 leading-relaxed">
        ICU cost per encounter is ~3× the system average, driven by extended
        length of stay and acuity.
      </p>
    </div>

    {/* Card 3 */}
    <div className="rounded-xl bg-white p-6">
      <Users className="h-5 w-5 text-slate-700 stroke-[1.5] mb-4" />

      <h3 className="text-sm font-semibold text-slate-900 mb-2">
        Medicare & Commercial Payers Concentrate Risk
      </h3>
      <p className="hidden sm:block text-sm text-slate-700 leading-relaxed">
        68% of inpatient encounters are covered by Medicare or Commercial plans,
        concentrating value-based financial risk.
      </p>
    </div>
  </div>
</section>
{/* Data Model + Executive Summary + Recommendations (Value-Based Care only) */}
{/* Data Model + Executive Summary + Recommendations (Value-Based Care only) */}
{project.id === 'value-based-care' && (
  <>
    {/* Data Model */}
    <section id="data-model" className="mt-6">
      <DataModelSection model={project.dataModel} />
    </section>

    {/* Executive Summary (project-level) */}
    {project.executiveSummary?.narrative && (
      <section id="recommendations" className="mt-6 rounded-2xl bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] p-5 sm:p-6">
        <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-600">
          {project.executiveSummary.heading ?? 'Executive Summary'}
        </div>

        <p
          className="mt-3 text-sm sm:text-[15px] leading-relaxed text-slate-700 whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: project.executiveSummary.narrative }}
        />

        {project.executiveSummary.metrics?.length ? (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.executiveSummary.metrics.map((m) => (
              <div key={m.label} className="rounded-lg bg-white border border-gray-100 shadow-sm px-4 py-3">
                <div className="text-xs text-slate-500">{m.label}</div>
                <div className="text-sm font-semibold text-slate-900">{m.value}</div>
              </div>
            ))}
          </div>
        ) : null}
      </section>
    )}

    {/* Recommendations (project-level preferred, fallback to heroSummary bullets) */}
    {(
      (project.recommendations?.rows?.length ?? 0) > 0 ||
      (project.heroSummary?.recommendationBullets?.length ?? 0) > 0 ||
      recommendationBullets.length > 0
    ) && (
      <section className="mt-6 rounded-2xl bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] p-5 sm:p-6">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-600">Recommendations</div>
            <div className="mt-1 text-xs text-slate-500">
              {project.recommendations?.subtitle ?? 'Based on 2024 Power BI drill-down analysis'}
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="hidden lg:grid lg:grid-cols-[1.2fr_1.4fr_2fr] text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            <div className="py-2 pr-4">Focus</div>
            <div className="py-2 pr-4">Metric</div>
            <div className="py-2">Action</div>
          </div>

          <div className="divide-y divide-slate-200 text-slate-700">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.4fr_2fr] gap-3 lg:gap-4 py-4">
              <div className="flex items-start gap-3">
                <RefreshCcw className="h-5 w-5 text-slate-500 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-slate-900">Readmissions</div>
                  <span className="mt-1 inline-flex items-center rounded-full bg-rose-50 px-2 py-0.5 text-[10px] font-medium text-rose-700">
                    High impact
                  </span>
                </div>
              </div>
              <div className="text-sm text-slate-700">30-day readmission rate + avoidable cost</div>
              <div>
                <div className="text-sm font-semibold text-slate-900">Standardize discharge planning</div>
                <div className="text-xs text-slate-600">Post-acute follow-up + care transitions</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.4fr_2fr] gap-3 lg:gap-4 py-4">
              <div className="flex items-start gap-3">
                <Building2 className="h-5 w-5 text-slate-500 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-slate-900">ICU / High-LOS</div>
                  <span className="mt-1 inline-flex items-center rounded-full bg-sky-50 px-2 py-0.5 text-[10px] font-medium text-sky-700">
                    High cost
                  </span>
                </div>
              </div>
              <div className="text-sm text-slate-700">ICU cost per case + LOS outliers</div>
              <div>
                <div className="text-sm font-semibold text-slate-900">Flag high-risk admissions early</div>
                <div className="text-xs text-slate-600">Risk stratification at intake</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.4fr_2fr] gap-3 lg:gap-4 py-4">
              <div className="flex items-start gap-3">
                <BarChart3 className="h-5 w-5 text-slate-500 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-slate-900">Payer mix / Seasonality</div>
                </div>
              </div>
              <div className="text-sm text-slate-700">Medicare/Commercial concentration + Jan spike</div>
              <div>
                <div className="text-sm font-semibold text-slate-900">Prioritize ICU + high-LOS pathways</div>
                <div className="text-xs text-slate-600">Reduce cost volatility and payer exposure</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}

    <section id="insights-next-steps" className="mt-6 rounded-2xl bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] p-5 sm:p-6">
      <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-600">Insights &amp; Next Steps</div>
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
            <div>
              <div className="text-sm font-semibold text-slate-900">Target high-LOS units</div>
              <div className="text-xs text-slate-600">Focus on services driving readmission risk</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
            <div>
              <div className="text-sm font-semibold text-slate-900">Reduce payer exposure</div>
              <div className="text-xs text-slate-600">Align contracts to Medicare/Commercial concentration</div>
            </div>
          </div>
        </div>

        <div className="space-y-3 lg:border-l lg:border-slate-200 lg:pl-6">
          <div className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
            <div>
              <div className="text-sm font-semibold text-slate-900">Reduce payer exposure</div>
              <div className="text-xs text-slate-600">Align contracts to Medicare/Commercial concentration</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
            <div>
              <div className="text-sm font-semibold text-slate-900">Increase dashboard adoption</div>
              <div className="text-xs text-slate-600">Role-specific operational views for leaders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)}

          {/* Project Document */}
          {projectDoc && (
            <section className="ehr-card mb-8" style={{ animationDelay: '80ms' }}>
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-2">Project Document</h2>
                  {projectDoc.title && (
                    <p className="text-sm font-medium text-foreground mb-2">{projectDoc.title}</p>
                  )}
                  {projectDoc.description && (
                    <p className="text-muted-foreground leading-relaxed">{projectDoc.description}</p>
                  )}
                </div>
                <div className="flex items-center">
                  <a href={projectDocUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      View Document
                    </Button>
                  </a>
                </div>
              </div>

              {projectDoc.bullets && projectDoc.bullets.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {projectDoc.bullets.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[hsl(var(--ehr-teal))]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}

          {/* Long-form case study sections (hide for dashboard-style pages like Value-Based Care) */}
          {project.id !== 'value-based-care' && (
            <>
          <section id="recommendations" className="ehr-card mb-6">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Recommendations</h2>
            {recommendationBullets.length > 0 ? (
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                {recommendationBullets.slice(0, 4).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">N/A</p>
            )}
          </section>

          <section id="data-model" className="ehr-card mb-6">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Data Model</h2>
            <p className="text-muted-foreground">N/A</p>
          </section>

          <section id="data-cleaning" className="ehr-card mb-6">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Data Cleaning</h2>
            <p className="text-muted-foreground">
              Standardized encounter fields, validated core metrics, and derived operational indicators.
            </p>
          </section>

          {/* Overview */}
          <section id="overview" className="ehr-card mb-6" style={{ animationDelay: '100ms' }}>
            <h2 className="text-xl font-semibold mb-3 text-foreground">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{details.overview}</p>
          </section>

          {/* Problem */}
          <section id="problem" className="ehr-card mb-6" style={{ animationDelay: '150ms' }}>
            <h2 className="text-xl font-semibold mb-3 text-foreground">Problem</h2>
            <p className="text-muted-foreground leading-relaxed">{details.problem}</p>
          </section>

          {/* Approach */}
          <section id="approach" className="ehr-card mb-6" style={{ animationDelay: '200ms' }}>
            <h2 className="text-xl font-semibold mb-3 text-foreground">Approach & Methods</h2>
            <p className="text-muted-foreground leading-relaxed">{details.approach}</p>
            {details.architecture && (
              <div className="mt-4 p-4 bg-[hsl(var(--ehr-cream))] rounded-xl">
                <p className="text-sm font-medium text-foreground mb-2">Architecture</p>
                <p className="text-sm text-muted-foreground font-mono">{details.architecture}</p>
              </div>
            )}
          </section>

          {/* Tools */}
          <section id="tools" className="ehr-card mb-6" style={{ animationDelay: '250ms' }}>
            <h2 className="text-xl font-semibold mb-3 text-foreground">Tools & Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {details.tools.map((tool) => (
                <TagChip key={tool} label={tool} variant="teal" />
              ))}
            </div>
          </section>

          {/* Results */}
          <section id="results" className="ehr-card mb-6" style={{ animationDelay: '300ms' }}>
            <h2 className="text-xl font-semibold mb-3 text-foreground">Results & Impact</h2>
            <ul className="space-y-2">
              {details.results.map((result, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[hsl(var(--ehr-teal))] mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{result}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Insights & Next Steps */}
          <section id="insights-next-steps" className="ehr-card" style={{ animationDelay: '350ms' }}>
            <h2 className="text-xl font-semibold mb-3 text-foreground">Insights & Next Steps</h2>
            <ul className="space-y-2">
              {details.lessons.map((lesson, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-6 h-6 rounded-full bg-[hsl(var(--ehr-lavender)/0.5)] flex items-center justify-center text-xs font-medium text-foreground flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground">{lesson}</span>
                </li>
              ))}
            </ul>
          </section>
            </>
          )}
        </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
}
