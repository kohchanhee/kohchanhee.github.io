import { useState } from "react";
import { GalleryControls } from "../../components/GalleryControls";
import { ResponsiveImage } from "../../components/ResponsiveImage";
import { otherGamingItems } from "../../data/fun";
import { getNextIndex, getPreviousIndex } from "../../lib/carousel";
import type { CarouselStyle } from "../../types";

export function OtherGamesCarousel() {
  const [activeGame, setActiveGame] = useState(0);

  const showPreviousGame = () => {
    setActiveGame((current) =>
      getPreviousIndex(current, otherGamingItems.length),
    );
  };

  const showNextGame = () => {
    setActiveGame((current) => getNextIndex(current, otherGamingItems.length));
  };

  return (
    <div className="other-games">
      <h3>Other Games</h3>
      <div className="other-games-layout">
        <div className="game-carousel" role="region" aria-label="Other games" aria-roledescription="carousel">
          <div className="game-carousel-viewport">
            <div
              className="game-carousel-track"
              style={{ "--active-game": activeGame } as CarouselStyle}
            >
              {otherGamingItems.map((item, index) => (
                <article className="gaming-item game-slide" key={item.title} aria-hidden={activeGame !== index}>
                  <ResponsiveImage src={item.image.src} alt={item.image.alt} sizes="400px" />
                  <h4>{item.title}</h4>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
          <p className="sr-only" aria-live="polite" aria-atomic="true">
            {otherGamingItems[activeGame].title}, game {activeGame + 1} of {otherGamingItems.length}
          </p>
          <GalleryControls
            activeIndex={activeGame}
            ariaLabel="Other games controls"
            className="game-carousel-controls"
            dots={otherGamingItems.map((item) => ({
              key: item.title,
              label: `Show ${item.title}`,
            }))}
            nextLabel="Show next game"
            onNext={showNextGame}
            onPrevious={showPreviousGame}
            onSelectDot={setActiveGame}
            previousLabel="Show previous game"
          />
        </div>
        <div className="other-games-copy">
          <p>
            Despite all the hours in FFXIV, I do play other stuff too. Out of
            all my hobbies, gaming is my favorite so I gotta spread the love a
            little. I'm sure some great entries will be left out, but here's a
            few others I've really enjoyed over the years.
          </p>
        </div>
      </div>
    </div>
  );
}
