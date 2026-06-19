import { ChevronLeft, ChevronRight } from "lucide-react";

type GalleryDot = {
  key: string;
  label: string;
};

type GalleryControlsProps = {
  ariaLabel: string;
  className: string;
  previousLabel: string;
  nextLabel: string;
  onPrevious: () => void;
  onNext: () => void;
  dots?: GalleryDot[];
  activeIndex?: number;
  onSelectDot?: (index: number) => void;
};

export function GalleryControls({
  ariaLabel,
  className,
  previousLabel,
  nextLabel,
  onPrevious,
  onNext,
  dots,
  activeIndex,
  onSelectDot,
}: GalleryControlsProps) {
  return (
    <div className={className} aria-label={ariaLabel}>
      <button
        aria-label={previousLabel}
        className="gallery-button"
        onClick={onPrevious}
        type="button"
      >
        <ChevronLeft size={18} aria-hidden="true" />
      </button>

      {dots ? (
        <div className="gallery-dots" aria-label={`${ariaLabel} slides`}>
          {dots.map((dot, index) => (
            <button
              aria-label={dot.label}
              aria-pressed={activeIndex === index}
              className="gallery-dot"
              key={dot.key}
              onClick={() => onSelectDot?.(index)}
              type="button"
            />
          ))}
        </div>
      ) : null}

      <button
        aria-label={nextLabel}
        className="gallery-button"
        onClick={onNext}
        type="button"
      >
        <ChevronRight size={18} aria-hidden="true" />
      </button>
    </div>
  );
}
