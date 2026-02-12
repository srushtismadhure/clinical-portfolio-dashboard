import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { navItems } from '@/config/navigation';

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
    'bg-[#1E2F4D] text-white border-r border-white/10 shadow-md';

  const asideClassName =
    variant === 'drawer'
      ? [
          'fixed inset-y-0 right-0 lg:left-0 lg:right-auto z-50 shrink-0',
          'w-56 min-h-screen',
          frostedPanel,
          'flex flex-col',
          'transform transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full lg:-translate-x-full',
        ].join(' ')
      : [
          'fixed inset-y-0 right-0 z-50 shrink-0 lg:left-0 lg:right-auto',
          'w-56 min-h-screen',
          frostedPanel,
          'flex flex-col',
          'transform transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full',
          'lg:static lg:translate-x-0 lg:h-full',
        ].join(' ');

  return (
    <>
      {/* Overlay (mobile only) */}
      {showOverlay && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/25 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={asideClassName}
        aria-label="Primary navigation"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-3 py-3 border-b border-[color:var(--brand-hover)] flex items-center justify-between">
          <Link
            to="/"
            className="hidden md:flex items-center gap-2"
            onClick={handleNavClick}
          >
            <div className="w-20 h-20 rounded-md bg-transparent flex items-center justify-center overflow-hidden relative">
              <span className="absolute inset-0 bg-white/4 rounded-md pointer-events-none" aria-hidden="true" />
              <img
                src={`${import.meta.env.BASE_URL}images/logo.svg`}
                alt="Healthcare Analytics logo"
                className="h-18 w-18 object-contain"
              />
            </div>
            <div className="leading-tight">
              <h1 className="font-semibold text-[13px] text-[#E6EDF3]">
                Healthcare Analytics
              </h1>
            </div>
          </Link>

          {/* Close button only on mobile drawer */}
          <button
            onClick={onClose}
            className="lg:hidden w-8 h-8 rounded-md border border-[color:var(--brand-hover)] hover:bg-[color:var(--brand-hover)]/60 flex items-center justify-center ml-auto"
            aria-label="Close sidebar"
            type="button"
          >
            <X className="w-4 h-4 text-[#E6EDF3]" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-2 space-y-1 overflow-y-auto relative">
          <span className="absolute inset-0 bg-white/3 pointer-events-none" aria-hidden="true" />
          <div className="px-2 py-1">
            <span className="text-[10px] font-medium text-[#CBD5E1] uppercase tracking-wide">
              Navigation
            </span>
          </div>

          {navItems.map((item) => {
            const isActive = item.to === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(item.to);

            return (
              <Link
                key={item.label}
                to={item.to}
                onClick={handleNavClick}
                className={[
                  'relative flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium transition-colors w-full border-l-4',
                  isActive
                    ? 'bg-white/10 text-white border-[color:var(--brand)] shadow-sm'
                    : 'text-white/80 hover:text-white hover:bg-white/10 border-transparent',
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
