import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Network, BookText, BarChart3 } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import ShredderScrollScene from '@/components/animations/ShredderScrollScene';
import ProjectSidebarNav, { ProjectNavItem } from '@/components/project/ProjectSidebarNav';
import { useScrollSpy } from '@/hooks/useScrollSpy';

export default function NLPAnalytics() {
  const navItems: ProjectNavItem[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'problem', label: 'Problem' },
    { id: 'insights', label: 'Insights' },
    { id: 'project-summary', label: 'Project Summary' },
  ];
  const activeId = useScrollSpy(navItems.map((n) => n.id));
  const onJump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', `#${id}`);
  };

  return (
    <Layout
      title="Clinical NLP & Unstructured Data Analysis"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '/projects' },
        { label: 'Health Numerics', href: '/projects/health-numerics' },
        { label: 'Clinical NLP' },
      ]}
      contentClassName="bg-slate-50"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10 py-8 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-0">
        <aside className="hidden lg:block pr-6 border-r border-slate-200 bg-transparent">
          <div className="sticky top-0 h-screen overflow-hidden py-6">
            <ProjectSidebarNav
              title="Clinical NLP"
              subtitle="Unstructured → Signals"
              items={navItems}
              activeId={activeId}
              onJump={onJump}
            />
          </div>
        </aside>

        <main className="min-w-0 space-y-8 lg:pl-6">
            <Link
              to="/projects/health-numerics"
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Health Numerics
            </Link>

            <header id="overview" className="space-y-2 scroll-mt-24">
              <h1 className="text-3xl font-semibold text-slate-900 leading-tight">
                Clinical NLP & Unstructured Data Analysis
              </h1>
              <p className="text-sm text-slate-600 max-w-3xl">
                Turned unstructured clinical text into structured signals that enrich analytics, routing, and risk models.
              </p>
            </header>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900 mb-2">Project Summary</h2>
              <p className="text-sm text-slate-700">
                Built a de-identified NLP pipeline that ingests clinical notes, patient messages, and survey free-text, applies preprocessing,
                embeddings, and lightweight classifiers, then outputs ontology-aligned signals (intents, entities, Z-codes) that feed care
                routing, dashboards, and downstream predictive models.
              </p>
            </section>

            {/* Scroll-driven shredder narrative (kept) */}
            <div className="mt-4">
              <ShredderScrollScene />
            </div>

            <section id="problem" className="scroll-mt-24 mt-16">
              <h2 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <BookText className="h-5 w-5 text-slate-600" /> Problem & Context
              </h2>
              <div className="grid gap-6 lg:grid-cols-2">
                <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">Use Cases & Text Sources</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc list-inside">
                    <li>Clinical notes, patient messages, survey free-text, and triage comments.</li>
                    <li>Routing for care management, symptom clustering, intent and topic detection.</li>
                    <li>Signals feed dashboards and trigger downstream predictive models.</li>
                  </ul>
                </article>

                <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">NLP Pipeline Design</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc list-inside">
                    <li>Preprocessing: de-id, tokenization, negation handling, domain stop-words.</li>
                    <li>Embeddings + lightweight classifiers for intent/topics and clinical concepts.</li>
                    <li>Labeling/ontology alignment for downstream feature reuse.</li>
                  </ul>
                </article>
              </div>
            </section>

            <section id="insights" className="scroll-mt-24 mt-10">
              <h2 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-slate-600" /> Insights
              </h2>
              <div className="grid gap-6 lg:grid-cols-2">
                <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">Feature Extraction & Labeling</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc list-inside">
                    <li>Symptom/entity extraction with confidence thresholds and reviewer loops.</li>
                    <li>Clustering to group intents and surface emergent themes.</li>
                    <li>Output features packaged for analytics and ML feature store.</li>
                  </ul>
                </article>

                <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">Analytics & Insight Generation</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc list-inside">
                    <li>Dashboards combining NLP signals with structured metrics for care ops.</li>
                    <li>Feedback loops from analysts/clinicians to refine tagging and routing.</li>
                    <li>Integration with predictive models to boost recall and precision on target outcomes.</li>
                  </ul>
                </article>
              </div>
            </section>

      </main>
    </div>
  </Layout>
  );
}
