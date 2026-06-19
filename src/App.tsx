import { useState } from "react";
import { SiteNavigation } from "./components/SiteNavigation";
import { FunPage } from "./pages/FunPage";
import { HomePage } from "./pages/HomePage";
import { WorkPage } from "./pages/WorkPage";
import type { Page } from "./types";

function App() {
  const [activePage, setActivePage] = useState<Page>("home");

  return (
    <main className="site-shell">
      <SiteNavigation activePage={activePage} onPageChange={setActivePage} />

      {activePage === "home" ? <HomePage /> : null}
      {activePage === "work" ? <WorkPage /> : null}
      {activePage === "fun" ? <FunPage /> : null}
    </main>
  );
}

export default App;
