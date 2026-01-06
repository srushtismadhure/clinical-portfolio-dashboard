import { Search, Bell, Sun, ChevronRight, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TopBarProps {
  title?: string;
  breadcrumbs?: { label: string; href?: string }[];
  onMenuClick?: () => void;
}

export function TopBar({ title = 'Dashboard', breadcrumbs, onMenuClick }: TopBarProps) {
  return (
    <header className="h-14 sm:h-16 glass-topbar flex items-center justify-between px-3 sm:px-4 lg:px-6 sticky top-0 z-30">
      {/* Left: Menu + Breadcrumbs & Title */}
      <div className="flex items-center gap-3 min-w-0">
        {/* Hamburger menu for mobile */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden w-10 h-10 rounded-[12px] bg-white/40 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-white/60 transition-colors flex-shrink-0"
        >
          <Menu className="w-5 h-5 text-foreground" />
        </button>

        <div className="min-w-0">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground mb-0.5 sm:mb-1">
              {breadcrumbs.map((crumb, i) => (
                <span key={crumb.label} className="flex items-center gap-1 min-w-0">
                  {crumb.href ? (
                    <Link to={crumb.href} className="hover:text-foreground transition-colors truncate">{crumb.label}</Link>
                  ) : (
                    <span className="text-foreground truncate">{crumb.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <ChevronRight className="w-3 h-3 flex-shrink-0" />}
                </span>
              ))}
            </nav>
          )}
          <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground tracking-tight truncate">{title}</h2>
        </div>
      </div>

      {/* Center: Search - Hidden on mobile */}
      <div className="flex-1 max-w-md mx-4 lg:mx-8 hidden md:block">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects, skills..."
            className="w-full h-10 pl-11 pr-4 rounded-[12px] bg-white/50 backdrop-blur-sm border border-white/40 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        <button className="hidden sm:flex w-10 h-10 rounded-[12px] bg-white/40 backdrop-blur-sm border border-white/40 items-center justify-center hover:bg-white/60 transition-colors">
          <Sun className="w-5 h-5 text-muted-foreground" />
        </button>
        <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-[12px] bg-white/40 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-white/60 transition-colors relative">
          <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[hsl(var(--ehr-coral))] rounded-full text-[10px] text-white flex items-center justify-center font-medium">3</span>
        </button>
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[12px] bg-gradient-to-br from-primary to-[hsl(var(--ehr-blue))] flex items-center justify-center text-white font-semibold text-xs sm:text-sm shadow-sm">SM</div>
      </div>
    </header>
  );
}
