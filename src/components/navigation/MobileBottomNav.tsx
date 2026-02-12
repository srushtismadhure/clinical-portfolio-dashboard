import { NavLink, useLocation } from 'react-router-dom';
import { navItems } from '@/config/navigation';
import type { NavItem } from '@/config/navigation';

type MobileBottomNavProps = {
  className?: string;
};

export default function MobileBottomNav({ className }: MobileBottomNavProps) {
  const location = useLocation();

  const isActive = (item: NavItem) => {
    if (item.to === '/') return location.pathname === '/';
    return location.pathname.startsWith(item.to);
  };

  return (
    <nav
      className={[
        'fixed z-50 md:hidden',
        'bottom-[calc(env(safe-area-inset-bottom,0px)+16px)] left-1/2 -translate-x-1/2',
        'w-[calc(100vw-24px)] max-w-[420px] h-[72px]',
        'bg-[#F4F6F9]/90 backdrop-blur-xl border border-slate-900/10 shadow-[0_12px_30px_rgba(15,23,42,0.12)]',
        'rounded-full',
        className ?? '',
      ].join(' ')}
      aria-label="Primary mobile navigation"
    >
      <div className="mx-auto flex h-full items-center justify-between px-4">
        {navItems.map((item) => {
          const active = isActive(item);
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={[
                'flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition-all duration-150 ease-out',
                active
                  ? 'bg-[color:var(--sidebar-background)] text-white rounded-full px-4 py-2 scale-95 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 px-3 py-2',
              ].join(' ')}
              aria-label={item.label}
            >
              <span
                className={[
                  'flex h-9 w-9 items-center justify-center rounded-full transition-colors',
                  active ? 'text-white' : 'text-slate-500',
                ].join(' ')}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className="leading-none">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
