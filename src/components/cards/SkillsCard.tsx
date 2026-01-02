import { Sparkles, MoreVertical } from 'lucide-react';

const skills = [
  { name: 'Python', color: 'teal' },
  { name: 'R', color: 'lavender' },
  { name: 'SQL', color: 'blue' },
  { name: 'Power BI', color: 'coral' },
  { name: 'Databricks', color: 'cream' },
  { name: 'Machine Learning', color: 'teal' },
  { name: 'SDOH Analytics', color: 'lavender' },
  { name: 'Predictive Modeling', color: 'blue' },
  { name: 'UX for Digital Health', color: 'coral' },
  { name: 'Clinical Data Pipelines', color: 'cream' },
];

const colorClasses: Record<string, string> = {
  teal: 'ehr-pill-teal',
  lavender: 'ehr-pill-lavender',
  blue: 'ehr-pill-blue',
  coral: 'ehr-pill-coral',
  cream: 'ehr-pill-cream',
};

export function SkillsCard() {
  return (
    <div className="ehr-card-secondary animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[hsl(var(--ehr-lavender))]" />
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Skills & Tools</h3>
        </div>
        <button className="w-6 h-6 rounded-md hover:bg-white/50 flex items-center justify-center transition-colors">
          <MoreVertical className="w-3.5 h-3.5 text-muted-foreground" />
        </button>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <span 
            key={skill.name}
            className={`ehr-pill text-xs py-1.5 px-3 ${colorClasses[skill.color]} hover:scale-[1.02] transition-transform cursor-default`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
