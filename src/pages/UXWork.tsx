import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/shared/PageHeader';
import { TagChip } from '@/components/shared/TagChip';
import { Eye, Figma, Users, Lightbulb } from 'lucide-react';

const uxProjects = [
  {
    title: 'Patient Portal Redesign',
    description: 'Streamlined patient experience for appointment booking and health records access.',
    tags: ['User Research', 'Wireframing', 'Prototyping'],
    icon: Users,
    color: 'teal',
  },
  {
    title: 'Clinical Dashboard UX',
    description: 'Designed intuitive dashboards for healthcare providers to monitor patient metrics.',
    tags: ['Data Visualization', 'Usability Testing', 'Figma'],
    icon: Figma,
    color: 'lavender',
  },
  {
    title: 'Mobile Health App',
    description: 'Created a mobile-first design for medication tracking and health reminders.',
    tags: ['Mobile Design', 'Accessibility', 'User Testing'],
    icon: Lightbulb,
    color: 'coral',
  },
  {
    title: 'Telehealth Platform',
    description: 'Designed video consultation interface with integrated health tools.',
    tags: ['Service Design', 'Journey Mapping', 'Prototyping'],
    icon: Eye,
    color: 'blue',
  },
];

export default function UXWork() {
  return (
    <Layout title="UX Work" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'UX Work' }]}>
      <PageHeader
        title="UX Design Portfolio"
        subtitle="User experience research and design projects in digital health"
      />

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {uxProjects.map((project, index) => (
          <div
            key={project.title}
            className="ehr-card group cursor-pointer animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Preview Area */}
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-[hsl(var(--ehr-teal)/0.05)] to-[hsl(var(--ehr-lavender)/0.1)] mb-4 flex items-center justify-center group-hover:from-[hsl(var(--ehr-teal)/0.1)] group-hover:to-[hsl(var(--ehr-lavender)/0.2)] transition-all duration-300">
              <div className={`w-20 h-20 rounded-2xl bg-[hsl(var(--ehr-${project.color})/0.2)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className={`w-10 h-10 text-[hsl(var(--ehr-${project.color}))]`} />
              </div>
            </div>

            {/* Content */}
            <h3 className="font-semibold text-foreground mb-2 group-hover:text-[hsl(var(--ehr-teal))] transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <TagChip key={tag} label={tag} variant={project.color as any} size="sm" />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Process Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">My UX Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {['Research', 'Define', 'Design', 'Test'].map((phase, index) => (
            <div
              key={phase}
              className="ehr-card text-center animate-fade-up"
              style={{ animationDelay: `${(index + 4) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--ehr-teal)/0.15)] flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-[hsl(var(--ehr-teal))]">{index + 1}</span>
              </div>
              <h4 className="font-semibold text-foreground">{phase}</h4>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
