import { useEffect, useRef, useState } from 'react';

// Scroll-position-based progress (0 -> 1) for a section.
// Progress = 0 when top hits ~80% viewport; Progress = 1 when bottom hits ~20% viewport.
export function useScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const viewportH = window.innerHeight;

      const start = viewportH * 0.8; // element starts animating here
      const end = viewportH * 0.2;   // element finishes animating here

      const raw = (start - rect.top) / (rect.height + start - end);
      const clamped = Math.min(1, Math.max(0, raw));
      setProgress(clamped);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { ref, progress } as const;
}
