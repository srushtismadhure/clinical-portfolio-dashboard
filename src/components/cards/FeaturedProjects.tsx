import { 
  Brain, 
  HeartPulse, 
  Database, 
  MessageSquare, 
  BarChart3,
  ArrowRight,
  Clock,
  CheckCircle2,
  Circle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    icon: Brain,
    title: 'Predictive Modeling',
    description: 'Risk prediction & forecasting',
    phase: 'Phase 3',
    milestones: 4,
    completed: 3,
    status: 'active',
    timeline: ['Q1', 'Q2', 'Q3', 'Q4'],
    currentPhase: 2,
  },
  {
    id: 2,
    icon: HeartPulse,
    title: "Women's Health Analytics",
    description: 'SDOH insights + care optimization',
    phase: 'Phase 2',
    milestones: 5,
    completed: 2,
    status: 'active',
    timeline: ['Q1', 'Q2', 'Q3', 'Q4'],
    currentPhase: 1,
  },
  {
    id: 3,
    icon: Database,
    title: 'EHR Data Engineering',
    description: 'ETL pipelines & normalization',
    phase: 'Phase 4',
    milestones: 6,
    completed: 5,
    status: 'review',
    timeline: ['Q1', 'Q2', 'Q3', 'Q4'],
    currentPhase: 3,
  },
  {
    id: 4,
    icon: MessageSquare,
    title: 'Chatbot AI (LLM)',
    description: 'Conversational health assistant',
    phase: 'Phase 1',
    milestones: 4,
    completed: 1,
    status: 'active',
    timeline: ['Q1', 'Q2', 'Q3', 'Q4'],
    currentPhase: 0,
  },
  {
    id: 5,
    icon: BarChart3,
    title: 'Dashboards & Reporting',
    description: 'Power BI & Tableau',
    phase: 'Complete',
    milestones: 5,
    completed: 5,
    status: 'complete',
    timeline: ['Q1', 'Q2', 'Q3', 'Q4'],
    currentPhase: 4,
  },
];

const statusStyles: Record<string, string> = {
  active: 'ehr-pill-primary',
  review: 'ehr-pill-secondary',
  complete: 'ehr-pill-success',
};

const statusIcons: Record<string, typeof Circle> = {
  active: Clock,
  review: Circle,
  complete: CheckCircle2,
};

export function FeaturedProjects() {
  return (
    <div className="ehr-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
      <div className="flex items-center justify-between mb-1">
        <div>
          <h3 className="text-base font-semibold text-foreground">Featured Projects</h3>
          <p className="text-sm text-muted-foreground">Active projects and delivery timelines</p>
        </div>
        <Link 
          to="/projects"
          className="flex items-center gap-1.5 text-sm text-secondary hover:text-secondary/80 transition-colors font-medium"
        >
          View all
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Timeline Header */}
      <div className="flex items-center gap-4 mt-6 mb-3 pl-[200px]">
        {['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'].map((quarter, i) => (
          <div key={quarter} className={`text-xs font-medium flex-1 text-center ${i === 2 ? 'text-primary' : 'text-muted-foreground'}`}>
            {quarter}
          </div>
        ))}
      </div>

      {/* Project Timeline */}
      <div className="space-y-2">
        {projects.map((project, idx) => {
          const StatusIcon = statusIcons[project.status];
          return (
            <div 
              key={project.id} 
              className="flex items-center gap-4 py-2 px-2 rounded-md hover:bg-muted/50 transition-colors animate-fade-in cursor-pointer" 
              style={{ animationDelay: `${0.1 + idx * 0.05}s` }}
            >
              {/* Project Info */}
              <div className="w-[184px] flex items-center gap-3 flex-shrink-0">
                <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center">
                  <project.icon className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="min-w-0">
                  <span className="text-sm font-medium text-foreground block truncate">{project.title}</span>
                  <span className="text-xs text-muted-foreground">{project.milestones - project.completed} milestones left</span>
                </div>
              </div>

              {/* Timeline Bar */}
              <div className="flex-1 flex items-center gap-1">
                {project.timeline.map((_, i) => (
                  <div 
                    key={i}
                    className={`flex-1 h-2 rounded-sm ${
                      i < project.currentPhase 
                        ? 'bg-primary' 
                        : i === project.currentPhase 
                          ? 'bg-secondary' 
                          : 'bg-muted'
                    }`}
                  />
                ))}
              </div>

              {/* Status */}
              <div className="w-24 flex-shrink-0">
                <span className={`ehr-pill text-xs ${statusStyles[project.status]}`}>
                  <StatusIcon className="w-3 h-3" />
                  {project.phase}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-4 pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="w-3 h-2 rounded-sm bg-primary" />
          <span>Completed</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="w-3 h-2 rounded-sm bg-secondary" />
          <span>In Progress</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="w-3 h-2 rounded-sm bg-muted" />
          <span>Planned</span>
        </div>
      </div>
    </div>
  );
}
