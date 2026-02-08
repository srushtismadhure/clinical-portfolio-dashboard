import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function ThankYou() {
  return (
    <Layout title="Thank You" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Thank You' }]}>
      <div className="flex flex-col min-h-[60vh] space-y-8">
        <div className="max-w-2xl">
          <div className="bg-white border border-[#E3E8EE] rounded-xl shadow-sm p-6 space-y-4">
            <div className="flex items-center gap-2 text-slate-900">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <h1 className="text-xl font-semibold">Message logged successfully</h1>
            </div>
            <p className="text-slate-700 text-lg">
              Your note has been securely recorded in my system. I’ll review it and follow up soon.
            </p>
            <p className="text-slate-700 text-base">
              In the meantime, explore more of my work.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-xl bg-[#1E3A5F] hover:bg-[#17324F] text-white px-4 py-2 text-sm font-medium shadow-sm transition-colors"
              >
                View Projects
              </Link>
              <a
                href="https://www.linkedin.com/in/srushti-madhure/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white border border-[#E3E8EE] hover:bg-[#F3F6F9] text-slate-800 px-4 py-2 text-sm font-medium shadow-sm transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/srushtismadhure"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white border border-[#E3E8EE] hover:bg-[#F3F6F9] text-slate-800 px-4 py-2 text-sm font-medium shadow-sm transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <section className="w-full mt-auto">
          <a
            href="mailto:srushtisunilmadhure@gmail.com"
            className="group relative block h-16 overflow-hidden rounded-md border border-slate-800 bg-[#0B1510] [--ecg-speed:6s] hover:[--ecg-speed:4.2s]"
            aria-label="Message status"
          >
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 400 64"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <style>{`
                @keyframes ecg-draw {
                  0% { stroke-dashoffset: 1200; }
                  30% { stroke-dashoffset: 980; }
                  48% { stroke-dashoffset: 760; }
                  58% { stroke-dashoffset: 760; }
                  76% { stroke-dashoffset: 520; }
                  86% { stroke-dashoffset: 360; }
                  94% { stroke-dashoffset: 360; }
                  100% { stroke-dashoffset: 0; }
                }
                @keyframes ecg-reveal {
                  from { transform: scaleX(0); }
                  to { transform: scaleX(1); }
                }
                @keyframes ecg-scan {
                  from { transform: translateX(-40px); }
                  to { transform: translateX(440px); }
                }
                .ecg-reveal {
                  transform-origin: 0 0;
                  transform-box: fill-box;
                  animation: ecg-reveal var(--ecg-speed) linear infinite;
                }
              `}</style>
              <defs>
                <pattern id="ecg-grid" width="16" height="16" patternUnits="userSpaceOnUse">
                  <path d="M16 0H0V16" fill="none" stroke="#0F2A1B" strokeWidth="1" />
                </pattern>
                <linearGradient id="ecg-scan" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#22C55E" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#22C55E" stopOpacity="0.12" />
                  <stop offset="1" stopColor="#22C55E" stopOpacity="0" />
                </linearGradient>
                <clipPath id="ecg-reveal-clip">
                  <rect className="ecg-reveal" x="0" y="0" width="400" height="64" />
                </clipPath>
              </defs>
              <rect width="400" height="64" fill="url(#ecg-grid)" />
              <g clipPath="url(#ecg-reveal-clip)">
                <path
                  d="M0 32 L40 32 C44 32 46 30 50 32 L70 32 L74 34 L78 6 L82 58 L86 32 L100 32 C104 32 110 26 118 32 L140 32 L150 32 L154 34 L158 6 L162 58 L166 32 L180 32 L220 32 C224 32 226 30 230 32 L250 32 L254 34 L258 6 L262 58 L266 32 L280 32 L320 32 C324 32 326 30 330 32 L350 32 L354 34 L358 6 L362 58 L366 32 L400 32"
                  fill="none"
                  stroke="#1D7A43"
                  strokeWidth="1.0"
                  strokeLinejoin="miter"
                  strokeLinecap="butt"
                  opacity="0.28"
                />
                <path
                  d="M0 32 L40 32 C44 32 46 30 50 32 L70 32 L74 34 L78 6 L82 58 L86 32 L100 32 C104 32 110 26 118 32 L140 32 L150 32 L154 34 L158 6 L162 58 L166 32 L180 32 L220 32 C224 32 226 30 230 32 L250 32 L254 34 L258 6 L262 58 L266 32 L280 32 L320 32 C324 32 326 30 330 32 L350 32 L354 34 L358 6 L362 58 L366 32 L400 32"
                  fill="none"
                  stroke="#22C55E"
                  strokeWidth="1.8"
                  strokeLinejoin="miter"
                  strokeLinecap="butt"
                  opacity="0.18"
                />
                <path
                  d="M0 32 L40 32 C44 32 46 30 50 32 L70 32 L74 34 L78 6 L82 58 L86 32 L100 32 C104 32 110 26 118 32 L140 32 L150 32 L154 34 L158 6 L162 58 L166 32 L180 32 L220 32 C224 32 226 30 230 32 L250 32 L254 34 L258 6 L262 58 L266 32 L280 32 L320 32 C324 32 326 30 330 32 L350 32 L354 34 L358 6 L362 58 L366 32 L400 32"
                  fill="none"
                  stroke="#22C55E"
                  strokeWidth="1.2"
                  strokeLinejoin="miter"
                  strokeLinecap="butt"
                  strokeDasharray="1200"
                  style={{
                    animation: 'ecg-draw var(--ecg-speed) cubic-bezier(0.35, 0.1, 0.65, 0.9) infinite',
                    filter: 'drop-shadow(0 0 0.4px rgba(34,197,94,0.18))',
                  }}
                />
              </g>
              <rect
                x="-40"
                y="0"
                width="40"
                height="64"
                fill="url(#ecg-scan)"
                style={{ animation: 'ecg-scan var(--ecg-speed) linear infinite' }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-medium text-[#7BE3A1] bg-black/30 px-2 py-0.5 rounded-sm">
                Message Status: Stable
              </span>
            </div>
          </a>
        </section>
      </div>
    </Layout>
  );
}
