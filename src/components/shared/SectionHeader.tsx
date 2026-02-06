import React from 'react';

type SectionHeaderProps = {
  title: string;
  icon?: React.ElementType;
};

export function SectionHeader({ title, icon: Icon }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-2 mb-4">
      {Icon ? <Icon className="w-5 h-5 text-slate-600" aria-hidden="true" /> : null}
      <h2 className="text-xl font-semibold text-slate-800">{title}</h2>
    </div>
  );
}
