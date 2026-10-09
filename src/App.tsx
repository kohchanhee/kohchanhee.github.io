import { useEffect, useRef } from "react";
import { SiteNavigation } from "./components/SiteNavigation";
import { pages } from "./data/navigation";
import { usePageNavigation } from "./hooks/usePageNavigation";
import { FunPage } from "./pages/FunPage";
import { HomePage } from "./pages/HomePage";
import { WorkPage } from "./pages/WorkPage";

function App() {
  const activePage = usePageNavigation();
  const contentRef = useRef<HTMLElement>(null);
  const previousPage = useRef(activePage);

  useEffect(() => {
    const page = pages.find(({ id }) => id === activePage);
    document.title = `${page?.label} | Jon Woodey`;

    if (previousPage.current !== activePage) {
      window.scrollTo({ top: 0, behavior: "instant" });
      contentRef.current?.querySelector("h1")?.focus({ preventScroll: true });
      previousPage.current = activePage;
    }
  }, [activePage]);

  return (
    <div className="site-shell">
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          contentRef.current?.focus();
          contentRef.current?.scrollIntoView({ block: "start", behavior: "instant" });
        }}
      >
        Skip to content
      </a>
      <SiteNavigation activePage={activePage} />

      <main id="main-content" ref={contentRef} tabIndex={-1}>
        {activePage === "home" ? <HomePage /> : null}
        {activePage === "work" ? <WorkPage /> : null}
        {activePage === "fun" ? <FunPage /> : null}
      </main>
    </div>
  );
}

export default App;
