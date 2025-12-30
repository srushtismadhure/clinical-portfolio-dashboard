import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, FolderKanban, BookOpen, BarChart3, Palette, 
  User, Mail, LogOut, Briefcase, Gamepad2, 
  FlaskConical, Award, FileText, Menu, X, Activity
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
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-card border border-border rounded-md shadow-sm"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-foreground/20 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-64 min-h-screen bg-sidebar border-r border-sidebar-border flex flex-col
        transform transition-transform duration-200 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header */}
        <div className="p-4 border-b border-sidebar-border">
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileOpen(false)}>
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Activity className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-semibold text-foreground text-sm">Analytics Portal</h1>
              <p className="text-xs text-muted-foreground">S. Madhure</p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setIsMobileOpen(false)}
              className={`nav-item w-full ${location.pathname === item.path ? 'active' : ''}`}
            >
              <item.icon className="w-4 h-4" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-medium">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-sidebar-border">
          <button className="nav-item w-full text-muted-foreground">
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
