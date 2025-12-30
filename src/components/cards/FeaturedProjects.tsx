import { 
  Brain, 
  HeartPulse, 
  Database, 
  MessageSquare, 
  BarChart3,
  ArrowUpRight,
  Sun,
  Moon
} from 'lucide-react';

const projects = [
  {
    id: 1,
    icon: Brain,
    title: 'Predictive Modeling',
    description: 'Risk prediction & forecasting',
    color: 'teal',
    doses: ['50 ml', '100 ml'],
    schedule: { morning: 1, evening: 2 },
    days: ['Mon 07', 'Tue 08', 'Wed 09', 'Thu 10', 'Fri 11', 'Sat 12', 'Sun 13'],
    activeDay: 2,
  },
  {
    id: 2,
    icon: HeartPulse,
    title: "Women's Health Analytics",
    description: 'SDOH insights + care optimization',
    color: 'lavender',
    doses: ['100 ml'],
    schedule: { morning: 1, evening: 2 },
    days: ['Mon 07', 'Tue 08', 'Wed 09', 'Thu 10', 'Fri 11', 'Sat 12', 'Sun 13'],
    activeDay: 3,
  },
  {
    id: 3,
    icon: Database,
    title: 'EHR Data Engineering',
    description: 'ETL pipelines & normalization',
    color: 'blue',
    doses: ['30 ml'],
    schedule: { morning: 2, evening: 0 },
    days: ['Mon 07', 'Tue 08', 'Wed 09', 'Thu 10', 'Fri 11', 'Sat 12', 'Sun 13'],
    activeDay: 4,
  },
  {
    id: 4,
    icon: MessageSquare,
    title: 'Chatbot AI (LLM)',
    description: 'Conversational health assistant',
    color: 'coral',
    doses: ['50 ml'],
    schedule: { morning: 2, evening: 2 },
    days: ['Mon 07', 'Tue 08', 'Wed 09', 'Thu 10', 'Fri 11', 'Sat 12', 'Sun 13'],
    activeDay: 5,
  },
  {
    id: 5,
    icon: BarChart3,
    title: 'Dashboards & Reporting',
    description: 'Power BI & Tableau',
    color: 'cream',
    doses: ['100 ml'],
    schedule: { morning: 0, evening: 2 },
    days: ['Mon 07', 'Tue 08', 'Wed 09', 'Thu 10', 'Fri 11', 'Sat 12', 'Sun 13'],
    activeDay: 6,
  },
];

const colorClasses: Record<string, string> = {
  teal: 'ehr-pill-teal',
  lavender: 'ehr-pill-lavender',
  blue: 'ehr-pill-blue',
  coral: 'ehr-pill-coral',
  cream: 'ehr-pill-cream',
};

const dotColors: Record<string, string> = {
  teal: 'bg-ehr-teal',
  lavender: 'bg-ehr-lavender',
  blue: 'bg-ehr-blue',
  coral: 'bg-ehr-coral',
  cream: 'bg-amber-300',
};

export function FeaturedProjects() {
  return (
    <div className="ehr-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Database className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Featured Projects</h3>
        </div>
        <button className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center transition-colors">
          <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* Timeline Header */}
      <div className="flex items-center gap-4 mb-4 ml-[180px]">
        {projects[0].days.map((day, i) => (
          <div key={day} className={`text-xs font-medium w-16 text-center ${i === 2 ? 'text-primary' : 'text-muted-foreground'}`}>
            {day}
          </div>
        ))}
      </div>

      {/* Project Timeline */}
      <div className="space-y-3">
        {projects.map((project, idx) => (
          <div key={project.id} className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: `${0.1 + idx * 0.05}s` }}>
            {/* Project Info */}
            <div className="w-44 flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${dotColors[project.color]}`} />
              <project.icon className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground truncate">{project.title}</span>
            </div>

            {/* Timeline */}
            <div className="flex-1 flex items-center">
              <div className="w-full h-[2px] bg-border relative flex items-center">
                {/* Timeline pill positioned at active day */}
                <div 
                  className="absolute flex items-center gap-2"
                  style={{ left: `${(project.activeDay - 1) * 14.28}%` }}
                >
                  <span className={`ehr-pill text-xs py-1 ${colorClasses[project.color]}`}>
                    {project.doses[0]}
                  </span>
                  <div className="flex items-center gap-1">
                    {project.schedule.morning > 0 && (
                      <span className="ehr-pill-cream text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <Sun className="w-3 h-3" /> {project.schedule.morning}
                      </span>
                    )}
                    {project.schedule.evening > 0 && (
                      <span className="ehr-pill-blue text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <Moon className="w-3 h-3" /> {project.schedule.evening}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-6 pt-4 border-t border-border">
        <div className="flex items-center gap-2">
          <div className="ehr-pill-cream px-3 py-1.5 rounded-full flex items-center gap-1 text-xs">
            <Sun className="w-3 h-3" /> Morning
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="ehr-pill-blue px-3 py-1.5 rounded-full flex items-center gap-1 text-xs">
            <Moon className="w-3 h-3" /> Evening
          </div>
        </div>
      </div>
    </div>
  );
}
