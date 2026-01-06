import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, FolderKanban, BookOpen, BarChart3, Palette, 
  User, Mail, LogOut, Stethoscope, Briefcase, Gamepad2, 
  FlaskConical, Award, FileText, X
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
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-64 min-h-screen glass-sidebar flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.03)]
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:flex
        `}
      >
        <div className="p-4 sm:p-6 border-b border-white/20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" onClick={handleNavClick}>
            <div className="w-10 h-10 rounded-[12px] bg-gradient-to-br from-primary/20 to-[hsl(var(--ehr-blue)/0.15)] flex items-center justify-center backdrop-blur-sm border border-white/40">
              <Stethoscope className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-semibold text-foreground text-lg tracking-tight">Portfolio</h1>
              <p className="text-xs text-muted-foreground">Srushti Madhure</p>
            </div>
          </Link>
          
          {/* Close button for mobile */}
          <button 
            onClick={onClose}
            className="lg:hidden w-8 h-8 rounded-lg bg-white/40 flex items-center justify-center hover:bg-white/60 transition-colors"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        <nav className="flex-1 p-3 sm:p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={handleNavClick}
              className={`nav-item w-full ${location.pathname === item.path ? 'active' : ''}`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className="flex-1 text-left truncate">{item.label}</span>
              {item.badge && (
                <span className="bg-[hsl(var(--ehr-coral)/0.2)] text-[hsl(var(--ehr-coral))] text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0">{item.badge}</span>
              )}
            </Link>
          ))}
        </nav>

        <div className="p-3 sm:p-4 border-t border-white/20">
          <button className="nav-item w-full text-muted-foreground hover:text-[hsl(var(--ehr-coral))]">
            <LogOut className="w-5 h-5 flex-shrink-0" />
            <span className="truncate">Log Out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
