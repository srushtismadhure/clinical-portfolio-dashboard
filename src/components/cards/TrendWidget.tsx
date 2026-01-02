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
    <div className="ehr-card-secondary animate-fade-in" style={{ animationDelay: '0.3s' }}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-[hsl(var(--ehr-coral))]" />
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Technical Strength</h3>
        </div>
        <button className="w-5 h-5 rounded hover:bg-white/50 flex items-center justify-center transition-colors">
          <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
        </button>
      </div>
      <p className="text-xs text-muted-foreground mb-2">07 - 13 June, 2024</p>

      <div className="h-20 bg-white/30 rounded-lg p-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#4A5568', fontSize: 9 }}
            />
            <Line 
              type="monotone" 
              dataKey="heart" 
              stroke="hsl(5, 100%, 75%)" 
              strokeWidth={2}
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="stress" 
              stroke="hsl(231, 95%, 67%)" 
              strokeWidth={2}
              dot={false}
              strokeDasharray="4 4"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-3 pt-3 border-t border-white/40">
        <div className="text-center">
          <p className="text-xs text-muted-foreground">Proficiency</p>
          <p className="text-base font-semibold text-foreground">98 <span className="text-[10px] text-muted-foreground">score</span></p>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted-foreground">Growth</p>
          <p className="text-base font-semibold text-primary">47% <span className="text-[10px]">up</span></p>
        </div>
      </div>
    </div>
  );
}
