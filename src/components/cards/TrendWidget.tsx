import { LineChart, Line, ResponsiveContainer, XAxis } from 'recharts';
import { TrendingUp } from 'lucide-react';

const data = [
  { week: 'W1', proficiency: 82, growth: 45 },
  { week: 'W2', proficiency: 85, growth: 52 },
  { week: 'W3', proficiency: 88, growth: 48 },
  { week: 'W4', proficiency: 91, growth: 55 },
  { week: 'W5', proficiency: 94, growth: 58 },
  { week: 'W6', proficiency: 96, growth: 62 },
];

export function TrendWidget() {
  return (
    <div className="ehr-card animate-fade-in" style={{ animationDelay: '0.5s' }}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-semibold text-foreground">Technical Proficiency</h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mb-3">Last 6 weeks</p>

      <div className="h-20">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <XAxis 
              dataKey="week" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 10 }}
            />
            <Line 
              type="monotone" 
              dataKey="proficiency" 
              stroke="#3FA092" 
              strokeWidth={2}
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="growth" 
              stroke="#5E6AD2" 
              strokeWidth={2}
              dot={false}
              strokeDasharray="4 4"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-3 pt-3 border-t border-border">
        <div className="text-center">
          <p className="text-xs text-muted-foreground">Proficiency</p>
          <p className="text-lg font-semibold text-foreground">96<span className="text-xs text-muted-foreground ml-0.5">%</span></p>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted-foreground">Growth</p>
          <p className="text-lg font-semibold text-primary">+17<span className="text-xs ml-0.5">%</span></p>
        </div>
      </div>
    </div>
  );
}
