import { Eye, MessageSquare, FileText, FlaskConical, Plus } from 'lucide-react';

const tabs = [
  { icon: Eye, label: 'Overview', count: null, active: true },
  { icon: MessageSquare, label: 'Communication', count: 8 },
  { icon: FileText, label: 'Notes', count: 2 },
  { icon: FileText, label: 'Docs', count: 12 },
  // { icon: FlaskConical, label: 'Labs', count: 8 },
];

export function TabNav() {
  return (
    <div className="flex items-center justify-between mb-6 animate-fade-in">
      <div className="flex items-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`flex items-center gap-2 px-4 py-2 rounded-[10px] text-sm transition-all ${
              tab.active 
                ? 'bg-white/70 backdrop-blur-sm border border-primary/30 text-primary shadow-sm' 
                : 'bg-white/40 backdrop-blur-sm border border-white/40 text-muted-foreground hover:bg-white/60 hover:text-foreground'
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
      <button className="flex items-center gap-2 px-4 py-2 rounded-[10px] bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm">
        <Plus className="w-4 h-4" />
        <span>Create new project</span>
      </button>
    </div>
  );
}
