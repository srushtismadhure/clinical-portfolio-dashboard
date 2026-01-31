import { Link, useParams } from 'react-router-dom';
import type React from 'react';
import {
  Stethoscope,
  CheckCircle2,
  ClipboardList,
  CheckSquare,
  Dumbbell,
  MessageSquare,
  Bell,
  PenTool,
  FileText,
  Map,
  Smartphone,
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import ProjectSidebarNav, { ProjectNavItem } from '@/components/project/ProjectSidebarNav';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const renderSectionList = (items?: string[]) => {
  if (!items || items.length === 0) {
    return <p className="text-sm text-slate-500">N/A</p>;
  }

  return (
    <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

// Helper to resolve image src for local/public/prod/dev consistency (Vite-aware)
const resolveImageSrc = (src?: string) => {
  if (!src) return undefined;

  // Allow fully-qualified URLs + data URIs as-is
  if (/^(https?:)?\/\//i.test(src) || src.startsWith('data:')) return src;

  // Vite uses BASE_URL for sub-path deployments (e.g., GitHub Pages)
  const base = import.meta.env.BASE_URL ?? '/';

  // Normalize: remove leading './' and '/' so we can safely join with base
  const cleaned = src.replace(/^\.\/?/, '').replace(/^\//, '');

  // Ensure base ends with a single '/'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;

  return `${normalizedBase}${cleaned}`;
};

type PersonaSectionProps = {
  title: string;
  bullets: string[];
};

function PersonaSection({ title, bullets }: PersonaSectionProps) {
  return (
    <div className="space-y-2">
      <div className="text-[13px] font-semibold text-slate-900">{title}</div>
      <div className="space-y-2">
        {bullets.map((b) => (
          <div key={b} className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#2B6CB0] mt-0.5 flex-shrink-0" />
            <p className="text-[15px] leading-relaxed text-slate-700">{b}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

type HeroQuoteProps = {
  quote: React.ReactNode;
  subquote: string;
};

function HeroQuote({ quote, subquote }: HeroQuoteProps) {
  return (
    <section id="hero" className="scroll-mt-24">
      <div className="bg-[#EEF5FF]">
        <div className="mx-auto max-w-[960px] px-4 sm:px-6 py-10 sm:py-14 text-center">
          <h1 className="text-[32px] sm:text-[42px] lg:text-[52px] font-semibold tracking-tight text-slate-900 leading-[1.15]">
            {quote}
          </h1>
          <p className="mt-5 text-[16px] sm:text-[18px] text-slate-600 leading-relaxed">
            {subquote}
          </p>
        </div>
      </div>
    </section>
  );
}

type MetaPill = {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
};

function MetaPills({ items }: { items: MetaPill[] }) {
  return (
    <div className="mx-auto mt-8 max-w-[960px] px-4 sm:px-6">
      <div className="rounded-2xl bg-white/75 backdrop-blur border border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <div
                key={it.label}
                className={
                  'flex items-center gap-3 px-5 py-4 ' +
                  (idx === 0 ? '' : 'sm:border-l border-slate-200')
                }
              >
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-slate-600" />
                </div>
                <div className="min-w-0">
                  <div className="text-[12px] font-semibold tracking-wide text-slate-500">
                    {it.label}
                  </div>
                  <div className="text-[15px] font-medium text-slate-900 truncate">
                    {it.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function UXHero({
  title,
  subtitle,
  description,
  pills,
}: {
  title: string;
  subtitle?: string;
  description: string;
  pills: MetaPill[];
}) {
  return (
    <section id="hero" className="scroll-mt-24">
      <div
        className="relative"
        style={{
          backgroundColor: '#F8FAFC',
        }}
      >
        <div className="mx-auto max-w-[960px] px-4 sm:px-6 py-12 sm:py-16">
          <h1 className="text-[32px] sm:text-[44px] lg:text-[52px] font-semibold tracking-tight text-slate-900 leading-[1.12]">
            {title}
            {subtitle ? (
              <span className="block mt-1 text-[22px] sm:text-[26px] font-normal text-slate-600">
                ({subtitle})
              </span>
            ) : null}
          </h1>

          <p className="mt-7 text-[16px] sm:text-[18px] leading-relaxed text-slate-700 max-w-[820px]">
            {description}
          </p>

          <MetaPills items={pills} />
        </div>
      </div>
    </section>
  );
}

function ProblemStatementCard({ body }: { body: string }) {
  return (
    <section id="problem" className="scroll-mt-24">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 py-10">
        <div className="rounded-[22px] bg-white border border-slate-200 shadow-[0_14px_40px_rgba(15,23,42,0.10)] p-7 sm:p-9">
          <div className="text-2xl sm:text-3xl font-semibold text-slate-900">
            Problem Statement
          </div>
          <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-slate-700">
            {body}
          </p>
        </div>
      </div>
    </section>
  );
}

function WireframesSection({
  caption,
  images,
}: {
  caption: string;
  images?: { src: string; alt?: string }[];
}) {
  const resolvedFirstImageSrc = `${import.meta.env.BASE_URL}images/wireframe.png`;

  return (
    <section id="wireframes" className="scroll-mt-24">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 pb-16">
        <div className="flex items-baseline gap-3 flex-wrap">
          <h2 className="text-[22px] sm:text-[26px] font-semibold text-slate-900">
            UX Wireframes
          </h2>
          <span className="text-[18px] sm:text-[20px] text-slate-500">
            — Onboarding &amp; Authentication
          </span>
        </div>

        <div className="mt-6 relative">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white" />

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <img
              src={resolvedFirstImageSrc}
              alt="Wireframe"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <p className="mt-7 text-sm sm:text-[15px] leading-relaxed text-slate-600 max-w-[900px]">
          {caption}
        </p>
      </div>
    </section>
  );
}

type PersonaCardProps = {
  leftBullets: string[];
  contextBullets: string[];
  interactionBullets: string[];
  questionsBullets: string[];
  goalsBullets: string[];
  behaviorsBullets: string[];
  motivationsBullets: string[];
  influencesBullets: string[];
};

function PersonaCard(props: PersonaCardProps) {
  const {
    leftBullets,
    contextBullets,
    interactionBullets,
    questionsBullets,
    goalsBullets,
    behaviorsBullets,
    motivationsBullets,
    influencesBullets,
  } = props;

  return (
    <section id="persona" className="scroll-mt-24">
      <div className="mx-auto w-full px-4 sm:px-6 pb-10">
        <div className="rounded-[20px] bg-[#F7FAFF] border border-[#D6E6FF] shadow-[0_10px_30px_rgba(15,23,42,0.08)] p-5 sm:p-6">
          <div className="flex items-baseline justify-between gap-4 flex-wrap">
            <div>
              <div className="text-[16px] font-semibold text-slate-900">
                Primary User Persona <span className="font-normal text-slate-600">(Synthesized &amp; De-Identified)</span>
              </div>
              <div className="mt-1 text-sm text-slate-600">
                A composite representation based on aggregated insights, not a real individual.
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* Column 1: Primary Persona */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl border border-[#D6E6FF] bg-white max-w-[180px] mx-auto">
                <div className="aspect-square bg-slate-50 flex items-center justify-center">
                  <img
                    src={`${import.meta.env.BASE_URL}images/icon.png`}
                    alt="Avatar (illustrative)"
                    className="h-16 w-16 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>

              <div>
                <div className="text-[16px] font-semibold text-slate-900">Primary Persona (Synthesized)</div>
                <div className="mt-3 space-y-2">
                  {leftBullets.map((b) => (
                    <div key={b} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2B6CB0] mt-0.5 flex-shrink-0" />
                      <p className="text-[15px] leading-relaxed text-slate-700">{b}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Motivations + Behaviors + Goals */}
            <div className="space-y-5">
              <PersonaSection title="Motivations" bullets={motivationsBullets} />
              <PersonaSection title="Behaviors" bullets={behaviorsBullets} />
              <PersonaSection title="Goals" bullets={goalsBullets} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function PainToolsWorkstreamDetail() {
  const { projectId, workstreamId } = useParams<{
    projectId: string;
    workstreamId: string;
  }>();

  const project = projects.find((p) => p.id === projectId);
  const normalizedWorkstreamId = (workstreamId ? decodeURIComponent(workstreamId) : '').trim().toLowerCase();
  const workstream = project?.workstreams?.find((w) => {
    const slug = (w.routeSlug ?? '').trim().toLowerCase();
    const id = (w.id ?? '').trim().toLowerCase();
    return slug === normalizedWorkstreamId || id === normalizedWorkstreamId;
  });
  // Prefer diagram on the workstream; fall back to a project-level diagram if present.
  const diagram = (workstream as any)?.diagram ?? (project as any)?.diagram;
  // Step 03 is defined on the backend workstream
  const step3 =
    (workstream as any)?.steps?.step3 ??
    project?.workstreams?.find(
      (w) => (w.id ?? '').toLowerCase() === 'data-backend' || (w.routeSlug ?? '').toLowerCase() === 'data-backend'
    )?.steps?.step3;

  const isBackend = workstream?.id === 'data-backend' || workstream?.routeSlug === 'data-backend';
  const isAnalyticsInsights =
    workstream?.id === 'analytics-insights' || workstream?.routeSlug === 'analytics-insights';
  const isHumanCenteredExperienceDesign =
    workstream?.id === 'human-centered-experience-design' ||
    workstream?.routeSlug === 'human-centered-experience-design';
  const isUserDataWorkflow =
    workstream?.id === 'user-data-workflow-mapping' ||
    workstream?.routeSlug === 'user-data-workflow-mapping';

  const navItems: ProjectNavItem[] = isBackend
    ? [
        { id: 'overview', label: 'Overview' },
        { id: 'cards', label: 'Role / Scope / Constraints' },
        { id: 'requirements', label: 'Requirements & Constraints' },
        { id: 'step-2', label: 'Unified Data Model' },
        { id: 'step-3', label: 'Privacy & Compliance' },
        { id: 'reflection', label: 'Reflection' },
        { id: 'impact', label: 'Impact' },
      ]
    : isAnalyticsInsights
    ? [
        { id: 'context', label: 'Context' },
        { id: 'analysis-areas', label: 'Analysis Areas' },
        { id: 'problem', label: 'Problem' },
        { id: 'solutions', label: 'Solutions' },
        { id: 'insights', label: 'Key Insights' },
        { id: 'next-steps', label: 'Next Steps' },
      ]
    : isHumanCenteredExperienceDesign
    ? [
        { id: 'hero', label: 'Overview' },
        { id: 'problem', label: 'Problem' },
        { id: 'wireframes', label: 'Wireframes' },
      ]
    : isUserDataWorkflow
    ? [
        { id: 'hero', label: 'Overview' },
        { id: 'persona', label: 'Persona' },
        { id: 'journey', label: 'Journey' },
        { id: 'methods-tools', label: 'Methods & Tools' },
      ]
    : [
        { id: 'problem', label: 'Problem' },
        { id: 'owned', label: 'What I Owned' },
        { id: 'process', label: 'Process / Workflow' },
        { id: 'artifacts', label: 'Deliverables / Artifacts' },
        { id: 'impact', label: 'Impact / Learnings' },
      ];

  const activeId = useScrollSpy(navItems.map((item) => item.id));
  const onJump = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `#${sectionId}`);
  };

  // ✅ Guard: only checks if data exists (no paintools-only block)
  if (!project || !workstream) {
    return (
      <Layout
        title="Workstream Not Found"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/projects' },
        ]}
      >
        <div className="mx-auto max-w-2xl py-12 px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-slate-900 font-semibold">Workstream not found</p>
            <p className="mt-2 text-sm text-slate-600">
              This usually means the URL workstream id does not match any <code className="px-1 py-0.5 bg-slate-100 rounded">id</code> or <code className="px-1 py-0.5 bg-slate-100 rounded">routeSlug</code> inside <code className="px-1 py-0.5 bg-slate-100 rounded">projects.ts</code>.
            </p>

            <div className="mt-4 text-sm text-slate-700 space-y-2">
              <div>
                <span className="font-medium">URL params:</span>{' '}
                <code className="px-1 py-0.5 bg-slate-100 rounded">projectId={projectId ?? ''}</code>{' '}
                <code className="px-1 py-0.5 bg-slate-100 rounded">workstreamId={workstreamId ?? ''}</code>
              </div>
              <div>
                <span className="font-medium">Project found:</span>{' '}
                <code className="px-1 py-0.5 bg-slate-100 rounded">{project ? 'yes' : 'no'}</code>
              </div>
              {project ? (
                <div>
                  <div className="font-medium">Available workstreams for this project:</div>
                  <ul className="mt-1 text-xs text-slate-600 space-y-1">
                    {(project.workstreams ?? []).map((w) => (
                      <li key={w.routeSlug ?? w.id}>
                        <code className="px-1 py-0.5 bg-slate-100 rounded">{w.routeSlug ?? ''}</code>{' '}
                        <span className="text-slate-400">(id: {w.id})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <Link to="/projects">
                <Button>Back to Projects</Button>
              </Link>
              {projectId ? (
                <Link to={`/projects/${projectId}`} className="text-sm text-slate-600 hover:text-slate-900">
                  Back to {projectId}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title={workstream.title}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '/projects' },
        { label: project.title, href: `/projects/${project.id}` }, // ✅ project crumb
        { label: workstream.title }, // ✅ current page crumb
      ]}
    >
      <div className="min-h-screen bg-slate-50">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr]">
            <aside className="hidden lg:block bg-slate-50">
              <div className="sticky top-0 h-screen overflow-hidden p-0 -ml-3">
                <ProjectSidebarNav
                  title={project.title}
                  subtitle={workstream.title}
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
                      htmlFor="workstream-sections"
                      className="block text-xs font-semibold tracking-wide text-slate-500 mb-2"
                    >
                      Sections
                    </label>
                    <select
                      id="workstream-sections"
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

                  <div className="space-y-6">
                    {/* ✅ Back to project hub */}
                    <Link
  to={`/projects/${project.id}`}
  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
>
  ← Back to {project.title}
</Link>

<header className="ehr-card">
  <h1 className="mt-2 text-2xl font-semibold text-slate-900">{workstream.title}</h1>
  <p className="mt-1 text-slate-600">{workstream.desc ?? workstream.summary ?? ''}</p>
</header>

{isBackend ? (
  <>
    {/* Project + Problem (explicit) */}
    {workstream.sections?.overview?.[0] ? (
      <section id="overview" className="scroll-mt-24">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
          Overview
        </h2>
        <p className="mt-0 text-sm sm:text-[15px] leading-relaxed text-slate-700">
          {workstream.sections.overview[0]}
        </p>
      </section>
    ) : null}

    {workstream.sections?.problem?.[0] ? (
      <section id="problem" className="scroll-mt-24">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
          Problem
        </h2>
        <p className="mt-0 text-sm sm:text-[15px] leading-relaxed text-slate-700 font-semibold">
          {workstream.sections.problem[0]}
        </p>
      </section>
    ) : null}

                        {/* Three cards (system-architecture style: sharp corners + header bars + edge arrows) */}
                        <section id="cards" className="grid grid-cols-1 md:grid-cols-3 gap-4 scroll-mt-24">
                          {/* Card 1 */}
                          <div className="relative z-30 overflow-visible bg-white border border-slate-300 rounded-none">
                            {/* Header bar */}
                            <div className="bg-[#DCEBFF] border-b border-slate-300 px-4 py-2">
                              <div className="text-[12px] font-bold tracking-wide uppercase text-slate-800">
                                {workstream.cards?.role?.title ?? 'Role'}
                              </div>
                            </div>

                            {/* Body */}
                            <div className="px-4 py-4">
                              {renderSectionList(workstream.cards?.role?.bullets)}
                            </div>

                            {/* Arrow: Left → Center (desktop only) */}
                            <div className="hidden md:block absolute top-1/2 -right-[25px] -translate-y-1/2 z-50 pointer-events-none">
                              <svg width="30" height="14" viewBox="0 0 30 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0" y1="7" x2="24" y2="7" stroke="#64748B" strokeWidth="1.5" />
                                <path d="M24 2 L30 7 L24 12" fill="none" stroke="#64748B" strokeWidth="1.5" />
                              </svg>
                            </div>
                          </div>

                          {/* Card 2 */}
                          <div className="relative z-0 overflow-visible bg-white border border-slate-300 rounded-none">
                            {/* Header bar */}
                            <div className="bg-[#DCEBFF] border-b border-slate-300 px-4 py-2">
                              <div className="text-[12px] font-bold tracking-wide uppercase text-slate-800">
                                {workstream.cards?.scope?.title ?? 'Scope'}
                              </div>
                            </div>

                            {/* Body */}
                            <div className="px-4 py-4">
                              {renderSectionList(workstream.cards?.scope?.bullets)}
                            </div>

                            {/* Arrow: Center → Right (desktop only) */}
                            <div className="hidden md:block absolute top-1/2 left-full -translate-y-1/2">
                              <svg
                                width="22"
                                height="14"
                                viewBox="0 0 22 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <line x1="0" y1="7" x2="16" y2="7" stroke="#64748B" strokeWidth="1.5" />
                                <path d="M16 2 L22 7 L16 12" fill="none" stroke="#64748B" strokeWidth="1.5" />
                              </svg>
                            </div>
                          </div>

                          {/* Card 3 */}
                          <div className="bg-white border border-slate-300 rounded-none">
                            {/* Header bar */}
                            <div className="bg-[#DCEBFF] border-b border-slate-300 px-4 py-2">
                              <div className="text-[12px] font-bold tracking-wide uppercase text-slate-800">
                                {workstream.cards?.constraints?.title ?? 'Constraints'}
                              </div>
                            </div>

                            {/* Body */}
                            <div className="px-4 py-4">
                              {renderSectionList(workstream.cards?.constraints?.bullets)}
                            </div>
                          </div>
                        </section>

                        {/* Divider */}
                        <div className="my-6 border-t border-slate-200" />

                        {/* Step 1 — Requirements & Constraints */}
                        <section className="scroll-mt-24" id="requirements">
                          <div className="rounded-none bg-white border border-slate-200 shadow-[0_14px_40px_rgba(15,23,42,0.10)] overflow-hidden">
                            <div className="px-5 py-3 bg-gradient-to-b from-[#E7F0FF] to-[#DDEAFF] border-b border-slate-200">
                              <div className="text-[13px] font-semibold tracking-wide text-slate-800">
                                Step 01 — Requirements &amp; Constraints
                              </div>
                            </div>
                            <div className="p-5 sm:p-6">
                              <p className="text-slate-600">
                                Gathered inputs from researchers, clinicians, and product &amp; engineering partners
                              </p>

                              <div className="mt-4 space-y-3">
                                {(
                                  // Prefer the constraints bullets; fall back to scope bullets; finally fall back to the old Problem bullets
                                  workstream.cards?.constraints?.bullets ??
                                  workstream.cards?.scope?.bullets ??
                                  workstream.sections?.problem ??
                                  []
                                ).map((item) => (
                                  <div key={item} className="flex items-start gap-3">
                                    <Stethoscope className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                                    <p className="text-slate-800">{item}</p>
                                  </div>
                                ))}
                                {(
                                  (workstream.cards?.constraints?.bullets?.length ?? 0) === 0 &&
                                  (workstream.cards?.scope?.bullets?.length ?? 0) === 0 &&
                                  (workstream.sections?.problem?.length ?? 0) === 0
                                ) ? (
                                  <p className="text-sm text-slate-500">N/A</p>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </section>

                        <div className="my-6 flex flex-col items-center">
                          <div className="w-px h-6 bg-slate-200" />
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-slate-400"
                          >
                            <path
                              d="M12 5V19"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M7 14L12 19L17 14"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>

                        {/* Step 2 — Unified Data Model (NDA-Safe) */}
                        <section id="step-2" className="scroll-mt-24">
                          <div className="rounded-none bg-white border border-slate-200 shadow-[0_14px_40px_rgba(15,23,42,0.10)] overflow-hidden">
                            <div className="px-5 py-3 bg-gradient-to-b from-[#E7F0FF] to-[#DDEAFF] border-b border-slate-200">
                              <div className="text-[13px] font-semibold tracking-wide text-slate-800">
                                Step 02 — Unified Data Model (NDA-Safe)
                              </div>
                            </div>
                            <div className="p-5 sm:p-6">
                              <p className="text-slate-600">
                                Standardized diverse data sources into one analyzable schema
                              </p>

                              <div className="mt-3 text-[13px] font-semibold text-slate-800 uppercase tracking-wide">
                                Data Flow
                              </div>

                              {/* Image slot */}
                              <div className="mt-4 overflow-hidden border border-slate-200 bg-white">
                                {/* Header strip (schema-box style) */}
                                <div className="bg-[#DCEBFF] border-b border-slate-200 px-4 py-2">
                                  <div className="text-[12px] font-bold tracking-wide uppercase text-slate-800">
                                    Schema Preview (NDA-safe)
                                  </div>
                                </div>

                                {/* Image body */}
                                <div className="p-4 sm:p-5">
                                  {resolveImageSrc(diagram?.src) ? (
                                    <img
                                      src={resolveImageSrc(diagram?.src)}
                                      onError={(e) => {
                                        // eslint-disable-next-line no-console
                                        console.warn('Diagram failed to load:', resolveImageSrc(diagram?.src));
                                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                                      }}
                                      alt={diagram?.alt ?? 'Unified data model diagram (NDA-safe)'}
                                      className="w-full h-auto object-contain rounded-none bg-white"
                                      loading="lazy"
                                    />
                                  ) : (
                                    <div className="w-full aspect-video bg-slate-50 border border-slate-200 flex items-center justify-center">
                                      <span className="text-sm text-slate-500">Add data model image</span>
                                    </div>
                                  )}
                                </div>

                                {/* Caption */}
                                <p className="px-4 sm:px-5 pb-4 text-sm sm:text-[15px] leading-relaxed text-slate-600">
                                  {diagram?.caption ??
                                    'I standardized questionnaire responses and activity-based inputs into a consistent, encounter-like response envelope so downstream analytics could operate on a single schema. The model separates identity/context from response instances and item-level values, enabling versioning, partial completion, and auditable derived outputs—while maintaining NDA-safe abstractions and privacy boundaries.'}
                                </p>
                              </div>
                            </div>
                          </div>
                        </section>

                        <div className="my-6 flex flex-col items-center">
                          <div className="w-px h-6 bg-slate-200" />
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-slate-400"
                          >
                            <path
                              d="M12 5V19"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M7 14L12 19L17 14"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>

                        {/* Step 3 — Privacy, Compliance & Governance */}
                        <section id="step-3" className="scroll-mt-24">
                          <div className="rounded-none bg-white border border-slate-200 shadow-[0_14px_40px_rgba(15,23,42,0.10)] overflow-hidden">
                            <div className="px-5 py-3 bg-gradient-to-b from-[#E7F0FF] to-[#DDEAFF] border-b border-slate-200">
                              <div className="text-[13px] font-semibold tracking-wide text-slate-800">
                                {step3?.title ?? 'Step 03 — Privacy, Compliance & Governance'}
                              </div>
                            </div>
                            <div className="p-5 sm:p-6">
                              <p className="text-slate-600">
                                {step3?.subtitle ?? 'Implemented HIPAA-aligned controls and NDA-safe governance for analytics-ready data'}
                              </p>
                              <div className="mt-4 space-y-3">
                                {step3?.bullets?.map((item: any) => (
                                  <div key={item.title} className="flex items-start gap-3">
                                    <Stethoscope className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                                    <p className="text-slate-800">
                                      <span className="font-medium text-slate-900">{item.title}:</span> {item.body}
                                    </p>
                                  </div>
                                ))}
                                {!step3?.bullets?.length && (
                                  <p className="text-sm text-slate-500">No compliance details defined.</p>
                                )}
                                <p className="pt-2 text-xs text-slate-500 leading-relaxed">
                                  {step3?.note ?? 'Note: This section is written at a conceptual level to remain NDA-safe while conveying the compliance design intent.'}
                                </p>
                              </div>
                            </div>
                          </div>
                        </section>

                        {/* Impact */}
                        {(workstream.sections?.results?.length ?? 0) > 0 ? (
                          <section id="impact" className="ehr-card scroll-mt-24">
                            <h2 className="text-lg font-semibold text-slate-900">Impact</h2>
                            {renderSectionList(workstream.sections?.results)}
                          </section>
                        ) : null}

                        {/* Reflection & What I Learned */}
                        <section id="reflection" className="scroll-mt-24">
                          <div className="rounded-2xl bg-white border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,0.06)] p-5 sm:p-6">
                            <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                              Reflection
                            </div>
                            <h2 className="mt-2 text-lg sm:text-xl font-semibold text-slate-900">
                              What I learned (NDA-safe)
                            </h2>

                            {/* Translation-friendly table */}
                            <div className="mt-4 overflow-x-auto">
                              <table className="w-full text-sm">
                                <tbody className="divide-y divide-slate-100">
                                  <tr className="align-top">
                                    <td className="py-3 pr-4 font-medium text-slate-900 whitespace-nowrap">
                                      Unified structure first
                                    </td>
                                    <td className="py-3 text-slate-700">
                                      A single, standardized response envelope beats multiple bespoke tables—reducing complexity, enabling consistent analytics, and making change over time manageable.
                                    </td>
                                  </tr>
                                  <tr className="align-top">
                                    <td className="py-3 pr-4 font-medium text-slate-900 whitespace-nowrap">
                                      Compliance-by-design
                                    </td>
                                    <td className="py-3 text-slate-700">
                                      HIPAA-aligned constraints should shape the model from day one (access boundaries, auditability, and de-identification posture), not as a retrofit after the database is “done.”
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            {/* Stethoscope-bulleted takeaways */}
                            <div className="mt-5 space-y-3">
                              {[
                                'Prefer one analyzable schema over many complex, instrument-specific databases.',
                                'Design for versioning and partial completion so real-world workflows don’t break reporting.',
                                'Treat privacy, authorization, and auditability as primary requirements from the beginning.',
                              ].map((item) => (
                                <div key={item} className="flex items-start gap-3">
                                  <Stethoscope className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                                  <p className="text-slate-700">{item}</p>
                                </div>
                              ))}
                            </div>

                            <p className="mt-4 text-xs text-slate-500 leading-relaxed">
                              Written at a high level to remain NDA-safe.
                            </p>
                          </div>
                        </section>
                      </>
                    ) : isAnalyticsInsights ? (
                      <>
                        {/* Context */}
                        <section id="context" className="scroll-mt-24">
                          <div className="ehr-card">
                            <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                              Context
                            </div>
                            <h2 className="mt-2 text-xl font-semibold text-slate-900">
                              Analytics &amp; Insights (NDA-safe)
                            </h2>
                            <p className="mt-2 text-slate-600 leading-relaxed">
                              This page summarizes high-level analytical work and insights derived from de-identified, NDA-safe data. Specific identifiers, schemas, and implementation details are intentionally abstracted.
                            </p>
                          </div>
                        </section>

                        {/* Analysis Areas */}
                        <section id="analysis-areas" className="scroll-mt-24">
                          <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Analysis Areas</div>
                          <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                            {(((workstream as any).analysisAreas as { title: string; description: string }[] | undefined) ?? [
                              {
                                title: 'Engagement',
                                description: 'How users progressed through the experience and where drop-off occurred.',
                              },
                              {
                                title: 'Outcomes',
                                description: 'Trends in reported outcomes over time and differences by cohort.',
                              },
                              {
                                title: 'Cohorts',
                                description: 'Segmented patterns by usage intensity and timing to inform next experiments.',
                              },
                            ]).map((area) => (
                              <div key={area.title} className="ehr-card">
                                <div className="text-sm font-semibold text-slate-900">{area.title}</div>
                                <p className="mt-2 text-sm text-slate-600">{area.description}</p>
                              </div>
                            ))}
                          </div>
                        </section>

                        {/* Problem */}
                        <section id="problem" className="scroll-mt-24">
                          <div className="ehr-card">
                            <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                              The Problem
                            </div>
                            <p className="mt-3 text-slate-700 leading-relaxed">
                              We had longitudinal beta-user data, but it was not analytics-ready. Stakeholders needed structured insight on engagement, improvement, and feature value, but the underlying data was inconsistent and not standardized.
                            </p>

                            <div className="mt-4 space-y-3">
                              {(workstream.sections?.problem?.length
                                ? workstream.sections.problem
                                : [
                                    'No baseline for valid comparison across users and start times',
                                    'Fragmented feature data with no grouping logic',
                                    'Qualitative/ordinal inputs lacked a consistent numeric representation',
                                    'Inconsistent logging conventions across features and sessions',
                                    'Missing or sparse timestamps made time-series trends hard to interpret',
                                    'Stakeholders spent significant time reconciling numbers across tools instead of interpreting insights',
                                    'Inconsistent KPI definitions increased the risk of misaligned decisions across product, clinical, and research teams',
                                  ]
                              ).map((item) => (
                                <div key={item} className="flex items-start gap-3">
                                  <Stethoscope className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                                  <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </section>

                        {/* Solutions (step-wise) */}
                        <section id="solutions" className="scroll-mt-24">
                          <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                            Solutions
                          </div>

                          {((workstream as any).solutionSteps as
                            | {
                                step: number;
                                title: string;
                                subtitle?: string;
                                bullets: string[];
                                icon?: string;
                              }[]
                            | undefined)?.length ? (
                            <div className="mt-3 space-y-6">
                              {((workstream as any).solutionSteps as any[]).map((s) => (
                                <div key={s.step} className="flex items-start gap-4">
                                  <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-sm font-semibold">
                                    {String(s.step).padStart(2, '0')}
                                  </div>

                                  <div className="min-w-0 flex-1">
                                    <h3 className="text-xl font-semibold text-slate-900">
                                      {s.title}
                                    </h3>
                                    {s.subtitle ? (
                                      <p className="mt-1 text-slate-600">{s.subtitle}</p>
                                    ) : null}

                                    <div className="mt-3 rounded-2xl bg-white border border-slate-200 shadow-[0_8px_24px_rgba(15,23,42,0.06)] p-5 sm:p-6">
                                      <div className="space-y-3">
                                        {(s.bullets ?? []).map((item: string) => (
                                          <div key={item} className="flex items-start gap-3">
                                            <Stethoscope className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                                            <p className="text-slate-800">{item}</p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="mt-3 ehr-card">
                              <p className="text-sm text-slate-600">
                                Add steps in <span className="font-medium">projects.ts</span> → analytics-insights → <span className="font-medium">solutionSteps</span>.
                              </p>
                            </div>
                          )}
                        </section>

                        {/* Key Insights */}
                        <section id="insights" className="scroll-mt-24">
                          <div className="ehr-card">
                            <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Key Insights</div>
                            {workstream.sections?.results?.length ? (
                              <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
                                {workstream.sections.results.map((r) => (
                                  <li key={r}>{r}</li>
                                ))}
                              </ul>
                            ) : (
                              <p className="mt-3 text-sm text-slate-600">Add insight bullets in projects.ts → workstreams → analytics-insights → sections.results</p>
                            )}
                          </div>
                        </section>

                        {/* Next Steps */}
                        <section id="next-steps" className="scroll-mt-24">
                          <div className="ehr-card">
                            <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Next Steps</div>
                            {workstream.sections?.artifacts?.length ? (
                              <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
                                {workstream.sections.artifacts.map((a) => (
                                  <li key={a}>{a}</li>
                                ))}
                              </ul>
                            ) : (
                              <p className="mt-3 text-sm text-slate-600">Add next-step bullets in projects.ts → workstreams → analytics-insights → sections.artifacts</p>
                            )}
                          </div>
                        </section>
                      </>
                    ) : isHumanCenteredExperienceDesign ? (
                      <>
                        <UXHero
                          title={workstream.title ?? 'PainTools — UX/UI & Product Design'}
                          subtitle={(workstream as any).heroSubtitle ?? 'Onboarding & Consent'}
                          description={
                            workstream.overview ??
                            workstream.desc ??
                            workstream.summary ??
                            'Designed a minimalist, accessibility-first onboarding and authentication flow for a digital pain-management platform, with a focus on consent clarity, reduced cognitive load, and trust-building for users experiencing chronic pain.'
                          }
                          pills={[
                            { label: 'Role', value: (workstream as any).role ?? 'UX/UI Designer', icon: CheckSquare },
                            { label: 'Platform', value: (workstream as any).platform ?? 'Mobile', icon: Smartphone },
                            {
                              label: 'Focus',
                              value: (workstream as any).focus ?? 'Onboarding, Authentication, Consent',
                              icon: FileText,
                            },
                          ]}
                        />

                        <ProblemStatementCard
                          body={
                            workstream.sections?.problem?.join(' ') ??
                            'Users entering a pain-management app are often fatigued, anxious, or in active discomfort. Traditional onboarding flows introduce cognitive overload, small typography, and unclear consent language, increasing early drop-off and mistrust.'
                          }
                        />

                        <WireframesSection
                          caption={
                            workstream.sections?.process?.join(' ') ??
                            'Low-fidelity wireframes illustrating the onboarding, login, sign-up, post-registration confirmation flow. Designed to minimize cognitive load and support informed consent.'
                          }
                          images={((workstream as any).wireframes?.images as { src: string; alt?: string }[] | undefined) ?? undefined}
                        />
                      </>
                    ) : isUserDataWorkflow ? (
                      <>
                        <HeroQuote
                          quote={
                            <>
                              Meaningful product design starts with understanding{' '}
                              <span className="relative inline-block align-baseline">
                                <span className="line-through decoration-[rgba(15,23,42,0.55)] decoration-[3px]">
                                  users
                                </span>
                                <span
                                  className="absolute -top-2 left-1/2 -translate-x-1/2 text-[0.95em] text-slate-800"
                                  style={{
                                    fontFamily:
                                      '"Segoe Script", "Bradley Hand", "Apple Chancery", "Comic Sans MS", cursive',
                                    transform: 'translateX(-50%) rotate(-6deg)',
                                  }}
                                >
                                  people
                                </span>
                              </span>
                              —how pain shapes their lives, what motivates them each day, and the fears they navigate.
                            </>
                          }
                          subquote={
                            'To design with this level of intention, we grounded our work in a synthesized, de-identified persona based on aggregated insights (NDA-safe).'
                          }
                        />

                        <PersonaCard
                          leftBullets={[
                            'Age range: adult (mid-career), balancing work and family responsibilities',
                            'Daily constraint: variable pain levels that impact energy and planning',
                          ]}
                          contextBullets={[
                            'Managing chronic pain alongside a demanding schedule',
                            'Navigating conflicting guidance and many treatment options',
                            'Needs quick clarity during flare-ups and high-friction days',
                          ]}
                          interactionBullets={[
                            'Uses short sessions (morning / breaks / evening)',
                            'Logs pain and symptoms, then looks for actionable suggestions',
                            'Prefers reminders that are supportive, not noisy',
                          ]}
                          questionsBullets={[
                            '“What should I do today that will actually help?”',
                            '“How is my pain changing over time?”',
                            '“Which activities make things better or worse?”',
                          ]}
                          goalsBullets={[
                            'Reduce pain enough to stay engaged with daily life',
                            'Find trustworthy guidance that feels doable',
                            'Build consistency without feeling overwhelmed',
                          ]}
                          behaviorsBullets={[
                            'Struggles with consistency when symptoms escalate',
                            'Engages best with clear, actionable steps',
                            'Seeks gentle support rather than self-discipline alone',
                          ]}
                          motivationsBullets={[
                            'Maintaining independence and stability for family/work',
                            'Feeling believed and supported (not judged)',
                            'Having a clear plan for difficult days',
                          ]}
                          influencesBullets={[
                            'Clinician guidance and prior treatment experiences',
                            'Community advice and peer recommendations',
                          ]}
                        />

                        {/* --- User Journey & Navigation section --- */}
                        <section id="journey" className="scroll-mt-24">
                          <div className="mx-auto w-full px-4 sm:px-6 pb-12">
                          <div className="text-center">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                              User Journey &amp; Navigation{' '}
                              <span className="font-normal text-slate-600 italic">(Experience Layer)</span>
                            </h2>
                          </div>

                          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                              {['Onboarding','Check-in','Activity','Feedback','Follow-up'].map((title) => (
                                <div
                                  key={title}
                                  className="rounded-2xl bg-[#F7FAFF] border border-[#D6E6FF] shadow-[0_10px_24px_rgba(15,23,42,0.06)] overflow-hidden"
                                >
                                  <div className="px-4 py-5 bg-white/70 border-b border-[#D6E6FF] text-center">
                                    <div className="text-[16px] font-semibold text-slate-900">{title}</div>
                                  </div>
                                </div>
                              ))}
                          </div>

                        </div>
                        </section>
                        {/* --- End User Journey & Navigation section --- */}

                        {/* --- Experience Design Methods & Tools section --- */}
                        <section id="methods-tools" className="scroll-mt-24">
                          <div className="mx-auto max-w-[1100px] px-4 sm:px-6 pb-14">
                            <div className="text-center">
                              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                                Experience Design <span className="text-[#2B6CB0]">Methods &amp; Tools</span>
                              </h2>
                            </div>

                            <div className="mt-6 rounded-[22px] bg-[#F7FAFF] border border-[#D6E6FF] shadow-[0_10px_30px_rgba(15,23,42,0.08)] overflow-hidden">
                              {/* Top 3 columns */}
                              <div className="grid grid-cols-1 md:grid-cols-3 md:items-start md:divide-x md:divide-[#D6E6FF]">
                                {/* What I Did */}
                                <div className="p-6 sm:p-7">
                                  <div className="text-xl font-semibold text-slate-900">What I Did</div>
                                  <p className="mt-3 text-[16px] leading-relaxed text-slate-700">
                                    Mapped the end-to-end user journey to understand user intent, decision points, and friction across the experience, with a focus on sustaining engagement in a healthcare context.
                                  </p>
                                </div>

                                {/* Tools Used */}
                                <div className="p-6 sm:p-7">
                                  <div className="text-xl font-semibold text-slate-900">Tools Used</div>
                                  <div className="mt-4 space-y-4">
                                    <div className="flex items-start gap-3">
                                      <Map className="w-5 h-5 text-slate-700 mt-0.5 flex-shrink-0" />
                                      <div>
                                        <div className="text-[16px] font-semibold text-slate-900">Miro</div>
                                        <div className="text-[15px] text-slate-700 leading-relaxed">
                                          Journey mapping, experience flows, and friction annotation
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                      <PenTool className="w-5 h-5 text-slate-700 mt-0.5 flex-shrink-0" />
                                      <div>
                                        <div className="text-[16px] font-semibold text-slate-900">Figma</div>
                                        <div className="text-[15px] text-slate-700 leading-relaxed">
                                          Low-fidelity wireframes and navigation sequencing
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                      <FileText className="w-5 h-5 text-slate-700 mt-0.5 flex-shrink-0" />
                                      <div>
                                        <div className="text-[16px] font-semibold text-slate-900">Docs / Notes</div>
                                        <div className="text-[15px] text-slate-700 leading-relaxed">
                                          Synthesis of insights and iteration tracking (NDA-safe)
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* How I Did It */}
                                <div className="p-6 sm:p-7">
                                  <div className="text-xl font-semibold text-slate-900">How I Did It</div>
                                  <div className="mt-4 space-y-3">
                                    {[
                                      'Journey mapping to identify emotional and cognitive load at each stage',
                                      'User flow analysis to understand continuation, skip, and exit paths',
                                      'Low-fidelity UX wireframes to validate sequencing and information hierarchy',
                                    ].map((item) => (
                                      <div key={item} className="flex items-start gap-3">
                                        <Stethoscope className="w-5 h-5 text-[#2B6CB0] mt-0.5 flex-shrink-0" />
                                        <p className="text-[16px] leading-relaxed text-slate-700">{item}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className="h-px bg-[#D6E6FF]" />

                              {/* Outcome row */}
                              <div className="p-6 sm:p-7">
                                <div className="flex items-start gap-3">
                                  <Stethoscope className="w-6 h-6 text-[#2B6CB0] mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="text-[18px] font-semibold text-slate-900">Outcome</div>
                                    <p className="mt-2 text-[16px] leading-relaxed text-slate-700">
                                      Enabled stakeholders to understand the journey end-to-end, clarify design decisions, and streamline workflows—supporting a more effective, low-burden experience.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="h-px bg-[#D6E6FF]" />

                              {/* Why it matters row */}
                              <div className="p-6 sm:p-7">
                                <div className="flex items-start gap-3">
                                  <div className="w-6 h-6 rounded-full bg-[#EEF5FF] border border-[#D6E6FF] flex items-center justify-center mt-0.5 flex-shrink-0">
                                    <span className="text-[12px] font-semibold text-[#2B6CB0]">i</span>
                                  </div>
                                  <div>
                                    <div className="text-[18px] font-semibold text-slate-900">Why It Matters</div>
                                    <p className="mt-2 text-[16px] leading-relaxed text-slate-700">
                                      This approach keeps the experience supportive, low-friction, and adaptive—critical for sustained engagement in health and wellness applications.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Process visualization */}
                            <div className="mt-10">
                              <div className="text-center">
                                <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                                  Data Flow
                                </h3>
                              </div>
                              <div className="mx-auto max-w-[1000px]">
                                <div className="mt-6">
                                  <img
                                    src={`${import.meta.env.BASE_URL}images/processpain.png`}
                                    alt="Experience design process overview (NDA-safe)"
                                    className="w-full h-auto rounded-xl object-contain"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            </div>
                            {/* --- Process Mapping Explanation Box --- */}
                            <div className="mt-10 mx-auto max-w-[1000px]">
                              <div className="rounded-[22px] bg-[#F7FAFF] border border-[#D6E6FF] shadow-[0_12px_30px_rgba(15,23,42,0.08)] p-6 sm:p-8 space-y-6">
                                {/* What I Did */}
                                <div>
                                  <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-[#2B6CB0]" />
                                    <h3 className="text-xl font-semibold text-slate-900">What I Did</h3>
                                  </div>
                                  <p className="mt-3 text-[16px] leading-relaxed text-slate-700">
                                    Designed a layered data flow to map how information moves through the system—from platform-level inputs to core processes and supporting sub-processes. The system was decomposed into Level 0 (system boundary), Level 1 (core processes), and Level 2 (sub-processes) to clarify data ownership and flow while remaining implementation-agnostic.
                                  </p>
                                </div>

                                <div className="border-t border-dashed border-[#D6E6FF]" />

                                {/* Why It Matters */}
                                <div>
                                  <div className="flex items-center gap-3">
                                    <span className="w-7 h-7 rounded-full bg-[#FFF3CD] border border-[#F1C40F] flex items-center justify-center text-[14px]">
                                      💡
                                    </span>
                                    <h3 className="text-xl font-semibold text-slate-900">Why It Matters</h3>
                                  </div>
                                  <p className="mt-3 text-[16px] leading-relaxed text-slate-700">
                                    Clear data flow boundaries reduce ambiguity in complex health systems and enable teams to reason about scale, privacy, and reuse. This structure supports cross-functional alignment without exposing proprietary logic or workflows.
                                  </p>
                                </div>

                                <div className="border-t border-dashed border-[#D6E6FF]" />

                                {/* Impact & AI Readiness */}
                                <div>
                                  <div className="flex items-center gap-3">
                                    <span className="w-7 h-7 rounded-full bg-[#E8F5E9] border border-[#81C784] flex items-center justify-center text-[14px]">
                                      🧠
                                    </span>
                                    <h3 className="text-xl font-semibold text-slate-900">Impact &amp; AI Readiness</h3>
                                  </div>
                                  <p className="mt-3 text-[16px] leading-relaxed text-slate-700">
                                    Defining explicit data flow levels made it clear where information is generated, structured, and reused. This allowed downstream intelligence to rely on stable, well-scoped inputs for personalization and pattern detection, while preserving privacy boundaries and decoupling AI capabilities from UI and feature design.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </>
                    ) : (
                      <>
                        <section id="problem" className="ehr-card scroll-mt-24">
                          <h2 className="text-lg font-semibold text-slate-900">Problem</h2>
                          {renderSectionList(workstream.sections?.problem)}
                        </section>

                        <section id="owned" className="ehr-card scroll-mt-24">
                          <h2 className="text-lg font-semibold text-slate-900">What I Owned</h2>
                          {renderSectionList(workstream.sections?.owned)}
                        </section>

                        <section id="process" className="ehr-card scroll-mt-24">
                          <h2 className="text-lg font-semibold text-slate-900">Process / Workflow</h2>
                          {renderSectionList(workstream.sections?.process)}
                        </section>

                        <section id="artifacts" className="ehr-card scroll-mt-24">
                          <h2 className="text-lg font-semibold text-slate-900">Deliverables / Artifacts</h2>
                          {renderSectionList(workstream.sections?.artifacts)}
                        </section>

                        <section id="impact" className="ehr-card scroll-mt-24">
                          <h2 className="text-lg font-semibold text-slate-900">Impact / Learnings</h2>
                          {renderSectionList(workstream.sections?.results)}
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
