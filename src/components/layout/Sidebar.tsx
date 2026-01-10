import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutGrid, Briefcase, FolderKanban, FlaskConical, 
  User, Mail, FileText, X, Activity
} from 'lucide-react';

const navItems = [
  { icon: LayoutGrid, label: 'System Overview', path: '/' },
  { icon: Briefcase, label: 'Clinical Use Cases', path: '/work', badge: '6' },
  { icon: FolderKanban, label: 'Project Archive', path: '/projects' },
  { icon: FlaskConical, label: 'Research & Labs', path: '/labs' },
  { icon: User, label: 'About', path: '/about' },
  { icon: FileText, label: 'Credentials', path: '/resume' },
  { icon: Mail, label: 'Access / Contact', path: '/contact' },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  const handleNavClick = () => {
    if (onClose) onClose();
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-foreground/10 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-52 min-h-screen clinical-sidebar flex flex-col
          transform transition-transform duration-150 ease-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:flex
        `}
      >
        <div className="px-3 py-2.5 border-b border-border flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={handleNavClick}>
            <div className="w-7 h-7 rounded bg-primary/10 flex items-center justify-center border border-border">
              <Activity className="w-3.5 h-3.5 text-primary" />
            </div>
            <div>
              <h1 className="font-medium text-foreground text-[12px] tracking-tight leading-tight">Healthcare Analytics</h1>
              <p className="text-[9px] text-muted-foreground">S. Madhure</p>
            </div>
          </Link>
          
          {/* Close button for mobile */}
          <button 
            onClick={onClose}
            className="lg:hidden w-6 h-6 rounded bg-muted flex items-center justify-center hover:bg-muted/70 transition-colors"
          >
            <X className="w-3 h-3 text-muted-foreground" />
          </button>
        </div>

        <nav className="flex-1 p-1.5 space-y-0.5 overflow-y-auto">
          <div className="px-2 py-1">
            <span className="section-label">Navigation</span>
          </div>
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={handleNavClick}
              className={`nav-item w-full ${location.pathname === item.path ? 'active' : ''}`}
            >
              <item.icon className="w-3.5 h-3.5 flex-shrink-0 opacity-60" />
              <span className="flex-1 text-left truncate">{item.label}</span>
              {item.badge && (
                <span className="text-[9px] font-medium text-muted-foreground bg-muted px-1 py-0.5 rounded-sm">{item.badge}</span>
              )}
            </Link>
          ))}
        </nav>

        <div className="px-3 py-2 border-t border-border">
          <div className="text-[9px] text-muted-foreground space-y-0.5">
            <p>v1.0.0 · Jan 2026</p>
          </div>
        </div>
      </aside>
    </>
  );
}
