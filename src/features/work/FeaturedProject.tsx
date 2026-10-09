import { ArrowUpRight } from "lucide-react";
import { ResponsiveImage } from "../../components/ResponsiveImage";
import { TagRow } from "../../components/TagRow";
import type { Project } from "../../data/projects";
import { ProjectPreviewGallery } from "./ProjectPreviewGallery";

type FeaturedProjectProps = { project: Project };

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article className="featured-project" aria-labelledby="featured-project-title">
      <div className="featured-project-copy">
        <div className="card-topline">
          <span className="featured-project-kind">
            {project.media?.variant === "icon" ? (
              <ResponsiveImage src={project.media.src} alt="" sizes="32px" />
            ) : null}
            {project.emphasis}
          </span>
          <span>{project.status}</span>
        </div>
        <h3 id="featured-project-title">{project.title}</h3>
        <p>{project.description}</p>
        <TagRow ariaLabel={`${project.title} tags`} tags={project.tags} />
        {project.href ? (
          <a
            className="project-launch"
            href={project.href}
            target="_blank"
            rel="noreferrer"
          >
            View project <ArrowUpRight size={18} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : null}
      </div>
      {project.previews?.length ? (
        <ProjectPreviewGallery title={project.title} previews={project.previews} />
      ) : null}
    </article>
  );
}
