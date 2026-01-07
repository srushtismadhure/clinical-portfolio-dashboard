import { 
  Brain, 
  HeartPulse, 
  Database, 
  MessageSquare, 
  BarChart3,
  ExternalLink
} from 'lucide-react';

const projects = [
  {
    id: 1,
    icon: Brain,
    title: 'Readmission Risk Model',
    description: 'Predictive analytics for 30-day readmission',
    dataSource: 'EHR + Claims',
    records: '450K patients',
  },
  {
    id: 2,
    icon: HeartPulse,
    title: 'Maternal Health Dashboard',
    description: 'SDOH-integrated outcomes tracking',
    dataSource: 'FHIR R4',
    records: '85K records',
  },
  {
    id: 3,
    icon: Database,
    title: 'Clinical Data Pipeline',
    description: 'ETL for multi-source integration',
    dataSource: 'HL7/FHIR',
    records: '2.1M rows',
  },
  {
    id: 4,
    icon: MessageSquare,
    title: 'Care Navigation Assistant',
    description: 'LLM-powered patient guidance',
    dataSource: 'Knowledge Base',
    records: '10K queries',
  },
  {
    id: 5,
    icon: BarChart3,
    title: 'Quality Metrics Dashboard',
    description: 'Real-time performance monitoring',
    dataSource: 'Claims + EHR',
    records: '12 KPIs',
  },
];

export function FeaturedProjects() {
  return (
    <div className="system-module animate-fade-in min-w-0" style={{ animationDelay: '0.1s' }}>
      <div className="system-module-header">
        <div className="flex items-center gap-2 min-w-0">
          <Database className="w-3.5 h-3.5 text-primary flex-shrink-0" />
          <span className="system-module-label">Clinical Use Cases</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-muted-foreground">n=5</span>
          <button className="w-6 h-6 rounded hover:bg-muted flex items-center justify-center transition-colors flex-shrink-0">
            <ExternalLink className="w-3 h-3 text-muted-foreground" />
          </button>
        </div>
      </div>

      <div className="system-module-content">
        {/* Project Cards - Mobile: Stack, Desktop: Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
          {projects.map((project, idx) => (
            <div 
              key={project.id} 
              className="p-3 rounded-md bg-muted/30 border border-border hover:bg-muted/50 transition-colors animate-fade-in min-w-0 cursor-pointer"
              style={{ animationDelay: `${0.1 + idx * 0.03}s` }}
            >
              <div className="flex items-start gap-2 mb-2">
                <div className="w-7 h-7 rounded bg-muted flex items-center justify-center flex-shrink-0 border border-border">
                  <project.icon className="w-3.5 h-3.5 text-muted-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-foreground truncate">{project.title}</p>
                  <p className="text-[10px] text-muted-foreground truncate">{project.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 text-[9px] text-muted-foreground">
                <span className="data-tag">{project.dataSource}</span>
                <span className="data-tag">{project.records}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="system-module-footer flex flex-wrap items-center gap-x-4 gap-y-1">
        <span>Data sources: EHR, Claims, FHIR, SDOH</span>
        <span>Analysis type: production-style</span>
      </div>
    </div>
  );
}
