import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import type { Project } from '@/components/shared/ProjectCard';

type MLCHCTemplateProps = {
  project: Project;
};

const focusLine =
  'Strategy & Operations · AI Governance · Workflow Assessment · Vendor Evaluation · Implementation Planning';

const tags = [
  'Strategy & Operations',
  'AI Governance',
  'Stakeholder Interviews',
  'Workflow Analysis',
  'AI Readiness',
  'Implementation Playbook',
];

const bulletPoints = [
  'Co-developed an AI adoption playbook for 50+ community health centers to support responsible, scalable AI implementation.',
  'Conducted 30+ stakeholder interviews across clinical, operational, and leadership teams to identify workflow gaps, operational pain points, and AI readiness barriers.',
  'Assessed governance, vendor evaluation, workforce enablement, and implementation needs to define a practical framework for AI adoption in resource-constrained care settings.',
  'Synthesized findings into actionable guidance around AI use case prioritization, evaluation criteria, organizational readiness, and implementation strategy.',
];

const overviewText =
  'AI adoption playbook for 50+ community health centers focused on governance, workflow readiness, and practical implementation planning.';

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-[#E3D9CB] bg-[#FFFDF7] px-3 py-1 text-xs text-slate-700">
      {children}
    </span>
  );
}

function FaPlaybookIcon({ className }: { className?: string }) {
  return (
    <i
      className={`fa-solid fa-book-medical text-[20px] leading-none ${className ?? ''}`}
      aria-hidden="true"
    />
  );
}

export default function MLCHCTemplate({ project }: MLCHCTemplateProps) {
  return (
    <div className="paintools-dossier mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
      <div className="mb-3">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </div>

      <header className="mb-6 rounded-lg border border-[#E3D9CB] bg-[#FBF8F2] p-4 text-left shadow-[0_6px_16px_rgba(15,23,42,0.06)] sm:mb-7 sm:p-5">
        <h1 className="text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl">
          {project.title}
        </h1>
        <p className="mt-2 text-sm text-slate-700 sm:text-base">
          AI Strategy &amp; Operations - AI Adoption Playbook for Community Health Centers
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <div className="rounded-md border border-[#E3D9CB] bg-[#FBF8F2] p-6 shadow-[0_6px_16px_rgba(15,23,42,0.06)]">
            <h2 className="text-xl font-semibold text-slate-900">Overview</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              {overviewText}
            </p>

            <div className="mt-5 space-y-2 text-sm text-slate-700">
              <div className="flex items-start gap-1">
                <span className="font-semibold text-slate-900">Role:</span>
                <span>{project.subtitle}</span>
              </div>
              <div className="flex items-start gap-1">
                <span className="font-semibold text-slate-900">Focus:</span>
                <span>{focusLine}</span>
              </div>
            </div>

            <div className="mt-6 border-t border-[#E3D9CB] pt-4">
              <p className="text-sm font-semibold text-slate-900">Key Tags</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <main className="lg:col-span-8">
          <div className="relative h-full overflow-visible pt-4">
            <div className="dossier-tab" aria-hidden>
              <span className="dossier-tab-accent bg-[#D7DECA]" />
              <span className="dossier-tab-label">Playbook</span>
            </div>

            <div className="dossier-card h-full flex flex-col">
              <div className="flex-1 p-3.5 pt-4 lg:p-3.5 lg:pt-4">
                <div className="flex items-start gap-3.5 rounded-[2px] border border-[#D2C0A8] bg-white/45 px-3 py-2">
                  <div className="dossier-stamp h-10 w-10 lg:h-9 lg:w-9">
                    <FaPlaybookIcon className="w-5 h-5 text-slate-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 lg:text-base">
                      AI Adoption Playbook
                    </h3>
                    <div className="mt-1 text-xs font-normal tracking-wide text-[#7C6F61]">
                      Operational guidance for responsible, scalable adoption
                    </div>
                  </div>
                </div>

                <div className="dossier-sheet mt-3.5 flex-1 p-3.5 lg:p-3.5">
                  <div className="dossier-kicker mb-4">Project Summary</div>
                  <ul className="space-y-2.5 text-sm text-slate-700">
                    {bulletPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3 leading-relaxed">
                        <span className="dossier-stamp mt-0.5 inline-flex h-5 w-5 items-center justify-center text-slate-500">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-3 w-3"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
