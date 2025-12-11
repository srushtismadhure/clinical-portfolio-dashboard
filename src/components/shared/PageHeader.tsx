import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <div className="mb-8 animate-fade-up">
      <h1 className="text-3xl font-bold text-ehr-heading mb-2">{title}</h1>
      {subtitle && (
        <p className="text-muted-foreground text-lg">{subtitle}</p>
      )}
      {children}
    </div>
  );
}
