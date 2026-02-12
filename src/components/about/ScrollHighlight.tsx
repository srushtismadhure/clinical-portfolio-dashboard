import React, { useEffect, useRef } from 'react';

const tracked = new Set<HTMLElement>();
let ticking = false;
let reduceMotion = false;

function updateHighlights() {
  ticking = false;
  if (reduceMotion) {
    tracked.forEach((el) => el.style.setProperty('--p', '1'));
    return;
  }

  const vh = window.innerHeight || 1;
  const start = vh * 0.85;
  const end = vh * 0.35;
  const range = start - end || 1;

  tracked.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const top = rect.top;
    let p = (start - top) / range;
    if (p < 0) p = 0;
    if (p > 1) p = 1;
    el.style.setProperty('--p', p.toFixed(4));
  });
}

function requestUpdate() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(updateHighlights);
}

function setupListeners() {
  if (typeof window === 'undefined') return;
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  reduceMotion = mq.matches;
  const handleChange = () => {
    reduceMotion = mq.matches;
    requestUpdate();
  };
  mq.addEventListener('change', handleChange);

  const onScroll = () => requestUpdate();
  const onResize = () => requestUpdate();

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);

  requestUpdate();

  return () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onResize);
    mq.removeEventListener('change', handleChange);
  };
}

let teardown: (() => void) | null = null;
let refCount = 0;

export default function ScrollHighlight({ children }: { children: React.ReactNode }) {
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const cleanup = teardown ?? setupListeners();
    teardown = cleanup ?? null;

    const el = spanRef.current;
    if (el) {
      tracked.add(el);
      el.style.setProperty('--p', '0');
      requestUpdate();
    }
    refCount += 1;

    return () => {
      if (el) tracked.delete(el);
      refCount -= 1;
      if (refCount === 0 && teardown) {
        teardown();
        teardown = null;
      }
    };
  }, []);

  return (
    <span
      ref={spanRef}
      className="scroll-highlight"
      style={{
        backgroundImage: 'linear-gradient(to right, rgba(253, 224, 71, 0.45) 0%, rgba(253, 224, 71, 0.45) 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'calc(var(--p, 0) * 100%) 1.15em',
        backgroundPosition: '0 85%',
        borderRadius: '6px',
        WebkitBoxDecorationBreak: 'clone',
        boxDecorationBreak: 'clone',
        transition: 'background-size 80ms linear',
      }}
    >
      {children}
    </span>
  );
}
