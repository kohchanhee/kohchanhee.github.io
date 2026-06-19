import { ExperienceSection } from "../features/work/ExperienceSection";
import { ProjectsSection } from "../features/work/ProjectsSection";
import { WorkHero } from "../features/work/WorkHero";
import { WorkLanes } from "../features/work/WorkLanes";

export function WorkPage() {
  return (
    <section
      aria-labelledby="work-title"
      className="page-panel work-page active-page"
      id="work-page"
      role="tabpanel"
    >
      <WorkHero />
      <WorkLanes />
      <ExperienceSection />
      <ProjectsSection />
    </section>
  );
}
