import type { MouseEvent } from "react";
import { pages } from "../data/navigation";
import type { Page } from "../types";

type SiteNavigationProps = {
  activePage: Page;
  onPageChange: (page: Page) => void;
};

export function SiteNavigation({
  activePage,
  onPageChange,
}: SiteNavigationProps) {
  const goHome = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onPageChange("home");

    window.requestAnimationFrame(() => {
      document.getElementById("home-page")?.scrollIntoView({ block: "start" });
    });
  };

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <a
        aria-label="Go to home page"
        className="brand-mark"
        href="#home-page"
        onClick={goHome}
      >
        <img src="/penguin.png" alt="Home" />
      </a>

      <div className="page-tabs" role="tablist" aria-label="Portfolio pages">
        {pages.map(({ id, label, iconSrc }) => (
          <button
            aria-controls={`${id}-page`}
            aria-selected={activePage === id}
            className="tab-button"
            data-page={id}
            key={id}
            onClick={() => onPageChange(id)}
            role="tab"
            type="button"
          >
            <img src={iconSrc} alt="" aria-hidden="true" className="tab-icon" />
            <span className="tab-label">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
