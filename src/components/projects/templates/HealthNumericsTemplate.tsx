import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

type Pillar = {
  id: 'predictive-analytics' | 'nlp';
  icon: React.ElementType;
  title: string;
  description: string;
  to: string;
  tabColor: 'sky' | 'lavender';
};

function FaCheckIcon({ className }: { className?: string }) {
  return (
    <i
      className={`fa-solid fa-check text-[20px] leading-none ${className ?? ''}`}
      aria-hidden="true"
    />
  );
}

function FaBookMedicalIcon({ className }: { className?: string }) {
  return (
    <i
      className={`fa-solid fa-book-medical text-[20px] leading-none ${className ?? ''}`}
      aria-hidden="true"
    />
  );
}

const pillars: Pillar[] = [
  {
    id: 'predictive-analytics',
    icon: FaCheckIcon,
    title: 'Predictive Analytics & Risk Modeling',
    description:
      'Built and validated predictive models to identify risk, cost drivers, and outcome gaps across patient populations.',
    to: '/projects/health-numerics/predictive-analytics',
    tabColor: 'sky',
  },
  {
    id: 'nlp',
    icon: FaBookMedicalIcon,
    title: 'Clinical NLP & Unstructured Data Analysis',
    description:
      'Built NLP models to surface Z-codes from unstructured clinical and patient-generated text, improving documentation completeness, and reimbursement capture.',
    to: '/projects/health-numerics/nlp',
    tabColor: 'lavender',
  },
];

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-[#E3D9CB] bg-[#FFFDF7] px-3 py-1 text-xs text-slate-700">
      {children}
    </span>
  );
}

export default function HealthNumericsTemplate() {
  return (
    <div className="paintools-dossier mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
      {/* Back link */}
      <div className="mb-3">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </div>

      {/* Hero */}
      <header className="rounded-lg border border-[#E3D9CB] bg-[#FBF8F2] p-4 sm:p-5 mb-6 sm:mb-7 shadow-[0_6px_16px_rgba(15,23,42,0.06)] text-left">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 leading-tight">
          Health Numerics – Remote Patient Monitoring
        </h1>
        <p className="mt-2 text-sm text-slate-700">
          Predictive modeling and NLP-driven insights for population health and care optimization
        </p>
      </header>

      {/* Main layout (PainTools-style: Overview left, modules right) */}
      <div className="grid gap-6 lg:grid-cols-12">
        {/* Left: Overview */}
        <aside className="lg:col-span-4">
          <div className="rounded-md border border-[#E3D9CB] bg-[#FBF8F2] p-6 shadow-[0_6px_16px_rgba(15,23,42,0.06)]">
            <h2 className="text-xl font-semibold text-slate-900">
              Overview
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Led predictive analytics and NLP initiatives to generate actionable insights and
              optimize care strategies for population health.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Chip>Healthcare Analytics</Chip>
              <Chip>Population Health</Chip>
              <Chip>Natural Language Processing</Chip>
            </div>

            <div className="mt-6 border-t border-[#E3D9CB] pt-4">
              <p className="text-sm font-semibold text-slate-900">Skills at a glance</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Chip>Predictive Modeling</Chip>
                <Chip>Feature Engineering</Chip>
                <Chip>Clinical NLP</Chip>
                <Chip>Model Evaluation</Chip>
                <Chip>Data Architecture</Chip>
              </div>
            </div>
          </div>
        </aside>

        {/* Right: Pillar cards */}
        <main className="lg:col-span-8">
          <div className="space-y-5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              const accent =
                pillar.tabColor === 'sky' ? 'bg-[#CBD9E3]' : 'bg-[#D9D4E2]';
              const tabLabel =
                pillar.id === 'predictive-analytics' ? 'Risk Modeling' : 'Clinical NLP';
              return (
                <Link key={pillar.id} to={pillar.to} className="group block">
                  <div className="relative h-full overflow-visible pt-4">
                    <div className="dossier-tab" aria-hidden>
                      <span className={`dossier-tab-accent ${accent}`} />
                      <span className="dossier-tab-label">{tabLabel}</span>
                    </div>

                    <div className="dossier-card h-full flex flex-col transition-transform duration-200 ease-out group-hover:-translate-y-0.5">
                      <div className="flex-1 p-3.5 pt-4 lg:p-3.5 lg:pt-4">
                        <div className="flex items-start gap-3.5 rounded-[2px] border border-[#D2C0A8] bg-white/45 px-3 py-2">
                          <div className="dossier-stamp h-10 w-10 lg:h-9 lg:w-9">
                            <Icon className="w-5 h-5 text-slate-700" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-slate-900 lg:text-base">
                              {pillar.title}
                            </h3>
                            <div className="mt-1 text-xs font-normal tracking-wide text-[#7C6F61]">
                              {pillar.id === 'predictive-analytics'
                                ? 'Population Risk · Cost Drivers · Outcomes'
                                : 'Clinical Text · Z-Codes · Documentation Capture'}
                            </div>
                          </div>
                        </div>

                        <div className="dossier-sheet mt-3.5 flex-1 p-3.5 lg:p-3.5">
                          <div className="dossier-kicker mb-4">Project Description</div>
                          <p className="text-sm leading-relaxed text-slate-700">
                            {pillar.description}
                          </p>
                          <div className="mt-4 inline-flex items-center gap-2 rounded-md border border-[#E6D8C6] bg-[#FFF8EC] px-2.5 py-1 text-xs text-slate-700">
                            <span>View Details</span>
                            <span aria-hidden>→</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
