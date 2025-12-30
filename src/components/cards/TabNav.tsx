import { FolderKanban, Plus } from 'lucide-react';

const tabs = [
  { label: 'Overview', active: true },
  { label: 'Projects', count: 6 },
  { label: 'Analytics' },
  { label: 'Documentation', count: 12 },
];

export function TabNav() {
  return (
    <div className="flex items-center justify-between mb-6 animate-fade-in">
      <div className="flex items-center gap-1 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-sm transition-colors border-b-2 -mb-[2px] ${
              tab.active 
                ? 'border-primary text-primary font-medium' 
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <span>{tab.label}</span>
            {tab.count && (
              <span className={`text-xs px-1.5 py-0.5 rounded ${
                tab.active ? 'bg-primary/10' : 'bg-muted'
              }`}>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>
      <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
        <Plus className="w-4 h-4" />
        <span>Create New Project</span>
      </button>
    </div>
  );
}
