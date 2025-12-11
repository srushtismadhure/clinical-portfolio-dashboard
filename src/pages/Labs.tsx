import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/shared/PageHeader';
import { TagChip } from '@/components/shared/TagChip';
import { Sparkles, Beaker, Zap, Rocket, Code2, Brain } from 'lucide-react';

const experiments = [
  {
    title: 'AI Text Summarizer',
    description: 'Experimenting with LLMs to create clinical note summaries.',
    status: 'Active',
    icon: Brain,
    tags: ['GPT-4', 'NLP', 'Healthcare'],
  },
  {
    title: 'Voice-to-EHR Prototype',
    description: 'Speech recognition for hands-free clinical documentation.',
    status: 'Prototype',
    icon: Zap,
    tags: ['Whisper', 'Python', 'Real-time'],
  },
  {
    title: 'Health Data Visualizer',
    description: 'Interactive 3D visualizations for patient health trends.',
    status: 'Exploring',
    icon: Sparkles,
    tags: ['Three.js', 'D3', 'WebGL'],
  },
  {
    title: 'FHIR Resource Explorer',
    description: 'Tool to browse and understand FHIR healthcare data standards.',
    status: 'Active',
    icon: Code2,
    tags: ['FHIR', 'React', 'API'],
  },
  {
    title: 'Symptom Checker Bot',
    description: 'Conversational AI for basic health symptom assessment.',
    status: 'Prototype',
    icon: Beaker,
    tags: ['LangChain', 'RAG', 'Chatbot'],
  },
  {
    title: 'ML Model Playground',
    description: 'Interactive environment to test healthcare ML models.',
    status: 'Exploring',
    icon: Rocket,
    tags: ['Jupyter', 'Streamlit', 'ML'],
  },
];

const statusColors: Record<string, string> = {
  Active: 'teal',
  Prototype: 'lavender',
  Exploring: 'coral',
};

export default function Labs() {
  return (
    <Layout title="Labs" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Labs' }]}>
      <PageHeader
        title="Labs & Experiments"
        subtitle="A playground for ideas, prototypes, and creative exploration"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiments.map((experiment, index) => (
          <div
            key={experiment.title}
            className="ehr-card group cursor-pointer animate-fade-up hover:border-[hsl(var(--ehr-teal)/0.5)]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--ehr-teal)/0.1)] to-[hsl(var(--ehr-lavender)/0.2)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <experiment.icon className="w-6 h-6 text-[hsl(var(--ehr-teal))]" />
              </div>
              <span className={`text-xs px-2 py-1 rounded-full font-medium bg-[hsl(var(--ehr-${statusColors[experiment.status]})/0.15)] text-[hsl(var(--ehr-${statusColors[experiment.status]}))]`}>
                {experiment.status}
              </span>
            </div>

            <h3 className="font-semibold text-foreground mb-2 group-hover:text-[hsl(var(--ehr-teal))] transition-colors">
              {experiment.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">{experiment.description}</p>

            <div className="flex flex-wrap gap-2">
              {experiment.tags.map(tag => (
                <TagChip key={tag} label={tag} variant="cream" size="sm" />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Fun CTA */}
      <div className="mt-12 text-center">
        <div className="ehr-card inline-block animate-fade-up" style={{ animationDelay: '600ms' }}>
          <Sparkles className="w-8 h-8 text-[hsl(var(--ehr-coral))] mx-auto mb-3" />
          <p className="text-muted-foreground">
            More experiments brewing... Stay tuned! ✨
          </p>
        </div>
      </div>
    </Layout>
  );
}
