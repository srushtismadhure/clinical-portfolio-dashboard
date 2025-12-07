import { Search, Bell, Sun } from 'lucide-react';

export function TopBar() {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
      {/* Left: Page Title */}
      <div>
        <h2 className="text-xl font-semibold text-foreground">Dashboard</h2>
        <p className="text-sm text-muted-foreground">Welcome back, Srushti</p>
      </div>

      {/* Center: Search */}
      <div className="flex-1 max-w-md mx-8">
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
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full text-[10px] text-primary-foreground flex items-center justify-center font-medium">
            3
          </span>
        </button>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-ehr-blue flex items-center justify-center text-primary-foreground font-semibold text-sm">
          SM
        </div>
      </div>
    </header>
  );
}
