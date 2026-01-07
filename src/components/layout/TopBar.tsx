import { Search, Bell, Menu, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TopBarProps {
  title?: string;
  breadcrumbs?: { label: string; href?: string }[];
  onMenuClick?: () => void;
}

export function TopBar({ title = 'System Overview', breadcrumbs, onMenuClick }: TopBarProps) {
  return (
    <header className="h-12 sm:h-14 glass-topbar flex items-center justify-between px-3 sm:px-4 lg:px-5 sticky top-0 z-30">
      {/* Left: Menu + Title */}
      <div className="flex items-center gap-2.5 min-w-0">
        {/* Hamburger menu for mobile */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden w-8 h-8 rounded-md bg-muted border border-border flex items-center justify-center hover:bg-muted/80 transition-colors flex-shrink-0"
        >
          <Menu className="w-4 h-4 text-foreground" />
        </button>

        <div className="min-w-0">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-1 text-[10px] text-muted-foreground mb-0.5">
              {breadcrumbs.map((crumb, i) => (
                <span key={crumb.label} className="flex items-center gap-1 min-w-0">
                  {crumb.href ? (
                    <Link to={crumb.href} className="hover:text-foreground transition-colors truncate">{crumb.label}</Link>
                  ) : (
                    <span className="text-foreground truncate">{crumb.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <span className="text-border">/</span>}
                </span>
              ))}
            </nav>
          )}
          <h2 className="text-sm sm:text-base font-semibold text-foreground tracking-tight truncate">{title}</h2>
        </div>
      </div>

      {/* Center: Search - Hidden on mobile */}
      <div className="flex-1 max-w-sm mx-4 lg:mx-6 hidden md:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search records..."
            className="w-full h-8 pl-9 pr-3 rounded-md bg-muted border border-border text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary/40 transition-colors"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
        <button className="hidden sm:flex w-8 h-8 rounded-md bg-muted border border-border items-center justify-center hover:bg-muted/80 transition-colors">
          <Settings className="w-3.5 h-3.5 text-muted-foreground" />
        </button>
        <button className="w-8 h-8 rounded-md bg-muted border border-border flex items-center justify-center hover:bg-muted/80 transition-colors relative">
          <Bell className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-[hsl(var(--ehr-coral))] rounded-full text-[8px] text-white flex items-center justify-center font-medium">3</span>
        </button>
        <div className="w-8 h-8 rounded-md bg-primary/10 border border-border flex items-center justify-center text-primary font-semibold text-xs">SM</div>
      </div>
    </header>
  );
}
