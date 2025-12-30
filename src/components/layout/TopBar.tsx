import { Search, Bell, Sun, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TopBarProps {
  title?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function TopBar({ title = 'Dashboard', breadcrumbs }: TopBarProps) {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
      {/* Left: Breadcrumbs & Title */}
      <div>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
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
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      </div>

      {/* Center: Search */}
      <div className="flex-1 max-w-md mx-8 hidden md:block">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects, skills..."
            className="w-full h-10 pl-11 pr-4 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        <button className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors">
          <Sun className="w-5 h-5 text-muted-foreground" />
        </button>
        <button className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors relative">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full text-[10px] text-primary-foreground flex items-center justify-center font-medium">3</span>
        </button>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-[hsl(var(--ehr-blue))] flex items-center justify-center text-primary-foreground font-semibold text-sm">SM</div>
      </div>
    </header>
  );
}
