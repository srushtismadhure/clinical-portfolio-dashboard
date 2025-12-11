import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Download, Briefcase, GraduationCap, Award, Code2 } from 'lucide-react';
import { TagChip } from '@/components/shared/TagChip';

export default function Resume() {
  return (
    <Layout title="Resume" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Resume' }]}>
      <PageHeader
        title="Resume"
        subtitle="Professional experience and qualifications"
      >
        <Button className="mt-4 gap-2 bg-[hsl(var(--ehr-teal))] hover:bg-[hsl(var(--ehr-teal)/0.9)]">
          <Download className="w-4 h-4" />
          Download PDF
        </Button>
      </PageHeader>

      <div className="max-w-3xl space-y-8">
        {/* Experience Section */}
        <section className="animate-fade-up">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-[hsl(var(--ehr-teal))]" />
            Professional Experience
          </h2>
          <div className="space-y-4">
            <div className="ehr-card">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-foreground">Health Data Analyst</h3>
                  <p className="text-sm text-[hsl(var(--ehr-teal))]">Healthcare Organization</p>
                </div>
                <span className="text-sm text-muted-foreground">2022 - Present</span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2 mt-3">
                <li>• Developed predictive models achieving 85% accuracy in patient outcome prediction</li>
                <li>• Built interactive Power BI dashboards used by 200+ clinical staff</li>
                <li>• Led ETL pipeline development processing 50M+ records daily</li>
              </ul>
            </div>

            <div className="ehr-card">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-foreground">Data Engineering Intern</h3>
                  <p className="text-sm text-[hsl(var(--ehr-teal))]">Health Tech Startup</p>
                </div>
                <span className="text-sm text-muted-foreground">2021 - 2022</span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2 mt-3">
                <li>• Implemented FHIR-compliant data integration pipelines</li>
                <li>• Reduced data processing time by 40% through optimization</li>
                <li>• Collaborated on UX research for clinical dashboard design</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="animate-fade-up" style={{ animationDelay: '100ms' }}>
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[hsl(var(--ehr-lavender))]" />
            Education
          </h2>
          <div className="ehr-card">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-foreground">Master of Health Informatics</h3>
                <p className="text-sm text-[hsl(var(--ehr-lavender))]">University of Michigan</p>
              </div>
              <span className="text-sm text-muted-foreground">2023</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Concentration in Clinical Informatics and Health Data Analytics
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="animate-fade-up" style={{ animationDelay: '200ms' }}>
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-[hsl(var(--ehr-blue))]" />
            Technical Skills
          </h2>
          <div className="ehr-card">
            <div className="flex flex-wrap gap-2">
              {['Python', 'R', 'SQL', 'Power BI', 'Tableau', 'Databricks', 'Machine Learning', 'FHIR', 'ETL', 'React', 'Azure'].map(skill => (
                <TagChip key={skill} label={skill} variant="teal" size="sm" />
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="animate-fade-up" style={{ animationDelay: '300ms' }}>
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-[hsl(var(--ehr-coral))]" />
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Azure Data Engineer Associate',
              'Healthcare Data Analytics Certificate',
              'FHIR Proficiency',
              'Power BI Data Analyst',
            ].map(cert => (
              <div key={cert} className="ehr-card flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--ehr-coral)/0.15)] flex items-center justify-center">
                  <Award className="w-5 h-5 text-[hsl(var(--ehr-coral))]" />
                </div>
                <span className="text-sm font-medium text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
