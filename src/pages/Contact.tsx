import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/shared/PageHeader';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useMemo } from 'react';

export default function Contact() {
  // Absolute hash URL for FormSubmit redirect (works on localhost + production)
  const nextUrl = useMemo(() => `${window.location.origin}/#/thank-you`, []);

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/srushti-madhure/' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/srushtismadhure' },
    { icon: Mail, label: 'Email', href: 'mailto:srushtisunilmadhure@gmail.com' },
  ];

  return (
    <Layout title="Contact" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}>
      <div className="flex min-h-full flex-col">
        <div className="flex-1">
          <PageHeader
            title="Contact"
            subtitle="Send a message and I’ll get back to you."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl">
            {/* Contact Form */}
            <div className="bg-white border border-[#E3E8EE] rounded-xl shadow-sm p-6">
              <form
                action="https://formsubmit.co/srushtisunilmadhure@gmail.com"
                method="POST"
                className="space-y-4"
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-[#E3E8EE] bg-white px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F]"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-[#E3E8EE] bg-white px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F]"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    name="message"
                    required
                    className="w-full rounded-xl border border-[#E3E8EE] bg-white px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] min-h-[140px]"
                    placeholder="Your message..."
                  />
                </div>

                {/* Hidden fields for FormSubmit */}
                <input type="hidden" name="_subject" value="Portfolio Contact Form" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={nextUrl} />

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E3A5F] hover:bg-[#17324F] text-white px-4 py-2.5 text-sm font-medium shadow-sm transition-colors"
                >
                  Send Message
                </button>
              </form>

              <p className="mt-4 text-sm text-slate-600">
                Prefer email?{' '}
                <a
                  href="mailto:srushtisunilmadhure@gmail.com"
                  className="text-[#1E3A5F] hover:underline"
                >
                  srushtisunilmadhure@gmail.com
                </a>
              </p>
            </div>

            {/* Connect panel */}
            <div className="bg-white border border-[#E3E8EE] rounded-xl shadow-sm p-6 space-y-4">
              <h2 className="text-lg font-semibold text-slate-900">Connect</h2>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#F3F6F9] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#EAF3F7] flex items-center justify-center">
                      <link.icon className="w-5 h-5 text-[#1E3A5F]" />
                    </div>
                    <span className="font-medium text-slate-800 group-hover:text-[#1E3A5F] transition-colors">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Let’s connect strip (ECG/pulse) */}
          <section className="mt-6 w-full">
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
        </div>
      </div>
    </Layout>
  );
}
