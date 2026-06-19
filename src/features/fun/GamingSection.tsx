import { Gamepad2 } from "lucide-react";
import { FfxivFeaturePanel } from "./FfxivFeaturePanel";
import { OtherGamesCarousel } from "./OtherGamesCarousel";

export function GamingSection() {
  return (
    <section className="fun-section gaming-section" aria-labelledby="gaming-title">
      <div className="fun-section-heading">
        <Gamepad2 size={20} aria-hidden="true" />
        <h2 id="gaming-title">Gaming</h2>
      </div>
      <FfxivFeaturePanel />
      <OtherGamesCarousel />
    </section>
  );
}
