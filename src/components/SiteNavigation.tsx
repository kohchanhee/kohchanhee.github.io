import { pages } from "../data/navigation";
import type { Page } from "../types";

type SiteNavigationProps = {
  activePage: Page;
};

export function SiteNavigation({ activePage }: SiteNavigationProps) {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <a
        aria-label="Go to home page"
        className="brand-mark"
        href="#/home"
        onClick={() => {
          if (activePage === "home") {
            window.scrollTo({ top: 0, behavior: "instant" });
            document.getElementById("hero-title")?.focus({ preventScroll: true });
          }
        }}
      >
        <img src="/penguin.png" alt="" width={34} height={34} />
      </a>

      <div className="page-tabs">
        {pages.map(({ id, label, iconSrc }) => (
          <a
            aria-current={activePage === id ? "page" : undefined}
            className="tab-button"
            data-page={id}
            key={id}
            href={`#/${id}`}
          >
            <img src={iconSrc} alt="" aria-hidden="true" className="tab-icon" />
            <span className="tab-label">{label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
