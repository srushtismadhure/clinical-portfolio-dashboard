import React from 'react';

export function SystemAccessBadge() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] min-w-0">
      {/* Lanyard strap */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-28 h-28 w-9 rounded-b-md bg-slate-200 shadow-sm" />

      {/* Clip connector */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-8 h-10 w-6 rounded-md bg-slate-300 border border-slate-400 shadow-sm" />

      {/* Holder lip with slot holes */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-[92%] h-8 rounded-t-xl bg-white border border-slate-200 shadow-sm">
        <div className="absolute left-6 top-3 h-2 w-5 rounded-full bg-slate-200" />
        <div className="absolute right-6 top-3 h-2 w-5 rounded-full bg-slate-200" />
      </div>

      {/* Plastic holder frame */}
      <div className="pt-10 rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        {/* Header band */}
        <div className="h-14 bg-[#1E3A5F] px-5 flex items-center text-white text-lg font-semibold tracking-wide">
          HEALTHCARE ANALYTICS
        </div>

        {/* Body */}
        <div className="px-5 py-4 flex items-start gap-4">
          <div className="h-16 w-16 rounded-md border border-slate-200 bg-slate-100 overflow-hidden shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}images/profile.png`}
              alt="Staff photo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0 flex-1 space-y-1">
            <div className="text-[18px] font-semibold text-slate-900 leading-tight truncate">
              Srushti S. Madhure
            </div>
            <div className="text-[13px] text-slate-700 leading-snug">
              Clinical Data &amp; Analytics Engineer
            </div>
            <div className="text-[12px] text-slate-500 leading-snug">
              Health Informatics • Data Engineering
            </div>
          </div>
        </div>

        {/* Metadata */}
        <div className="border-t border-slate-100 px-5 py-3 grid grid-cols-2 gap-x-6 gap-y-2">
          <div className="space-y-0.5">
            <div className="text-[10px] uppercase tracking-wider text-slate-500">ID</div>
            <div className="text-[12px] font-mono font-medium text-slate-900">HA-24701</div>
          </div>
          <div className="space-y-0.5">
            <div className="text-[10px] uppercase tracking-wider text-slate-500">Function</div>
            <div className="text-[12px] font-medium text-slate-900">Analytics Engineering</div>
          </div>
          <div className="space-y-0.5">
            <div className="text-[10px] uppercase tracking-wider text-slate-500">Service Line</div>
            <div className="text-[12px] font-medium text-slate-900">Health Informatics</div>
          </div>
        </div>

        {/* Barcode */}
        <div className="px-5 pb-4 pt-2 flex flex-col items-end gap-1">
          <div className="h-5 w-36 bg-[repeating-linear-gradient(90deg,#0f172a_0px,#0f172a_2px,transparent_2px,transparent_6px)] opacity-50" />
          <div className="text-[11px] text-slate-500">HA-24701</div>
        </div>
      </div>
    </div>
  );
}
