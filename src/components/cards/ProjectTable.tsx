import { Search, Plus, MoreVertical, FileText, Database, Brain, Palette, LineChart } from 'lucide-react';

const projects = [
  {
    category: 'Data Engineering',
    categoryIcon: Database,
    name: 'EHR Pipeline',
    date: 'July, 20, 2024',
    tools: 'Python, Spark',
    outcome: 'ETL Automation',
    progress: 85,
  },
  {
    category: 'Machine Learning',
    categoryIcon: Brain,
    name: 'Risk Model',
    date: 'July, 1, 2024',
    tools: 'Python, R',
    outcome: 'AUC 0.92',
    progress: 70,
  },
  {
    category: 'UX Design',
    categoryIcon: Palette,
    name: 'Patient Portal',
    date: 'June, 11, 2024',
    tools: 'Figma, React',
    outcome: 'Live in Prod',
    progress: 100,
  },
  {
    category: 'Analytics',
    categoryIcon: LineChart,
    name: 'SDOH Dashboard',
    date: 'June, 25, 2024',
    tools: 'Power BI',
    outcome: 'Stakeholder Demo',
    progress: 90,
  },
  {
    category: 'EHR Integration',
    categoryIcon: FileText,
    name: 'FHIR Converter',
    date: 'May, 21, 2024',
    tools: 'HL7, Azure',
    outcome: 'Interoperability',
    progress: 65,
  },
];

const categoryColors: Record<string, string> = {
  'Data Engineering': 'text-[hsl(var(--ehr-blue))]',
  'Machine Learning': 'text-[hsl(var(--ehr-teal))]',
  'UX Design': 'text-[hsl(var(--ehr-lavender))]',
  'Analytics': 'text-[hsl(var(--ehr-coral))]',
  'EHR Integration': 'text-primary',
};

export function ProjectTable() {
  return (
    <div className="ehr-card animate-fade-in min-w-0" style={{ animationDelay: '0.3s' }}>
      {/* Tabs */}
      <div className="flex items-center justify-between mb-4 gap-2">
        <div className="flex gap-3 sm:gap-4 min-w-0">
          <button className="text-xs sm:text-sm font-medium text-primary border-b-2 border-primary pb-2 whitespace-nowrap">
            Recent Projects
          </button>
          <button className="text-xs sm:text-sm text-muted-foreground pb-2 hover:text-foreground transition-colors whitespace-nowrap">
            Past Projects
          </button>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button className="w-7 h-7 rounded-lg bg-white/50 flex items-center justify-center hover:bg-white/70 transition-colors">
            <Search className="w-3.5 h-3.5 text-muted-foreground" />
          </button>
          <button className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
            <Plus className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="sm:hidden space-y-3">
        {projects.map((project) => (
          <div 
            key={project.name} 
            className="bg-white/30 rounded-xl p-3 border border-white/40"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex items-center gap-2 min-w-0">
                <project.categoryIcon className={`w-4 h-4 flex-shrink-0 ${categoryColors[project.category]}`} />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{project.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{project.category}</p>
                </div>
              </div>
              <button className="w-6 h-6 rounded hover:bg-white/50 flex items-center justify-center transition-colors flex-shrink-0">
                <MoreVertical className="w-3.5 h-3.5 text-muted-foreground" />
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-2">
              <span>{project.date}</span>
              <span className="bg-[hsl(var(--ehr-cream))] text-foreground py-0.5 px-2 rounded-full">{project.tools}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-white/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[hsl(var(--ehr-blue))] rounded-full transition-all duration-500"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground flex-shrink-0">{project.progress}%</span>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden sm:block overflow-x-auto bg-white/30 rounded-xl">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-white/40">
              <th className="text-left text-[10px] sm:text-xs font-medium text-muted-foreground py-3 px-3 uppercase tracking-wide">Category</th>
              <th className="text-left text-[10px] sm:text-xs font-medium text-muted-foreground py-3 px-3 uppercase tracking-wide">Project Name</th>
              <th className="text-left text-[10px] sm:text-xs font-medium text-muted-foreground py-3 px-3 uppercase tracking-wide">Date</th>
              <th className="text-left text-[10px] sm:text-xs font-medium text-muted-foreground py-3 px-3 uppercase tracking-wide">Tools</th>
              <th className="text-left text-[10px] sm:text-xs font-medium text-muted-foreground py-3 px-3 uppercase tracking-wide">Progress</th>
              <th className="w-10"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr 
                key={project.name} 
                className="table-row-hover border-b border-white/30 last:border-0 cursor-pointer"
              >
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <project.categoryIcon className={`w-4 h-4 flex-shrink-0 ${categoryColors[project.category]}`} />
                    <span className="text-xs sm:text-sm text-foreground truncate">{project.category}</span>
                  </div>
                </td>
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <FileText className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-foreground truncate">{project.name}</span>
                  </div>
                </td>
                <td className="py-3 px-3">
                  <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">{project.date}</span>
                </td>
                <td className="py-3 px-3">
                  <span className="bg-[hsl(var(--ehr-cream))] text-foreground text-[10px] sm:text-xs py-1 px-2 rounded-full whitespace-nowrap">{project.tools}</span>
                </td>
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2">
                    <div className="w-16 sm:w-20 h-1.5 bg-white/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[hsl(var(--ehr-blue))] rounded-full transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <span className="text-[10px] sm:text-xs text-muted-foreground">{project.progress}%</span>
                  </div>
                </td>
                <td className="py-3 px-3">
                  <button className="w-5 h-5 rounded hover:bg-white/50 flex items-center justify-center transition-colors">
                    <MoreVertical className="w-3.5 h-3.5 text-muted-foreground" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
