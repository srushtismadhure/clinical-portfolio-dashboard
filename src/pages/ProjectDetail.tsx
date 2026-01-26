import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Lightbulb } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { TagChip } from '@/components/shared/TagChip';
import { projects, projectDetails } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { DollarSign, Activity, Users } from 'lucide-react';
import PainToolsDetail from '@/pages/PainToolsDetail';
import { DataModelSection } from '@/components/sections/DataModelSection';
import ProjectSidebarNav, { ProjectNavItem } from '@/components/project/ProjectSidebarNav';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'approach', label: 'Approach' },
  { id: 'tools', label: 'Tools & Tech' },
  { id: 'results', label: 'Results' },
  { id: 'lessons', label: 'Lessons' },
];



const PROJECT_DOC_FALLBACK_URL = 'https://example.com/project-document.pdf';

type PowerBIFrameProps = {
  imageSrc: string;
  alt: string;
};

function PowerBIFrame({ imageSrc, alt }: PowerBIFrameProps) {
  return (
    <div className="rounded-[18px] border-[4px] border-[#0B1E3A] bg-[#0B1E3A] p-3">
      <div className="rounded-[14px] border-[3px] border-[#0B0F1A] bg-[#0B0F1A] p-2">
        <div className="rounded-[10px] bg-white overflow-hidden">
          <div className="relative w-full aspect-video">
            <img
              src={imageSrc}
              alt={alt}
              className="absolute inset-0 w-full h-full object-contain block"
            />
          </div>
        </div>
      </div>
    </div>
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
      <div className="min-h-screen bg-slate-50">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr]">
            <aside className="hidden lg:block bg-slate-50">
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
                <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10 py-8">
                  <div className="lg:hidden mb-4">
                    <label
                      htmlFor="project-sections"
                      className="block text-xs font-semibold tracking-wide text-slate-500 mb-2"
                  >
                    Sections
                  </label>
                  <select
                    id="project-sections"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
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
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Standard Project Header */}
          {/* Standard Project Header */}
<div className="mb-2 md:mb-3">
  <h1 className="text-lg md:text-xl font-semibold text-foreground">
    {project.title}
  </h1>

  <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
    {project.subtitle && <span className="truncate">{project.subtitle}</span>}
    {project.subtitle && project.status && <span className="hidden sm:inline">•</span>}
    {project.status && <span>Status: {project.status}</span>}
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
    <h2 className="text-base sm:text-lg font-semibold text-foreground">
      Project Background
    </h2>

    <div className="mt-3 space-y-4 text-sm sm:text-[15px] leading-relaxed sm:leading-[1.7] text-muted-foreground">
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

<div className="mt-6 sm:mt-8 lg:mt-10" />

          {/* Hero Section (EHR-style two-column module) */}
          {/* Hero Section (EHR-style two-column module) */}
<section id="dashboard" className="mb-8">
  <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
    <div className="grid gap-8 lg:grid-cols-12 items-start">
      {/* LEFT: Analytics Module */}
      <div className="h-full lg:col-span-8 xl:col-span-9">
        <PowerBIFrame
          imageSrc="/images/powerbi.png"
          alt={`${project.title} dashboard`}
        />
      </div>

      {/* RIGHT: Executive Summary Panel (lg+ only) */}
      <div className="hidden lg:block lg:col-span-4 xl:col-span-3">
        <aside className="rounded-2xl border border-slate-200 bg-white p-6 lg:p-5">
          <div className="space-y-5">

            {/* PROBLEM */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Problem
              </div>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Fragmented visibility into inpatient services and payer segments driving disproportionate cost and readmission risk under value-based contracts.
              </p>
            </div>

            {/* KEY INSIGHT */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Key Insight
              </div>

              <p className="mt-2 text-sm font-semibold text-slate-900 leading-snug">
                Inpatient utilization concentrates cost and readmission exposure, with risk clustered in high-acuity service lines.
              </p>
            </div>

            {/* RECOMMENDED ACTIONS */}
            <div>
              <button
                type="button"
                onClick={() => setShowMoreActions((value) => !value)}
                className="inline-flex items-center text-sm font-semibold text-slate-700 hover:text-slate-900"
                aria-expanded={showMoreActions}
                aria-controls="recommended-actions"
              >
                {showMoreActions ? 'Show less' : 'Show more'}
              </button>
              {showMoreActions && (
                <div id="recommended-actions" className="mt-4 space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Recommendations
                  </div>
                  <ul className="space-y-1 text-sm text-slate-700 list-disc pl-4">
                    <li>Standardize discharge and post-acute workflows for inpatient services</li>
                    <li>Deploy admission-time risk stratification for high-cost, high-LOS cases</li>
                    <li>Prioritize ICU and inpatient pathways for care redesign</li>
                  </ul>
                </div>
              )}
            </div>

          </div>
        </aside>
      </div>

    </div>
  </div>
</section>
{/* Key Insights (below dashboard) — hidden on mobile */}
{/* Key Insights — hidden on small screens */}
<section id="key-metrics" className="mt-12 mb-12">
  <h2 className="text-lg font-semibold text-foreground mb-6">
    Key Metrics
  </h2>

  <div className="grid grid-cols-3 gap-6">
    {/* Card 1 */}
    <div className="rounded-xl bg-white p-6">
      <DollarSign className="h-5 w-5 text-slate-700 stroke-[1.5] mb-4" />

      <h3 className="text-sm font-semibold text-foreground mb-2">
        Inpatient Care Is the Primary Cost Driver
      </h3>
      <p className="hidden sm:block text-sm text-muted-foreground leading-relaxed">
        87% of total costs are concentrated in inpatient encounters, with
        significant variation by service line.
      </p>
    </div>

    {/* Card 2 */}
    <div className="rounded-xl bg-white p-6">
      <Activity className="h-5 w-5 text-slate-700 stroke-[1.5] mb-4" />

      <h3 className="text-sm font-semibold text-foreground mb-2">
        ICU Encounters Are Extreme Cost Outliers
      </h3>
      <p className="hidden sm:block text-sm text-muted-foreground leading-relaxed">
        ICU cost per encounter is ~3× the system average, driven by extended
        length of stay and acuity.
      </p>
    </div>

    {/* Card 3 */}
    <div className="rounded-xl bg-white p-6">
      <Users className="h-5 w-5 text-slate-700 stroke-[1.5] mb-4" />

      <h3 className="text-sm font-semibold text-foreground mb-2">
        Medicare & Commercial Payers Concentrate Risk
      </h3>
      <p className="hidden sm:block text-sm text-muted-foreground leading-relaxed">
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

        <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-slate-700 whitespace-pre-line">
          {project.executiveSummary.narrative}
        </p>

        {project.executiveSummary.metrics?.length ? (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.executiveSummary.metrics.map((m) => (
              <div key={m.label} className="rounded-lg bg-slate-50 px-4 py-3">
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
            <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-600">
              {project.recommendations?.title ?? 'Recommendations'}
            </div>
            <div className="mt-1 text-xs text-slate-500">
              {project.recommendations?.subtitle ?? 'Based on 2024 Power BI drill-down analysis'}
            </div>
          </div>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                <th className="py-2 pr-4">Focus</th>
                <th className="py-2 pr-4">Metric</th>
                <th className="py-2">Action</th>
              </tr>
            </thead>

            <tbody className="text-slate-700">
              {/* If you have explicit table rows in projects.ts, use them */}
              {project.recommendations?.rows?.length ? (
                project.recommendations.rows.slice(0, 3).map((row, idx) => (
                  <tr key={idx} className="border-t border-slate-100 align-top">
                    <td className="py-3 pr-4 font-medium text-slate-900">{row.focus}</td>
                    <td className="py-3 pr-4 text-slate-600">{row.metric}</td>
                    <td className="py-3 text-slate-700">{row.action}</td>
                  </tr>
                ))
              ) : (
                // Otherwise fall back to bullets (your existing pattern)
                (project.heroSummary?.recommendationBullets ?? recommendationBullets)
                  .slice(0, 3)
                  .map((action, idx) => (
                    <tr key={idx} className="border-t border-slate-100 align-top">
                      <td className="py-3 pr-4 font-medium text-slate-900">
                        {idx === 0 ? 'Readmissions' : idx === 1 ? 'ICU / High-LOS' : 'Payer mix / Seasonality'}
                      </td>
                      <td className="py-3 pr-4 text-slate-600">
                        {idx === 0
                          ? '30-day readmission rate + avoidable cost'
                          : idx === 1
                          ? 'ICU cost per case + LOS outliers'
                          : 'Medicare/Commercial concentration + Jan spike'}
                      </td>
                      <td className="py-3 text-slate-700">{action}</td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    )}

    <section id="insights-next-steps" className="mt-6 rounded-2xl bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] p-5 sm:p-6">
      <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-600">Insights &amp; Next Steps</div>
      <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
        <li>Prioritize inpatient service lines with elevated LOS and readmission risk.</li>
        <li>Align payer strategy to mitigate financial exposure under VBC contracts.</li>
        <li>Expand dashboard adoption with role-specific operational views.</li>
      </ul>
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
