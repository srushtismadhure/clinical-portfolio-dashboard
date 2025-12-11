import { cn } from '@/lib/utils';

interface FilterBarProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function FilterBar({ filters, activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
            activeFilter === filter
              ? 'bg-[hsl(var(--ehr-teal))] text-white shadow-md'
              : 'bg-card border border-border hover:bg-[hsl(var(--ehr-teal)/0.1)] hover:border-[hsl(var(--ehr-teal)/0.3)]'
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
