import type { ExperienceItem } from "../../data/work";

type ExperienceSelectorProps = {
  activeExperience: number;
  experienceItems: ExperienceItem[];
  onSelectExperience: (index: number) => void;
};

export function ExperienceSelector({
  activeExperience,
  experienceItems,
  onSelectExperience,
}: ExperienceSelectorProps) {
  return (
    <div className="experience-selector" aria-label="Experience roles">
      {experienceItems.map((item, index) => (
        <button
          aria-pressed={activeExperience === index}
          className="experience-tab"
          key={`${item.role}-${item.place}`}
          onClick={() => onSelectExperience(index)}
          type="button"
        >
          <span className="experience-tab-copy">
            <span>{item.place}</span>
            <strong>{item.role}</strong>
          </span>
          <span
            className="experience-logo"
            data-logo={item.logo.id}
            aria-hidden="true"
          >
            <img src={item.logo.src} alt={item.logo.alt} />
          </span>
        </button>
      ))}
    </div>
  );
}
