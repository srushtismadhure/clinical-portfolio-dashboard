import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Lightbulb } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { TagChip } from '@/components/shared/TagChip';
import { projects, projectDetails } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { DollarSign, Activity, Users } from 'lucide-react';
import PainToolsDetail from '@/pages/PainToolsDetail';
import { DataModelSection } from '@/components/sections/DataModelSection';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'approach', label: 'Approach' },
  { id: 'tools', label: 'Tools & Tech' },
  { id: 'results', label: 'Results' },
  { id: 'lessons', label: 'Lessons' },
];



const PROJECT_DOC_FALLBACK_URL = 'https://example.com/project-document.pdf';

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
    >
      <div className="flex gap-8">
        {/* Main Content */}
        <div className="flex-1 max-w-full">
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
<section className="mb-8">
<div className="grid grid-cols-1 lg:grid-cols-10 gap-3 lg:gap-2">
  {/* LEFT: Analytics Module */}
  <div className="lg:col-span-7">
    <div
      className="
        rounded-xl
        bg-[#1F2937]
        overflow-hidden
        p-3 sm:p-4
      "
    >
      {/* Inner mat — THIS is the key fix */}
      <div
        className="
          rounded-md
          bg-slate-900/80
          px-4 py-3
        "
      >
        <img
          src={project.heroImage || '/images/powerbi.png'}
          alt={`${project.title} dashboard`}
          className="w-full h-auto object-contain rounded-sm"
        />
      </div>
    </div>
  </div>

    {/* RIGHT: Clinical Summary Box (HIDDEN on mobile, shown on lg+) */}
{/* RIGHT: Clinical Summary (Soft container, hidden on mobile) */}
{/* RIGHT: Clinical Summary (white, fixed-width, hidden on mobile) */}
{/* RIGHT: Clinical Summary (lg+ only) */}
<div className="hidden lg:flex lg:col-span-3 justify-end">
<aside className="w-[360px] xl:w-[390px] bg-white p-7">
    <div className="space-y-7">

      {/* PROBLEM */}
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-600">
          Problem
        </div>
        <p className="mt-2 text-sm text-slate-700 leading-relaxed">
          {project.heroSummary?.problem ?? details.problem}
        </p>
      </div>

      {/* KEY INSIGHT — ONLY HIGHLIGHT */}
      <div className="pt-4 border-t border-slate-200">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-slate-600">
          <span className="h-4 w-[3px] bg-sky-500/60 rounded-sm" />
          <Lightbulb className="h-3.5 w-3.5 text-slate-600" />
          Key Insight
        </div>

        <p className="mt-2 text-sm font-semibold text-slate-900 leading-snug">
          {keyInsight}
        </p>
      </div>

      {/* RECOMMENDED ACTIONS */}
      <div className="pt-4 border-t border-slate-200">
        <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-600">
          Recommended Actions
        </div>

        {recommendationBullets.length > 0 ? (
          <ul className="mt-2 space-y-1 text-sm text-slate-700 list-disc pl-4">
            {recommendationBullets.slice(0, 3).map((item, i) => (
              <li key={i} className="leading-snug">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-sm text-slate-400">N/A</p>
        )}
      </div>

      {/* BUILT WITH (FOOTER) */}
      <div className="pt-4 border-t border-slate-200">
        <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-600">
          Built With
        </div>
        <p className="mt-1 text-xs text-slate-500 leading-snug">
          {toolsLine}
        </p>
      </div>

    </div>
  </aside>
</div>

    {/* closes grid */}
  </div>
</section>
{/* Key Insights (below dashboard) — hidden on mobile */}
{/* Key Insights — hidden on small screens */}
<section className="hidden md:block mt-12 mb-12">
  <h2 className="text-lg font-semibold text-foreground mb-6">
    Key Insights
  </h2>

  <div className="grid grid-cols-3 gap-6">
    {/* Card 1 */}
    <div className="rounded-xl bg-white p-6">
      <DollarSign className="h-5 w-5 text-slate-700 stroke-[1.5] mb-4" />

      <h3 className="text-sm font-semibold text-foreground mb-2">
        Inpatient Care Is the Primary Cost Driver
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed">
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

      <p className="text-sm text-muted-foreground leading-relaxed">
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

      <p className="text-sm text-muted-foreground leading-relaxed">
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
    <DataModelSection model={project.dataModel} />

    {/* Executive Summary (project-level) */}
    {project.executiveSummary?.narrative && (
      <section className="mt-6 rounded-2xl bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] p-5 sm:p-6">
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

          {/* Lessons */}
          <section id="lessons" className="ehr-card" style={{ animationDelay: '350ms' }}>
            <h2 className="text-xl font-semibold mb-3 text-foreground">Lessons Learned</h2>
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

        {/* Sticky Sidebar (TOC) — hidden for dashboard-style pages */}
        {project.id !== 'predictive-modeling' && project.id !== 'value-based-care' && (
          <div className="hidden lg:block w-64">
            <div className="sticky top-6">
              <div className="ehr-card">
                <h3 className="font-semibold text-foreground mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-sm text-muted-foreground hover:text-[hsl(var(--ehr-teal))] transition-colors py-1"
                    >
                      {section.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
