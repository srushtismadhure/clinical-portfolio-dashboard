import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ShredderScrollScene() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const paperGroupRef = useRef<SVGGElement | null>(null);
  const stripsGroupRef = useRef<SVGGElement | null>(null);
  const SCENE_HEIGHT = 360;
  const [scale, setScale] = useState(0.65);

  useEffect(() => {
    const computeScale = () => {
      const w = window.innerWidth;
      if (w < 480) return 0.55; // small mobile
      if (w < 768) return 0.62; // large mobile / small tablet
      if (w < 1024) return 0.75; // tablet / small desktop
      return 0.9; // large desktop (keep it big)
    };
    const update = () => setScale(computeScale());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useLayoutEffect(() => {
    if (!wrapRef.current || !paperGroupRef.current || !stripsGroupRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(paperGroupRef.current, { y: 0, opacity: 1 });
      gsap.set(stripsGroupRef.current, { opacity: 0 });
      gsap.set('.strip', { y: 0, x: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapRef.current,
          start: 'top top',
          end: '+=500',
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Paper moves into shredder
      tl.to(paperGroupRef.current, { y: 170, ease: 'none' }, 0);

      // Paper fades out at shred line
      tl.to(paperGroupRef.current, { opacity: 0, ease: 'none' }, 0.42);

      // Strips appear
      tl.to(stripsGroupRef.current, { opacity: 1, ease: 'none' }, 0.42);

      // Strips fall down
      tl.to(
        '.strip',
        {
          y: 260,
          ease: 'none',
          stagger: { each: 0.04, from: 'center' },
        },
        0.45
      );

      // Subtle jitter = shredding motion
      tl.to(
        '.strip',
        {
          x: () => gsap.utils.random(-3, 3),
          ease: 'none',
          stagger: { each: 0.02, from: 'random' },
        },
        0.55
      );
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white py-6">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Left: animation */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-4 sm:p-5">
            <div
              ref={wrapRef}
              style={{
                height: `${SCENE_HEIGHT}px`,
                minHeight: `${SCENE_HEIGHT}px`,
                maxHeight: `${SCENE_HEIGHT}px`,
                display: 'grid',
                placeItems: 'center',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: 'center',
                  maxWidth: 'min(620px, 92vw)',
                  margin: '0 auto',
                }}
              >
                <svg
                  viewBox="0 0 520 420"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                >
                {/* PAPER */}
                <g ref={paperGroupRef}>
                  <rect
                    x="170"
                    y="20"
                    width="180"
                    height="120"
                    rx="12"
                    fill="#fff"
                    stroke="#0F1E36"
                    strokeWidth="6"
                  />

                  {/* Fake clinical text lines */}
                  <g opacity="0.5">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <rect
                        key={i}
                        x={190 + (i % 3) * 6}
                        y={45 + i * 14}
                        width={140 - (i % 2) * 30}
                        height="6"
                        rx="3"
                        fill="#0F1E36"
                      />
                    ))}
                  </g>

                  <text
                    x="260"
                    y="38"
                    textAnchor="middle"
                    fontSize="12"
                    fill="#0F1E36"
                    opacity="0.6"
                  >
                    clinical note
                  </text>
                </g>

                {/* SHREDDER */}
                <g>
                  <rect
                    x="110"
                    y="140"
                    width="300"
                    height="150"
                    rx="22"
                    fill="#fff"
                    stroke="#0F1E36"
                    strokeWidth="8"
                  />

                  {/* Buttons */}
                  <circle cx="360" cy="178" r="10" fill="#fff" stroke="#0F1E36" strokeWidth="6" />
                  <circle cx="392" cy="178" r="10" fill="#fff" stroke="#0F1E36" strokeWidth="6" />

                  {/* Slot */}
                  <rect x="150" y="200" width="220" height="16" rx="8" fill="#0F1E36" opacity="0.2" />

                  {/* Label on shredder */}
                  <text
                    x="260"
                    y="188"
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="600"
                    fill="#0F1E36"
                    opacity="0.6"
                  >
                    NLP Pipeline
                  </text>

                  {/* Legs */}
                  <rect x="130" y="260" width="60" height="45" rx="8" fill="#fff" stroke="#0F1E36" strokeWidth="8" />
                  <rect x="330" y="260" width="60" height="45" rx="8" fill="#fff" stroke="#0F1E36" strokeWidth="8" />
                </g>

                {/* STRIPS */}
                <g ref={stripsGroupRef}>
                  {Array.from({ length: 9 }).map((_, i) => (
                    <rect
                      key={i}
                      className="strip"
                      x={160 + i * 22}
                      y={216}
                      width="14"
                      height="110"
                      rx="6"
                      fill="#fff"
                      stroke="#0F1E36"
                      strokeWidth="4"
                    />
                  ))}
                  <text
                    x="260"
                    y="210"
                    textAnchor="middle"
                    fontSize="11"
                    fill="#0F1E36"
                    opacity="0.45"
                  >
                    Z-codes
                  </text>
                </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Right: simple flowchart */}
          <div
            className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6"
            style={{ minHeight: `${SCENE_HEIGHT}px` }}
          >
            <div className="flex h-full flex-col">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Simple pipeline</h3>
                <p className="text-sm text-slate-600">
                  High-level transformation from raw text → standardized codes.
                </p>
              </div>
              <div className="mt-6 flex-1 flex flex-col justify-between">
                <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <div className="text-sm font-semibold text-slate-900">Clinical notes</div>
                  <div className="text-xs text-slate-600 mt-1">messages • free-text • triage comments</div>
                </div>
                <div className="flex items-center justify-center text-slate-500 text-sm py-3">
                  <span className="block h-px flex-1 bg-slate-200 mx-3" />
                  ↓
                  <span className="block h-px flex-1 bg-slate-200 mx-3" />
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <div className="text-sm font-semibold text-slate-900">NLP pipeline</div>
                  <div className="text-xs text-slate-600 mt-1">de-id • tokenization • embeddings</div>
                </div>
                <div className="flex items-center justify-center text-slate-500 text-sm py-3">
                  <span className="block h-px flex-1 bg-slate-200 mx-3" />
                  ↓
                  <span className="block h-px flex-1 bg-slate-200 mx-3" />
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <div className="text-sm font-semibold text-slate-900">Z-codes</div>
                  <div className="text-xs text-slate-600 mt-1">structured tags for downstream analytics</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
