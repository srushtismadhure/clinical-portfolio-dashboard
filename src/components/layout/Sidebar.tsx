import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, FolderKanban, BookOpen, BarChart3, Palette, 
  User, Mail, LogOut, Stethoscope, Briefcase, Gamepad2, 
  FlaskConical, Award, FileText
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Briefcase, label: 'Work', path: '/work' },
  { icon: Gamepad2, label: 'Play', path: '/play' },
  { icon: FolderKanban, label: 'Projects', path: '/projects', badge: '6' },
  { icon: FlaskConical, label: 'Labs', path: '/labs' },
  { icon: BookOpen, label: 'Case Studies', path: '/case-studies' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: Palette, label: 'UX Work', path: '/ux-work' },
  { icon: Award, label: 'Skills', path: '/skills' },
  { icon: User, label: 'About', path: '/about' },
  { icon: FileText, label: 'Resume', path: '/resume' },
  { icon: Mail, label: 'Contact', path: '/contact' },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 min-h-screen bg-sidebar border-r border-sidebar-border shadow-sidebar flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="font-semibold text-foreground text-lg">Portfolio</h1>
            <p className="text-xs text-muted-foreground">Srushti Madhure</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`nav-item w-full ${location.pathname === item.path ? 'active' : ''}`}
          >
            <item.icon className="w-5 h-5" />
            <span className="flex-1 text-left">{item.label}</span>
            {item.badge && (
              <span className="ehr-pill-coral text-xs px-2 py-0.5 rounded-full">{item.badge}</span>
            )}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <button className="nav-item w-full text-muted-foreground hover:text-accent">
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
}
