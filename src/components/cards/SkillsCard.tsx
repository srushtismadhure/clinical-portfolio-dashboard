import { Layers } from 'lucide-react';

const skills = [
  { name: 'Python', category: 'language' },
  { name: 'R', category: 'language' },
  { name: 'SQL', category: 'language' },
  { name: 'Power BI', category: 'tool' },
  { name: 'Databricks', category: 'tool' },
  { name: 'Machine Learning', category: 'specialty' },
  { name: 'SDOH Analytics', category: 'specialty' },
  { name: 'Predictive Modeling', category: 'specialty' },
  { name: 'UX for Digital Health', category: 'specialty' },
  { name: 'Clinical Data Pipelines', category: 'specialty' },
];

export function SkillsCard() {
  return (
    <div className="ehr-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <div className="flex items-center gap-2 mb-4">
        <Layers className="w-4 h-4 text-secondary" />
        <h3 className="text-base font-semibold text-foreground">Skills & Tools</h3>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <span 
            key={skill.name}
            className="ehr-pill ehr-pill-muted text-xs"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
