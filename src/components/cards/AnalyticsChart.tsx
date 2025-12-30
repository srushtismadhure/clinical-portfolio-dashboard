import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

const data = [
  { date: 'Jan', projects: 60, skills: 55 },
  { date: 'Feb', projects: 62, skills: 58 },
  { date: 'Mar', projects: 68, skills: 65 },
  { date: 'Apr', projects: 72, skills: 70 },
  { date: 'May', projects: 75, skills: 73 },
  { date: 'Jun', projects: 78, skills: 76 },
];

const stats = [
  { label: 'Projects Completed', value: '24', change: '+4' },
  { label: 'Skills Mastered', value: '18', change: '+3' },
  { label: 'Years Experience', value: '3+', change: '' },
];

export function AnalyticsChart() {
  return (
    <div className="ehr-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-primary" />
          <h3 className="text-base font-semibold text-foreground">Work Overview</h3>
        </div>
        <select className="text-sm bg-muted border-0 rounded-md px-2 py-1.5 text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20">
          <option>Last 6 months</option>
          <option>Last year</option>
        </select>
      </div>

      {/* Chart */}
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="projectsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3FA092" stopOpacity={0.15}/>
                <stop offset="95%" stopColor="#3FA092" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="skillsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#5E6AD2" stopOpacity={0.15}/>
                <stop offset="95%" stopColor="#5E6AD2" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" vertical={false} />
            <XAxis 
              dataKey="date" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
            />
            <YAxis 
              domain={[50, 80]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ 
                background: 'white', 
                border: '1px solid hsl(220, 13%, 91%)',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="projects" 
              stroke="#3FA092" 
              strokeWidth={2}
              fill="url(#projectsGradient)"
              dot={false}
              activeDot={{ r: 4, fill: '#3FA092' }}
            />
            <Area 
              type="monotone" 
              dataKey="skills" 
              stroke="#5E6AD2" 
              strokeWidth={2}
              fill="url(#skillsGradient)"
              dot={false}
              activeDot={{ r: 4, fill: '#5E6AD2' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-2 mb-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="w-3 h-0.5 bg-primary rounded" />
          <span>Projects</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="w-3 h-0.5 bg-secondary rounded" />
          <span>Skills</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-xl font-semibold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
            {stat.change && (
              <p className="text-xs text-primary font-medium mt-0.5">{stat.change}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
