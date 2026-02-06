import waaiLogo from '/images/WAAI.png';

export default function VolunteerStrip() {
  return (
    <div className="flex items-center gap-4 px-6 py-2 border-t border-slate-200 bg-white">
      <img
        src={waaiLogo}
        alt="Women Applying AI"
        className="h-6 w-auto opacity-80"
      />

      <span className="text-[11px] uppercase tracking-[0.16em] text-slate-600 font-semibold">
        Volunteer Experience
      </span>

      <div className="ml-auto flex gap-2">
        <span className="px-3 py-1 text-sm font-medium rounded-md bg-slate-100 border border-slate-200 text-slate-700">
          AI Project Manager
        </span>
        <span className="px-3 py-1 text-sm font-medium rounded-md bg-slate-100 border border-slate-200 text-slate-700">
          AI Content Curation
        </span>
      </div>
    </div>
  );
}
