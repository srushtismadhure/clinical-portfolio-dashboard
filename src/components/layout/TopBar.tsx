import { Search, Bell, Sun, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TopBarProps {
  title?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function TopBar({ title = 'Dashboard', breadcrumbs }: TopBarProps) {
  return (
    <header className="h-14 bg-card border-b border-border flex items-center justify-between px-6 lg:px-6 pl-16 lg:pl-6">
      {/* Left: Breadcrumbs & Title */}
      <div>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1 text-xs text-muted-foreground mb-0.5">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-1">
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-foreground transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-foreground">{crumb.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <ChevronRight className="w-3 h-3" />}
              </span>
            ))}
          </nav>
        )}
        <h2 className="text-base font-semibold text-foreground">{title}</h2>
      </div>

      {/* Center: Search */}
      <div className="flex-1 max-w-md mx-8 hidden md:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects, skills..."
            className="w-full h-9 pl-9 pr-4 rounded-md bg-muted border-0 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        <button className="w-9 h-9 rounded-md bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
          <Sun className="w-4 h-4 text-muted-foreground" />
        </button>
        <button className="w-9 h-9 rounded-md bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors relative">
          <Bell className="w-4 h-4 text-muted-foreground" />
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-destructive rounded-full text-[10px] text-destructive-foreground flex items-center justify-center font-medium">3</span>
        </button>
        <div className="w-9 h-9 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-medium text-sm">SM</div>
      </div>
    </header>
  );
}
