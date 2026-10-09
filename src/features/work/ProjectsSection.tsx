import { Laptop } from "lucide-react";
import { ProjectCard } from "../../components/ProjectCard";
import { projects } from "../../data/projects";
import { FeaturedProject } from "./FeaturedProject";

const featuredProject = projects.find((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

export function ProjectsSection() {
  return (
    <section className="projects-section" aria-labelledby="projects-title">
      <div className="section-heading work-section-heading">
        <div>
          <Laptop size={20} aria-hidden="true" />
          <h2 id="projects-title">Projects</h2>
        </div>
      </div>

      {featuredProject ? <FeaturedProject project={featuredProject} /> : null}
      <div className="project-grid">
        {otherProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
