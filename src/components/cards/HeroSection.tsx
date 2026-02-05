import type React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Linkedin, Github, ArrowRight, Database, Activity, Layers, ToggleLeft, ToggleRight, User, Code2, BarChart3, Boxes, Cloud, Sigma, Layers3, FileText } from 'lucide-react';

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

export function ClinicalAnalyticsToolkit() {
  const iconMap = toolkitItems.reduce<Record<string, React.ElementType>>(
    (acc, item) => {
      acc[item.name] = item.icon;
      return acc;
    },
    {}
  );

  return (
    <section className="w-full rounded-md border border-slate-300 bg-white shadow-none">
      <div className="flex items-center justify-between border-b border-slate-300 bg-slate-100/70 px-3 py-2">
        <div className="flex items-center gap-2">
          <Database className="h-3.5 w-3.5 text-slate-500" />
          <span className="text-[11px] font-medium tracking-wide text-slate-600 uppercase">
            Core Skills
          </span>
        </div>
        <span className="text-[10px] text-slate-400">n={coreSkills.length}</span>
      </div>

      <div className="px-3 py-2">
        <div className="flex flex-wrap gap-2">
          {coreSkills.map((skill) => {
            const Icon = iconMap[skill.name] ?? Layers;
            return (
              <div
                key={skill.name}
                className="flex items-center gap-2 rounded-sm border border-slate-300 bg-white px-2.5 py-1.5 text-[11px] text-slate-600"
              >
                <Icon className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
                <span className="font-medium">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-t border-slate-300 bg-slate-50 px-3 py-2">
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
    <section className="py-2 relative">
      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-2.5 w-full relative z-10">
        
        {/* Left Column - Primary Identity */}
        <div className="lg:col-span-1 space-y-2.5 min-w-0">
          
          {/* Profile Overview Module */}
          <div className="system-module min-w-0">
            <div className="system-module-header">
              <div className="flex items-center gap-1.5">
              <User className="w-3 h-3 text-primary" />
              <span className="system-module-label text-xs uppercase tracking-widest font-medium text-slate-500">
                  Profile Overview
                </span>
              </div>
              <span className="status-badge status-active">Active</span>
            </div>
            
            <div className="system-module-content pb-2">
              {/* Identity Row */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2.5">
                {/* Photo */}
                <div className="relative shrink-0 rounded-full overflow-hidden border-2 border-slate-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06)] w-[100px] h-[100px] -mt-1.5">
                  <img
                    src={`${import.meta.env.BASE_URL}images/profile.png`}
                    alt="Profile photo"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                {/* Name & Role */}
                <div className="flex-1 flex flex-col justify-center min-w-0 max-w-[520px]">
                <h1 className="text-[24px] sm:text-[28px] font-semibold text-slate-900 leading-tight tracking-tight mb-1">
  Srushti Madhure
</h1>
                  

                     {/* <p className="hidden sm:block text-[10px] text-[hsl(var(--clinical-text-muted))] mt-0.5">
                        — Stable, high-functioning, caffeine-adjacent.
                        </p> */}
                  
                <div className="flex flex-col">
                  <p className="text-[11px] uppercase tracking-widest text-slate-500 mb-0.5">
                    Diagnosis
                  </p>
                  <p className="text-[15px] sm:text-[17px] font-medium text-slate-700 mb-1 leading-snug lg:whitespace-nowrap">
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
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_1px_1fr] gap-2 sm:gap-6 text-[13px] sm:text-[14px] font-medium text-slate-600 leading-[1.35] mb-2.5">
                <ul className="space-y-1.5">
                  {(viewMode === 'summary' ? summaryItems.slice(0, 3) : technicalSkills.slice(0, 2)).map((item) => {
                    const itemKey = 'label' in item ? item.label : item.title;
                    return (
                      <li key={itemKey} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <div className="min-w-0">
                          <span className="skillTitle font-medium">
                            {'label' in item ? item.label : item.title}
                          </span>
                          {viewMode === 'technical' && showTechDetails && 'details' in item ? (
                            <span className="skillDetails ml-1 text-[12px] sm:text-[13px] font-normal text-slate-500 whitespace-normal">
                              → {item.details}
                            </span>
                          ) : null}
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="hidden sm:block bg-[#E5E7EB] w-px" />
                <ul className="space-y-1.5">
                  {(viewMode === 'summary' ? summaryItems.slice(3, 6) : technicalSkills.slice(2, 4)).map((item) => {
                    const itemKey = 'label' in item ? item.label : item.title;
                    return (
                      <li key={itemKey} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <div className="min-w-0">
                          <span className="skillTitle font-medium">
                            {'label' in item ? item.label : item.title}
                          </span>
                          {viewMode === 'technical' && showTechDetails && 'details' in item ? (
                            <span className="skillDetails ml-1 text-[12px] sm:text-[13px] font-normal text-slate-500 whitespace-normal">
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
              <div className="hidden sm:flex sm:flex-row sm:flex-wrap gap-1.5 pt-2 border-t border-[hsl(var(--clinical-border))]">
                <Link
                  to="/projects"
                  className="flex items-center justify-center sm:justify-start gap-1.5 px-2.5 py-1.5 rounded-sm bg-primary text-primary-foreground text-[11px] font-medium hover:bg-[hsl(var(--clinical-primary-hover))] transition-colors"
                >
                  View Projects
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <div className="flex flex-wrap gap-1.5">
                  <a 
                    href="https://www.linkedin.com/in/srushti-madhure/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-sm bg-[hsl(var(--clinical-primary-muted))] border border-[hsl(var(--primary)/0.2)] text-[11px] font-medium text-primary hover:bg-[hsl(var(--primary)/0.12)] transition-colors"
                  >
                    <Linkedin className="w-3 h-3" />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href="https://github.com/srushtismadhure" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-sm bg-[hsl(var(--clinical-primary-muted))] border border-[hsl(var(--primary)/0.2)] text-[11px] font-medium text-primary hover:bg-[hsl(var(--primary)/0.12)] transition-colors"
                  >
                    <Github className="w-3 h-3" />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="mailto:srushtisunilmadhure@gmail.com" 
                    className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-sm bg-[hsl(var(--clinical-primary-muted))] border border-[hsl(var(--primary)/0.2)] text-[11px] font-medium text-primary hover:bg-[hsl(var(--primary)/0.12)] transition-colors"
                  >
                    <Mail className="w-3 h-3" />
                    <span>Let’s talk.</span>
                  </a>
                  <a
                    href={`${import.meta.env.BASE_URL}BI_Analyst_Master.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-sm bg-[hsl(var(--clinical-primary-muted))] text-[11px] font-medium text-primary hover:bg-[hsl(var(--primary)/0.12)] transition-colors"
                  >
                    <span>Resume</span>
                  </a>
                </div>
              </div>
          </div>

            <div className="system-module-footer flex flex-wrap items-center gap-x-3 gap-y-0.5" />
          </div>

        </div>

        {/* Right Column - Clinical Snapshot */}
        <div className="lg:col-span-1 space-y-2.5 min-w-0">
          
          {/* Analytics Toolkit */}
          <ClinicalAnalyticsToolkit />

          {/* Areas of Interest */}
          <section className="interest-panel w-full rounded-md border border-slate-300 bg-white shadow-none">
            <div className="flex items-center justify-between border-b border-slate-300 bg-slate-100/70 px-3 py-2">
              <div className="flex items-center gap-2">
                <Activity className="h-3.5 w-3.5 text-slate-500" />
                <span className="text-[11px] font-normal tracking-wide text-slate-600 uppercase">
                  Areas of Interest
                </span>
              </div>
              <span className="text-[10px] text-slate-400">n={interestAreas.length}</span>
            </div>

            <div className="px-3 py-2">
              <div className="flex flex-wrap gap-2">
                {interestAreas.map((area) => (
                  <span
                    key={area.label}
                    className="inline-flex items-center gap-1.5 rounded-sm border border-slate-300 bg-white px-2 py-1 text-lg sm:text-[11px] font-normal text-[hsl(var(--clinical-text-muted))] hover:bg-slate-50 transition-colors"
                  >
                    <area.icon className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
                    <span>{area.label}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-300 bg-slate-50 px-3 py-2">
              <p className="text-[10px] text-slate-500">Analytical focus areas</p>
            </div>
          </section>

        </div>
      </div>
    </section>
  );
}
