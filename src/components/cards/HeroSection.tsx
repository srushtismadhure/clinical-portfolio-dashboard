import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github, Database, Activity, Layers, User, Code2, BarChart3, Boxes, Cloud, Sigma, Layers3, ShieldCheck, GitMerge, Clipboard } from 'lucide-react';

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
  <span className="inline-flex items-center gap-2 rounded-lg border border-[#C9D8EE] bg-[#EAF2FB] px-3.5 py-1.5 text-sm font-medium text-[#234A84] shadow-[0_1px_2px_rgba(36,74,132,0.08)] transition-all duration-200 hover:border-[#BFD1EA] hover:bg-[#E2ECF9] hover:shadow-[0_2px_4px_rgba(36,74,132,0.10)]">
    <Icon className="h-4 w-4 shrink-0 text-[#234A84]" aria-hidden="true" />
    <span className="truncate">{label}</span>
  </span>
);

export const ProblemsISolve = () => (
  <section className="mt-5 rounded-lg border border-gray-200 bg-white px-5 py-5 shadow-none">
    <div className="flex items-center justify-between mb-2">
      <h4 className="text-[11px] font-medium uppercase tracking-[0.14em] text-gray-500">
        Problems I Solve
      </h4>
    </div>
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      {problemsISolve.map(({ title, subtitle, Icon }) => (
        <div
          key={title}
          className="flex items-start gap-3 rounded-md border border-gray-200 bg-gray-50 p-4"
        >
          <Icon className="mt-0.5 h-4 w-4 text-gray-500" aria-hidden="true" />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-slate-800 leading-tight">{title}</p>
            <p className="text-[13px] leading-snug text-gray-600">{subtitle}</p>
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
    <section className="system-module min-w-0 overflow-hidden">
      <div className="system-module-header">
        <div className="flex items-center gap-2">
          <Database className="h-3.5 w-3.5 text-gray-500" />
          <h2 className="system-module-label">
            Core Skills
          </h2>
        </div>
        <span className="rounded-lg border border-[#C9D8EE] bg-[#EAF2FB] px-2.5 py-1 text-[11px] font-medium text-[#234A84] shadow-[0_1px_2px_rgba(36,74,132,0.08)] transition-all duration-200 ease-in-out">
          n={coreSkills.length}
        </span>
      </div>

      <div className="system-module-content">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-3">
          {coreSkills.map((skill) => {
            const Icon = iconMap[skill.name] ?? Layers;
            return (
              <Pill key={skill.name} icon={Icon} label={skill.name} />
            );
          })}
        </div>
        <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.12em] text-gray-500">Primary technical stack</p>
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
    <section className="relative overflow-visible px-0 py-1">
      {/* Main Grid */}
      <div className="relative z-10 grid w-full grid-cols-1 items-start gap-4 overflow-visible lg:grid-cols-[minmax(0,1.65fr)_minmax(280px,0.95fr)]">
        
        {/* Left Column */}
        <div className="min-w-0">
          <div className="flex flex-col gap-4">
            <div className="system-module min-w-0">
              <div className="system-module-header">
                <div className="flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5 text-gray-500" />
                  <h2 className="system-module-label">
                    Profile Overview
                  </h2>
                </div>
                <span className="status-badge status-active">Active</span>
              </div>
              
              <div className="system-module-content">
                {/* Identity Row */}
                <div className="flex flex-col items-center gap-3 text-center md:flex-row md:items-start md:text-left">
                  {/* Photo */}
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-slate-50 md:h-[96px] md:w-[96px]">
                    <img
                      src={`${import.meta.env.BASE_URL}images/profile.png`}
                      alt="Profile photo"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  
                  {/* Name & Role */}
                  <div className="flex min-w-0 flex-1 flex-col justify-center">
                    <div className="space-y-1.5">
                      <p className="text-[11px] font-medium uppercase tracking-[0.14em] leading-4 text-gray-500">
                        Diagnosis
                      </p>
                      <h1 className="text-[24px] font-semibold leading-tight text-slate-800 md:text-[30px]">
                        Healthcare Data &amp; Analytics Engineer
                      </h1>
                      <p className="text-[15px] font-medium leading-[1.3] text-slate-600 md:text-[17px]">
                        Srushti Madhure
                      </p>
                      <p className="text-[13px] leading-snug text-gray-500">
                        Define • Collect • Model • Deploy
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                  <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                    <Link
                      to="/projects"
                      className="flex h-10 w-full items-center justify-center rounded-md bg-slate-800 px-4 text-sm font-medium text-white transition-all duration-200 ease-in-out hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 sm:w-auto"
                    >
                      View Projects
                    </Link>
                    <a
                      href={`${import.meta.env.BASE_URL}Madhure_BI_2026_PDF.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-full items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium text-slate-700 transition-all duration-200 ease-in-out hover:border-gray-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 sm:w-auto"
                    >
                      Resume
                    </a>
                  </div>
                  <div className="flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-gray-600 md:justify-end lg:w-auto">
                    <a
                      href="https://www.linkedin.com/in/srushti-madhure/"
                      target="_blank"
                      rel="noopener noreferrer"
                        className="flex items-center gap-1.5 transition-all duration-200 ease-in-out hover:text-slate-800"
                      >
                        <Linkedin className="h-4 w-4 text-gray-500" />
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href="https://github.com/srushtismadhure"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 transition-all duration-200 ease-in-out hover:text-slate-800"
                      >
                        <Github className="h-4 w-4 text-gray-500" />
                        <span>GitHub</span>
                      </a>
                  <a
                    href="mailto:srushtisunilmadhure@gmail.com"
                    className="flex items-center gap-1.5 transition-all duration-200 ease-in-out hover:text-slate-800"
                  >
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span>Contact</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={[
                      'flex items-center gap-1 rounded-md border px-2.5 py-1.5 text-xs transition-all duration-200 ease-in-out',
                      copied
                        ? 'border-emerald-300 bg-emerald-50 text-emerald-700'
                        : 'border-gray-200 bg-gray-50 text-gray-600 hover:bg-white',
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

            <div className="system-module min-w-0 overflow-hidden">
              <div className="system-module-header">
                <h2 className="system-module-label">
                  Systems I’ve Built
                </h2>
                <span className="rounded-lg border border-[#C9D8EE] bg-[#EAF2FB] px-2.5 py-1 text-[11px] font-medium text-[#234A84] shadow-[0_1px_2px_rgba(36,74,132,0.08)] transition-all duration-200 ease-in-out">
                  n={summaryItems.length}
                </span>
              </div>
              <div className="system-module-content">
                <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {summaryItems.map((item) => (
                    <li key={item.label} className="flex items-start gap-3 rounded-md border border-gray-200 bg-gray-50/80 px-3.5 py-2.5 text-[13.5px] leading-6 text-gray-700 transition-all duration-200 ease-in-out">
                      <span className="mt-1.5 inline-block h-2 w-2 rounded-sm bg-blue-200" aria-hidden="true" />
                      <span className="flex-1">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="flex w-full min-w-0 flex-col gap-4 overflow-hidden">
          <ClinicalAnalyticsToolkit />

          <section className="system-module hidden min-w-0 overflow-hidden md:block">
            <div className="system-module-header">
              <div className="flex items-center gap-2">
              <Activity className="h-3.5 w-3.5 text-gray-500" />
              <h2 className="system-module-label">
                What I Do
              </h2>
              </div>
            </div>

            <div className="system-module-content">
              <div className="flex flex-col divide-y divide-gray-200">
                {whatIDoItems.map((item, idx) => (
                  <div
                    key={item.title}
                    className="grid grid-cols-1 gap-3 py-3 first:pt-0 last:pb-0 sm:gap-4"
                  >
                    <div className="flex items-start gap-3 sm:gap-4 group">
                      <span className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-[12px] font-medium text-gray-600 transition-colors duration-200 ease-out group-hover:border-gray-300 group-hover:bg-white">
                        {idx + 1}
                      </span>
                      <div className="space-y-1">
                        <p className="text-[15px] font-semibold text-slate-900 leading-snug">
                          {item.title}
                        </p>
                        <p className="text-[13px] leading-relaxed text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 bg-slate-50 px-5 py-3" />
          </section>
        </div>
      </div>
    </section>
  );
}
