import { Link } from 'react-router-dom';

export type ProjectNavItem = { id: string; label: string; short?: string };

type ProjectSidebarNavProps = {
  title: string;
  subtitle?: string;
  status?: string;
  items: ProjectNavItem[];
  activeId?: string;
  onJump: (id: string) => void;
};

export default function ProjectSidebarNav({
  title,
  subtitle,
  status,
  items,
  activeId,
  onJump,
}: ProjectSidebarNavProps) {
  return (
    <aside className="h-full rounded-none border-r border-slate-200 bg-slate-50 px-3 py-6">
      <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
        Project Index
      </div>

      <div className="mt-6 space-y-1">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onJump(item.id)}
              className={`w-full text-left text-xs rounded-md px-2 py-2 transition ${
                isActive
                  ? 'bg-slate-100 text-slate-900 font-medium'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 border-t border-slate-200 pt-4 space-y-2">
        <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
          Quick Links
        </div>
        <div className="space-y-1 text-xs">
          <Link to="/projects" className="block text-slate-600 hover:text-slate-900">
            Back to Projects
          </Link>
          <button type="button" className="block text-left text-slate-400 cursor-not-allowed">
            Download PDF
          </button>
          <button type="button" className="block text-left text-slate-400 cursor-not-allowed">
            Open Power BI
          </button>
        </div>
      </div>
    </aside>
  );
}
