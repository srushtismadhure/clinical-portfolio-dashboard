import React, { useRef, useState } from "react";

type PinnedVideoCardProps = {
  title?: string;
  src: string;
  tileMode?: boolean;
};

export function PinnedVideoCard({ title = "Pinned video", src, tileMode = false }: PinnedVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const resolvedSrc = src.startsWith("http")
    ? src
    : `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  return (
    <article
      className={
        tileMode
          ? "w-full overflow-hidden rounded-md border border-slate-200 bg-white shadow-[0_2px_6px_rgba(15,23,42,0.08)] relative h-auto"
          : "rounded-md border bg-white overflow-hidden h-auto"
      }
    >
      {!tileMode && (
        <header className="px-3 py-2 border-b bg-slate-50 text-xs font-medium text-slate-600">
          {title}
        </header>
      )}
      <div className={tileMode ? "relative w-full bg-slate-100 overflow-hidden" : "relative bg-slate-100 h-auto overflow-hidden"}>
        <video
          ref={videoRef}
          src={resolvedSrc}
          preload="metadata"
          playsInline
          autoPlay
          muted
          loop
          className={tileMode ? "w-full h-auto max-h-[200px] sm:max-h-[220px] object-cover origin-center rotate-[360deg] rounded-xl" : "w-full h-auto object-cover origin-center rotate-[360deg] rounded-xl"}
          onPlay={handlePlay}
          onPause={handlePause}
          controls={isPlaying}
        />
        {!isPlaying && (
          <button
            type="button"
            onClick={togglePlay}
            className="absolute inset-0 m-auto h-12 w-12 rounded-full bg-white/90 border border-slate-200 text-slate-700 shadow-sm flex items-center justify-center hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-300"
            aria-label="Play video"
          >
            ▶
          </button>
        )}
        {!tileMode && (
          <button
            type="button"
            onClick={togglePlay}
            className="absolute inset-0"
            aria-label="Toggle video"
          />
        )}
      </div>
    </article>
  );
}
