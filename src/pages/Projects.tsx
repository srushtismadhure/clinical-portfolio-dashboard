import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
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
    <Layout title="Home">
      <div className="space-y-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <section>
          <div className="mb-3 border-b border-slate-200 pb-3">
            <h3 className="text-2xl font-semibold text-slate-900">Professional Projects</h3>
            <p className="mt-1 text-sm text-slate-600 max-w-3xl">
              Work delivered in academic, clinical, startup, or organizational settings.
            </p>
          </div>
          {professionalProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {professionalProjects.map((project, index) => (
                <div key={project.id} className="animate-fade-up flex justify-center" style={{ animationDelay: `${index * 100}ms` }}>
                  <article className="w-full max-w-[460px]">
                    <ProjectCard project={project} index={index} />
                  </article>
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
          <div className="mt-10 mb-3 border-b border-slate-200 pb-3">
            <h3 className="text-[22px] font-semibold text-slate-900">Independent Projects</h3>
            <p className="mt-1 text-sm text-slate-600 max-w-3xl">
              Self-directed projects exploring healthcare analytics, AI, and system design.
            </p>
          </div>
          {personalProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {personalProjects.map((project, index) => (
                <div key={project.id} className="animate-fade-up flex justify-center" style={{ animationDelay: `${index * 100}ms` }}>
                  <article className="w-full max-w-[460px]">
                    <ProjectCard project={project} index={index} />
                  </article>
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
