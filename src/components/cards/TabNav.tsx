import { Eye, MessageSquare, FileText, FlaskConical, Plus } from 'lucide-react';

const tabs = [
  { icon: Eye, label: 'Overview', count: null, active: true },
  { icon: MessageSquare, label: 'Communication', count: 8 },
  { icon: FileText, label: 'Notes', count: 2 },
  { icon: FileText, label: 'Docs', count: 12 },
  { icon: FlaskConical, label: 'Labs', count: 8 },
];

export function TabNav() {
  return (
    <div className="flex items-center justify-between mb-6 animate-fade-in">
      <div className="flex items-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
              tab.active 
                ? 'bg-card border border-primary text-primary shadow-sm' 
                : 'bg-card border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span>{tab.label}</span>
            {tab.count && (
              <span className="text-xs font-medium">{tab.count}</span>
            )}
          </button>
        ))}
      </div>
      <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm">
        <Plus className="w-4 h-4" />
        <span>Create new project</span>
      </button>
    </div>
  );
}
