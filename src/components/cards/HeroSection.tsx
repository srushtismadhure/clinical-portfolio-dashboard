import { useState } from 'react';
import { MapPin, Mail, Linkedin, Github, ArrowRight, Database, Server, Activity, Layers, ToggleLeft, ToggleRight } from 'lucide-react';

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
    <section className="py-3 sm:py-4 relative">
      {/* Main Grid - Mobile first: single column, lg: 2 columns (8/4 split) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 w-full relative z-10">
        
        {/* Left Column - Primary Identity + Profile Overview */}
        <div className="lg:col-span-8 space-y-3 sm:space-y-4 min-w-0">
          
          {/* Main Identity Module */}
          <div className="system-module animate-fade-in min-w-0">
            <div className="system-module-header">
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-primary" />
                <span className="system-module-label">Profile Overview</span>
              </div>
              <span className="text-[10px] text-muted-foreground">Active</span>
            </div>
            
            <div className="system-module-content">
              {/* Top Row: Photo + Identity */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-3">
                {/* Professional Photo Placeholder */}
                <div className="w-14 h-16 sm:w-16 sm:h-20 rounded-md bg-gradient-to-br from-primary/15 to-muted flex items-center justify-center text-lg sm:text-xl font-semibold text-primary border border-border flex-shrink-0">
                  SM
                </div>
                
                {/* Name & Role */}
                <div className="flex-1 flex flex-col justify-center min-w-0">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground tracking-tight leading-tight mb-0.5">
                    Srushti S. Madhure
                  </h1>
                  <p className="text-sm sm:text-base font-medium text-primary mb-0.5">
                    Health Informatics Specialist
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Clinical Analytics • Data Engineering • Decision Support Systems
                  </p>
                </div>
              </div>

              {/* Location + Status Row */}
              <div className="flex flex-wrap items-center gap-2 mb-3 pb-3 border-b border-border">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3 text-muted-foreground" />
                  <span>Ann Arbor, MI</span>
                </div>
                <span className="text-border">|</span>
                <span className="data-tag data-tag-active">Open to Opportunities</span>
              </div>

              {/* View Toggle */}
              <div className="flex items-center justify-between mb-3">
                <button 
                  onClick={() => setViewMode(viewMode === 'clinical' ? 'technical' : 'clinical')}
                  className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {viewMode === 'clinical' ? (
                    <ToggleLeft className="w-4 h-4" />
                  ) : (
                    <ToggleRight className="w-4 h-4 text-primary" />
                  )}
                  <span className="font-medium">
                    {viewMode === 'clinical' ? 'Clinical View' : 'Technical View'}
                  </span>
                </button>
                <span className="text-[10px] text-muted-foreground">
                  Toggle to see {viewMode === 'clinical' ? 'technical details' : 'clinical outcomes'}
                </span>
              </div>

              {/* Summary Points - Dense */}
              <ul className="space-y-1.5 mb-3">
                {summaryPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span className="min-w-0">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 pt-2 border-t border-border">
                <a 
                  href="#projects" 
                  className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors"
                >
                  View Clinical Use Cases
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <div className="flex flex-wrap gap-2">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-md bg-muted border border-border text-xs font-medium text-foreground hover:bg-muted/80 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-md bg-muted border border-border text-xs font-medium text-foreground hover:bg-muted/80 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="mailto:srushti@example.com"
                    className="flex items-center justify-center px-2.5 py-2 rounded-md bg-muted border border-border text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="system-module-footer flex flex-wrap items-center gap-x-4 gap-y-1">
              <span>Analytics layer: production-style</span>
              <span>Primary domain: healthcare</span>
              <span>Last updated: Jan 2026</span>
            </div>
          </div>

          {/* System Metrics Module */}
          <div className="system-module animate-fade-in min-w-0" style={{ animationDelay: '0.05s' }}>
            <div className="system-module-header">
              <div className="flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-primary" />
                <span className="system-module-label">System Metrics</span>
              </div>
            </div>
            
            <div className="system-module-content">
              <div className="grid grid-cols-3 gap-3">
                {systemMetrics.map((metric) => (
                  <div key={metric.label} className="text-center p-2 bg-muted/30 rounded border border-border">
                    <p className="metric-value">{metric.value}</p>
                    <p className="metric-label">{metric.label}</p>
                    <p className="text-[9px] text-muted-foreground mt-0.5">{metric.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="system-module-footer">
              <span>Metrics derived from portfolio analysis</span>
            </div>
          </div>
        </div>

        {/* Right Column - Supporting Modules */}
        <div className="lg:col-span-4 space-y-3 sm:space-y-4 min-w-0">
          
          {/* Core Skills Module */}
          <div className="system-module animate-fade-in min-w-0" style={{ animationDelay: '0.1s' }}>
            <div className="system-module-header">
              <div className="flex items-center gap-2">
                <Database className="w-3.5 h-3.5 text-primary" />
                <span className="system-module-label">Core Skills</span>
              </div>
              <span className="text-[10px] text-muted-foreground">n=6</span>
            </div>
            
            <div className="system-module-content py-3">
              <div className="flex flex-wrap gap-1.5">
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

          {/* Focus Areas Module */}
          <div className="system-module animate-fade-in min-w-0" style={{ animationDelay: '0.15s' }}>
            <div className="system-module-header">
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-[hsl(var(--ehr-blue))]" />
                <span className="system-module-label">Focus Areas</span>
              </div>
              <span className="text-[10px] text-muted-foreground">n=4</span>
            </div>
            
            <div className="system-module-content py-3">
              <div className="flex flex-wrap gap-1.5">
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

          {/* Data Sources Module */}
          <div className="system-module animate-fade-in min-w-0" style={{ animationDelay: '0.2s' }}>
            <div className="system-module-header">
              <div className="flex items-center gap-2">
                <Server className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="system-module-label">Data Sources</span>
              </div>
              <span className="text-[10px] text-muted-foreground">n=5</span>
            </div>
            
            <div className="system-module-content py-3">
              <div className="space-y-1">
                {dataSources.map((source) => (
                  <div key={source} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
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
