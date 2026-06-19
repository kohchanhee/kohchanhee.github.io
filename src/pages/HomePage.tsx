import { HomeHero } from "../features/home/HomeHero";
import { LandingNote } from "../features/home/LandingNote";

export function HomePage() {
  return (
    <section className="page-panel active-page" id="home-page" role="tabpanel">
      <HomeHero />
      <LandingNote />
    </section>
  );
}
