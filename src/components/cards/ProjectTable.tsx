import { Search, Plus, FileText, Database, Brain, Palette, LineChart, ExternalLink } from 'lucide-react';

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
  production: 'border border-emerald-200 bg-emerald-50 text-emerald-700',
  development: 'border border-amber-200 bg-amber-50 text-amber-700',
  archived: 'border border-gray-200 bg-gray-100 text-gray-600',
};

export function ProjectTable() {
  return (
    <div className="system-module min-w-0">
      <div className="system-module-header">
        <div className="min-w-0">
          <span className="system-module-label">Project Records</span>
          <div className="mt-2 flex gap-2">
            <button className="rounded-md border border-gray-200 bg-white px-2 py-1 text-[11px] font-medium text-slate-700">
              Recent
            </button>
            <button className="rounded-md border border-transparent px-2 py-1 text-[11px] font-medium text-gray-500 transition-colors hover:border-gray-200 hover:bg-white hover:text-slate-700">
              Archived
            </button>
          </div>
        </div>
        <div className="flex flex-shrink-0 items-center gap-1.5">
          <span className="rounded-lg border border-[#C9D8EE] bg-[#EAF2FB] px-2.5 py-1 text-[11px] font-medium text-[#234A84] tabular-nums shadow-[0_1px_2px_rgba(36,74,132,0.08)] transition-all duration-200 ease-in-out">n={projects.length}</span>
          <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-500 transition-all duration-200 ease-in-out hover:border-gray-300 hover:bg-slate-50 hover:text-slate-700">
            <Search className="h-3.5 w-3.5" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 bg-slate-800 text-white transition-all duration-200 ease-in-out hover:bg-slate-700">
            <Plus className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="system-module-content space-y-2.5 sm:hidden">
        {projects.map((project) => (
          <div 
            key={project.name} 
            className="rounded-md border border-gray-200 bg-gray-50 p-2.5"
          >
            <div className="mb-2 flex items-start justify-between gap-2">
              <div className="flex min-w-0 items-center gap-2">
                <project.categoryIcon className="h-3.5 w-3.5 flex-shrink-0 text-gray-500" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-slate-800">{project.name}</p>
                  <p className="truncate text-[11px] uppercase tracking-[0.12em] text-gray-500">{project.category}</p>
                </div>
              </div>
              <span className={`rounded-md px-2 py-1 text-[11px] font-medium ${statusColors[project.status]}`}>
                {project.status}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="data-tag">{project.dataSource}</span>
              <span className="data-tag">{project.records}</span>
              <span className="data-tag">{project.tools}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden overflow-x-auto sm:block">
        <table className="w-full min-w-[650px]">
          <thead className="bg-slate-50">
            <tr className="border-b border-gray-200">
              <th className="px-4 py-2.5 text-left text-[11px] font-medium uppercase tracking-[0.14em] text-gray-500">Category</th>
              <th className="px-4 py-2.5 text-left text-[11px] font-medium uppercase tracking-[0.14em] text-gray-500">Project</th>
              <th className="px-4 py-2.5 text-left text-[11px] font-medium uppercase tracking-[0.14em] text-gray-500">Data Source</th>
              <th className="px-4 py-2.5 text-left text-[11px] font-medium uppercase tracking-[0.14em] text-gray-500">Records</th>
              <th className="px-4 py-2.5 text-left text-[11px] font-medium uppercase tracking-[0.14em] text-gray-500">Tools</th>
              <th className="px-4 py-2.5 text-left text-[11px] font-medium uppercase tracking-[0.14em] text-gray-500">Outcome</th>
              <th className="w-6"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr 
                key={project.name} 
                className="table-row-hover cursor-pointer border-b border-gray-200 last:border-0"
              >
                <td className="px-4 py-2.5">
                  <div className="flex min-w-0 items-center gap-2">
                    <project.categoryIcon className="h-3.5 w-3.5 flex-shrink-0 text-gray-500" />
                    <span className="truncate text-sm text-slate-700">{project.category}</span>
                  </div>
                </td>
                <td className="px-4 py-2.5">
                  <span className="text-sm font-medium text-slate-800">{project.name}</span>
                </td>
                <td className="px-4 py-2.5">
                  <span className="data-tag">{project.dataSource}</span>
                </td>
                <td className="px-4 py-2.5">
                  <span className="text-sm tabular-nums text-gray-600">{project.records}</span>
                </td>
                <td className="px-4 py-2.5">
                  <span className="text-sm text-gray-600">{project.tools}</span>
                </td>
                <td className="px-4 py-2.5">
                  <span className="text-sm text-slate-700">{project.outcome}</span>
                </td>
                <td className="px-4 py-2.5">
                  <button className="flex h-8 w-8 items-center justify-center rounded-md border border-transparent text-gray-500 transition-all duration-200 ease-in-out hover:border-gray-200 hover:bg-white hover:text-slate-700">
                    <ExternalLink className="h-3.5 w-3.5" />
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
