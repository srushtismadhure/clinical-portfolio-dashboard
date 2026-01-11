import { useState } from 'react';
import { MapPin, Mail, Linkedin, Github, ArrowRight, Database, Server, Activity, Layers, ToggleLeft, ToggleRight, User } from 'lucide-react';

const coreSkills = [
  { name: 'SQL', category: 'query' },
  { name: 'Python', category: 'lang' },
  { name: 'R', category: 'lang' },
  { name: 'Power BI', category: 'viz' },
  { name: 'Databricks', category: 'platform' },
  { name: 'Azure', category: 'cloud' },
];

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
  const summaryPoints = viewMode === 'clinical' ? clinicalSummary : technicalSummary;

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
                <div className="w-12 h-14 sm:w-14 sm:h-16 rounded bg-[hsl(var(--clinical-primary-muted))] flex items-center justify-center text-sm font-medium text-primary border border-[hsl(var(--clinical-border))] flex-shrink-0">
                  SM
                </div>
                
                {/* Name & Role */}
                <div className="flex-1 flex flex-col justify-center min-w-0">
                  <h1 className="text-lg sm:text-xl font-semibold text-[hsl(var(--clinical-text))] tracking-tight leading-tight">
                    Srushti S. Madhure
                  </h1>
                  <p className="text-xs font-medium text-primary">
                    Health Informatics Specialist
                  </p>
                  <p className="text-[10px] text-[hsl(var(--clinical-text-muted))] mt-0.5">
                    Clinical Analytics · Data Engineering · Decision Support
                  </p>
                </div>
              </div>

              {/* Location + Status */}
              <div className="flex flex-wrap items-center gap-2 mb-2.5 pb-2.5 border-b border-[hsl(var(--clinical-border))]">
                <div className="flex items-center gap-1 text-[10px] text-[hsl(var(--clinical-text-muted))]">
                  <MapPin className="w-2.5 h-2.5 text-primary" />
                  <span>Ann Arbor, MI</span>
                </div>
                <span className="text-[hsl(var(--clinical-border))] text-[10px]">|</span>
                <span className="data-tag data-tag-active">Open to Opportunities</span>
              </div>

              {/* View Toggle */}
              <div className="flex items-center justify-between mb-2">
                <button 
                  onClick={() => setViewMode(viewMode === 'clinical' ? 'technical' : 'clinical')}
                  className="flex items-center gap-1.5 text-[10px] text-[hsl(var(--clinical-text-muted))] hover:text-primary transition-colors"
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
                <span className="text-[9px] text-[hsl(var(--clinical-text-muted))]">
                  Toggle for {viewMode === 'clinical' ? 'technical' : 'clinical'} details
                </span>
              </div>

              {/* Summary Points */}
              <ul className="space-y-1 mb-2.5">
                {summaryPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-1.5 text-[11px] text-[hsl(var(--clinical-text-muted))] leading-snug">
                    <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span className="min-w-0">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1.5 pt-2 border-t border-[hsl(var(--clinical-border))]">
                <a 
                  href="#projects" 
                  className="flex items-center justify-center sm:justify-start gap-1.5 px-3 py-1.5 rounded bg-primary text-primary-foreground text-[11px] font-medium hover:bg-[hsl(var(--clinical-primary-hover))] transition-colors"
                >
                  View Clinical Use Cases
                  <ArrowRight className="w-3 h-3" />
                </a>
                <div className="flex flex-wrap gap-1.5">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 px-2.5 py-1.5 rounded bg-[hsl(var(--clinical-primary-muted))] border border-[hsl(var(--primary)/0.2)] text-[11px] font-medium text-primary hover:bg-[hsl(var(--primary)/0.12)] transition-colors"
                  >
                    <Linkedin className="w-3 h-3" />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 px-2.5 py-1.5 rounded bg-[hsl(var(--clinical-primary-muted))] border border-[hsl(var(--primary)/0.2)] text-[11px] font-medium text-primary hover:bg-[hsl(var(--primary)/0.12)] transition-colors"
                  >
                    <Github className="w-3 h-3" />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="mailto:srushti@example.com"
                    className="flex items-center justify-center px-2 py-1.5 rounded bg-[hsl(var(--clinical-primary-muted))] border border-[hsl(var(--primary)/0.2)] text-primary hover:bg-[hsl(var(--primary)/0.12)] transition-colors"
                  >
                    <Mail className="w-3 h-3" />
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

          {/* System Metrics Module */}
          <div className="system-module min-w-0">
            <div className="system-module-header">
              <div className="flex items-center gap-1.5">
                <Layers className="w-3 h-3 text-primary" />
                <span className="system-module-label">System Metrics</span>
              </div>
            </div>
            
            <div className="system-module-content py-2">
              <div className="grid grid-cols-3 gap-2">
                {systemMetrics.map((metric) => (
                  <div key={metric.label} className="text-center p-2 bg-[hsl(var(--clinical-primary-muted)/0.5)] rounded border border-[hsl(var(--clinical-border))]">
                    <p className="metric-value">{metric.value}</p>
                    <p className="metric-label">{metric.label}</p>
                    <p className="text-[8px] text-[hsl(var(--clinical-text-muted))]">{metric.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="system-module-footer">
              <span>Aggregated from portfolio analysis</span>
            </div>
          </div>
        </div>

        {/* Right Column - Clinical Snapshot */}
        <div className="lg:col-span-4 space-y-2.5 min-w-0">
          
          {/* Core Skills */}
          <div className="system-module min-w-0">
            <div className="system-module-header">
              <div className="flex items-center gap-1.5">
                <Database className="w-3 h-3 text-primary" />
                <span className="system-module-label">Core Skills</span>
              </div>
              <span className="text-[9px] text-primary/70 tabular-nums">n=6</span>
            </div>
            
            <div className="system-module-content py-2">
              <div className="flex flex-wrap gap-1">
                {coreSkills.map((skill) => (
                  <span key={skill.name} className="data-tag">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="system-module-footer">
              <span>Primary technical stack</span>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="system-module min-w-0">
            <div className="system-module-header">
              <div className="flex items-center gap-1.5">
                <Activity className="w-3 h-3 text-primary" />
                <span className="system-module-label">Focus Areas</span>
              </div>
              <span className="text-[9px] text-primary/70 tabular-nums">n=4</span>
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
              <span className="text-[9px] text-primary/70 tabular-nums">n=5</span>
            </div>
            
            <div className="system-module-content py-2">
              <div className="space-y-0.5">
                {dataSources.map((source) => (
                  <div key={source} className="flex items-center gap-1.5 text-[10px] text-[hsl(var(--clinical-text-muted))]">
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
