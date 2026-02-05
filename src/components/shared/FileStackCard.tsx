import { Link } from 'react-router-dom';

type TabColor = 'mint' | 'sky' | 'amber' | 'lavender';

type FileStackCardProps = {
  title: string;
  subtitle?: string;
  description?: string;
  icon?: React.ReactNode;
  href?: string;
  tabColor?: TabColor;
  children?: React.ReactNode;
};

const tabColorMap: Record<TabColor, string> = {
  mint: 'bg-emerald-200',
  sky: 'bg-sky-200',
  amber: 'bg-amber-200',
  lavender: 'bg-indigo-200',
};

export function FileStackCard({
  title,
  subtitle,
  description,
  icon,
  href,
  tabColor = 'sky',
  children,
}: FileStackCardProps) {
  const accentClass = tabColorMap[tabColor];
  const Wrapper: React.ElementType = href ? Link : 'div';
  const wrapperProps = href ? { to: href } : {};

  return (
    <Wrapper {...wrapperProps} className="block">
      <div className="relative overflow-visible">
        <div
          className="absolute inset-0 translate-x-4 translate-y-4 rounded-md border border-[#dcd4c7] bg-[#f9f4eb] opacity-70 -z-20"
          aria-hidden
        />
        <div
          className="absolute inset-0 translate-x-2 translate-y-2 rounded-md border border-[#e2dacd] bg-[#fbf6ef] opacity-80 -z-10"
          aria-hidden
        />

        <div className="relative rounded-md border border-[#cfc7b8] bg-[#F6F1E8] shadow-[0_4px_10px_rgba(15,23,42,0.08)] min-h-[200px] sm:min-h-[220px] flex flex-col">
          <div className="absolute left-6 top-0 z-10 -translate-y-1/2" aria-hidden>
            <div className="relative">
              <div className="h-7 w-32 rounded-t-md border border-[#D8CFC1] bg-[#FFFDF7] shadow-[0_2px_6px_rgba(15,23,42,0.12)]" />
              <div className="absolute right-0 top-0 h-7 w-8 bg-[#F6F1E8]" />
              <div className={`absolute left-3 top-2 h-2.5 w-12 rounded-sm ${accentClass}`} />
            </div>
          </div>

          <div className="p-5 pt-7 flex-1 flex flex-col">
            <div className="flex items-start gap-3">
              {icon ? (
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
                  {icon}
                </div>
              ) : null}
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                {subtitle ? (
                  <p className="mt-1 text-sm text-slate-700">{subtitle}</p>
                ) : null}
              </div>
              {href ? (
                <span className="shrink-0 inline-flex items-center gap-1 rounded-md border border-[#E6D8C6] bg-[#FFF8EC] px-2.5 py-1 text-xs text-slate-700">
                  View Details <span aria-hidden>→</span>
                </span>
              ) : null}
            </div>
            {description ? (
              <div className="mt-4 flex-1 rounded-md border border-slate-200/70 bg-white p-4">
                <div className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                  Project Description
                </div>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  {description}
                </p>
              </div>
            ) : null}
            {children ? <div className="mt-4">{children}</div> : null}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
