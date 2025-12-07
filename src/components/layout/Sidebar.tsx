import { useState } from 'react';
import { 
  LayoutDashboard, 
  FolderKanban, 
  BookOpen, 
  BarChart3, 
  Palette, 
  User, 
  Mail, 
  LogOut,
  Stethoscope
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: FolderKanban, label: 'Projects', badge: '5' },
  { icon: BookOpen, label: 'Case Studies' },
  { icon: BarChart3, label: 'Analytics', badge: '3' },
  { icon: Palette, label: 'UX Work' },
  { icon: User, label: 'About Me' },
  { icon: Mail, label: 'Contact' },
];

export function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <aside className="w-64 min-h-screen bg-sidebar border-r border-sidebar-border shadow-sidebar flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="font-semibold text-foreground text-lg">Portfolio</h1>
            <p className="text-xs text-muted-foreground">Srushti Madhure</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveItem(item.label)}
            className={`nav-item w-full ${activeItem === item.label ? 'active' : ''}`}
          >
            <item.icon className="w-5 h-5" />
            <span className="flex-1 text-left">{item.label}</span>
            {item.badge && (
              <span className="ehr-pill-coral text-xs px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <button className="nav-item w-full text-muted-foreground hover:text-accent">
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
}
