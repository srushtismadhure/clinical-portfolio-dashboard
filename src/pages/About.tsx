import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/shared/PageHeader';
import { ClipboardPad } from '@/components/shared/ClipboardPad';
import { PinnedNoteMedia } from '@/components/shared/PinnedNoteMedia';
import { AnimatedHighlight } from '@/components/shared/AnimatedHighlight';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { PinnedVideoCard } from '@/components/about/PinnedVideoCard';
import { SystemAccessBadge } from '@/components/about/SystemAccessBadge';
import VolunteerStrip from '@/components/VolunteerStrip';
import { GraduationCap, Briefcase, Search } from 'lucide-react';

export default function About() {
  const pinnedNoteData = {
    title: 'Life Dashboard',
    subtitle: 'Full-time analyst, part-time artist.',
    noteText:
      "In my free time, I'm pulling the messy, half-baked ideas out of my brain and trying to make sense of them through sketching, oil painting, and abstract work.",
    images: [
      { src: '/images/snow.webp', alt: 'Pinned note image 1' },
      { src: '/images/b.webp', alt: 'Pinned note image 2' },
      { src: '/images/goat.webp', alt: 'Pinned note image 3' },
      { src: '/images/fish.webp', alt: 'Pinned note image 4' },
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
                <h2 className="text-2xl lg:text-3xl font-semibold text-[#1E3A5F]">Clinical Profile</h2>
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
                <SectionHeader title="Background" />
                <div className="space-y-3 text-slate-600">
                  <p className="text-[14px] lg:text-[15px] text-slate-600 leading-relaxed tracking-[0.01em]">
                    I taught myself how to code out of frustration. I was manually entering patient data into outdated legacy systems daily, really just doing work that should and could have been automated. This pushed me to find an unconventional solution—coding. I went from diagnostics to debugging and realized they share the same foundation: <AnimatedHighlight>pattern recognition, systematic problem-solving, and root-cause analysis.</AnimatedHighlight>
                  </p>
                  <p className="text-[14px] lg:text-[15px] text-slate-600 leading-relaxed tracking-[0.01em]">
                    Today, I work at the intersection of healthcare, data, and product. With a <strong className="font-bold text-slate-900">Master’s degree in Health Informatics from the University of Michigan</strong> <AnimatedHighlight color="rgba(30, 64, 175, 0.18)">(Go Blue)</AnimatedHighlight> and formal training in <strong className="font-bold text-slate-900">integrative medicine</strong>, I bridge clinical thinking with data engineering to build systems and tools that are clinically sound, data-informed, and actually used in real care settings.
                  </p>
                  <p className="text-[14px] lg:text-[15px] text-slate-600 leading-relaxed tracking-[0.01em]">
                    I handle the full spectrum of data work: defining what to measure, building <AnimatedHighlight>ETL pipelines</AnimatedHighlight>, running analyses, and delivering dashboards and predictive models, plus the unglamorous but critical pieces like <AnimatedHighlight>HIPAA compliance</AnimatedHighlight>, FHIR standards, data governance, and regulatory requirements. If it touches data in a healthcare context, I can help make it work.
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="ehr-card animate-fade-up" style={{ animationDelay: '100ms' }}>
                <SectionHeader title="Experience" icon={Briefcase} />
                <div className="space-y-4">
                  <div className="border-l-2 border-[hsl(var(--ehr-teal))] pl-4">
                    <h3 className="text-lg font-semibold leading-tight text-slate-900">Business Analyst</h3>
                    <p className="text-sm text-slate-600 leading-relaxed tracking-[0.01em]">PainTools • 2025 – 2026</p>
                    <p className="text-sm text-slate-600 leading-relaxed tracking-[0.01em] mt-2">
                      Built end-to-end clinical data pipelines and analytics workflows to enable decision support and product insights.
                    </p>
                  </div>
                  <div className="border-l-2 border-[hsl(var(--ehr-lavender))] pl-4">
                    <h3 className="text-lg font-semibold leading-tight text-slate-900">Data Analyst</h3>
                    <p className="text-sm text-slate-600 leading-relaxed tracking-[0.01em]">Health Numerics • Remote Patient Monitoring • 2024 – 2024</p>
                    <p className="text-sm text-slate-600 leading-relaxed tracking-[0.01em] mt-2">
                      Developed predictive models and dashboards to support population health risk assessment and operational strategy.
                    </p>
                  </div>
                  <div className="border-l-2 border-[hsl(var(--ehr-teal))] pl-4">
                    <h3 className="text-lg font-semibold leading-tight text-slate-900">Healthcare Data Intern</h3>
                    <p className="text-sm text-slate-600 leading-relaxed tracking-[0.01em]">Michigan Medicine — OBI Initiative • 2024 – 2024</p>
                    <p className="text-sm text-slate-600 leading-relaxed tracking-[0.01em] mt-2">
                      Analyzed Medicaid claims data to inform maternal health quality improvement initiatives.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="ehr-card animate-fade-up" style={{ animationDelay: '200ms' }}>
                <SectionHeader title="Education & Credentials" icon={GraduationCap} />
                <div className="space-y-4">
                  <div className="border-l-2 border-[hsl(var(--ehr-lavender))] pl-4 space-y-4">
                    {/* Master - primary */}
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-tight text-slate-900">Master of Health Informatics</h3>
                      <p className="text-sm text-slate-600">University of Michigan • 2025</p>
                      <p className="text-sm text-slate-600 leading-relaxed tracking-[0.01em]">
                        Clinical Data Systems • EHR • Analytics • Interoperability
                      </p>
                    </div>

                    {/* Bachelor - secondary */}
                    <div className="space-y-1 mt-6 pt-4 border-t border-slate-100">
                      <h3 className="text-lg font-semibold leading-tight text-slate-900">B.S. Integrative Medicine &amp; Health Sciences</h3>
                      <p className="text-sm text-slate-600">S-VYASA University • 2023</p>
                      <p className="text-sm text-slate-600 leading-relaxed tracking-[0.01em]">
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
            subtitle={pinnedNoteData.subtitle}
            noteText={pinnedNoteData.noteText}
            images={pinnedNoteData.images}
            video={pinnedNoteData.video}
            videoComponent={
              <PinnedVideoCard title="Pinned note video" src="/videos/animation.mp4" tileMode />
            }
          />

          <VolunteerStrip />
        </div>
      </div>
    </Layout>
  );
}
