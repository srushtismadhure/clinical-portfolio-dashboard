import type React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Linkedin, Github, ArrowRight, Database, Server, Activity, Layers, ToggleLeft, ToggleRight, User, Code2, BarChart3, Boxes, Cloud, Sigma, Layers3 } from 'lucide-react';

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
  return (
    <section className="toolkit-cabinet relative rounded-2xl border border-slate-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.05),0_12px_24px_rgba(15,23,42,0.08)] overflow-hidden">
      {/* Corner screws */}
      <span className="toolkit-screw absolute left-3 top-3 h-2.5 w-2.5 rounded-full" />
      <span className="toolkit-screw absolute right-3 top-3 h-2.5 w-2.5 rounded-full" />
      <span className="toolkit-screw absolute left-3 bottom-3 h-2.5 w-2.5 rounded-full" />
      <span className="toolkit-screw absolute right-3 bottom-3 h-2.5 w-2.5 rounded-full" />

      {/* Header strip */}
      <div className="toolkit-bevel border-b border-slate-200 px-4 py-3">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-700 uppercase">
          Analytics Toolkit
        </p>
        <p className="text-sm text-slate-500">For clinical decisions</p>
      </div>

      {/* Inner recessed tray */}
      <div className="p-4">
        <div className="toolkit-inset rounded-xl border border-slate-200 p-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {tools.map(({ label, Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2"
              >
                <Icon className="h-4 w-4 text-slate-600" aria-hidden="true" />
                <span className="text-sm font-medium text-slate-700">{label}</span>
              </div>
            ))}
          </div>

          {/* Status bar */}
          <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] tracking-widest text-slate-500 uppercase">Status</span>
              <span className="text-[11px] font-semibold tracking-widest text-slate-700 uppercase">
                Operational
              </span>
            </div>
          </div>
        </div>
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

const dataSources = [
  'Epic/Cerner EHR',
  'CMS Claims',
  'HL7/FHIR',
  'ICD-10/CPT',
  'SDOH Indices',
];

const systemMetrics = [
  { label: 'Use Cases', value: '12+', detail: 'clinical workflows' },
  { label: 'Datasets', value: '2.5M+', detail: 'patient records' },
  { label: 'Experience', value: '3 yrs', detail: 'healthcare analytics' },
];

const clinicalSummary = [
  'Builds production analytics pipelines for clinical decision support and population health',
  'Designs predictive models for readmission risk, care gaps, and resource allocation',
  'Creates stakeholder-facing dashboards for clinical ops and quality improvement',
  'Integrates EHR, claims, and SDOH data for holistic patient analytics',
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 w-full relative z-10">
        
        {/* Left Column - Primary Identity */}
        <div className="lg:col-span-8 space-y-2.5 min-w-0">
          
          {/* Profile Overview Module */}
          <div className="system-module min-w-0">
            <div className="system-module-header">
              <div className="flex items-center gap-1.5">
                <User className="w-3 h-3 text-primary" />
                <span className="system-module-label">Profile Overview</span>
              </div>
              <span className="status-badge status-active">Active</span>
            </div>
            
            <div className="system-module-content">
              {/* Identity Row */}
              <div className="flex flex-col sm:flex-row gap-2.5 mb-2.5">
                {/* Photo */}
                <div className="w-12 h-14 sm:w-14 sm:h-16 rounded border border-[hsl(var(--clinical-border))] flex-shrink-0 overflow-hidden bg-white">
                  <img
                    src={`${import.meta.env.BASE_URL}images/profile.png`}
                    alt="Profile photo"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Name & Role */}
                <div className="flex-1 flex flex-col justify-center min-w-0">
                  <h1 className="text-2xl sm:text-xl font-semibold text-[hsl(var(--clinical-text))] tracking-tight leading-tight">
                    Srushti Madhure
                  </h1>
                  <p className="text-lg sm:text-xs font-medium text-primary">
                     Healthcare Data Analyst & Analytics Engineer
                  </p>
                  <p className="hidden sm:block text-[10px] text-[hsl(var(--clinical-text-muted))] mt-0.5">
                   
                  </p>
                </div>
              </div>

              {/* Location + Status */}
              <div className="flex flex-wrap items-center gap-2 mb-2.5 pb-2.5 border-b border-[hsl(var(--clinical-border))]">
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

              {/* View Toggle */}
              <div className="flex items-center justify-between mb-2">
                <button 
                  onClick={() => setViewMode(viewMode === 'clinical' ? 'technical' : 'clinical')}
                  className="flex items-center gap-1.5 text-base sm:text-[10px] text-[hsl(var(--clinical-text-muted))] hover:text-primary transition-colors"
                >
                  {viewMode === 'clinical' ? (
                    <ToggleLeft className="w-3.5 h-3.5" />
                  ) : (
                    <ToggleRight className="w-3.5 h-3.5 text-primary" />
                  )}
                  <span className="font-medium">
                    {viewMode === 'clinical' ? 'Clinical View' : 'Technical View'}
                  </span>
                </button>
                <span className="hidden sm:inline text-[9px] text-[hsl(var(--clinical-text-muted))]">
                  Toggle for {viewMode === 'clinical' ? 'technical' : 'clinical'} details
                </span>
              </div>

              {/* Summary Points */}
              <ul className="space-y-1 mb-2.5">
                {summaryPoints.map((point, index) => {
                  const isFirst = index === 0;
                  const showThis = isFirst || showMobileDetails;

                  return (
                    <li
                      key={index}
                      className={
                        "flex items-start gap-1.5 text-lg sm:text-[11px] text-[hsl(var(--clinical-text-muted))] leading-relaxed " +
                        (showThis ? "" : "hidden sm:flex")
                      }
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
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1.5 pt-2 border-t border-[hsl(var(--clinical-border))]">
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
        <div className="lg:col-span-4 space-y-2.5 min-w-0">
          
          {/* Analytics Toolkit */}
          <ClinicalAnalyticsToolkit />

          {/* Focus Areas */}
          <div className="system-module min-w-0">
            <div className="system-module-header">
              <div className="flex items-center gap-1.5">
                <Activity className="w-3 h-3 text-primary" />
                <span className="system-module-label">Focus Areas</span>
              </div>
              <span className="text-sm sm:text-[9px] text-primary/70 tabular-nums">n=4</span>
            </div>
            
            <div className="system-module-content py-2">
              <div className="flex flex-wrap gap-1">
                {focusAreas.map((area) => (
                  <span key={area.name} className="data-tag data-tag-active">
                    {area.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="system-module-footer">
              <span>Domain specializations</span>
            </div>
          </div>

          {/* Data Sources */}
          <div className="system-module min-w-0">
            <div className="system-module-header">
              <div className="flex items-center gap-1.5">
                <Server className="w-3 h-3 text-primary/70" />
                <span className="system-module-label">Data Sources</span>
              </div>
              <span className="text-sm sm:text-[9px] text-primary/70 tabular-nums">n=5</span>
            </div>
            
            <div className="system-module-content py-2">
              <div className="space-y-0.5">
                {dataSources.map((source) => (
                  <div key={source} className="flex items-center gap-1.5 text-base sm:text-[10px] text-[hsl(var(--clinical-text-muted))]">
                    <span className="w-0.5 h-0.5 rounded-full bg-primary/40" />
                    <span>{source}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="system-module-footer">
              <span>Healthcare data standards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
