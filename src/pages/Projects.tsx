import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/shared/PageHeader';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { FilterBar } from '@/components/shared/FilterBar';
import { projects } from '@/data/projects';

const filters = ['All', 'Analytics', 'AI/LLM', 'Data Engineering', 'UX', 'Dashboards'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);
  const professionalProjects = filteredProjects.filter(p => p.projectType === 'professional');
  const personalProjects = filteredProjects.filter(p => p.projectType === 'personal');
  const hasPersonalProjects = projects.some(p => p.projectType === 'personal');

  return (
    <Layout title="Projects" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}>
      <PageHeader
        title="Projects"
        subtitle="Explore my work in healthcare analytics, AI, and data engineering"
      />

      <FilterBar
        filters={filters}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <div className="space-y-10">
        <section>
          <div className="mb-6">
            <h3 className="font-semibold text-foreground mb-2">Professional Projects</h3>
            <p className="text-sm text-muted-foreground">
              Work delivered in academic, clinical, startup, or organizational settings.
            </p>
          </div>
          {professionalProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professionalProjects.map((project, index) => (
                <div key={project.id} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              No projects found in this category.
            </div>
          )}
        </section>

        <section>
          <div className="mb-6">
            <h3 className="font-semibold text-foreground mb-2">Independent Projects</h3>
            <p className="text-sm text-muted-foreground">
              Self-directed projects exploring healthcare analytics, AI, and system design.
            </p>
          </div>
          {personalProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {personalProjects.map((project, index) => (
                <div key={project.id} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              {hasPersonalProjects ? 'No projects found in this category.' : 'Coming soon.'}
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
}
