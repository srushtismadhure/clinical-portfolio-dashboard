import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/shared/PageHeader';
import { TagChip } from '@/components/shared/TagChip';
import { ClipboardPad } from '@/components/shared/ClipboardPad';
import { PinnedNoteMedia } from '@/components/shared/PinnedNoteMedia';
import { MapPin, GraduationCap, Briefcase, Heart, Search } from 'lucide-react';

export default function About() {
  const pinnedNoteData = {
    title: 'Pinned note',
    noteText:
      'Outside work, I track habits, sketch ideas, and experiment with small systems — personal and professional.',
    images: [
      { src: '/images/about/note-1.jpg', alt: 'Pinned note image 1' },
      { src: '/images/about/note-2.jpg', alt: 'Pinned note image 2' },
      { src: '/images/about/note-3.jpg', alt: 'Pinned note image 3' },
      { src: '/images/about/note-4.jpg', alt: 'Pinned note image 4' },
    ],
    video: {
      src: '/videos/about/pinned-note.mp4',
      poster: '/images/about/note-video.jpg',
      title: 'Pinned note video',
    },
  };

  return (
    <Layout title="About" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}>
      <div className="flex items-center gap-2">
        <Search className="w-5 h-5 text-[hsl(var(--ehr-teal))]" />
        <PageHeader
          title="About Me"
          subtitle="Define, Collect, Analyze, Visualize, Deploy"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <ClipboardPad>
            <div className="space-y-6">
              {/* Bio */}
              <div className="ehr-card animate-fade-up">
                <h2 className="text-xl font-semibold text-foreground mb-2">Background</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    I'm a healthcare business analyst with a Master's degree in Health Informatics and formal training in integrative medicine. I taught myself to code and discovered that diagnostic reasoning and debugging share the same foundation underneath: pattern recognition, forming hypotheses, and systematic problem-solving. I transitioned from working in healthcare systems to building the data systems that support them.
                  </p>
                  <p>
                    My background enables me to work at the intersection of clinical workflows, data systems, and product strategy. I understand clinical operations, regulatory requirements, and what drives change management and product adoption, so I shape products that are clinically sound, data-informed, and actually get used. I work upstream, bringing clinical insight from day one.
                  </p>
                  <p>
                    I handle the full spectrum of data work: defining what to measure, building ETL pipelines, running analyses, and delivering dashboards and predictive models, plus the unglamorous but critical pieces like HIPAA compliance, FHIR standards, data governance, and regulatory requirements. If it touches data in a healthcare context, I can help make it work.
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
          </ClipboardPad>
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

          {/* Pinned note media */}
          <PinnedNoteMedia
            title={pinnedNoteData.title}
            noteText={pinnedNoteData.noteText}
            images={pinnedNoteData.images}
            video={pinnedNoteData.video}
          />
        </div>
      </div>
    </Layout>
  );
}
