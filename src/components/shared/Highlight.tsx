import React, { useEffect, useRef, useState } from 'react';

type HighlightProps = {
  children: React.ReactNode;
};

export function Highlight({ children }: HighlightProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [progress, setProgress] = useState(0);
  const initialScrollY = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId: number | null = null;

    const clamp = (n: number) => Math.min(1, Math.max(0, n));

    const measure = () => {
      if (!el) return;
      if (initialScrollY.current === null) {
        initialScrollY.current = window.scrollY || 0;
      }

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const startPx = vh * 0.8; // start when top hits 80% viewport
      const endPx = vh * 0.3; // finish when bottom hits ~30% viewport
      const total = (startPx - endPx) + rect.height;
      const raw = (startPx - rect.top) / total;

      // Force zero until a tiny scroll has occurred
      if (initialScrollY.current !== null && window.scrollY <= initialScrollY.current + 2) {
        setProgress(0);
      } else {
        setProgress(clamp(raw));
      }
      rafId = requestAnimationFrame(measure);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (rafId === null) {
              rafId = requestAnimationFrame(measure);
            }
          } else {
            if (rafId !== null) {
              cancelAnimationFrame(rafId);
              rafId = null;
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '200px 0px 200px 0px' }
    );

    observer.observe(el);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <span
      ref={ref}
      className="relative inline-block"
      style={{ position: 'relative', display: 'inline-block', '--p': progress } as React.CSSProperties}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-sm"
        style={{
          backgroundColor: 'rgba(247, 231, 163, 0.7)',
          transformOrigin: 'left center',
          transform: `scaleX(${progress})`,
          transition: 'transform 60ms linear',
          zIndex: 0,
        }}
      />
      <span className="relative z-[1]">{children}</span>
    </span>
  );
}
