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

const clinicalSummary = [
  'Builds end-to-end ETL pipelines for clinical decision support',
  'Creates executive-facing dashboards for operations and quality improvement',
  'Designs data models and writes complex SQL for analytics',
  'Defines KPIs through market and workflow analysis',
  'Applies statistical analysis and root-cause investigation to drive improvements',
];


const technicalSummary = [
  'ETL pipelines: Python, Spark, Databricks on Azure cloud infrastructure',
  'Data modeling: FHIR R4, OMOP CDM, custom clinical schemas',
  'ML stack: scikit-learn, XGBoost, logistic regression for clinical prediction',
  'BI layer: Power BI, Tableau with DAX/SQL backend optimization',
];

export function HeroSection() {
  const [viewMode, setViewMode] = useState<'clinical' | 'technical'>('clinical');
  const [showMobileDetails, setShowMobileDetails] = useState(false);
  const summaryPoints = viewMode === 'clinical' ? clinicalSummary : technicalSummary;

  useEffect(() => {
    // When switching between Clinical/Technical, collapse details on mobile
    setShowMobileDetails(false);
  }, [viewMode]);

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
              <span className="system-module-label font-semibold tracking-wide text-slate-700 uppercase">
                  Profile Overview
                </span>
              </div>
              <span className="status-badge status-active">Active</span>
            </div>
            
            <div className="system-module-content pb-2">
              {/* Identity Row */}
              <div className="flex flex-col sm:flex-row gap-2.5 mb-2.5">
                {/* Photo */}
                <div className="w-18 h-18 sm:w-20 sm:h-24 rounded border border-[hsl(var(--clinical-border))] flex-shrink-0 overflow-hidden bg-white">
                  <img
                    src={`${import.meta.env.BASE_URL}images/profile.png`}
                    alt="Profile photo"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Name & Role */}
                <div className="flex-1 flex flex-col justify-center min-w-0">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900 tracking-tight leading-tight">
  Srushti Madhure
</h1>
                  

                     {/* <p className="hidden sm:block text-[10px] text-[hsl(var(--clinical-text-muted))] mt-0.5">
                        — Stable, high-functioning, caffeine-adjacent.
                        </p> */}
                  
  {/* Diagnosis */}
  <p className="text-[11px] sm:text-[10px] text-[hsl(var(--clinical-text-muted))] uppercase tracking-wide">
    Diagnosis
  </p>
  <p className="text-[0.95rem] sm:text-sm lg:!text-[0.95rem] font-semibold text-primary leading-[1.4]">
    Healthcare Data Analyst & Analytics Engineer
  </p>
                  {/* Prognosis */}
                  <p className="hidden sm:block text-[10px] sm:text-[9px] text-[hsl(var(--clinical-text-muted))] mt-1">
                    Prognosis
                  </p>
                  <p className="hidden sm:block text-[0.95rem] sm:text-[10px] lg:!text-[0.95rem] font-normal text-[hsl(var(--clinical-text-muted))] leading-[1.45] lg:!leading-[1.5]">
                    Chronic multitasking tendencies. 
                  </p>
                 {/* <p className="hidden sm:block text-[0.95rem] sm:text-[10px] lg:!text-[0.95rem] font-normal text-[hsl(var(--clinical-text-muted))] leading-[1.45] lg:!leading-[1.5]">
                    Rapid context switching across domains.
                  </p> */}
                  <p className="hidden sm:block text-[0.95rem] sm:text-[10px] lg:!text-[0.95rem] font-normal text-[hsl(var(--clinical-text-muted))] leading-[1.45] lg:!leading-[1.5]">
                    Multilingual communication ability, including Spanish.
                  </p>

  {/* Clinician note (desktop only) 
  <p className="hidden sm:block text-[10px] text-[hsl(var(--clinical-text-muted))] mt-1 italic">
    — Stable, high-functioning, caffeine-adjacent.
  </p>*/}

          </div>
        </div>

              {/* Location + Status */}
              <div className="flex flex-wrap items-center gap-1.5 mb-1.5 pb-1.5 border-b border-[hsl(var(--clinical-border))]">
                <a
                  href="mailto:srushti@example.com"
                  className="flex items-center gap-1 text-base sm:text-[10px] text-primary hover:underline underline-offset-4 transition-colors"
                >
                  <Mail className="w-2.5 h-2.5" />
                  <span>Let’s talk</span>
                </a>
                <span className="text-[hsl(var(--clinical-border))] text-base sm:text-[10px]">|</span>
                <span className="data-tag data-tag-active">Open to Remote & Hybrid Opportunities</span>
              </div>

              {/* Signs & Symptoms + Toggle */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="text-sm sm:text-sm lg:!text-sm font-semibold text-primary leading-[1.45] lg:!leading-[1.4]">
                  Signs &amp; Symptoms
                </h3>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setViewMode(viewMode === 'clinical' ? 'technical' : 'clinical')}
                    className="flex items-center gap-1.5 text-base sm:text-[10px] text-[hsl(var(--clinical-text-muted))] hover:text-primary transition-colors"
                  >
                    {viewMode === 'clinical' ? (
                      <ToggleLeft className="w-3.5 h-3.5" />
                    ) : (
                      <ToggleRight className="w-3.5 h-3.5 text-primary" />
                    )}
                    <span className="font-medium">Toggle view</span>
                  </button>
                  <span className="hidden sm:inline text-[9px] text-[hsl(var(--clinical-text-muted))]">
                    Toggle for {viewMode === 'clinical' ? 'technical' : 'clinical'} details
                  </span>
                </div>
              </div>

              {/* Summary Points */}
              <ul className="space-y-1 mb-2.5">
                {summaryPoints.map((point, index) => {
                  const isFirst = index === 0;
                  const showThis = isFirst || showMobileDetails;

                  return (
                    <li
                      key={index}
                      className={[
                        "flex items-start gap-1.5",
                        "text-[0.95rem] sm:text-[10px] text-[hsl(var(--clinical-text-muted))] leading-[1.45] lg:!leading-[1.5]",
                        showThis ? "" : "hidden sm:flex",
                      ].join(" ")}
                    >
                      <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span className="min-w-0">{point}</span>
                    </li>
                  );
                })}
              </ul>

              {/* Mobile-only: View more / View less */}
              {summaryPoints.length > 1 ? (
                <div className="sm:hidden -mt-1 mb-2">
                  <button
                    type="button"
                    onClick={() => setShowMobileDetails((v) => !v)}
                    className="text-base font-medium text-primary underline underline-offset-4 hover:opacity-90"
                  >
                    {showMobileDetails ? "View less" : "View more"}
                  </button>
                </div>
              ) : null}

              {/* Actions */}
              <div className="hidden sm:flex sm:flex-row sm:flex-wrap gap-1.5 pt-2 border-t border-[hsl(var(--clinical-border))]">
                <Link
                  to="/projects"
                  className="flex items-center justify-center sm:justify-start gap-1.5 px-3 py-2 rounded bg-primary text-primary-foreground text-base sm:text-[11px] font-medium hover:bg-[hsl(var(--clinical-primary-hover))] transition-colors"
                >
                  View Projects
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <div className="flex flex-wrap gap-1.5">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 px-2.5 py-2 rounded bg-[hsl(var(--clinical-primary-muted))] border border-[hsl(var(--primary)/0.2)] text-base sm:text-[11px] font-medium text-primary hover:bg-[hsl(var(--primary)/0.12)] transition-colors"
                  >
                    <Linkedin className="w-3 h-3" />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 px-2.5 py-2 rounded bg-[hsl(var(--clinical-primary-muted))] border border-[hsl(var(--primary)/0.2)] text-base sm:text-[11px] font-medium text-primary hover:bg-[hsl(var(--primary)/0.12)] transition-colors"
                  >
                    <Github className="w-3 h-3" />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="mailto:srushti@example.com"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded bg-[hsl(var(--clinical-primary-muted))] border border-[hsl(var(--primary)/0.2)] text-base sm:text-[11px] font-medium text-primary hover:bg-[hsl(var(--primary)/0.12)] transition-colors"
                  >
                    <Mail className="w-3 h-3" />
                    <span>Let’s talk.</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="system-module-footer flex flex-wrap items-center gap-x-3 gap-y-0.5">
              <span>Domain: healthcare</span>
              <span>Layer: production</span>
              <span>Updated: Jan 2026</span>
            </div>
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
