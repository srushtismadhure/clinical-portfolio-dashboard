import clsx from 'clsx';
import { useMemo } from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';

type NoteLabel = 'Clinical Notes' | 'Patient Messages' | 'Survey Free Text';

const notes: NoteLabel[] = ['Clinical Notes', 'Patient Messages', 'Survey Free Text'];
const tokens = ['Z59.0 – Housing Instability', 'Missed Follow-Up', 'High Utilization Risk', 'SDOH Tag', 'Clinical Entity'];

function NoteCard({ label, index, progress }: { label: NoteLabel; index: number; progress: number }) {
  // Stagger each card slightly in scroll
  const offset = progress - index * 0.08;
  const clamped = Math.min(1, Math.max(0, offset));
  const translateY = clamped * 120; // cards move downward into shredder
  const opacity = 1 - clamped * 0.55;
  const sliceScale = 1 - clamped * 0.2;

  return (
    <div
      className="relative mx-auto w-full max-w-xl rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-sm"
      style={{
        transform: `translateY(${translateY}px) scale(${sliceScale})`,
        opacity,
      }}
    >
      <div className="text-sm font-semibold text-slate-700">{label}</div>
      <div className="mt-1 space-y-1 text-[11px] leading-4 text-slate-400">
        <div className="h-1.5 w-full rounded bg-slate-100" />
        <div className="h-1.5 w-5/6 rounded bg-slate-100" />
        <div className="h-1.5 w-2/3 rounded bg-slate-100" />
      </div>
      {/* Slicing effect: vertical strips that compress as progress increases */}
      <div className="pointer-events-none absolute inset-0 flex gap-1 px-5 opacity-60">
        {Array.from({ length: 7 }).map((_, i) => {
          const stripOffset = (clamped * 18 * i);
          return (
            <span
              key={i}
              className="h-full w-px bg-slate-200"
              style={{ transform: `translateY(${stripOffset}px)` }}
            />
          );
        })}
      </div>
    </div>
  );
}

function Shredder({ progress }: { progress: number }) {
  const scale = 0.9 + progress * 0.1;
  const opacity = 0.4 + progress * 0.6;
  return (
    <div className="relative flex justify-center" aria-hidden>
      <div
        className="relative h-32 w-56 rounded-2xl border border-slate-200 bg-white shadow-sm"
        style={{
          boxShadow: '0 10px 25px rgba(15,23,42,0.08)',
          transform: `scale(${scale})`,
          opacity,
        }}
      >
        <div className="absolute inset-x-6 top-5 h-2 rounded-full bg-slate-100" />
        <div className="absolute inset-x-10 top-10 h-10 rounded-md bg-[hsl(var(--primary)/0.08)] border border-[hsl(var(--primary)/0.2)]" />
        <div className="absolute inset-x-12 top-14 h-3 rounded bg-slate-100" />
        <div className="absolute inset-x-14 bottom-6 h-1.5 rounded bg-slate-200" />
      </div>
    </div>
  );
}

function TokenCloud({ progress }: { progress: number }) {
  // Tokens rise from shredder output and then gently settle
  return (
    <div className="relative mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 justify-items-center">
      {tokens.map((token, idx) => {
        const delay = idx * 0.05;
        const effective = Math.min(1, Math.max(0, progress - delay));
        const y = 60 - effective * 60; // move up then settle
        const fade = 0.3 + effective * 0.7;
        return (
          <div
            key={token}
            className="rounded-full border border-slate-200 bg-white px-3 py-2 text-[12px] text-slate-700 shadow-sm"
            style={{
              transform: `translateY(${y}px)`,
              opacity: fade,
            }}
          >
            {token}
          </div>
        );
      })}
    </div>
  );
}

export default function NLPTransformationSection() {
  const { ref, progress } = useScrollProgress();
  const clamped = useMemo(() => Math.min(1, Math.max(0, progress)), [progress]);

  return (
    <section ref={ref} className="relative min-h-[180vh] mx-auto max-w-none">
      <div className="sticky top-[20vh] mx-auto max-w-4xl space-y-16 py-10">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold text-slate-900">Narrative Transformation</h2>
          <p className="text-sm text-slate-600">
            How unstructured clinical narratives condense into structured signals for analytics and care ops.
          </p>
        </div>

        {/* Shredder + tokens */}
        <div className="relative flex flex-col items-center gap-8">
          <Shredder progress={clamped} />
          <TokenCloud progress={clamped} />
        </div>
      </div>
    </section>
  );
}
