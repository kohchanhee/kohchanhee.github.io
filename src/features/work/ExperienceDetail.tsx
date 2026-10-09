import type { Dispatch, SetStateAction } from "react";
import { GalleryControls } from "../../components/GalleryControls";
import { TagRow } from "../../components/TagRow";
import type { ExperienceItem } from "../../data/work";

type ExperienceDetailProps = {
  activeHighlight: number;
  selectedExperience: ExperienceItem;
  onPreviousExperience: () => void;
  onNextExperience: () => void;
  onPreviousHighlight: () => void;
  onNextHighlight: () => void;
  onSelectHighlight: Dispatch<SetStateAction<number>>;
};

export function ExperienceDetail({
  activeHighlight,
  selectedExperience,
  onPreviousExperience,
  onNextExperience,
  onPreviousHighlight,
  onNextHighlight,
  onSelectHighlight,
}: ExperienceDetailProps) {
  const selectedHighlight = selectedExperience.highlightGroups[activeHighlight];

  return (
    <article className="experience-detail">
      <div className="experience-detail-topline">
        <span>{selectedExperience.period}</span>
        <GalleryControls
          ariaLabel="Experience controls"
          className="experience-controls"
          nextLabel="Show next experience"
          onNext={onNextExperience}
          onPrevious={onPreviousExperience}
          previousLabel="Show previous experience"
        />
      </div>

      <h3 className="content-change" key={`role-${selectedExperience.place}`}>
        {selectedExperience.role}
      </h3>
      <p className="experience-place content-change" key={`place-${selectedExperience.place}`}>
        {selectedExperience.place}
      </p>
      <p className="content-change" key={`summary-${selectedExperience.place}`}>
        {selectedExperience.summary}
      </p>

      <div className="highlight-carousel">
        <div className="highlight-tabs" aria-label="Experience highlight groups">
          {selectedExperience.highlightGroups.map((group, index) => (
            <button
              aria-pressed={activeHighlight === index}
              className="highlight-tab"
              key={group.title}
              onClick={() => onSelectHighlight(index)}
              type="button"
            >
              {group.title}
            </button>
          ))}
        </div>

        <div className="highlight-card">
          <div className="highlight-card-topline">
            <span>{selectedHighlight.eyebrow}</span>
            <GalleryControls
              ariaLabel="Highlight group controls"
              className="experience-controls"
              nextLabel="Show next highlight group"
              onNext={onNextHighlight}
              onPrevious={onPreviousHighlight}
              previousLabel="Show previous highlight group"
            />
          </div>
          <h4 className="content-change" key={`title-${selectedExperience.place}-${selectedHighlight.title}`}>
            {selectedHighlight.title}
          </h4>
          <ul className="content-change" key={`bullets-${selectedExperience.place}-${selectedHighlight.title}`}>
            {selectedHighlight.bullets.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>

      <TagRow
        ariaLabel={`${selectedExperience.place} tools`}
        tags={selectedExperience.tools}
      />
    </article>
  );
}
