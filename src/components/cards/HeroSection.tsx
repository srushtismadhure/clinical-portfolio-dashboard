import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github, Database, Activity, Layers, User, Code2, BarChart3, Boxes, Cloud, Sigma, Layers3, FileText, ShieldCheck, GitMerge, Clipboard } from 'lucide-react';

const coreSkills = [
  { name: 'SQL', category: 'query' },
  { name: 'Python', category: 'lang' },
  { name: 'R', category: 'lang' },
  { name: 'Power BI', category: 'viz' },
  { name: 'Databricks', category: 'platform' },
  { name: 'Azure', category: 'cloud' },
];

const toolkitItems = [
  { name: 'SQL', icon: Database },
  { name: 'Python', icon: Code2 },
  { name: 'R', icon: Sigma },
  { name: 'Power BI', icon: BarChart3 },
  { name: 'Databricks', icon: Boxes },
  { name: 'Azure', icon: Cloud },
];

const whatIDoItems = [
  {
    title: 'Clinical data analysis',
    description: 'Turn messy clinical data into reliable decisions.',
  },
  {
    title: 'ETL & data engineering',
    description: 'Design robust pipelines that keep data accurate and audit-ready.',
  },
  {
    title: 'Dashboards & decision support',
    description: 'Deliver dashboards that fit real clinical workflows.',
  },
];

type Tool = { label: string; Icon: React.ElementType };

const tools: Tool[] = [
  { label: 'SQL', Icon: Database },
  { label: 'Python', Icon: Code2 },
  { label: 'R', Icon: Sigma },
  { label: 'Power BI', Icon: BarChart3 },
  { label: 'Databricks', Icon: Layers3 },
  { label: 'Azure', Icon: Cloud },
];

type PillProps = {
  icon: React.ElementType;
  label: string;
};

const Pill = ({ icon: Icon, label }: PillProps) => (
  <span className="inline-flex h-10 w-full items-center gap-2 rounded-lg border border-[#C5D2E3] bg-[#F9FBFE] px-3 py-2 text-[13px] font-semibold text-[#3B4A5F] leading-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.92)] transition duration-150 hover:-translate-y-[1px] hover:border-[#9EB3CE] hover:shadow-[0_4px_12px_rgba(15,23,42,0.08)]">
    <Icon className="h-4 w-4 text-[#3B4A5F] shrink-0" aria-hidden="true" />
    <span className="truncate">{label}</span>
  </span>
);

export const ProblemsISolve = () => (
  <section className="mt-3 rounded-xl border border-slate-100 bg-white shadow-sm px-3 py-3">
    <div className="flex items-center justify-between mb-2">
      <h4 className="text-[11px] font-semibold uppercase tracking-wide text-slate-600">
        Problems I Solve
      </h4>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
      {problemsISolve.map(({ title, subtitle, Icon }) => (
        <div
          key={title}
          className="flex items-start gap-2 rounded-xl border border-slate-100 bg-white shadow-sm p-4"
        >
          <Icon className="h-4 w-4 text-slate-600 mt-0.5" aria-hidden="true" />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-slate-800 leading-tight">{title}</p>
            <p className="text-[12px] text-slate-600 leading-snug">{subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export function ClinicalAnalyticsToolkit() {
  const iconMap = toolkitItems.reduce<Record<string, React.ElementType>>(
    (acc, item) => {
      acc[item.name] = item.icon;
      return acc;
    },
    {}
  );

  return (
    <section className="min-w-0 rounded-[8px] border border-[#D5DFEC] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 bg-[#E7EDF6] border-b border-[#CCD7E6]">
        <div className="flex items-center gap-2">
          <Database className="h-3.5 w-3.5 text-[#3B4A5F]" />
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B4A5F]">
            Core Skills
          </h2>
        </div>
        <span className="text-[11px] font-semibold text-[#52627A] bg-white border border-[#C5D2E3] px-2 py-0.5 rounded-md shadow-[0_1px_0_rgba(15,23,42,0.05)]">
          n={coreSkills.length}
        </span>
      </div>

      <div className="px-5 py-4 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2.5">
          {coreSkills.map((skill) => {
            const Icon = iconMap[skill.name] ?? Layers;
            return (
              <Pill key={skill.name} icon={Icon} label={skill.name} />
            );
          })}
        </div>
        <p className="mt-3 text-[11px] text-[#6B7A90] font-medium">Primary technical stack</p>
      </div>
    </section>
  );
}

const focusAreas = [
  { name: 'EHR/FHIR', type: 'standard' },
  { name: 'Claims Analytics', type: 'domain' },
  { name: 'SDOH', type: 'domain' },
  { name: 'Predictive Models', type: 'method' },
];

const systemMetrics = [
  { label: 'Use Cases', value: '12+', detail: 'clinical workflows' },
  { label: 'Datasets', value: '2.5M+', detail: 'patient records' },
  { label: 'Experience', value: '3 yrs', detail: 'healthcare analytics' },
];

type SummaryItem = { label: string };
const summaryItems: SummaryItem[] = [
  { label: 'Built core HIPAA-compliant SQL database integrating 15–20 entities' },
  { label: 'Delivered executive dashboards analyzing 10K+ records for product decisions' },
  { label: 'Designed data and operational workflows enabling decision support' },
  { label: 'Developed predictive risk models guiding diabetes care and treatment planning' },
];

type Problem = { title: string; subtitle: string; Icon: React.ElementType };

const problemsISolve: Problem[] = [
  {
    title: 'HIPAA-Compliant Data Pipelines',
    subtitle: 'Secure, audit-ready workflows for PHI',
    Icon: ShieldCheck,
  },
  {
    title: 'FHIR & Interoperability Integration',
    subtitle: 'Normalize fragmented EHR data into unified models',
    Icon: GitMerge,
  },
  {
    title: 'Scalable Clinical Databases',
    subtitle: 'Query-optimized systems for analytics at scale',
    Icon: Database,
  },
];

export function HeroSection() {
  const email = 'srushtisunilmadhure@gmail.com';
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      setCopied(false);
    }
  };

  return (
    <section className="py-2 px-4 sm:px-4 lg:px-0 relative overflow-visible">
      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] items-start lg:items-start gap-5 lg:gap-x-2 lg:gap-y-2 w-full relative z-10 overflow-visible">
        
        {/* Left Column */}
        <div className="min-w-0 flex flex-col gap-2">
          <div className="flex flex-col gap-5">
            <div className="system-module min-w-0 rounded-xl border border-slate-100 bg-white shadow-sm">
              <div className="system-module-header px-6 py-4 bg-transparent border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <User className="w-3 h-3 text-primary" />
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-600 pt-4 pb-2">
                    Profile Overview
                  </h2>
                </div>
                <span className="status-badge status-active">Active</span>
              </div>
              
              <div className="system-module-content px-4 md:px-6 py-4 md:py-6">
                {/* Identity Row */}
                <div className="flex flex-col md:flex-row md:items-center items-center gap-3 md:gap-4 mb-2.5 text-center md:text-left">
                  {/* Photo */}
                  <div className="relative shrink-0 rounded-full overflow-hidden border-2 border-[#E2E8F0] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06)] w-24 h-24 md:w-[100px] md:h-[100px] -mt-2 md:-mt-7">
                    <img
                      src={`${import.meta.env.BASE_URL}images/profile.png`}
                      alt="Profile photo"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  
                  {/* Name & Role */}
                  <div className="flex-1 flex flex-col justify-center min-w-0 w-full items-center md:items-start">
                    <div className="space-y-1.5 md:space-y-2">
                      <p className="text-[10px] md:text-[11px] uppercase tracking-[0.08em] text-[#9CA3AF] leading-4">
                        Diagnosis
                      </p>
                      <h1 className="text-[22px] md:text-[30px] font-extrabold text-[color:var(--brand)] leading-[1.2]">
                        Healthcare Data &amp; Analytics Engineer
                      </h1>
                      <p className="text-[14px] md:text-[17px] font-medium text-slate-500 leading-[1.2]">
                        Srushti Madhure
                      </p>
                      <p className="text-[12px] md:text-[13px] text-slate-500 leading-snug">
                        Define • Collect • Model • Deploy
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
                  <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
                    <Link
                      to="/projects"
                      className="flex items-center justify-center h-9 px-4 rounded-xl bg-[color:var(--brand)] text-white text-sm font-medium hover:bg-[color:var(--brand-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-hover)] focus-visible:ring-offset-2 transition-colors w-full sm:w-auto shadow-sm"
                    >
                      View Projects
                    </Link>
                    <a
                      href={`${import.meta.env.BASE_URL}Madhure_BI_2026_PDF.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center h-9 px-4 rounded-xl border border-[#E2E8F0] text-sm font-medium text-[#0F172A] bg-white hover:bg-[#F3F6F9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A5F] focus-visible:ring-offset-2 transition-colors w-full sm:w-auto"
                    >
                      Resume
                    </a>
                  </div>
                  <div className="w-full md:w-auto flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2 text-sm text-muted-foreground">
                    <a
                      href="https://www.linkedin.com/in/srushti-madhure/"
                      target="_blank"
                      rel="noopener noreferrer"
                        className="flex items-center gap-1.5 hover:text-foreground hover:underline underline-offset-4"
                      >
                        <Linkedin className="h-4 w-4 text-muted-foreground" />
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href="https://github.com/srushtismadhure"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 hover:text-foreground hover:underline underline-offset-4"
                      >
                        <Github className="h-4 w-4 text-muted-foreground" />
                        <span>GitHub</span>
                      </a>
                  <a
                    href="mailto:srushtisunilmadhure@gmail.com"
                    className="flex items-center gap-1.5 hover:text-foreground hover:underline underline-offset-4"
                  >
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>Contact</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={[
                      'text-xs px-1.5 py-1 rounded-md border flex items-center gap-1 transition-colors',
                      copied
                        ? 'border-emerald-300 bg-emerald-50 text-emerald-700'
                        : 'border-[#E3E8EE] bg-white text-slate-600 hover:bg-slate-50',
                    ].join(' ')}
                    aria-label={copied ? 'Copied!' : 'Copy email'}
                  >
                    <Clipboard className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>
            </div>

            <div className="min-w-0 rounded-[8px] border border-[#D5DFEC] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 bg-[#E7EDF6] border-b border-[#CCD7E6]">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B4A5F]">
                  Systems I’ve Built
                </h2>
                <span className="text-[11px] font-semibold text-[#52627A] bg-white border border-[#C5D2E3] px-2 py-0.5 rounded-md shadow-[0_1px_0_rgba(15,23,42,0.05)]">
                  n={summaryItems.length}
                </span>
              </div>
              <div className="px-5 py-4">
                <div className="border-t border-[#CCD7E6] mt-1 mb-3" />
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm font-medium text-[#3B4A5F] leading-7">
                  {summaryItems.map((item) => (
                    <li key={item.label} className="flex gap-2 items-start text-[13.5px] leading-6">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#9EB3CE]" aria-hidden="true" />
                      <span className="flex-1">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="min-w-0 w-full overflow-hidden lg:pr-2 lg:pl-1 flex flex-col gap-2">
          <ClinicalAnalyticsToolkit />

          <section className="hidden md:block min-w-0 rounded-[8px] border border-[#D5DFEC] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] overflow-hidden">
            <div className="flex items-center px-6 py-3 bg-[#E7EDF6] border-b border-[#CCD7E6]">
              <Activity className="h-3.5 w-3.5 text-[#3B4A5F]" />
              <h2 className="ml-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3B4A5F]">
                What I Do
              </h2>
            </div>

            <div className="px-5 py-4">
              <div className="flex flex-col divide-y divide-[#CCD7E6]">
                {whatIDoItems.map((item, idx) => (
                  <div
                    key={item.title}
                    className="grid grid-cols-1 gap-3 sm:gap-4 py-4"
                  >
                    <div className="flex items-start gap-3 sm:gap-4 group">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C5D2E3] bg-white text-[12px] font-semibold text-[#3B4A5F] transition-all duration-200 ease-out group-hover:border-[#9EB3CE] group-hover:text-[#2D3D53] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5D2E3]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white shadow-[0_0_0_1px_rgba(30,58,95,0.04)]">
                        {idx + 1}
                      </span>
                      <div className="space-y-1">
                        <p className="text-[15px] font-semibold text-slate-900 leading-snug">
                          {item.title}
                        </p>
                        <p className="text-[13px] text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-6 py-3 border-t border-[#CCD7E6] bg-[#E7EDF6]" />
          </section>
        </div>
      </div>
    </section>
  );
}
