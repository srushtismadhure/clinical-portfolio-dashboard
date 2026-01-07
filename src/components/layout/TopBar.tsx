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
          className="lg:hidden w-8 h-8 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
          style={{ 
            background: 'hsla(220, 15%, 25%, 0.6)', 
            border: '1px solid hsla(220, 15%, 35%, 0.4)' 
          }}
        >
          <Menu className="w-4 h-4" style={{ color: 'hsl(220 10% 85%)' }} />
        </button>

        <div className="min-w-0">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-1 text-[10px] mb-0.5" style={{ color: 'hsl(220 10% 55%)' }}>
              {breadcrumbs.map((crumb, i) => (
                <span key={crumb.label} className="flex items-center gap-1 min-w-0">
                  {crumb.href ? (
                    <Link to={crumb.href} className="hover:text-foreground transition-colors truncate">{crumb.label}</Link>
                  ) : (
                    <span className="truncate" style={{ color: 'hsl(220 10% 90%)' }}>{crumb.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <span style={{ color: 'hsla(220, 15%, 40%, 0.5)' }}>/</span>}
                </span>
              ))}
            </nav>
          )}
          <h2 className="text-sm sm:text-base font-semibold tracking-tight truncate" style={{ color: 'hsl(220 10% 94%)' }}>{title}</h2>
        </div>
      </div>

      {/* Center: Search - Hidden on mobile */}
      <div className="flex-1 max-w-sm mx-4 lg:mx-6 hidden md:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5" style={{ color: 'hsl(220 10% 50%)' }} />
          <input
            type="text"
            placeholder="Search records..."
            className="w-full h-8 pl-9 pr-3 rounded-lg text-xs transition-colors focus:outline-none"
            style={{ 
              background: 'hsla(220, 15%, 22%, 0.7)',
              border: '1px solid hsla(220, 15%, 35%, 0.4)',
              color: 'hsl(220 10% 85%)'
            }}
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
        <button 
          className="hidden sm:flex w-8 h-8 rounded-lg items-center justify-center transition-colors"
          style={{ 
            background: 'hsla(220, 15%, 25%, 0.6)', 
            border: '1px solid hsla(220, 15%, 35%, 0.4)' 
          }}
        >
          <Settings className="w-3.5 h-3.5" style={{ color: 'hsl(220 10% 60%)' }} />
        </button>
        <button 
          className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors relative"
          style={{ 
            background: 'hsla(220, 15%, 25%, 0.6)', 
            border: '1px solid hsla(220, 15%, 35%, 0.4)' 
          }}
        >
          <Bell className="w-3.5 h-3.5" style={{ color: 'hsl(220 10% 60%)' }} />
          <span 
            className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full text-[8px] text-white flex items-center justify-center font-medium"
            style={{ background: 'hsl(0 65% 55%)' }}
          >3</span>
        </button>
        <div 
          className="w-8 h-8 rounded-lg flex items-center justify-center font-semibold text-xs glow-primary"
          style={{ 
            background: 'linear-gradient(135deg, hsla(174, 35%, 45%, 0.2) 0%, hsla(174, 35%, 45%, 0.1) 100%)',
            border: '1px solid hsla(174, 35%, 45%, 0.3)',
            color: 'hsl(174 35% 60%)'
          }}
        >SM</div>
      </div>
    </header>
  );
}
