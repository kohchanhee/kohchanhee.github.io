import { BriefcaseBusiness } from "lucide-react";
import { useState } from "react";
import { experienceItems } from "../../data/work";
import { getNextIndex, getPreviousIndex } from "../../lib/carousel";
import { ExperienceDetail } from "./ExperienceDetail";
import { ExperienceSelector } from "./ExperienceSelector";

export function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState(0);
  const [activeHighlight, setActiveHighlight] = useState(0);
  const selectedExperience = experienceItems[activeExperience];

  const selectExperience = (index: number) => {
    setActiveExperience(index);
    setActiveHighlight(0);
  };

  const showPreviousExperience = () => {
    setActiveExperience((current) => {
      const next = getPreviousIndex(current, experienceItems.length);
      setActiveHighlight(0);
      return next;
    });
  };

  const showNextExperience = () => {
    setActiveExperience((current) => {
      const next = getNextIndex(current, experienceItems.length);
      setActiveHighlight(0);
      return next;
    });
  };

  const showPreviousHighlight = () => {
    setActiveHighlight((current) =>
      getPreviousIndex(current, selectedExperience.highlightGroups.length),
    );
  };

  const showNextHighlight = () => {
    setActiveHighlight((current) =>
      getNextIndex(current, selectedExperience.highlightGroups.length),
    );
  };

  return (
    <section className="experience-section" aria-labelledby="experience-title">
      <div className="experience-rail">
        <div className="experience-heading">
          <BriefcaseBusiness size={20} aria-hidden="true" />
          <h2 id="experience-title">Work Experience</h2>
        </div>

        <ExperienceSelector
          activeExperience={activeExperience}
          experienceItems={experienceItems}
          onSelectExperience={selectExperience}
        />
      </div>

      <ExperienceDetail
        activeHighlight={activeHighlight}
        onNextExperience={showNextExperience}
        onNextHighlight={showNextHighlight}
        onPreviousExperience={showPreviousExperience}
        onPreviousHighlight={showPreviousHighlight}
        onSelectHighlight={setActiveHighlight}
        selectedExperience={selectedExperience}
      />
    </section>
  );
}
