import { Search, Bell, Menu, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TopBarProps {
  title?: string;
  breadcrumbs?: { label: string; href?: string }[];
  onMenuClick?: () => void;
}

export function TopBar({ title = 'System Overview', breadcrumbs, onMenuClick }: TopBarProps) {
  return (
    <header className="h-10 sm:h-11 bg-[hsl(var(--clinical-surface))] border-b border-[hsl(var(--clinical-border))] flex items-center justify-between px-3 sm:px-4 lg:px-5 sticky top-0 z-30">
      {/* Left: Menu + Title */}
      <div className="flex items-center gap-2 min-w-0">
        {/* Hamburger menu for mobile */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden w-7 h-7 rounded bg-[hsl(var(--clinical-primary-muted))] border border-[hsl(var(--clinical-border))] flex items-center justify-center hover:bg-[hsl(var(--primary)/0.12)] transition-colors flex-shrink-0"
        >
          <Menu className="w-3.5 h-3.5 text-primary" />
        </button>

        <div className="min-w-0">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-1 text-[9px] text-[hsl(var(--clinical-text-muted))] mb-0.5">
              {breadcrumbs.map((crumb, i) => (
                <span key={crumb.label} className="flex items-center gap-1 min-w-0">
                  {crumb.href ? (
                    <Link to={crumb.href} className="hover:text-primary transition-colors truncate">{crumb.label}</Link>
                  ) : (
                    <span className="text-[hsl(var(--clinical-text))] truncate">{crumb.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <span className="text-[hsl(var(--clinical-border))]">/</span>}
                </span>
              ))}
            </nav>
          )}
          <h2 className="text-[13px] font-medium text-[hsl(var(--clinical-text))] tracking-tight truncate">{title}</h2>
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

      {/* Right: Actions */}
      <div className="flex items-center gap-1 flex-shrink-0">
        <button className="hidden sm:flex w-7 h-7 rounded bg-[hsl(var(--clinical-primary-muted))] border border-[hsl(var(--clinical-border))] items-center justify-center hover:bg-[hsl(var(--primary)/0.12)] transition-colors">
          <Settings className="w-3 h-3 text-primary/70" />
        </button>
        <button className="w-7 h-7 rounded bg-[hsl(var(--clinical-primary-muted))] border border-[hsl(var(--clinical-border))] flex items-center justify-center hover:bg-[hsl(var(--primary)/0.12)] transition-colors relative">
          <Bell className="w-3 h-3 text-primary/70" />
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-primary rounded-full text-[7px] text-white flex items-center justify-center font-medium">3</span>
        </button>
        <div className="w-7 h-7 rounded bg-primary flex items-center justify-center text-primary-foreground font-medium text-[10px]">SM</div>
      </div>
    </header>
  );
}
