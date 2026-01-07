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
          className="fixed inset-0 z-40 lg:hidden"
          style={{ background: 'hsla(220, 20%, 8%, 0.7)', backdropFilter: 'blur(4px)' }}
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-56 min-h-screen glass-sidebar flex flex-col
          transform transition-transform duration-200 ease-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:flex
        `}
      >
        <div className="px-4 py-3 flex items-center justify-between" style={{ borderBottom: '1px solid hsla(220, 15%, 28%, 0.5)' }}>
          <Link to="/" className="flex items-center gap-2.5" onClick={handleNavClick}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center glow-primary" style={{
              background: 'linear-gradient(135deg, hsla(174, 35%, 45%, 0.2) 0%, hsla(174, 35%, 45%, 0.1) 100%)',
              border: '1px solid hsla(174, 35%, 45%, 0.3)'
            }}>
              <Activity className="w-4 h-4" style={{ color: 'hsl(174 35% 55%)' }} />
            </div>
            <div>
              <h1 className="font-semibold text-sm tracking-tight" style={{ color: 'hsl(220 10% 92%)' }}>Healthcare Analytics</h1>
              <p className="text-[10px]" style={{ color: 'hsl(220 10% 55%)' }}>S. Madhure</p>
            </div>
          </Link>
          
          {/* Close button for mobile */}
          <button 
            onClick={onClose}
            className="lg:hidden w-7 h-7 rounded-md flex items-center justify-center transition-colors"
            style={{ background: 'hsla(220, 15%, 25%, 0.6)', border: '1px solid hsla(220, 15%, 35%, 0.4)' }}
          >
            <X className="w-3.5 h-3.5" style={{ color: 'hsl(220 10% 60%)' }} />
          </button>
        </div>

        <nav className="flex-1 p-2 space-y-0.5 overflow-y-auto">
          <div className="px-2 py-1.5">
            <span className="section-label">Navigation</span>
          </div>
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={handleNavClick}
              className={`nav-item w-full ${location.pathname === item.path ? 'active' : ''}`}
            >
              <item.icon className="w-4 h-4 flex-shrink-0 opacity-70" />
              <span className="flex-1 text-left truncate">{item.label}</span>
              {item.badge && (
                <span className="text-[10px] font-medium text-muted-foreground bg-muted px-1.5 py-0.5 rounded">{item.badge}</span>
              )}
            </Link>
          ))}
        </nav>

        <div className="p-3" style={{ borderTop: '1px solid hsla(220, 15%, 28%, 0.5)' }}>
          <div className="text-[10px] space-y-0.5" style={{ color: 'hsl(220 10% 45%)' }}>
            <p>Version 1.0.0</p>
            <p>Last sync: Jan 2026</p>
          </div>
        </div>
      </aside>
    </>
  );
}
