import { useState } from "react";
import { GalleryControls } from "../../components/GalleryControls";
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
        <div className="game-carousel">
          <div className="game-carousel-viewport">
            <div
              className="game-carousel-track"
              style={{ "--active-game": activeGame } as CarouselStyle}
            >
              {otherGamingItems.map((item) => (
                <article className="gaming-item game-slide" key={item.title}>
                  <img src={item.image.src} alt={item.image.alt} />
                  <h4>{item.title}</h4>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
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
