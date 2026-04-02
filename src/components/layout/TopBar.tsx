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
    <header className="sticky top-0 z-30 flex h-12 items-center justify-between border-b border-[#D9E6F2] bg-white px-3 sm:px-4 lg:px-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      {/* Left: Menu + Breadcrumbs (+ optional Title) */}
      <div className="flex items-center gap-2 min-w-0">
        {/* Desktop hamburger on the left (lg+) */}
        {onMenuClick && (
          <button
            onClick={onMenuClick}
            className="hidden h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-800 lg:flex"
            aria-label="Open navigation"
            type="button"
          >
            <Menu className="h-4 w-4" />
          </button>
        )}
        <div className="min-w-0">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="mb-0.5 flex items-center gap-1 text-[10px] text-gray-500">
              {breadcrumbs.map((crumb, i) => (
                <span key={`${crumb.label}-${i}`} className="flex items-center gap-1 min-w-0">
                  {crumb.href ? (
                    <Link to={crumb.href} className="truncate transition-colors hover:text-slate-700">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="truncate text-slate-700">{crumb.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <span className="text-gray-300">/</span>
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
                className="truncate text-[15px] font-semibold tracking-tight text-slate-800 transition-colors hover:text-slate-900 sm:text-base"
              >
                Home
              </Link>
            ) : (
                <h2 className="truncate text-[15px] font-semibold tracking-tight text-slate-800 sm:text-base">
                {title}
              </h2>
            )
          )}
        </div>
      </div>

      {/* Center: Search */}
      <div className="mx-4 hidden max-w-xs flex-1 md:block lg:mx-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search records..."
            className="h-9 w-full rounded-md border border-gray-200 bg-white pl-9 pr-3 text-sm text-slate-700 placeholder:text-gray-400 transition-colors focus:border-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-300"
          />
        </div>
      </div>

      {/* Right: Inline nav */}
      <div className="hidden items-center gap-2 lg:flex">
        {rightNav.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.label}
              to={item.to}
              className={[
                'rounded-md border px-3 py-1.5 text-sm font-medium transition-colors',
                isActive
                  ? 'border-slate-300 bg-slate-100 text-slate-800'
                  : 'border-transparent text-slate-600 hover:border-gray-200 hover:bg-white hover:text-slate-800',
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
          className="ml-auto flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-800 lg:hidden"
          aria-label="Open navigation"
          type="button"
        >
          <Menu className="h-4 w-4" />
        </button>
      )}
    </header>
  );
}
