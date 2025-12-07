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
    <div className="ehr-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-ehr-lavender" />
          <h3 className="text-lg font-semibold text-foreground">Skills & Tools</h3>
        </div>
        <button className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center transition-colors">
          <MoreVertical className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill.name}
            className={`ehr-pill text-xs ${colorClasses[skill.color]} hover:scale-105 transition-transform cursor-default`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
