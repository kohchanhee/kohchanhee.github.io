import { useEffect, useRef, useState } from "react";

export function LandingNote() {
  const [isMeteorActive, setIsMeteorActive] = useState(false);
  const meteorTimer = useRef<number | null>(null);

  const triggerMeteor = () => {
    if (meteorTimer.current !== null) {
      window.clearTimeout(meteorTimer.current);
    }

    setIsMeteorActive(false);

    window.requestAnimationFrame(() => {
      setIsMeteorActive(true);
      meteorTimer.current = window.setTimeout(() => {
        setIsMeteorActive(false);
        meteorTimer.current = null;
      }, 950);
    });
  };

  useEffect(() => {
    return () => {
      if (meteorTimer.current !== null) {
        window.clearTimeout(meteorTimer.current);
      }
    };
  }, []);

  return (
    <div className="landing-note">
      <p>
        Seems like a good idea to have portfolio so here it is. The important
        information about me is that I like penguins and Final Fantasy XIV, feel
        free to explore to learn about the less important stuff.
      </p>
      <button
        aria-label="Play meteor easter egg"
        className="landing-emblem"
        data-active={isMeteorActive}
        onClick={triggerMeteor}
        type="button"
      >
        <img
          aria-hidden="true"
          className="meteor-image"
          src="/ffxiv.png"
          alt=""
        />
        <img
          aria-hidden="true"
          className="meteor-cameo"
          src="/penguin.png"
          alt=""
        />
        <span className="meteor-ripple" />
        <span className="meteor-spark spark-home" />
        <span className="meteor-spark spark-work" />
        <span className="meteor-spark spark-fun" />
      </button>
    </div>
  );
}
