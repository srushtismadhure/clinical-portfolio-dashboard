import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/shared/PageHeader';
import { ClipboardPad } from '@/components/shared/ClipboardPad';
import { PinnedNoteMedia } from '@/components/shared/PinnedNoteMedia';
import { Highlight } from '@/components/shared/Highlight';
import { PinnedVideoCard } from '@/components/about/PinnedVideoCard';
import { SystemAccessBadge } from '@/components/about/SystemAccessBadge';
import { GraduationCap, Briefcase, Search } from 'lucide-react';

export default function About() {
  const pinnedNoteData = {
    title: 'Pinned note',
    noteText:
      'Outside work, I track habits, sketch ideas, and experiment with small systems — personal and professional.',
    images: [
      { src: '/images/ocean.png', alt: 'Pinned note image 2' },
      { src: '/images/chalk.png', alt: 'Pinned note image 3' },
      { src: '/images/stitch.png', alt: 'Pinned note image 3' },
      { src: '/images/fish.png', alt: 'Pinned note image 4' },
    ],
    video: {
      src: '/videos/animation.mp4',
      title: 'Pinned note video',
    },
  };

  return (
    <Layout title="About" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}>
      <div className="mb-4 flex items-start gap-2">
        <Search className="w-5 h-5 text-[hsl(var(--ehr-teal))]" />
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-slate-900">About Me</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <ClipboardPad>
            <div className="space-y-6">
              <div className="space-y-1">
                <h2 className="text-2xl lg:text-3xl font-semibold text-slate-900">Clinical Profile</h2>
                <div className="text-base md:text-lg leading-snug text-slate-600 flex items-baseline gap-2 max-w-[70ch]">
                  <span>Building analytics for</span>
                  <span className="whitespace-nowrap flex items-baseline gap-2">
                    <span className="line-through decoration-slate-400 decoration-2 text-slate-500">users</span>
                    <span className="text-slate-700 font-[cursive] italic -rotate-1 tracking-wide" style={{ fontFamily: '"Bradley Hand", "Segoe Print", "Comic Sans MS", "Apple Chancery", cursive' }}>people.</span>
                  </span>
                </div>
              </div>
              {/* Bio */}
              <div className="ehr-card animate-fade-up">
                <h2 className="text-xl font-semibold text-foreground mb-2">Background</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p className="text-[14px] leading-6 lg:text-[15px]">
                    I'm a healthcare business analyst with a Master's degree in Health Informatics and formal training in integrative medicine. I taught myself to code and discovered that diagnostic reasoning and debugging share the same foundation underneath: <Highlight>pattern recognition, forming hypotheses, and systematic problem-solving</Highlight>. I transitioned from working in healthcare systems to building the data systems that support them.
                  </p>
                  <p className="text-[14px] leading-6 lg:text-[15px]">
                    My background enables me to work at the intersection of <Highlight>clinical workflows</Highlight>, data systems, and product strategy. I understand clinical operations, regulatory requirements, and what drives change management and product adoption, so I shape products that are clinically sound, data-informed, and actually get used. I work upstream, bringing clinical insight from day one.
                  </p>
                  <p className="text-[14px] leading-6 lg:text-[15px]">
                    I handle the full spectrum of data work: defining what to measure, building <Highlight>ETL pipelines</Highlight>, running analyses, and delivering dashboards and predictive models, plus the unglamorous but critical pieces like <Highlight>HIPAA compliance</Highlight>, FHIR standards, data governance, and regulatory requirements. If it touches data in a healthcare context, I can help make it work.
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
                    <h3 className="font-medium text-foreground">Healthcare Data Engineer</h3>
                    <p className="text-sm text-muted-foreground">PainTools • 2025 – 2026</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Built end-to-end clinical data pipelines and analytics workflows to enable decision support and product insights.
                    </p>
                  </div>
                  <div className="border-l-2 border-[hsl(var(--ehr-lavender))] pl-4">
                    <h3 className="font-medium text-foreground">Data Analytics Engineer</h3>
                    <p className="text-sm text-muted-foreground">Health Numerics • Remote Patient Monitoring • 2024 – 2024</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Developed predictive models and dashboards to support population health risk assessment and operational strategy.
                    </p>
                  </div>
                  <div className="border-l-2 border-[hsl(var(--ehr-teal))] pl-4">
                    <h3 className="font-medium text-foreground">Healthcare Data Intern</h3>
                    <p className="text-sm text-muted-foreground">Michigan Medicine — OBI Initiative • 2024 – 2024</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Analyzed Medicaid claims data to inform maternal health quality improvement initiatives.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="ehr-card animate-fade-up" style={{ animationDelay: '200ms' }}>
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[hsl(var(--ehr-lavender))]" />
                  Education &amp; Credentials
                </h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-[hsl(var(--ehr-lavender))] pl-4 space-y-4">
                    {/* Master - primary */}
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-slate-900 leading-tight">Master of Health Informatics</h3>
                      <p className="text-sm text-slate-600">University of Michigan • 2025</p>
                      <p className="text-xs text-slate-500">
                        Clinical Data Systems • EHR • Analytics • Interoperability
                      </p>
                    </div>

                    {/* Bachelor - secondary */}
                    <div className="space-y-1 mt-6 pt-4 border-t border-slate-100">
                      <h3 className="text-sm font-medium text-slate-700">B.S. Integrative Medicine &amp; Health Sciences</h3>
                      <p className="text-xs text-slate-500">S-VYASA University • 2023</p>
                      <p className="text-xs text-slate-400">
                        Foundation in health sciences &amp; research
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ClipboardPad>
        </div>

        {/* Sidebar */}
        <div className="space-y-6 lg:-mt-6 min-w-0">
          <div className="space-y-2">
            <SystemAccessBadge />
          </div>

          {/* Pinned note media */}
          <PinnedNoteMedia
            title={pinnedNoteData.title}
            noteText={pinnedNoteData.noteText}
            images={pinnedNoteData.images}
            video={pinnedNoteData.video}
            videoComponent={
              <PinnedVideoCard title="Pinned note video" src="/videos/animation.mp4" tileMode />
            }
          />
        </div>
      </div>
    </Layout>
  );
}
