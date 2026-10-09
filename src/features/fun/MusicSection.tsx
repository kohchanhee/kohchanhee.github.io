import { Music2 } from "lucide-react";
import { lazy, Suspense, useRef } from "react";
import { musicTracks } from "../../data/fun";

const MusicPlayer = lazy(() =>
  import("./MusicPlayer").then((module) => ({ default: module.MusicPlayer })),
);

export function MusicSection() {
  const activeAudio = useRef<HTMLAudioElement | null>(null);
  const handlePlay = (audio: HTMLAudioElement) => {
    if (activeAudio.current !== audio) activeAudio.current?.pause();
    activeAudio.current = audio;
  };

  return (
    <section className="fun-section music-section" aria-labelledby="music-title">
      <div className="fun-section-heading">
        <Music2 size={20} aria-hidden="true" />
        <h2 id="music-title">Music</h2>
      </div>
      <div className="music-copy">
        <p>
          I'm not a serious producer, just thought of trying my hand at it and it
          turns out it's pretty fun. There's some great tutorials to get started
          with and you can get something halfway decent sounding without too much
          hassle.
        </p>
      </div>
      <div className="music-list">
        {musicTracks.map((track) => (
          <article className="music-track" key={track.src}>
            <div>
              <h3>{track.title}</h3>
              <p>{track.detail}</p>
            </div>
            <Suspense
              fallback={
                <div className="music-player-loading" aria-label={`Loading ${track.title} player`} />
              }
            >
              <MusicPlayer track={track} onPlay={handlePlay} />
            </Suspense>
          </article>
        ))}
      </div>
    </section>
  );
}
