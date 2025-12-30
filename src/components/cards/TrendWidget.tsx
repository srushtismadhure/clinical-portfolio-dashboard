import { LineChart, Line, ResponsiveContainer, XAxis } from 'recharts';
import { Activity, ArrowUpRight } from 'lucide-react';

const data = [
  { day: '07', heart: 92, stress: 45 },
  { day: '08', heart: 88, stress: 52 },
  { day: '09', heart: 95, stress: 38 },
  { day: '10', heart: 91, stress: 42 },
  { day: '11', heart: 98, stress: 35 },
  { day: '12', heart: 94, stress: 40 },
  { day: '13', heart: 96, stress: 32 },
];

export function TrendWidget() {
  return (
    <div className="ehr-card animate-fade-in" style={{ animationDelay: '0.5s' }}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-accent" />
          <h3 className="text-base font-semibold text-foreground">Technical Strength</h3>
        </div>
        <button className="w-6 h-6 rounded-md hover:bg-muted flex items-center justify-center transition-colors">
          <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
      <p className="text-xs text-muted-foreground mb-3">07 - 13 June, 2024</p>

      <div className="h-24">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#4A5568', fontSize: 10 }}
            />
            <Line 
              type="monotone" 
              dataKey="heart" 
              stroke="#FF8A80" 
              strokeWidth={2}
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="stress" 
              stroke="#5C7CFA" 
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
          <p className="text-lg font-semibold text-foreground">98 <span className="text-xs text-muted-foreground">score</span></p>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted-foreground">Growth</p>
          <p className="text-lg font-semibold text-ehr-teal">47% <span className="text-xs">up</span></p>
        </div>
      </div>
    </div>
  );
}
