import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";
import { TagRow } from "./TagRow";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const cardContent = (
    <>
      {project.media ? (
        <div
          className="project-media"
          data-variant={project.media.variant}
        >
          {project.media.kind === "image" ? (
            <img src={project.media.src} alt={project.media.alt} />
          ) : (
            <video
              aria-label={project.media.alt}
              controls
              muted
              playsInline
              poster={project.media.poster}
            >
              <source src={project.media.src} />
            </video>
          )}
        </div>
      ) : project.visual === "site" ? (
        <div className="project-visual project-mascot" aria-hidden="true">
          <div className="project-meteor-mark">
            <img className="project-meteor" src="/ffxiv.png" alt="" />
            <img className="project-penguin" src="/penguin.png" alt="" />
          </div>
        </div>
      ) : (
        <div className="project-visual" aria-hidden="true">
          <span className="project-monogram">
            {project.title
              .split(" ")
              .map((word) => word[0])
              .join("")}
          </span>
        </div>
      )}

      <div className="card-topline">
        <span>{project.emphasis}</span>
        <span>{project.status}</span>
      </div>
      <div className="project-title-row">
        <h3>{project.title}</h3>
        {project.href ? <ArrowUpRight size={18} aria-hidden="true" /> : null}
      </div>
      <p>{project.description}</p>
      <TagRow ariaLabel={`${project.title} tags`} tags={project.tags} />
    </>
  );

  if (project.href) {
    return (
      <a
        aria-label={`Open ${project.title}`}
        className="project-card project-card-link"
        href={project.href}
        rel="noreferrer"
        target="_blank"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <article className="project-card">
      {cardContent}
    </article>
  );
}
