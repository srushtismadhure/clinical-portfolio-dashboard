import { LucideIcon } from 'lucide-react';
import { TagChip } from './TagChip';

interface SkillSectionProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
  variant?: 'teal' | 'lavender' | 'cream' | 'coral' | 'blue';
}

export function SkillSection({ title, icon: Icon, skills, variant = 'teal' }: SkillSectionProps) {
  return (
    <div className="ehr-card">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-xl bg-[hsl(var(--ehr-${variant})/0.15)] flex items-center justify-center`}>
          <Icon className={`w-5 h-5 text-[hsl(var(--ehr-${variant}))]`} />
        </div>
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <TagChip key={skill} label={skill} variant={variant} size="sm" />
        ))}
      </div>
    </div>
  );
}
