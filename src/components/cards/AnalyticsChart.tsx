import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

const data = [
  { period: 'Q1', projects: 4, skills: 8 },
  { period: 'Q2', projects: 7, skills: 12 },
  { period: 'Q3', projects: 10, skills: 15 },
  { period: 'Q4', projects: 12, skills: 18 },
];

const stats = [
  { label: 'Use Cases', value: '12', unit: 'completed' },
  { label: 'Data Points', value: '2.5M+', unit: 'processed' },
  { label: 'Tenure', value: '3 yrs', unit: 'experience' },
];

export function AnalyticsChart() {
  return (
    <div className="system-module animate-fade-in min-w-0" style={{ animationDelay: '0.2s' }}>
      <div className="system-module-header">
        <div className="flex items-center gap-2 min-w-0">
          <TrendingUp className="w-3.5 h-3.5 text-primary flex-shrink-0" />
          <span className="system-module-label">Portfolio Metrics</span>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-[10px] text-muted-foreground">Period: 2024</span>
        </div>
      </div>

      <div className="system-module-content">
        {/* Legend */}
        <div className="flex items-center gap-4 mb-2 text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[hsl(var(--ehr-blue))]" />
            Projects
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Skills Applied
          </span>
        </div>

        {/* Chart */}
        <div className="h-28 sm:h-32 bg-muted/30 rounded border border-border p-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
              <defs>
                <linearGradient id="projectsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(215, 70%, 50%)" stopOpacity={0.15}/>
                  <stop offset="95%" stopColor="hsl(215, 70%, 50%)" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="skillsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(174, 35%, 45%)" stopOpacity={0.15}/>
                  <stop offset="95%" stopColor="hsl(174, 35%, 45%)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 90%)" vertical={false} />
              <XAxis 
                dataKey="period" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'hsl(220, 10%, 46%)', fontSize: 9 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'hsl(220, 10%, 46%)', fontSize: 9 }}
              />
              <Tooltip 
                contentStyle={{ 
                  background: 'rgba(255,255,255,0.95)', 
                  border: '1px solid hsl(220, 14%, 90%)',
                  borderRadius: '4px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  fontSize: '11px',
                  padding: '6px 10px'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="projects" 
                stroke="hsl(215, 70%, 50%)" 
                strokeWidth={1.5}
                fill="url(#projectsGradient)"
                dot={{ fill: 'hsl(215, 70%, 50%)', strokeWidth: 0, r: 2 }}
              />
              <Area 
                type="monotone" 
                dataKey="skills" 
                stroke="hsl(174, 35%, 45%)" 
                strokeWidth={1.5}
                fill="url(#skillsGradient)"
                dot={{ fill: 'hsl(174, 35%, 45%)', strokeWidth: 0, r: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mt-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-2 bg-muted/30 rounded border border-border min-w-0">
              <p className="metric-value text-base">{stat.value}</p>
              <p className="metric-label">{stat.label}</p>
              <p className="text-[9px] text-muted-foreground">{stat.unit}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="system-module-footer">
        <span>Metrics aggregated from portfolio analysis · Updated quarterly</span>
      </div>
    </div>
  );
}
