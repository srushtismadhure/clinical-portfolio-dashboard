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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div key={project.id} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No projects found in this category.
        </div>
      )}
    </Layout>
  );
}
