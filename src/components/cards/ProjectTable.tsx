import { Search, Plus, MoreVertical, FileText, Database, Brain, Palette, LineChart } from 'lucide-react';

const projects = [
  {
    category: 'Data Engineering',
    categoryIcon: Database,
    name: 'EHR Pipeline',
    date: 'Jul 20, 2024',
    tools: 'Python, Spark',
    outcome: 'ETL Automation',
    progress: 85,
  },
  {
    category: 'Machine Learning',
    categoryIcon: Brain,
    name: 'Risk Model',
    date: 'Jul 1, 2024',
    tools: 'Python, R',
    outcome: 'AUC 0.92',
    progress: 70,
  },
  {
    category: 'UX Design',
    categoryIcon: Palette,
    name: 'Patient Portal',
    date: 'Jun 11, 2024',
    tools: 'Figma, React',
    outcome: 'Live in Prod',
    progress: 100,
  },
  {
    category: 'Analytics',
    categoryIcon: LineChart,
    name: 'SDOH Dashboard',
    date: 'Jun 25, 2024',
    tools: 'Power BI',
    outcome: 'Stakeholder Demo',
    progress: 90,
  },
  {
    category: 'EHR Integration',
    categoryIcon: FileText,
    name: 'FHIR Converter',
    date: 'May 21, 2024',
    tools: 'HL7, Azure',
    outcome: 'Interoperability',
    progress: 65,
  },
];

export function ProjectTable() {
  return (
    <div className="ehr-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-4">
          <button className="text-sm font-medium text-primary border-b-2 border-primary pb-2">
            Recent Projects
          </button>
          <button className="text-sm text-muted-foreground pb-2 hover:text-foreground transition-colors">
            Past Projects
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-md bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
            <Search className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
            <Plus className="w-4 h-4" />
            New Project
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs font-medium text-muted-foreground py-3 px-2">Category</th>
              <th className="text-left text-xs font-medium text-muted-foreground py-3 px-2">Project Name</th>
              <th className="text-left text-xs font-medium text-muted-foreground py-3 px-2">Date</th>
              <th className="text-left text-xs font-medium text-muted-foreground py-3 px-2">Tools</th>
              <th className="text-left text-xs font-medium text-muted-foreground py-3 px-2">Progress</th>
              <th className="w-10"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr 
                key={project.name} 
                className="table-row-hover border-b border-border last:border-0 cursor-pointer"
              >
                <td className="py-3 px-2">
                  <div className="flex items-center gap-2">
                    <project.categoryIcon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">{project.category}</span>
                  </div>
                </td>
                <td className="py-3 px-2">
                  <span className="text-sm font-medium text-foreground">{project.name}</span>
                </td>
                <td className="py-3 px-2">
                  <span className="text-sm text-muted-foreground">{project.date}</span>
                </td>
                <td className="py-3 px-2">
                  <span className="ehr-pill ehr-pill-muted text-xs">{project.tools}</span>
                </td>
                <td className="py-3 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          project.progress === 100 ? 'bg-[hsl(160,84%,39%)]' : 'bg-primary'
                        }`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground w-8">{project.progress}%</span>
                  </div>
                </td>
                <td className="py-3 px-2">
                  <button className="w-6 h-6 rounded hover:bg-muted flex items-center justify-center transition-colors">
                    <MoreVertical className="w-4 h-4 text-muted-foreground" />
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
