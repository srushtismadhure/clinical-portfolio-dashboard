import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/shared/PageHeader';
import { ClipboardPad } from '@/components/shared/ClipboardPad';
import { PinnedNoteMedia } from '@/components/shared/PinnedNoteMedia';
import { AnimatedHighlight } from '@/components/shared/AnimatedHighlight';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { PinnedVideoCard } from '@/components/about/PinnedVideoCard';
import { SystemAccessBadge } from '@/components/about/SystemAccessBadge';
import ScrollHighlight from '@/components/about/ScrollHighlight';
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
    <Layout title="Home">
      <div className="mb-4 flex items-start gap-2">
        <Search className="w-5 h-5 text-[hsl(var(--ehr-teal))] mt-0.5" />
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
                <div className="space-y-4 text-slate-700 text-[15px] md:text-[16px] leading-7">
                  <p>
                    I <ScrollHighlight><strong className="font-semibold text-slate-800">taught myself how to code out of frustration</strong></ScrollHighlight>. During my undergrad internship, I spent hours typing patient histories and manually entering data into systems daily, just doing work that <strong className="font-semibold text-slate-800">should and could have been automated</strong>. That frustration pushed me to research solutions, and I discovered how data analysis, health informatics, and coding were being combined to solve exactly these problems. I taught myself Python and quickly realized clinical thinking and programming aren’t that different, both rely on recognizing patterns, connecting concepts, and thinking in systems.
                  </p>
                  <p>
                    Working on real healthcare systems taught me quickly that <strong className="font-semibold text-slate-800">technical skill alone isn’t enough</strong>. <ScrollHighlight>Healthcare isn’t like other industries</ScrollHighlight>. In most fields, poor design or inefficient workflows are minor inconveniences. In healthcare, the same mistake can <ScrollHighlight><strong className="font-semibold text-slate-800">delay care or cause real harm</strong></ScrollHighlight>. Building products that don’t fail demands domain knowledge and firsthand clinical experience. That’s why I design at the intersection of healthcare, data, and product, grounded in integrative medicine training and a Master’s in Health Informatics from the University of Michigan (<span className="inline-block px-1 py-[1px] rounded-sm bg-[#DCEBFF] text-[#00274C]">Go Blue</span>).
                  </p>
                  <p>
                    In execution, I own the <ScrollHighlight><strong className="font-semibold text-slate-800">full healthcare data lifecycle</strong></ScrollHighlight>, from defining metrics and building <strong className="font-semibold text-slate-800">ETL pipelines</strong> to deploying analytics, predictive models, and decision-ready dashboards. I design the underlying foundation through HIPAA compliance, BAAs, governance, and regulatory alignment. Ultimately, I build systems and analytics that <ScrollHighlight><strong className="font-semibold text-slate-800">clinicians can trust</strong></ScrollHighlight> when it matters most.
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
                      Built end-to-end data pipelines and analytics workflows to enable decision support and product insights.
                    </p>
                  </div>
                  <div className="border-l-2 border-[hsl(var(--ehr-lavender))] pl-4">
                    <h3 className="text-lg font-semibold leading-tight text-slate-900">Data Analyst</h3>
                    <p className="text-sm text-slate-600 leading-relaxed tracking-[0.01em]">Health Numerics • 2024 – 2024</p>
                    <p className="text-sm text-slate-600 leading-relaxed tracking-[0.01em] mt-2">
                      Developed predictive models and dashboards to support population health risk assessment and operational strategy.
                    </p>
                  </div>
                  <div className="border-l-2 border-[hsl(var(--ehr-teal))] pl-4">
                    <h3 className="text-lg font-semibold leading-tight text-slate-900">Healthcare Data Intern</h3>
                    <p className="text-sm text-slate-600 leading-relaxed tracking-[0.01em]">Michigan Medicine – OBI Initiative • 2024 – 2024</p>
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
