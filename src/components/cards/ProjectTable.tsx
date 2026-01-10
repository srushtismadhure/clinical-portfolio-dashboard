import { Search, Plus, MoreVertical, FileText, Database, Brain, Palette, LineChart, ExternalLink } from 'lucide-react';

const projects = [
  {
    category: 'Data Engineering',
    categoryIcon: Database,
    name: 'EHR Integration Pipeline',
    date: '2024-07',
    tools: 'Python, Spark',
    dataSource: 'Epic EHR',
    outcome: 'ETL Automation',
    records: '1.2M rows',
    status: 'production',
  },
  {
    category: 'Machine Learning',
    categoryIcon: Brain,
    name: 'Readmission Risk Model',
    date: '2024-06',
    tools: 'Python, XGBoost',
    dataSource: 'Claims + EHR',
    outcome: 'AUC 0.92',
    records: '450K patients',
    status: 'production',
  },
  {
    category: 'UX Design',
    categoryIcon: Palette,
    name: 'Clinical Portal',
    date: '2024-05',
    tools: 'Figma, React',
    dataSource: 'User Research',
    outcome: 'Deployed',
    records: '200 users',
    status: 'production',
  },
  {
    category: 'Analytics',
    categoryIcon: LineChart,
    name: 'SDOH Dashboard',
    date: '2024-04',
    tools: 'Power BI, DAX',
    dataSource: 'SDOH + Claims',
    outcome: 'Leadership Review',
    records: '85K records',
    status: 'production',
  },
  {
    category: 'Integration',
    categoryIcon: FileText,
    name: 'FHIR Data Converter',
    date: '2024-03',
    tools: 'HL7, Azure',
    dataSource: 'HL7v2/FHIR',
    outcome: 'Interoperability',
    records: '500K msgs',
    status: 'production',
  },
];

const statusColors: Record<string, string> = {
  production: 'text-primary bg-[hsl(var(--primary)/0.08)]',
  development: 'text-[hsl(var(--ehr-blue))] bg-[hsl(var(--ehr-blue)/0.08)]',
  archived: 'text-muted-foreground bg-muted',
};

export function ProjectTable() {
  return (
    <div className="system-module min-w-0">
      <div className="system-module-header">
        <div className="flex items-center gap-2 min-w-0">
          <span className="system-module-label">Project Records</span>
          <div className="flex gap-1.5">
            <button className="text-[9px] font-medium text-primary border-b border-primary pb-0.5">
              Recent
            </button>
            <button className="text-[9px] text-muted-foreground hover:text-foreground transition-colors pb-0.5">
              Archived
            </button>
          </div>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <span className="text-[9px] text-muted-foreground tabular-nums">n={projects.length}</span>
          <button className="w-5 h-5 rounded hover:bg-muted flex items-center justify-center transition-colors">
            <Search className="w-2.5 h-2.5 text-muted-foreground" />
          </button>
          <button className="w-5 h-5 rounded bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors">
            <Plus className="w-2.5 h-2.5 text-primary-foreground" />
          </button>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="sm:hidden system-module-content space-y-1.5">
        {projects.map((project) => (
          <div 
            key={project.name} 
            className="p-2 bg-muted/30 rounded border border-border"
          >
            <div className="flex items-start justify-between gap-1.5 mb-1">
              <div className="flex items-center gap-1.5 min-w-0">
                <project.categoryIcon className="w-3 h-3 flex-shrink-0 text-muted-foreground" />
                <div className="min-w-0">
                  <p className="text-[10px] font-medium text-foreground truncate">{project.name}</p>
                  <p className="text-[9px] text-muted-foreground truncate">{project.category}</p>
                </div>
              </div>
              <span className={`text-[8px] font-medium px-1 py-0.5 rounded-sm ${statusColors[project.status]}`}>
                {project.status}
              </span>
            </div>
            <div className="flex flex-wrap gap-1 text-[8px]">
              <span className="data-tag">{project.dataSource}</span>
              <span className="data-tag">{project.records}</span>
              <span className="data-tag">{project.tools}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full min-w-[650px]">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-[8px] font-medium text-muted-foreground py-1.5 px-2.5 uppercase tracking-wide">Category</th>
              <th className="text-left text-[8px] font-medium text-muted-foreground py-1.5 px-2.5 uppercase tracking-wide">Project</th>
              <th className="text-left text-[8px] font-medium text-muted-foreground py-1.5 px-2.5 uppercase tracking-wide">Data Source</th>
              <th className="text-left text-[8px] font-medium text-muted-foreground py-1.5 px-2.5 uppercase tracking-wide">Records</th>
              <th className="text-left text-[8px] font-medium text-muted-foreground py-1.5 px-2.5 uppercase tracking-wide">Tools</th>
              <th className="text-left text-[8px] font-medium text-muted-foreground py-1.5 px-2.5 uppercase tracking-wide">Outcome</th>
              <th className="w-6"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr 
                key={project.name} 
                className="table-row-hover border-b border-border last:border-0 cursor-pointer"
              >
                <td className="py-1.5 px-2.5">
                  <div className="flex items-center gap-1 min-w-0">
                    <project.categoryIcon className="w-3 h-3 flex-shrink-0 text-muted-foreground opacity-60" />
                    <span className="text-[10px] text-foreground truncate">{project.category}</span>
                  </div>
                </td>
                <td className="py-1.5 px-2.5">
                  <span className="text-[10px] font-medium text-foreground">{project.name}</span>
                </td>
                <td className="py-1.5 px-2.5">
                  <span className="data-tag text-[8px]">{project.dataSource}</span>
                </td>
                <td className="py-1.5 px-2.5">
                  <span className="text-[10px] text-muted-foreground tabular-nums">{project.records}</span>
                </td>
                <td className="py-1.5 px-2.5">
                  <span className="text-[10px] text-muted-foreground">{project.tools}</span>
                </td>
                <td className="py-1.5 px-2.5">
                  <span className="text-[10px] text-foreground">{project.outcome}</span>
                </td>
                <td className="py-1.5 px-2.5">
                  <button className="w-4 h-4 rounded hover:bg-muted flex items-center justify-center transition-colors">
                    <ExternalLink className="w-2.5 h-2.5 text-muted-foreground" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="system-module-footer flex flex-wrap items-center gap-x-3 gap-y-0.5">
        <span>Schema: project_id, category, data_source, outcome</span>
        <span>Sync: Jan 2026</span>
      </div>
    </div>
  );
}
