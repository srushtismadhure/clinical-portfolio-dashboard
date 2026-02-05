import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ShieldCheck,
  Sparkles,
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
  const headerColor =
    variant === 'risk' ? 'bg-blue-50 border-blue-200 text-blue-900' : 'bg-emerald-50 border-emerald-200 text-emerald-900';
  const icon = variant === 'risk' ? <ShieldCheck className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />;
  return (
    <div className="h-full rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div
        className={`flex items-start justify-between gap-3 border-b px-5 py-4 ${headerColor}`}
      >
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-lg bg-white/80 p-2 shadow-sm">{icon}</div>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-slate-600">{subtitle}</p>
          </div>
        </div>
      </div>

      <div className="relative px-5 pb-5 pt-6">
        {/* folder tab illusion */}
        <div className="absolute -top-2 left-4 h-3 w-16 rounded-t-md bg-slate-100 shadow-sm" aria-hidden />
        <div className="absolute -top-1 left-8 h-3 w-14 rounded-t-md bg-slate-50 shadow-sm" aria-hidden />

        <div className="relative rounded-xl border border-slate-200 bg-white shadow-sm p-4">
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
                <div className="mt-4 space-y-3 text-sm text-slate-700">
                  {details ? (
                    details
                  ) : (
                    <>
                      <div>
                        <p className="text-base font-semibold text-slate-900 leading-snug mb-1">Overview</p>
                        <p className="text-sm text-slate-600">
                          This project focuses on the risk prediction and profiling of Type 2 Diabetes (T2DM) complications using longitudinal clinical and claims data to enable proactive, data-driven care. The resulting risk insights directly informed intervention planning and recommendation models for personalized diabetes care.
                        </p>
                      </div>
                      <div>
                        <p className="text-base font-semibold text-slate-900 leading-snug mb-1">Data & Features</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Longitudinal patient-level EHR data with repeated visits.</li>
                          <li>Diagnoses, medications, lab, and outcomes across time.</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-base font-semibold text-slate-900 leading-snug mb-1">Model</p>
                        <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
                          <li>
                            Applied a <span className="font-bold">hierarchical Bayesian framework</span>(TREFLES-inspired) to capture:
                            <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                              <li>Relationships between different diabetes complications</li>
                              <li>Shared and overlapping risk factors across outcomes</li>
                              <li>Temporal risk factor selection patterns over longitudinal visits</li>
                            </ul>
                          </li>
                          <li>
                            Incorporated clinical domain knowledge as <span className="font-bold">Bayesian priors</span> to stabilize learning
                            in high-dimensional data.
                          </li>
                          <li>
                            Estimated posterior risk distributions using <span className="font-bold">Monte Carlo–based inference</span>.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-base font-semibold text-slate-900 leading-snug mb-1">Outputs</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                          <li>
                            <span className="font-semibold">Patient-level risk scores</span> (0–1) for each complication, refreshed per visit or time window.
                          </li>
                          <li>
                            <span className="font-semibold">Reason codes / top risk drivers</span> explaining why risk is elevated.
                          </li>
                          <li>
                            <span className="font-semibold">Operational risk tiers</span> (Low / Medium / High) to support care prioritization and intervention workflows.
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
            Built and validated predictive models to identify risk, cost drivers, and outcome gaps across patient populations
            with clear handoffs to decision support dashboards.
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
      {/* Overview */}
      <div>
        <p className="text-base font-semibold text-slate-900 leading-snug mb-1">
          Overview
        </p>
        <p className="text-sm text-slate-600">
          Built a reinforcement learning prototype to recommend treatment actions for
          Type 2 Diabetes management across three domains glycemic control, blood pressure,
          and lipid management.
        </p>
      </div>

      {/* Data & Features */}
      <div>
        <p className="text-base font-semibold text-slate-900 leading-snug mb-1">
          Data & Features
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
          <li>
            Longitudinal visit-level dataset (one row per visit) with train/test split at the patient level
            (80/20) to prevent leakage.
          </li>
          <li>
            State representation includes static phenotype + dynamic visit features:
            HbA1c, SBP/DBP, LDL/HDL/TG, eGFR, BMI, adherence, hypoglycemia events, and time since last visit,
            plus diagnosis history flags (ICD groups).
          </li>
          <li>
            Discrete action spaces per domain: <span className="font-semibold">a_gly</span>,{" "}
            <span className="font-semibold">a_bp</span>,{" "}
            <span className="font-semibold">a_lipid</span> 
          </li>
        </ul>
      </div>

      {/* Model */}
      <div>
        <p className="text-base font-semibold text-slate-900 leading-snug mb-1">
          Model
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
          <li>
            Trained three separate offline RL models (glycemic, BP, lipid), each learning a Q-function{" "}
            <span className="font-semibold">Q(s, a)</span> over discrete treatment actions.
          </li>
          <li>
            The Q-network outputs a vector of Q-scores per action:
            <span className="font-semibold"> Q(s) = [Q(s,a0), Q(s,a1), ...]</span>, and recommendations are produced by{" "}
            <span className="font-semibold">argmax</span>.
          </li>
        </ul>
      </div>

      {/* Outputs */}
      <div>
        <p className="text-base font-semibold text-slate-900 leading-snug mb-1">
          Outputs
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
          <li>
            Ranked Top-K treatment actions per domain (gly / BP / lipid) with associated Q-scores
            (interpreted as relative long-term value, not probabilities).
          </li>
          <li>
            Evaluation summary table and plots (saved artifacts) for transparency and reproducibility.
          </li>
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
