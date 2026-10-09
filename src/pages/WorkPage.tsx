import { ExperienceSection } from "../features/work/ExperienceSection";
import { ProjectsSection } from "../features/work/ProjectsSection";
import { WorkHero } from "../features/work/WorkHero";

export function WorkPage() {
  return (
    <section
      aria-labelledby="work-title"
      className="page-panel work-page active-page"
      id="work-page"
    >
      <WorkHero />
      <ExperienceSection />
      <ProjectsSection />
    </section>
  );
}
