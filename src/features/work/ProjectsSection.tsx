import { Laptop } from "lucide-react";
import { ProjectCard } from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export function ProjectsSection() {
  return (
    <>
      <div className="section-heading work-section-heading">
        <div>
          <Laptop size={20} aria-hidden="true" />
          <h2>Projects</h2>
        </div>
        <p>Non-work related things that probably belong on this page</p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </>
  );
}
