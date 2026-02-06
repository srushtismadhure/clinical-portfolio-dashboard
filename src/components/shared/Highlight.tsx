import React, { useEffect, useRef, useState } from 'react';

type HighlightProps = {
  children: React.ReactNode;
  color?: string;
};

export function Highlight({ children, color }: HighlightProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId: number | null = null;
    const clamp = (n: number) => Math.min(1, Math.max(0, n));

    const measure = () => {
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const startPx = vh * 0.8; // start when top hits 80% viewport
      const endPx = vh * 0.3; // finish when bottom hits ~30% viewport
      const total = (startPx - endPx) + rect.height;
      const raw = (startPx - rect.top) / total;
      setProgress(clamp(raw));
    };

    const schedule = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(measure);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setProgress(0);
            schedule();
            window.addEventListener('scroll', schedule, { passive: true });
            window.addEventListener('resize', schedule);
          } else {
            if (rafId !== null) {
              cancelAnimationFrame(rafId);
              rafId = null;
            }
            window.removeEventListener('resize', schedule);
            window.removeEventListener('scroll', schedule);
          }
        });
      },
      { threshold: 0.1, rootMargin: '200px 0px 200px 0px' }
    );

    observer.observe(el);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      observer.disconnect();
    };
  }, []);

  return (
    <span
      ref={ref}
      className="relative inline-block px-1 py-0.5 rounded [box-decoration-break:clone]"
      style={{ position: 'relative', display: 'inline-block', '--p': progress } as React.CSSProperties}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-sm"
        style={{
          backgroundColor: color ?? 'rgba(247, 231, 163, 0.7)',
          transform: `translateY(1px) rotate(-0.3deg) scaleX(${progress})`,
          transition: 'transform 60ms linear',
          zIndex: 0,
        }}
      />
      <span className="relative z-[1]">{children}</span>
    </span>
  );
}
