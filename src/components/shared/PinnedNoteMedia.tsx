import React from 'react';
import { Play } from 'lucide-react';

type NoteImage = {
  src: string;
  alt: string;
  caption?: string;
};

type NoteVideo = {
  src: string;
  poster?: string;
  title?: string;
};

type PinnedNoteMediaProps = {
  title?: string;
  noteText?: string;
  images?: NoteImage[];
  video?: NoteVideo;
  layoutMode?: 'grid' | 'strip';
};

function isEmbedUrl(url: string) {
  return /youtube\.com|youtu\.be|vimeo\.com/.test(url);
}

export function PinnedNoteMedia({
  title = 'Pinned note',
  noteText = 'Outside work, I track habits, sketch ideas, and experiment with small systems — personal and professional.',
  images = [],
  video,
  layoutMode = 'grid',
}: PinnedNoteMediaProps) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const mediaItems = video ? [{ type: 'video' as const }, ...images.map((img) => ({ type: 'image' as const, img }))] : images.map((img) => ({ type: 'image' as const, img }));

  const gridClass =
    layoutMode === 'strip'
      ? 'grid grid-cols-1 sm:grid-cols-3 gap-3'
      : 'grid grid-cols-1 sm:grid-cols-2 gap-3';

  return (
    <div className="relative rounded-lg border border-[#E6D8C6] bg-[#FFF8EC] p-4 shadow-[0_4px_10px_rgba(15,23,42,0.06)]">
      {/* Pushpin */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
        <div className="h-3 w-3 rounded-full bg-slate-400/70 shadow-[0_2px_4px_rgba(0,0,0,0.18)]" />
        <div className="mx-auto h-2 w-0.5 bg-slate-400/60" />
      </div>

      <div className="flex items-center justify-between pb-2">
        <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
      </div>
      <div className="border-t border-slate-200/70 pt-3">
        <div className={gridClass}>
          {mediaItems.slice(0, 4).map((item, idx) => {
            if (item.type === 'video' && video) {
              return (
                <button
                  key={`video-${idx}`}
                  type="button"
                  onClick={() => setOpen(true)}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-slate-200 bg-white shadow-[0_2px_6px_rgba(15,23,42,0.08)]"
                  aria-label={video.title || 'Play pinned note video'}
                >
                  {video.poster ? (
                    <img src={video.poster} alt={video.title || 'Pinned note video'} className="h-full w-full object-cover" />
                  ) : (
                    <div className="h-full w-full bg-slate-100" />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm">
                      <Play className="h-4 w-4 text-slate-700" />
                    </span>
                  </div>
                </button>
              );
            }

            if (item.type === 'image') {
              return (
                <div
                  key={`img-${idx}`}
                  className="aspect-[4/3] w-full overflow-hidden rounded-md border border-slate-200 bg-white shadow-[0_2px_6px_rgba(15,23,42,0.08)]"
                >
                  {item.img?.src ? (
                    <img src={item.img.src} alt={item.img.alt} className="h-full w-full object-cover" />
                  ) : (
                    <div className="h-full w-full bg-slate-100" />
                  )}
                </div>
              );
            }

            return null;
          })}
        </div>

        {noteText ? (
          <p className="mt-3 text-xs text-slate-500 italic">{noteText}</p>
        ) : null}
      </div>

      {open && video && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl rounded-lg bg-white p-4 shadow-lg">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 text-sm text-slate-500 hover:text-slate-800"
              aria-label="Close video"
            >
              ✕
            </button>
            {isEmbedUrl(video.src) ? (
              <iframe
                title={video.title || 'Pinned note video'}
                src={video.src}
                className="aspect-video w-full rounded-md border border-slate-200"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                controls
                className="w-full rounded-md border border-slate-200"
                poster={video.poster}
                aria-label={video.title || 'Pinned note video'}
              >
                <source src={video.src} />
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
