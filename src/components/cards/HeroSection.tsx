import type React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Linkedin, Github, ArrowRight, Database, Activity, Layers, ToggleLeft, ToggleRight, User, Code2, BarChart3, Boxes, Cloud, Sigma, Layers3, FileText, ShieldCheck, GitMerge } from 'lucide-react';

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

const interestAreas = [
  { label: 'Healthcare Data Engineering (ETL & Pipelines)', icon: Database },
  { label: 'Predictive Analytics & Risk Modeling', icon: BarChart3 },
  { label: 'Claims Analytics & Quality Measurement', icon: FileText },
  { label: 'Clinical & Operational Dashboard Development', icon: Layers3 },
  { label: 'Process & Quality Improvement Analytics', icon: Activity },
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
  <span className="inline-flex items-center justify-start gap-2 rounded-sm border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-600 leading-5 md:leading-[1.35] min-w-0 max-w-full">
    <Icon className="h-4 w-4 text-slate-600 shrink-0" aria-hidden="true" />
    <span className="min-w-0 break-words whitespace-normal">{label}</span>
  </span>
);

export const ProblemsISolve = () => (
  <section className="mt-3 rounded-md border border-[hsl(var(--clinical-border))] bg-[hsl(var(--clinical-surface))] px-3 py-3">
    <div className="flex items-center justify-between mb-2">
      <h4 className="text-[11px] font-semibold uppercase tracking-wide text-slate-600">
        Problems I Solve
      </h4>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
      {problemsISolve.map(({ title, subtitle, Icon }) => (
        <div
          key={title}
          className="flex items-start gap-2 rounded-sm border border-[hsl(var(--clinical-border))] bg-white/80 px-3 py-2"
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
    <section className="system-module min-w-0 rounded-lg overflow-hidden">
      <div className="system-module-header px-6 py-3">
        <div className="flex items-center gap-2">
          <Database className="h-3.5 w-3.5 text-slate-500" />
          <span className="text-[11px] font-medium tracking-wide text-slate-600 uppercase">
            Core Skills
          </span>
        </div>
        <span className="text-[10px] text-slate-400">n={coreSkills.length}</span>
      </div>

      <div className="system-module-content px-5 py-4">
        <div className="flex flex-wrap items-start justify-start gap-2.5 min-w-0">
          {coreSkills.map((skill) => {
            const Icon = iconMap[skill.name] ?? Layers;
            return (
              <Pill key={skill.name} icon={Icon} label={skill.name} />
            );
          })}
        </div>
      </div>

      <div className="system-module-footer px-6 py-3">
        <p className="text-[10px] text-slate-500">Primary technical stack</p>
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
type TechnicalSkill = { title: string; details: string };
type Problem = { title: string; subtitle: string; Icon: React.ElementType };

const summaryItems: SummaryItem[] = [
  { label: 'Builds end-to-end ETL pipelines for decision support' },
  { label: 'Creates executive-facing dashboards' },
  { label: 'Designs clinical data models & complex SQL' },
  { label: 'Defines KPIs & workflow analytics' },
  { label: 'Integrates EHR & claims data' },
  { label: 'Applies statistical & root-cause analysis' },
];

const technicalSkills: TechnicalSkill[] = [
  {
    title: 'ETL pipelines',
    details: 'Python, Spark, Databricks on Azure cloud infrastructure',
  },
  {
    title: 'Data modeling',
    details: 'FHIR R4, OMOP CDM, custom clinical schemas',
  },
  {
    title: 'ML stack',
    details: 'scikit-learn, XGBoost, logistic regression for clinical prediction',
  },
  {
    title: 'BI layer',
    details: 'Power BI, Tableau with DAX/SQL backend optimization',
  },
];

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
  const [viewMode, setViewMode] = useState<'summary' | 'technical'>('summary');
  const [showTechDetails, setShowTechDetails] = useState(false);

  useEffect(() => {
    // When switching between Summary/Technical, show details by default for Technical.
    setShowTechDetails(viewMode === 'technical');
  }, [viewMode]);

  if (viewMode === 'technical') {
    // Temporary debug check
    console.log('technicalSkills', technicalSkills);
  }

  return (
    <section className="py-2 px-4 sm:px-4 lg:px-0 relative overflow-visible">
      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] items-start lg:items-start gap-5 lg:gap-x-2 lg:gap-y-2 w-full relative z-10 overflow-visible">
        
        {/* Left Column */}
        <div className="min-w-0 flex flex-col gap-2">
          <div className="system-module min-w-0 rounded-lg">
            <div className="system-module-header px-6 py-3">
              <div className="flex items-center gap-1.5">
              <User className="w-3 h-3 text-primary" />
              <span className="system-module-label text-xs uppercase tracking-widest font-medium text-slate-500">
                  Profile Overview
                </span>
              </div>
              <span className="status-badge status-active">Active</span>
            </div>
            
            <div className="system-module-content pb-2 px-6 pt-6">
              {/* Identity Row */}
              <div className="flex flex-col md:flex-row md:items-center items-center gap-2 mb-2.5">
                {/* Photo */}
                <div className="relative shrink-0 rounded-full overflow-hidden border-2 border-slate-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06)] w-24 h-24 md:w-[100px] md:h-[100px] -mt-2 md:-mt-7">
                  <img
                    src={`${import.meta.env.BASE_URL}images/profile.png`}
                    alt="Profile photo"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                {/* Name & Role */}
                <div className="flex-1 flex flex-col justify-center min-w-0 w-full items-center md:items-start text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 leading-tight tracking-tight mb-1">
  Srushti Madhure
</h1>
                  

                     {/* <p className="hidden sm:block text-[10px] text-[hsl(var(--clinical-text-muted))] mt-0.5">
                        — Stable, high-functioning, caffeine-adjacent.
                        </p> */}
                  
                <div className="flex flex-col">
                  <p className="text-xs uppercase tracking-wide text-slate-500 leading-5 md:leading-4 mb-0.5">
                    Diagnosis
                  </p>
                  <p className="text-[15px] leading-7 md:text-sm md:leading-6 font-medium text-slate-700 mb-1 lg:whitespace-nowrap">
                    Healthcare Data & Analytics Engineer
                  </p>
                  {/* Prognosis
                  <p className="hidden sm:block text-[10px] sm:text-[9px] text-[hsl(var(--clinical-text-muted))] mt-1">
                    Prognosis
                  </p>
                  <p className="hidden sm:block text-[0.95rem] sm:text-[10px] lg:!text-[0.85rem] font-normal text-[hsl(var(--clinical-text-muted))] leading-[1.45] lg:!leading-[1.5]">
                    Chronic multitasking tendencies. 
                  </p>
                  */}
                 {/* <p className="hidden sm:block text-[0.95rem] sm:text-[10px] lg:!text-[0.95rem] font-normal text-[hsl(var(--clinical-text-muted))] leading-[1.45] lg:!leading-[1.5]">
                    Rapid context switching across domains.
                  </p> */}
                  <p className="hidden sm:block text-[13px] text-slate-500 mt-0 mb-4 leading-snug">
                    Define • Collect • Model • Deploy
                  </p>
                </div>

  {/* Clinician note (desktop only) 
  <p className="hidden sm:block text-[10px] text-[hsl(var(--clinical-text-muted))] mt-1 italic">
    — Stable, high-functioning, caffeine-adjacent.
  </p>*/}

          </div>
        </div>

              <div className="border-b border-[hsl(var(--clinical-border))] mt-1 mb-2" />

              {/* Signs & Symptoms + Toggle */}
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="text-sm sm:text-sm lg:!text-sm font-semibold text-primary leading-[1.45] lg:!leading-[1.4]">
                  Signs &amp; Symptoms
                </h3>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setViewMode(viewMode === 'summary' ? 'technical' : 'summary')}
                    aria-pressed={viewMode === 'technical'}
                    className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-primary transition-colors"
                  >
                    {viewMode === 'summary' ? (
                      <ToggleLeft className="w-3.5 h-3.5" />
                    ) : (
                      <ToggleRight className="w-3.5 h-3.5 text-primary" />
                    )}
                    <span className="font-medium">Toggle view</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (viewMode !== 'technical') return;
                      setShowTechDetails((v) => !v);
                    }}
                    aria-pressed={showTechDetails}
                    className={[
                      'hidden sm:inline text-[10px] transition-colors',
                      viewMode === 'technical'
                        ? 'text-slate-400 hover:text-slate-500'
                        : 'text-slate-300 cursor-default',
                    ].join(' ')}
                  >
                    Toggle for technical details
                  </button>
                </div>
              </div>

              <div className="border-t border-slate-200/70 mt-1 mb-1.5" />
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_1px_1fr] gap-2 sm:gap-6 text-sm font-medium text-slate-600 leading-6 md:leading-5 mb-2.5">
                <ul className="space-y-0">
                  {(viewMode === 'summary' ? summaryItems.slice(0, 3) : technicalSkills.slice(0, 2)).map((item) => {
                    const itemKey = 'label' in item ? item.label : item.title;
                    return (
                      <li key={itemKey} className="flex items-start gap-2 mb-2 md:mb-1 last:mb-0">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <div className="min-w-0">
                          <span className="skillTitle font-medium">
                            {'label' in item ? item.label : item.title}
                          </span>
                          {viewMode === 'technical' && showTechDetails && 'details' in item ? (
                            <span className="skillDetails ml-1 text-sm font-normal text-slate-500 leading-6 md:leading-5 whitespace-normal">
                              → {item.details}
                            </span>
                          ) : null}
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="hidden sm:block bg-[#E5E7EB] w-px" />
                <ul className="space-y-0">
                  {(viewMode === 'summary' ? summaryItems.slice(3, 6) : technicalSkills.slice(2, 4)).map((item) => {
                    const itemKey = 'label' in item ? item.label : item.title;
                    return (
                      <li key={itemKey} className="flex items-start gap-2 mb-2 md:mb-1 last:mb-0">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <div className="min-w-0">
                          <span className="skillTitle font-medium">
                            {'label' in item ? item.label : item.title}
                          </span>
                          {viewMode === 'technical' && showTechDetails && 'details' in item ? (
                            <span className="skillDetails ml-1 text-sm font-normal text-slate-500 leading-6 md:leading-5 whitespace-normal">
                              → {item.details}
                            </span>
                          ) : null}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between pt-2 mt-1.5 border-t border-[hsl(var(--clinical-border))]">
                <div className="w-full flex flex-col gap-2 md:w-auto md:flex-row md:gap-2">
                  <Link
                    to="/projects"
                    className="flex items-center justify-center h-9 px-4 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-[hsl(var(--clinical-primary-hover))] focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--clinical-primary-hover))] focus-visible:ring-offset-2 transition-colors w-full md:w-auto"
                  >
                    View Projects
                  </Link>
                  <a
                    href={`${import.meta.env.BASE_URL}BI_Analyst_Master.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-9 px-4 rounded-md border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 transition-colors w-full md:w-auto"
                  >
                    Resume
                  </a>
                </div>
              <div className="w-full flex flex-wrap items-center gap-x-4 gap-y-2 md:w-auto md:justify-end text-sm text-muted-foreground">
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
              </div>
            </div>

          </div>

            <div className="system-module-footer flex flex-wrap items-center gap-x-3 gap-y-0.5" />
          </div>
          <ProblemsISolve />
        </div>

        {/* Right Column */}
        <div className="min-w-0 w-full overflow-hidden lg:pr-2 lg:pl-1 flex flex-col gap-2">
          <ClinicalAnalyticsToolkit />

          <section className="system-module min-w-0 rounded-lg overflow-hidden">
            <div className="system-module-header px-6 py-3">
              <div className="flex items-center gap-2">
                <Activity className="h-3.5 w-3.5 text-slate-500" />
                <span className="text-[11px] font-normal tracking-wide text-slate-600 uppercase">
                  Areas of Interest
                </span>
              </div>
              <span className="text-[10px] text-slate-400">n={interestAreas.length}</span>
            </div>

            <div className="system-module-content px-5 py-4">
              <div className="flex flex-wrap items-start justify-start gap-2.5 min-w-0">
                {interestAreas.map((area) => (
                  <Pill key={area.label} icon={area.icon} label={area.label} />
                ))}
              </div>
            </div>

            <div className="system-module-footer px-6 py-3">
              <p className="text-[10px] text-slate-500">Analytical focus areas</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
