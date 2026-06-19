import { Github } from "lucide-react";
import { PortraitGallery } from "./PortraitGallery";

export function HomeHero() {
  return (
    <div className="hero" aria-labelledby="hero-title">
      <PortraitGallery />

      <div className="hero-copy">
        <h1 id="hero-title">Jon Woodey</h1>
        <p className="hero-lede">Just some guy, really.</p>
        <div className="contact-note" aria-label="Contact note">
          <Github size={18} aria-hidden="true" />
          <p>
            I'd leave my contact information here, but I'm not really looking
            for more work at the moment. I also don't have any social media.
          </p>
        </div>
      </div>
    </div>
  );
}
