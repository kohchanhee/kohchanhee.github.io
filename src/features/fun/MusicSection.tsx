import { Music2 } from "lucide-react";
import { musicTracks } from "../../data/fun";

export function MusicSection() {
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
          <article className="music-track" key={track.title}>
            <div>
              <h4>{track.title}</h4>
              <p>{track.detail}</p>
            </div>
            <audio controls preload="metadata" src={track.src} />
          </article>
        ))}
      </div>
    </section>
  );
}
