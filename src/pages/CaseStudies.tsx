import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/shared/PageHeader';
import { TagChip } from '@/components/shared/TagChip';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';

export default function CaseStudies() {
  const caseStudies = projects.filter(p => p.status === 'Completed').slice(0, 4);

  return (
    <Layout title="Case Studies" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Case Studies' }]}>
      <PageHeader
        title="Case Studies"
        subtitle="Deep dives into my most impactful projects"
      />

      <div className="space-y-6">
        {caseStudies.map((study, index) => (
          <Link
            key={study.id}
            to={`/projects/${study.id}`}
            className="ehr-card block group animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Thumbnail */}
              <div className="w-full md:w-64 aspect-video rounded-xl bg-gradient-to-br from-[hsl(var(--ehr-teal)/0.1)] to-[hsl(var(--ehr-lavender)/0.2)] flex items-center justify-center flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--ehr-teal)/0.2)] flex items-center justify-center">
                  <span className="text-2xl font-bold text-[hsl(var(--ehr-teal))]">{index + 1}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-[hsl(var(--ehr-teal))] transition-colors">
                    {study.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-[hsl(var(--ehr-teal))] group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-muted-foreground mb-4">{study.summary}</p>
                <div className="flex flex-wrap gap-2">
                  <TagChip label={study.category} variant="teal" size="sm" />
                  {study.tags?.slice(0, 3).map(tag => (
                    <TagChip key={tag} label={tag} variant="lavender" size="sm" />
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
