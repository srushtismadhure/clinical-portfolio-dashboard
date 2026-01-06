import { 
  Brain, 
  HeartPulse, 
  Database, 
  MessageSquare, 
  BarChart3,
  ArrowUpRight
} from 'lucide-react';

const projects = [
  {
    id: 1,
    icon: Brain,
    title: 'Predictive Modeling',
    description: 'Risk prediction & forecasting',
    color: 'teal',
  },
  {
    id: 2,
    icon: HeartPulse,
    title: "Women's Health Analytics",
    description: 'SDOH insights + care optimization',
    color: 'lavender',
  },
  {
    id: 3,
    icon: Database,
    title: 'EHR Data Engineering',
    description: 'ETL pipelines & normalization',
    color: 'blue',
  },
  {
    id: 4,
    icon: MessageSquare,
    title: 'Chatbot AI (LLM)',
    description: 'Conversational health assistant',
    color: 'coral',
  },
  {
    id: 5,
    icon: BarChart3,
    title: 'Dashboards & Reporting',
    description: 'Power BI & Tableau',
    color: 'cream',
  },
];

const colorClasses: Record<string, string> = {
  teal: 'bg-[hsl(var(--ehr-teal)/0.15)] text-[hsl(var(--ehr-teal))]',
  lavender: 'bg-[hsl(var(--ehr-lavender)/0.5)] text-[hsl(var(--ehr-heading))]',
  blue: 'bg-[hsl(var(--ehr-blue)/0.15)] text-[hsl(var(--ehr-blue))]',
  coral: 'bg-[hsl(var(--ehr-coral)/0.2)] text-[hsl(var(--ehr-coral))]',
  cream: 'bg-[hsl(var(--ehr-cream))] text-[hsl(var(--ehr-heading))]',
};

const dotColors: Record<string, string> = {
  teal: 'bg-[hsl(var(--ehr-teal))]',
  lavender: 'bg-[hsl(var(--ehr-lavender))]',
  blue: 'bg-[hsl(var(--ehr-blue))]',
  coral: 'bg-[hsl(var(--ehr-coral))]',
  cream: 'bg-amber-400',
};

export function FeaturedProjects() {
  return (
    <div className="ehr-card-primary animate-fade-in min-w-0" style={{ animationDelay: '0.1s' }}>
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <div className="flex items-center gap-2 min-w-0">
          <Database className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
          <h3 className="text-sm sm:text-base font-semibold text-foreground uppercase tracking-wide truncate">Featured Projects</h3>
        </div>
        <button className="w-7 h-7 rounded-lg hover:bg-white/50 flex items-center justify-center transition-colors flex-shrink-0">
          <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* Project Cards - Mobile: Stack, Desktop: Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
        {projects.map((project, idx) => (
          <div 
            key={project.id} 
            className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-white/40 border border-white/50 hover:bg-white/60 transition-colors animate-fade-in min-w-0"
            style={{ animationDelay: `${0.1 + idx * 0.05}s` }}
          >
            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${dotColors[project.color]}`} />
            <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${colorClasses[project.color]}`}>
              <project.icon className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-foreground truncate">{project.title}</p>
              <p className="text-xs text-muted-foreground truncate">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
