import { DanceSection } from "../features/fun/DanceSection";
import { FunHero } from "../features/fun/FunHero";
import { GamingSection } from "../features/fun/GamingSection";
import { MusicSection } from "../features/fun/MusicSection";

export function FunPage() {
  return (
    <section
      aria-labelledby="fun-title"
      className="page-panel fun-page active-page"
      id="fun-page"
      role="tabpanel"
    >
      <FunHero />
      <GamingSection />
      <DanceSection />
      <MusicSection />
    </section>
  );
}
