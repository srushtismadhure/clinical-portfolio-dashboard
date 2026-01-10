import { Search, Bell, Menu, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TopBarProps {
  title?: string;
  breadcrumbs?: { label: string; href?: string }[];
  onMenuClick?: () => void;
}

export function TopBar({ title = 'System Overview', breadcrumbs, onMenuClick }: TopBarProps) {
  return (
    <header className="h-10 sm:h-11 clinical-topbar flex items-center justify-between px-3 sm:px-4 lg:px-5 sticky top-0 z-30">
      {/* Left: Menu + Title */}
      <div className="flex items-center gap-2 min-w-0">
        {/* Hamburger menu for mobile */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden w-7 h-7 rounded bg-muted border border-border flex items-center justify-center hover:bg-muted/70 transition-colors flex-shrink-0"
        >
          <Menu className="w-3.5 h-3.5 text-foreground" />
        </button>

        <div className="min-w-0">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-1 text-[9px] text-muted-foreground mb-0.5">
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
          <h2 className="text-[13px] font-medium text-foreground tracking-tight truncate">{title}</h2>
        </div>
      </div>

      {/* Center: Search */}
      <div className="flex-1 max-w-xs mx-4 lg:mx-6 hidden md:block">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search records..."
            className="w-full h-7 pl-8 pr-3 rounded bg-muted border border-border text-[11px] placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary/40 transition-colors"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-1 flex-shrink-0">
        <button className="hidden sm:flex w-7 h-7 rounded bg-muted border border-border items-center justify-center hover:bg-muted/70 transition-colors">
          <Settings className="w-3 h-3 text-muted-foreground" />
        </button>
        <button className="w-7 h-7 rounded bg-muted border border-border flex items-center justify-center hover:bg-muted/70 transition-colors relative">
          <Bell className="w-3 h-3 text-muted-foreground" />
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-destructive rounded-full text-[7px] text-white flex items-center justify-center font-medium">3</span>
        </button>
        <div className="w-7 h-7 rounded bg-[hsl(var(--primary)/0.08)] border border-border flex items-center justify-center text-primary font-medium text-[10px]">SM</div>
      </div>
    </header>
  );
}
