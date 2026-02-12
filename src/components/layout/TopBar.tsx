import { Search, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface TopBarProps {
  title?: string;
  breadcrumbs?: { label: string; href?: string }[];
  onMenuClick?: () => void;
}

const rightNav = [
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export function TopBar({ title = 'Srushti Madhure', breadcrumbs, onMenuClick }: TopBarProps) {
  const location = useLocation();

  // ✅ NEW: Hide the TopBar title on project detail routes (/projects/:id)
  // This prevents long project names from appearing in the nav bar,
  // since the page already renders the project title in the content.
  const isProjectDetailRoute = location.pathname.startsWith('/projects/');
  const isHomeRoute =
    location.pathname === '/' &&
    (location.hash === '' || location.hash === '#' || location.hash === '#/');
  const inProjectsSection = location.pathname.startsWith('/projects');
  const inAbout = location.pathname.startsWith('/about');
  const inContact = location.pathname.startsWith('/contact');
  const linkTitleToHome = inProjectsSection || inAbout || inContact;

  return (
    <header className="h-10 sm:h-11 bg-[hsl(var(--clinical-surface))] border-b border-[hsl(var(--clinical-border))] flex items-center justify-between px-3 sm:px-4 lg:px-5 sticky top-0 z-30">
      {/* Left: Menu + Breadcrumbs (+ optional Title) */}
      <div className="flex items-center gap-2 min-w-0">
        {/* Desktop hamburger on the left (lg+) */}
        {onMenuClick && (
          <button
            onClick={onMenuClick}
            className="hidden lg:flex w-9 h-9 rounded-md bg-white border border-[hsl(var(--clinical-border))] items-center justify-center hover:bg-[hsl(var(--primary)/0.08)] transition-colors"
            aria-label="Open navigation"
            type="button"
          >
            <Menu className="w-4 h-4 text-primary" />
          </button>
        )}
        <div className="min-w-0">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-1 text-[9px] text-[hsl(var(--clinical-text-muted))] mb-0.5">
              {breadcrumbs.map((crumb, i) => (
                <span key={`${crumb.label}-${i}`} className="flex items-center gap-1 min-w-0">
                  {crumb.href ? (
                    <Link to={crumb.href} className="hover:text-primary transition-colors truncate">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[hsl(var(--clinical-text))] truncate">{crumb.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <span className="text-[hsl(var(--clinical-border))]">/</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          {/* ✅ CHANGED: hide title on project detail pages */}
          {!isProjectDetailRoute && (
            linkTitleToHome ? (
              <Link
                to="/"
                className="text-[13px] font-medium text-[hsl(var(--clinical-text))] tracking-tight truncate hover:text-primary transition-colors"
              >
                Home
              </Link>
            ) : (
              <h2 className="text-[13px] font-medium text-[hsl(var(--clinical-text))] tracking-tight truncate">
                {title}
              </h2>
            )
          )}
        </div>
      </div>

      {/* Center: Search */}
      <div className="flex-1 max-w-xs mx-4 lg:mx-6 hidden md:block">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-primary/60" />
          <input
            type="text"
            placeholder="Search records..."
            className="w-full h-7 pl-8 pr-3 rounded bg-[hsl(var(--clinical-primary-muted))] border border-[hsl(var(--clinical-border))] text-[11px] placeholder:text-[hsl(var(--clinical-text-muted))] focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary/50 transition-colors"
          />
        </div>
      </div>

      {/* Right: Inline nav */}
      <div className="hidden lg:flex items-center gap-3 lg:gap-4">
        {rightNav.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.label}
              to={item.to}
              className={[
                'text-[12px] sm:text-[12px] font-medium transition-colors',
                isActive ? 'text-primary' : 'text-[hsl(var(--clinical-text))] hover:text-primary',
              ].join(' ')}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Mobile & tablet hamburger (right aligned for <lg) */}
      {onMenuClick && (
        <button
          onClick={onMenuClick}
          className="flex lg:hidden w-9 h-9 rounded-md bg-white border border-[hsl(var(--clinical-border))] items-center justify-center hover:bg-[hsl(var(--primary)/0.08)] transition-colors ml-auto"
          aria-label="Open navigation"
          type="button"
        >
          <Menu className="w-4 h-4 text-primary" />
        </button>
      )}
    </header>
  );
}
