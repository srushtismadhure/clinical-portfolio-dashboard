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

  const systemPanel =
    'border-r border-[#27466D] bg-[#1E2F4D] text-[#E6EDF3]';

  const asideClassName =
    variant === 'drawer'
      ? [
          'fixed inset-y-0 right-0 lg:left-0 lg:right-auto z-50 shrink-0',
          'w-56 min-h-screen',
          systemPanel,
          'flex flex-col',
          'transform transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full lg:-translate-x-full',
        ].join(' ')
      : [
          'fixed inset-y-0 right-0 z-50 shrink-0 lg:left-0 lg:right-auto',
          'w-56 min-h-screen',
          systemPanel,
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
        <div className="flex items-center justify-between border-b border-[#27466D] px-4 py-4">
          <Link
            to="/"
            className="hidden items-center gap-3 md:flex"
            onClick={handleNavClick}
          >
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border border-[#27466D] bg-white/5">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.svg`}
                alt="Healthcare Analytics logo"
                className="h-9 w-9 object-contain"
              />
            </div>
            <div className="leading-tight">
              <h1 className="text-[13px] font-semibold text-[#E6EDF3]">
                Healthcare Analytics
              </h1>
              <p className="mt-0.5 text-[11px] text-[#B8C7D8]">Clinical portfolio dashboard</p>
            </div>
          </Link>

          {/* Close button only on mobile drawer */}
          <button
            onClick={onClose}
            className="ml-auto flex h-8 w-8 items-center justify-center rounded-md border border-[#27466D] text-[#E6EDF3] transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Close sidebar"
            type="button"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          <div className="px-2 py-1">
            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#CBD5E1]">
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
                  'flex w-full items-center gap-3 rounded-md border px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'border-white/10 bg-white/10 text-white'
                    : 'border-transparent text-white/80 hover:bg-white/10 hover:text-white',
                ].join(' ')}
              >
                <item.icon
                  className={[
                    'w-4 h-4 flex-shrink-0',
                    isActive ? 'opacity-100' : 'opacity-85',
                  ].join(' ')}
                />
                <span className="flex-1 truncate">{item.label}</span>

                {item.badge && (
                  <span className="rounded-md bg-white/75 px-1.5 py-0.5 text-[10px] font-medium text-[#1E2F4D]">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-[#27466D] px-4 py-3">
          <p className="text-[10px] text-[#9FB3C8]">v1.0.0 · Jan 2026</p>
        </div>
      </aside>
    </>
  );
}
