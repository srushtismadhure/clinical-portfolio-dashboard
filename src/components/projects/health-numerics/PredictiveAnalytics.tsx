import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  FileText,
  FolderOpen,
  Wand2,
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';

type FileMeta = {
  title: string;
  description: string;
  tags: string[];
};

type FilePillarProps = {
  variant: 'risk' | 'treatment';
  title: string;
  subtitle: string;
  primaryFile: FileMeta;
  secondaryFiles: { title: string }[];
  details?: React.ReactNode;
};

function PillTag({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
      {text}
    </span>
  );
}

function FilePillar({ variant, title, subtitle, primaryFile, secondaryFiles, details }: FilePillarProps) {
  const expanded = true; // always open
  const headerColor = 'bg-[#E7EDF2] border-[#D8DEE6] text-[#1F2933]';
  const icon =
    variant === 'risk' ? (
      <i className="fa-solid fa-file text-[20px] leading-none text-[#3F556B]" aria-hidden="true" />
    ) : (
      <i
        className="fa-solid fa-briefcase-medical text-[20px] leading-none text-[#3F556B]"
        aria-hidden="true"
      />
    );
  return (
    <div className="h-full rounded-md border border-[#D8DEE6] bg-[#F6F8FA] shadow-sm overflow-hidden">
      <div
        className={`flex items-start justify-between gap-3 border-b px-4 py-3 ${headerColor}`}
      >
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-md bg-white/90 p-2 shadow-sm">{icon}</div>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-slate-600">{subtitle}</p>
          </div>
        </div>
      </div>

      <div className="relative px-4 pb-4 pt-5">
                <div className="relative rounded-md border border-[#D8DEE6] bg-white shadow-sm p-3">
                  <div className="flex items-start gap-3">
            <div className="rounded-md bg-slate-100 p-2">
              <FileText className="h-4 w-4 text-slate-600" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h4 className="text-base font-semibold text-slate-900">{primaryFile.title}</h4>
                  <p className="mt-1 text-sm text-slate-600">{primaryFile.description}</p>
                </div>
              </div>
              {expanded && (
                <div className="mt-3 space-y-3 text-sm text-slate-700">
                  {details ? (
                    details
                  ) : (
                    <>
                      <div>
                        <p className="text-sm font-semibold text-[#1F2933] leading-snug mb-1">Overview</p>
                        <p className="text-sm text-[#5B6773]">
                          This project focused on the risk prediction and profiling of Type 2 Diabetes (T2DM) complications using longitudinal clinical and claims data to enable proactive, data-driven care.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#1F2933] leading-snug mb-1">Data & Features</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-[#5B6773]">
                          <li>Longitudinal patient-level EHR data with repeated visits.</li>
                          <li>Diagnoses, medications, lab, and outcomes across time.</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#1F2933] leading-snug mb-1">Model</p>
                        <ul className="list-disc list-inside space-y-2 text-sm text-[#5B6773]">
                          <li>
                            Applied a <span className="font-bold">hierarchical Bayesian framework</span> to capture risk relationships and shared factors across complications.
                          </li>
                          <li>
                            Integrated clinical priors into Bayesian models to improve stability and reliability of risk predictions.
                          </li>
                          <li>
                            Generated probabilistic risk scores using <span className="font-bold">Monte Carlo inference</span>.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#1F2933] leading-snug mb-1">Outputs</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-[#5B6773]">
                          <li>
                            Generated patient-level risk scores for each complication.
                          </li>
                          <li>
                            Explained predictions using top contributing risk factors.
                          </li>
                          <li>
                            Translated predictions into Low/Medium/High tiers to guide care prioritization.
                          </li>
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          {secondaryFiles.map((file) => (
            <div
              key={file.title}
              className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <FolderOpen className="h-4 w-4 text-slate-500" />
                <span>{file.title}</span>
              </div>
              <button
                type="button"
                className="rounded-md px-3 py-1 text-xs font-medium text-primary hover:bg-[hsl(var(--primary)/0.08)] transition"
              >
                Open File
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PredictiveAnalytics() {
  return (
    <Layout
      title="Predictive Analytics & Risk Modeling"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '/projects' },
        { label: 'Health Numerics', href: '/projects/health-numerics' },
        { label: 'Predictive Analytics' },
      ]}
      contentClassName="bg-slate-50"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Link
          to="/projects/health-numerics"
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Health Numerics
        </Link>

        <header className="space-y-2">
          <h1 className="text-3xl font-semibold text-slate-900 leading-tight">
            Predictive Analytics & Risk Modeling
          </h1>
          <p className="text-sm text-slate-600 max-w-3xl">
            Predictive modeling to surface risk, reduce costs, and improve outcomes across populations.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <FilePillar
            variant="risk"
            title="Risk Prediction"
            subtitle="Predict and stratify patients based on complication risk."
          primaryFile={{
            title: 'Diabetes Complication Risk Prediction',
            description: 'Predicts complication risk for diabetic patients to prioritize proactive care.',
            tags: ['EHR data', 'Multitask Prediction', 'Longitudinal'],
          }}
          secondaryFiles={[]}
        />

<FilePillar
  variant="treatment"
  title="Treatment Optimization"
          subtitle="Recommend treatments to optimize long-term outcomes."
  primaryFile={{
    title: "Offline RL Treatment Recommendation (CQL-lite)",
    description:
      "Ranks glycemic, BP, and lipid treatment actions from longitudinal visits using offline RL and conservative value learning.",
    tags: [],
  }}
  secondaryFiles={[]}
  details={
    <>
      <div>
        <p className="text-sm font-semibold text-[#1F2933] leading-snug mb-1">
          Overview
        </p>
        <p className="text-sm text-[#5B6773]">
          Built a reinforcement learning prototype to recommend treatment actions for
          Type 2 Diabetes management across three domains glycemic control, blood pressure,
          and lipid management.
        </p>
      </div>

      <div>
        <p className="text-sm font-semibold text-[#1F2933] leading-snug mb-1">
          Data & Features
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-[#5B6773]">
          <li>
            Longitudinal visit-level dataset (one row per visit) with train/test split at the patient level
            (80/20) to prevent leakage.
          </li>
        </ul>
      </div>

      <div>
        <p className="text-sm font-semibold text-[#1F2933] leading-snug mb-1">
          Model
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-[#5B6773]">
          <li>
            Trained three offline RL models (glycemic, BP, lipid). Each Q-network produces scores for all treatment options and ranks them to suggest the best next action.
          </li>
        </ul>
      </div>

      <div>
        <p className="text-sm font-semibold text-[#1F2933] leading-snug mb-1">
          Outputs
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-[#5B6773]">
          <li>Ranked treatment options with supporting scores.</li>
          <li>Evaluation dashboards for monitoring performance.</li>
        </ul>
      </div>
    </>
  }
/>
      </div>
    </div>
  </Layout>
  );
}
