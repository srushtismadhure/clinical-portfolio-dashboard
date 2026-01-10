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
    <div className="system-module min-w-0">
      <div className="system-module-header">
        <div className="flex items-center gap-1.5 min-w-0">
          <TrendingUp className="w-3 h-3 text-primary flex-shrink-0" />
          <span className="system-module-label">Portfolio Metrics</span>
        </div>
        <span className="text-[9px] text-muted-foreground">Period: 2024</span>
      </div>

      <div className="system-module-content">
        {/* Legend */}
        <div className="flex items-center gap-3 mb-1.5 text-[9px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Projects
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
            Skills Applied
          </span>
        </div>

        {/* Chart */}
        <div className="h-24 sm:h-28 bg-muted/20 rounded border border-border p-1.5">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
              <defs>
                <linearGradient id="projectsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(207, 55%, 45%)" stopOpacity={0.12}/>
                  <stop offset="95%" stopColor="hsl(207, 55%, 45%)" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="skillsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(215, 12%, 50%)" stopOpacity={0.08}/>
                  <stop offset="95%" stopColor="hsl(215, 12%, 50%)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 12%, 90%)" vertical={false} />
              <XAxis 
                dataKey="period" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'hsl(215, 12%, 50%)', fontSize: 8 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'hsl(215, 12%, 50%)', fontSize: 8 }}
              />
              <Tooltip 
                contentStyle={{ 
                  background: 'white', 
                  border: '1px solid hsl(210, 12%, 88%)',
                  borderRadius: '4px',
                  boxShadow: 'none',
                  fontSize: '10px',
                  padding: '4px 8px'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="projects" 
                stroke="hsl(207, 55%, 45%)" 
                strokeWidth={1.5}
                fill="url(#projectsGradient)"
                dot={{ fill: 'hsl(207, 55%, 45%)', strokeWidth: 0, r: 1.5 }}
              />
              <Area 
                type="monotone" 
                dataKey="skills" 
                stroke="hsl(215, 12%, 50%)" 
                strokeWidth={1}
                fill="url(#skillsGradient)"
                dot={{ fill: 'hsl(215, 12%, 50%)', strokeWidth: 0, r: 1.5 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-1.5 mt-2">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-1.5 bg-muted/20 rounded border border-border min-w-0">
              <p className="text-sm font-medium text-foreground tabular-nums">{stat.value}</p>
              <p className="text-[8px] text-muted-foreground uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="system-module-footer">
        <span>Aggregated quarterly · Jan 2026</span>
      </div>
    </div>
  );
}
