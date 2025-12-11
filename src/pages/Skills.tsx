import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/shared/PageHeader';
import { SkillSection } from '@/components/shared/SkillSection';
import { Code2, Wrench, Layers, Cloud, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Python', 'R', 'SQL', 'JavaScript', 'TypeScript', 'HTML/CSS'],
    variant: 'teal' as const,
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['Power BI', 'Tableau', 'Databricks', 'VS Code', 'Jupyter', 'Git'],
    variant: 'lavender' as const,
  },
  {
    title: 'Frameworks & Libraries',
    icon: Layers,
    skills: ['React', 'Pandas', 'Scikit-learn', 'TensorFlow', 'LangChain', 'Spark'],
    variant: 'blue' as const,
  },
  {
    title: 'Cloud & Databases',
    icon: Cloud,
    skills: ['Azure', 'AWS', 'PostgreSQL', 'MongoDB', 'Snowflake', 'Redis'],
    variant: 'coral' as const,
  },
  {
    title: 'Specialties',
    icon: Sparkles,
    skills: ['ETL Pipelines', 'Predictive Modeling', 'LLM Integration', 'FHIR/HL7', 'UX Research', 'SDOH Analytics', 'Clinical Data', 'Data Visualization'],
    variant: 'cream' as const,
  },
];

export default function Skills() {
  return (
    <Layout title="Skills" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Skills' }]}>
      <PageHeader
        title="Skills & Expertise"
        subtitle="Technical capabilities and domain knowledge"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={category.title}
            className="animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <SkillSection
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              variant={category.variant}
            />
          </div>
        ))}
      </div>

      {/* Proficiency Legend */}
      <div className="mt-8 ehr-card animate-fade-up" style={{ animationDelay: '500ms' }}>
        <h3 className="font-semibold text-foreground mb-4">Proficiency Levels</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[hsl(var(--ehr-teal))]" />
            <span className="text-sm text-muted-foreground">Expert - Production-ready implementations</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[hsl(var(--ehr-lavender))]" />
            <span className="text-sm text-muted-foreground">Proficient - Strong working knowledge</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[hsl(var(--ehr-cream))] border border-border" />
            <span className="text-sm text-muted-foreground">Familiar - Growing experience</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
