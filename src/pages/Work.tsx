import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/shared/PageHeader';
import { ArrowRight, BarChart3, Database, Brain, Palette } from 'lucide-react';

const workCategories = [
  {
    title: 'Analytics & ML',
    description: 'Predictive modeling, statistical analysis, and machine learning projects.',
    icon: BarChart3,
    link: '/projects?filter=Analytics',
    color: 'teal',
    count: 4,
  },
  {
    title: 'Data Engineering',
    description: 'ETL pipelines, data integration, and infrastructure work.',
    icon: Database,
    link: '/projects?filter=Data Engineering',
    color: 'blue',
    count: 2,
  },
  {
    title: 'AI & LLMs',
    description: 'Large language model integrations and AI-powered applications.',
    icon: Brain,
    link: '/projects?filter=AI/LLM',
    color: 'lavender',
    count: 3,
  },
  {
    title: 'UX & Design',
    description: 'User experience research and interface design for healthcare.',
    icon: Palette,
    link: '/ux-work',
    color: 'coral',
    count: 5,
  },
];

export default function Work() {
  return (
    <Layout title="Work" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Work' }]}>
      <PageHeader
        title="My Work"
        subtitle="Explore my professional portfolio across different domains"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {workCategories.map((category, index) => (
          <Link
            key={category.title}
            to={category.link}
            className="ehr-card group animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-2xl bg-[hsl(var(--ehr-${category.color})/0.15)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className={`w-7 h-7 text-[hsl(var(--ehr-${category.color}))]`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-[hsl(var(--ehr-teal))] transition-colors">
                    {category.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-[hsl(var(--ehr-teal))] group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                <span className="text-xs font-medium text-[hsl(var(--ehr-teal))]">
                  {category.count} projects
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[hsl(var(--ehr-teal))] text-white rounded-full font-medium hover:bg-[hsl(var(--ehr-teal)/0.9)] transition-colors"
        >
          View All Projects
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Layout>
  );
}
