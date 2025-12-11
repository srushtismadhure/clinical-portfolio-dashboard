import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/shared/PageHeader';
import { TagChip } from '@/components/shared/TagChip';
import { MapPin, GraduationCap, Briefcase, Heart } from 'lucide-react';

export default function About() {
  return (
    <Layout title="About" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}>
      <PageHeader
        title="About Me"
        subtitle="Health informatics professional passionate about data-driven healthcare"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Bio */}
          <div className="ehr-card animate-fade-up">
            <h2 className="text-xl font-semibold text-foreground mb-4">Background</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a Health Informatics professional with a passion for leveraging data and technology 
                to improve healthcare outcomes. Based in Ann Arbor, MI, I specialize in predictive analytics, 
                data engineering, and user experience design for clinical applications.
              </p>
              <p>
                My work bridges the gap between complex healthcare data systems and actionable insights, 
                helping organizations make better decisions and deliver improved patient care.
              </p>
              <p>
                When I'm not diving into data pipelines or building ML models, you'll find me exploring 
                new ways to make healthcare technology more accessible and user-friendly.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="ehr-card animate-fade-up" style={{ animationDelay: '100ms' }}>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[hsl(var(--ehr-teal))]" />
              Experience
            </h2>
            <div className="space-y-4">
              <div className="border-l-2 border-[hsl(var(--ehr-teal))] pl-4">
                <h3 className="font-medium text-foreground">Health Data Analyst</h3>
                <p className="text-sm text-muted-foreground">Healthcare Organization • 2022 - Present</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Building predictive models and analytics dashboards to support clinical decision-making.
                </p>
              </div>
              <div className="border-l-2 border-[hsl(var(--ehr-lavender))] pl-4">
                <h3 className="font-medium text-foreground">Data Engineering Intern</h3>
                <p className="text-sm text-muted-foreground">Health Tech Startup • 2021 - 2022</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Developed ETL pipelines for EHR data integration and FHIR compliance.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="ehr-card animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[hsl(var(--ehr-lavender))]" />
              Education
            </h2>
            <div className="border-l-2 border-[hsl(var(--ehr-lavender))] pl-4">
              <h3 className="font-medium text-foreground">Master of Health Informatics</h3>
              <p className="text-sm text-muted-foreground">University of Michigan • 2023</p>
              <p className="text-sm text-muted-foreground mt-2">
                Focus on clinical informatics, data analytics, and healthcare UX design.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Info */}
          <div className="ehr-card animate-fade-up" style={{ animationDelay: '300ms' }}>
            <div className="text-center mb-4">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[hsl(var(--ehr-teal)/0.2)] to-[hsl(var(--ehr-lavender)/0.3)] mx-auto flex items-center justify-center">
                <span className="text-3xl font-bold text-[hsl(var(--ehr-teal))]">SM</span>
              </div>
              <h3 className="font-semibold text-foreground mt-3">Srushti S. Madhure</h3>
              <p className="text-sm text-muted-foreground">Health Informatics • Analytics</p>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Ann Arbor, MI
            </div>
          </div>

          {/* Interests */}
          <div className="ehr-card animate-fade-up" style={{ animationDelay: '400ms' }}>
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Heart className="w-4 h-4 text-[hsl(var(--ehr-coral))]" />
              Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Healthcare Innovation', 'Data Ethics', 'AI Safety', 'UX Design', 'Open Source'].map(interest => (
                <TagChip key={interest} label={interest} variant="cream" size="sm" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
