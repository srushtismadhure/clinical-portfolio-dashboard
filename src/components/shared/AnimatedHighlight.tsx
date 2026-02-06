import React, { useEffect, useRef, useState } from 'react';

type AnimatedHighlightProps = {
  children: React.ReactNode;
  color?: string;
};

export function AnimatedHighlight({ children, color }: AnimatedHighlightProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [inView, setInView] = useState(false);
  const [direction, setDirection] = useState<'down' | 'up'>('down');
  const lastY = useRef<number>(typeof window !== 'undefined' ? window.scrollY : 0);
  const hasScrolled = useRef(false);
  const [progress, setProgress] = useState(0);
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false,
  );

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY || 0;
      if (currentY > lastY.current) setDirection('down');
      else if (currentY < lastY.current) setDirection('up');
      if (!hasScrolled.current && currentY !== lastY.current) {
        hasScrolled.current = true;
      }
      lastY.current = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting && entry.intersectionRatio >= 0.7);
        });
      },
      { threshold: [0, 0.7, 1] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const origin = direction === 'down' ? 'left center' : 'right center';

  useEffect(() => {
    if (prefersReducedMotion.current) {
      setProgress(inView ? 1 : 0);
      return;
    }

    if (!hasScrolled.current) {
      setProgress(0);
      return;
    }

    if (direction === 'down') {
      setProgress(inView ? 1 : 0);
    } else {
      // On scroll up, retract right -> left regardless of in-view state
      setProgress(0);
    }
  }, [direction, inView]);

  return (
    <span
      ref={ref}
      className="relative inline-block px-1 py-0.5 rounded [box-decoration-break:clone]"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-sm"
        style={{
          backgroundColor: color ?? 'rgba(254, 243, 199, 0.8)',
          transformOrigin: origin,
          transform: `translateY(1px) scaleX(${progress})`,
          transition: prefersReducedMotion.current
            ? 'none'
            : 'transform 1700ms cubic-bezier(0.16, 1, 0.3, 1) 200ms',
          zIndex: 0,
        }}
      />
      <span className="relative z-[1]">{children}</span>
    </span>
  );
}
