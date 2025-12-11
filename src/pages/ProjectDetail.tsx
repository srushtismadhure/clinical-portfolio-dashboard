import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { TagChip } from '@/components/shared/TagChip';
import { projects, projectDetails } from '@/data/projects';
import { Button } from '@/components/ui/button';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'approach', label: 'Approach' },
  { id: 'tools', label: 'Tools & Tech' },
  { id: 'results', label: 'Results' },
  { id: 'lessons', label: 'Lessons' },
];

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  const details = id ? projectDetails[id] : null;

  if (!project || !details) {
    return (
      <Layout title="Project Not Found">
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">Project not found</p>
          <Link to="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title={project.title}
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Projects', href: '/projects' }, { label: project.title }]}
    >
      <div className="flex gap-8">
        {/* Main Content */}
        <div className="flex-1 max-w-4xl">
          {/* Back Button */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Hero Section */}
          <div className="ehr-card mb-8 animate-fade-up">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{project.title}</h1>
                <p className="text-lg text-muted-foreground">{project.summary}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === 'Completed'
                    ? 'bg-[hsl(var(--ehr-teal)/0.15)] text-[hsl(var(--ehr-teal))]'
                    : 'bg-[hsl(var(--ehr-coral)/0.15)] text-[hsl(var(--ehr-coral))]'
                }`}
              >
                {project.status}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags?.map(tag => (
                <TagChip key={tag} label={tag} variant="lavender" size="sm" />
              ))}
            </div>

            <div className="flex gap-3">
              {details.github && (
                <a href={details.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="w-4 h-4" />
                    View Code
                  </Button>
                </a>
              )}
              {details.demo && (
                <a href={details.demo} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="gap-2 bg-[hsl(var(--ehr-teal))] hover:bg-[hsl(var(--ehr-teal)/0.9)]">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </a>
              )}
            </div>
          </div>

          {/* Overview */}
          <section id="overview" className="ehr-card mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
            <h2 className="text-xl font-semibold mb-3 text-foreground">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{details.overview}</p>
          </section>

          {/* Problem */}
          <section id="problem" className="ehr-card mb-6 animate-fade-up" style={{ animationDelay: '150ms' }}>
            <h2 className="text-xl font-semibold mb-3 text-foreground">Problem</h2>
            <p className="text-muted-foreground leading-relaxed">{details.problem}</p>
          </section>

          {/* Approach */}
          <section id="approach" className="ehr-card mb-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
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
          <section id="tools" className="ehr-card mb-6 animate-fade-up" style={{ animationDelay: '250ms' }}>
            <h2 className="text-xl font-semibold mb-3 text-foreground">Tools & Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {details.tools.map(tool => (
                <TagChip key={tool} label={tool} variant="teal" />
              ))}
            </div>
          </section>

          {/* Results */}
          <section id="results" className="ehr-card mb-6 animate-fade-up" style={{ animationDelay: '300ms' }}>
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
          <section id="lessons" className="ehr-card animate-fade-up" style={{ animationDelay: '350ms' }}>
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
        </div>

        {/* Sticky Sidebar */}
        <div className="hidden lg:block w-64">
          <div className="sticky top-6">
            <div className="ehr-card">
              <h3 className="font-semibold text-foreground mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                {sections.map(section => (
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
      </div>
    </Layout>
  );
}
