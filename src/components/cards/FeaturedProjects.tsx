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
    <div className="system-module min-w-0">
      <div className="system-module-header">
        <div className="flex items-center gap-1.5 min-w-0">
          <Database className="w-3 h-3 text-primary flex-shrink-0" />
          <span className="system-module-label">Clinical Use Cases</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] text-muted-foreground tabular-nums">n=5</span>
          <button className="w-5 h-5 rounded hover:bg-muted flex items-center justify-center transition-colors flex-shrink-0">
            <ExternalLink className="w-2.5 h-2.5 text-muted-foreground" />
          </button>
        </div>
      </div>

      <div className="system-module-content">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-1.5">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="p-2 rounded bg-muted/30 border border-border hover:border-primary/30 transition-colors min-w-0 cursor-pointer"
            >
              <div className="flex items-start gap-1.5 mb-1.5">
                <div className="w-6 h-6 rounded bg-muted flex items-center justify-center flex-shrink-0 border border-border">
                  <project.icon className="w-3 h-3 text-muted-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-medium text-foreground truncate leading-tight">{project.title}</p>
                  <p className="text-[9px] text-muted-foreground truncate">{project.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 text-[8px]">
                <span className="data-tag">{project.dataSource}</span>
                <span className="data-tag">{project.records}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="system-module-footer flex flex-wrap items-center gap-x-3 gap-y-0.5">
        <span>Sources: EHR, Claims, FHIR, SDOH</span>
        <span>Layer: production</span>
      </div>
    </div>
  );
}
