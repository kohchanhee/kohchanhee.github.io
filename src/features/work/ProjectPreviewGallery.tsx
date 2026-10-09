import { LayoutDashboard, ListChecks, Maximize2, PackageOpen, X } from "lucide-react";
import { useId, useRef, useState } from "react";
import { ResponsiveImage } from "../../components/ResponsiveImage";
import type { ProjectPreview } from "../../data/projects";

const previewIcons = {
  dashboard: LayoutDashboard,
  planner: ListChecks,
  drops: PackageOpen,
};

type ProjectPreviewGalleryProps = { title: string; previews: ProjectPreview[] };

export function ProjectPreviewGallery({ title, previews }: ProjectPreviewGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogTitleId = useId();
  const preview = previews[activeIndex];

  return (
    <div className="project-preview-gallery">
      <div className="project-preview-controls" role="group" aria-label={`${title} views`}>
        {previews.map((item, index) => {
          const Icon = previewIcons[item.id];
          return (
            <button
              type="button"
              className="project-preview-tab"
              key={item.id}
              aria-pressed={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            >
              <Icon size={16} aria-hidden="true" />
              {item.label}
            </button>
          );
        })}
      </div>
      <button
        className="featured-project-preview"
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`Enlarge ${preview.label} preview`}
        title={`Enlarge ${preview.label} preview`}
      >
        <ResponsiveImage
          className="content-change"
          key={preview.src}
          src={preview.src}
          alt={preview.alt}
          sizes="(max-width: 860px) calc(100vw - 32px), 700px"
        />
        <span className="project-preview-zoom" aria-hidden="true">
          <Maximize2 size={18} />
        </span>
      </button>
      <span className="sr-only" aria-live="polite">
        {preview.label} preview selected
      </span>
      <dialog
        className="project-preview-dialog"
        ref={dialogRef}
        aria-labelledby={dialogTitleId}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <div className="project-preview-dialog-heading">
          <h4 id={dialogTitleId}>{title}: {preview.label}</h4>
          <button
            type="button"
            className="gallery-button"
            aria-label="Close preview"
            title="Close preview"
            onClick={() => dialogRef.current?.close()}
            autoFocus
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <ResponsiveImage src={preview.src} alt={preview.alt} sizes="min(1120px, 95vw)" />
      </dialog>
    </div>
  );
}
