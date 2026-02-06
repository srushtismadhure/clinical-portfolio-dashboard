import React from 'react';

type MarkerProps = {
  children: React.ReactNode;
  variant?: 'yellow' | 'blue';
};

export function Marker({ children, variant = 'yellow' }: MarkerProps) {
  return (
    <span className={`marker ${variant === 'blue' ? 'marker-blue' : ''}`}>
      {children}
    </span>
  );
}
