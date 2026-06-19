import { Sparkles } from "lucide-react";
import { danceFeature } from "../../data/fun";

export function DanceSection() {
  return (
    <section className="fun-section dance-section" aria-labelledby="dance-title">
      <div className="fun-section-heading">
        <Sparkles size={20} aria-hidden="true" />
        <h2 id="dance-title">Dance</h2>
      </div>
      <div className="dance-feature">
        <div className="dance-copy">
          {danceFeature.detail.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {danceFeature.video ? (
          <video
            controls
            playsInline
            poster={danceFeature.video.poster}
            preload="metadata"
          >
            <source src={danceFeature.video.src} />
          </video>
        ) : (
          <div className="dance-video-placeholder" aria-hidden="true">
            <span />
          </div>
        )}
      </div>
    </section>
  );
}
