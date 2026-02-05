import { cn } from '@/lib/utils';

interface FilterBarProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  size?: 'sm' | 'md';
}

export function FilterBar({ filters, activeFilter, onFilterChange, size = 'md' }: FilterBarProps) {
  const padding = size === 'sm' ? 'px-3' : 'px-4';
  const height = size === 'sm' ? 'h-8' : 'h-9';
  const textSize = size === 'sm' ? 'text-xs' : 'text-sm';

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={cn(
            `${padding} ${height} ${textSize} rounded-full font-medium transition-all duration-200 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-300`,
            activeFilter === filter
              ? 'bg-[#0F1E36] text-white border-[#0F1E36]'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
