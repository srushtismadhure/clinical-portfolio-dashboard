import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Activity,
  X,
  LayoutGrid,
  FolderKanban,
  FlaskConical,
  User,
  Mail,
  FileText,
} from 'lucide-react';

const navItems = [
  { icon: LayoutGrid, label: 'System Overview', path: '/' },
  { icon: FolderKanban, label: 'Project Archive', path: '/projects' },
  // { icon: FlaskConical, label: 'Research & Labs', path: '/labs' },
  { icon: User, label: 'About', path: '/about' },
  // TODO: Re-enable Credentials when we have non-redundant proof content (certifications, publications, awards, verification links).
  // { icon: FileText, label: 'Credentials', path: '/resume' },
  { icon: Mail, label: 'Access / Contact', path: '/contact' },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  variant?: 'drawer' | 'persistent';
}

export function Sidebar({
  isOpen = false,
  onClose,
  variant = 'drawer',
}: SidebarProps) {
  const location = useLocation();

  // Close sidebar on route change ONLY in drawer mode
  useEffect(() => {
    if (variant === 'drawer' && isOpen && onClose) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const handleNavClick = () => {
    if (variant === 'drawer' && onClose) onClose();
  };

  const showOverlay = isOpen;

  // ✅ CHANGED: frosted-glass base styles
  const frostedPanel =
    'bg-[color:var(--brand)] text-[#E6EDF3] border-r border-[color:var(--brand)] shadow-xl';

  const asideClassName =
    variant === 'drawer'
      ? [
          'fixed inset-y-0 left-0 z-50 shrink-0',
          'w-56 min-h-screen',
          frostedPanel, // ✅ CHANGED (was bg-white border-slate-200)
          'flex flex-col',
          'transform transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        ].join(' ')
      : [
          'fixed inset-y-0 left-0 z-50 shrink-0',
          'w-56 min-h-screen',
          frostedPanel, // ✅ CHANGED (was bg-white border-slate-200)
          'flex flex-col',
          'transform transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          'lg:static lg:translate-x-0 lg:h-full',
        ].join(' ');

  return (
    <>
      {/* Overlay (mobile only) */}
      {showOverlay && (
        <div
          // ✅ CHANGED: cooler overlay so the blur reads "glassy" not muddy
          className="fixed inset-0 z-40 bg-slate-900/25 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={asideClassName} aria-label="Primary navigation">
        {/* Header */}
        <div className="px-3 py-3 border-b border-[color:var(--brand-hover)] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={handleNavClick}>
            <div className="w-10 h-10 rounded-md bg-transparent flex items-center justify-center overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.svg`}
                alt="Healthcare Analytics logo"
                className="h-7 w-7 object-contain"
              />
            </div>
            <div className="leading-tight">
              <h1 className="font-semibold text-[13px] text-[#E6EDF3]">
                Healthcare Analytics
              </h1>
              <p className="text-[10px] text-[#E6EDF3]/80">S. Madhure</p>
            </div>
          </Link>

          {/* Close button only on mobile drawer */}
          <button
            onClick={onClose}
            className="lg:hidden w-8 h-8 rounded-md border border-[color:var(--brand-hover)] hover:bg-[color:var(--brand-hover)]/60 flex items-center justify-center"
            aria-label="Close sidebar"
            type="button"
          >
            <X className="w-4 h-4 text-[#E6EDF3]" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
          <div className="px-2 py-1">
            <span className="text-[10px] font-medium text-[#CBD5E1] uppercase tracking-wide">
              Navigation
            </span>
          </div>

          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.label}
                to={item.path}
                onClick={handleNavClick}
                className={[
                  'flex items-center gap-2 px-3 py-2 rounded-md text-[13px] transition-colors w-full',
                  isActive
                    ? 'bg-[color:var(--brand)] text-white font-medium'
                    : 'text-[#E6EDF3] hover:bg-[color:var(--brand-hover)]',
                ].join(' ')}
              >
                <item.icon
                  className={[
                    'w-4 h-4 flex-shrink-0',
                    isActive ? 'opacity-100' : 'opacity-80',
                  ].join(' ')}
                />
                <span className="flex-1 truncate">{item.label}</span>

                {item.badge && (
                  <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-white/50 text-slate-800">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="px-3 py-2 border-t border-white/20">
          <p className="text-[10px] text-slate-600">v1.0.0 · Jan 2026</p>
        </div>
      </aside>
    </>
  );
}
