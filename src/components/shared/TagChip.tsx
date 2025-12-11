import { cn } from '@/lib/utils';

type ChipVariant = 'teal' | 'lavender' | 'cream' | 'coral' | 'blue';

interface TagChipProps {
  label: string;
  variant?: ChipVariant;
  size?: 'sm' | 'md';
}

const variantClasses: Record<ChipVariant, string> = {
  teal: 'ehr-pill-teal',
  lavender: 'ehr-pill-lavender',
  cream: 'ehr-pill-cream',
  coral: 'ehr-pill-coral',
  blue: 'ehr-pill-blue',
};

export function TagChip({ label, variant = 'teal', size = 'md' }: TagChipProps) {
  return (
    <span
      className={cn(
        'ehr-pill',
        variantClasses[variant],
        size === 'sm' && 'px-2 py-1 text-xs'
      )}
    >
      {label}
    </span>
  );
}
