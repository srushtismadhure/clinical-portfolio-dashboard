import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

const data = [
  { date: '01-07', projects: 60, skills: 55 },
  { date: '08-15', projects: 62, skills: 58 },
  { date: '16-23', projects: 68, skills: 65 },
  { date: '24-31', projects: 72, skills: 70 },
];

const stats = [
  { label: 'Projects Completed', value: '24', change: '+4.2%' },
  { label: 'Skills Mastered', value: '18', change: '+12%' },
  { label: 'Experience Growth', value: '3 yrs', change: '' },
];

export function AnalyticsChart() {
  return (
    <div className="ehr-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">My Work at a Glance</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Month Records</span>
          <select className="text-sm bg-background border border-border rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>June 2024</option>
          </select>
        </div>
      </div>

      {/* Annotations */}
      <div className="flex items-center gap-4 mb-2 text-xs text-muted-foreground">
        <span>June 8 - June 15: <span className="text-ehr-teal font-medium">+3 projects (+4.2%)</span></span>
        <span>End Projects: <span className="font-medium text-foreground">68</span></span>
        <span>Target: <span className="font-medium text-foreground">Aim to grow by 5</span></span>
      </div>

      {/* Chart */}
      <div className="h-48 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="projectsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#5C7CFA" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#5C7CFA" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="skillsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF8A80" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#FF8A80" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 20%, 92%)" vertical={false} />
            <XAxis 
              dataKey="date" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#4A5568', fontSize: 12 }}
            />
            <YAxis 
              domain={[55, 75]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#4A5568', fontSize: 12 }}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip 
              contentStyle={{ 
                background: 'white', 
                border: '1px solid hsl(220, 20%, 92%)',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="projects" 
              stroke="#5C7CFA" 
              strokeWidth={2}
              fill="url(#projectsGradient)"
              dot={{ fill: '#5C7CFA', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: '#5C7CFA' }}
            />
            <Area 
              type="monotone" 
              dataKey="skills" 
              stroke="#FF8A80" 
              strokeWidth={2}
              fill="url(#skillsGradient)"
              dot={{ fill: '#FF8A80', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: '#FF8A80' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-border">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
            {stat.change && (
              <p className="text-xs text-ehr-teal font-medium mt-1">{stat.change}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
