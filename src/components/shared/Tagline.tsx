import React from 'react';

type TaglineProps = {
  className?: string;
};

export function Tagline({ className = '' }: TaglineProps) {
  return (
    <span className={["flex items-baseline gap-1", className].join(' ')}>
      <span>Building analytics for</span>
      <span className="whitespace-nowrap flex items-baseline gap-1">
        <s className="line-through decoration-slate-300 text-slate-400">users</s>
        <span className="text-slate-700 font-hand -rotate-1">people.</span>
      </span>
    </span>
  );
}
