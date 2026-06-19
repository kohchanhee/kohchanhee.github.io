import type { CSSProperties } from "react";
import { clearedFfxivTags, ffxivFeature } from "../../data/fun";

export function FfxivFeaturePanel() {
  return (
    <article className="ffxiv-feature">
      <div className="ffxiv-copy">
        <h3>{ffxivFeature.title}</h3>
        <p>{ffxivFeature.detail}</p>
        <div className="tag-row" aria-label="Final Fantasy XIV tags">
          {ffxivFeature.tags.map((tag) => (
            <span
              className={clearedFfxivTags[tag] ? "tag-cleared" : undefined}
              key={tag}
              style={
                clearedFfxivTags[tag]
                  ? ({ "--tag-glow": clearedFfxivTags[tag] } as CSSProperties)
                  : undefined
              }
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="ffxiv-visual" aria-hidden="true">
        <img src="/media/games/ffxiv.jpg" alt="" />
      </div>
    </article>
  );
}
