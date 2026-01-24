import { Link, useParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';

const renderSectionList = (items?: string[]) => {
  if (!items || items.length === 0) {
    return <p className="text-sm text-slate-500">N/A</p>;
  }

  return (
    <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc pl-4">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default function PainToolsWorkstreamDetail() {
  const { projectId, workstreamId } = useParams<{
    projectId: string;
    workstreamId: string;
  }>();

  const project = projects.find((p) => p.id === projectId);
  const workstream = project?.workstreams?.find(
    (w) => w.routeSlug === workstreamId || w.id === workstreamId
  );

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
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">Workstream not found</p>
          <Link to="/projects">
            <Button>Back to Projects</Button>
          </Link>
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
      <div className="space-y-6">
        {/* ✅ Back to project hub */}
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to {project.title}
        </Link>

        <header className="ehr-card">
          <div className="text-sm text-slate-500">
            <Link to={`/projects/${project.id}`} className="hover:text-slate-700">
              {project.title}
            </Link>
          </div>

          <h1 className="mt-2 text-2xl font-semibold text-slate-900">{workstream.title}</h1>
          <p className="mt-1 text-slate-600">{workstream.summary}</p>
        </header>

        <section className="ehr-card">
          <h2 className="text-lg font-semibold text-slate-900">Problem</h2>
          {renderSectionList(workstream.sections?.problem)}
        </section>

        <section className="ehr-card">
          <h2 className="text-lg font-semibold text-slate-900">What I Owned</h2>
          {renderSectionList(workstream.sections?.owned)}
        </section>

        <section className="ehr-card">
          <h2 className="text-lg font-semibold text-slate-900">Process / Workflow</h2>
          {renderSectionList(workstream.sections?.process)}
        </section>

        <section className="ehr-card">
          <h2 className="text-lg font-semibold text-slate-900">Deliverables / Artifacts</h2>
          {renderSectionList(workstream.sections?.artifacts)}
        </section>

        <section className="ehr-card">
          <h2 className="text-lg font-semibold text-slate-900">Impact / Learnings</h2>
          {renderSectionList(workstream.sections?.results)}
        </section>
      </div>
    </Layout>
  );
}