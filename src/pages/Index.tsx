import { useEffect, useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { TopBar } from '@/components/layout/TopBar';
import { HeroSection } from '@/components/cards/HeroSection';
import { SelectedProjectsGrid } from '@/components/cards/SelectedProjectsGrid';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSidebarOpen(false);
    };
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  return (
    // ✅ CHANGED: switched from flex layout to a responsive grid on desktop
    // This gives the sidebar its own column on lg+ screens, preventing overlap and keeping it visible.
    <div className="min-h-screen w-full bg-[#F6F8FB] lg:grid lg:grid-cols-[224px_1fr]">
      <Sidebar
        variant="persistent"
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      {/* ✅ CHANGED: removed flex-1 and w-full because we're inside a grid column now.
          min-w-0 stays important to prevent horizontal overflow with wide cards/tables.
      */}
      <div className="min-w-0 flex flex-col bg-[#F3F8FF]">
        <TopBar title="Srushti Madhure" onMenuClick={toggleSidebar} />

        {/* ✅ CHANGED: added bg-white to keep the "white UI" consistent
            (optional, but recommended if bg-background was tinted)
        */}
        <main className="home-typescale flex-1 w-full overflow-x-hidden bg-transparent p-4 sm:p-5">
          {/* Hero Section - Profile Overview */}
          <HeroSection />

          {/* Projects Section - Record View */}
          <section className="mt-3 sm:mt-4">
            <div className="system-module min-w-0 overflow-hidden">
              <div className="system-module-header">
                <div className="flex items-center gap-1.5">
                  <h2 className="system-module-label">
                    Projects
                  </h2>
                </div>
              </div>
              <div className="system-module-content px-4 sm:px-5">
                <SelectedProjectsGrid />
              </div>
              <div className="h-10 border-t border-slate-200 bg-white" />
            </div>
          </section>

          {/* ECG Connect Strip */}
          <section className="mt-4 sm:mt-5">
            <a
              href="mailto:srushtisunilmadhure@gmail.com"
              className="group relative block h-16 overflow-hidden rounded-md border border-slate-800 bg-[#0B1510] [--ecg-speed:4.6s] hover:[--ecg-speed:2.6s]"
              aria-label="Let's connect"
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
                  Let’s connect
                </span>
              </div>
            </a>
          </section>

        </main>

      </div>
    </div>
  );
};

export default Index;
