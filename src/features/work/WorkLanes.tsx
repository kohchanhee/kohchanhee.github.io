import { workLanes } from "../../data/work";

export function WorkLanes() {
  return (
    <div className="work-lanes" aria-label="Work focus areas">
      {workLanes.map((lane) => (
        <article className="work-lane" key={lane.title}>
          <h3>{lane.title}</h3>
          <p>{lane.description}</p>
          <img src={lane.image.src} alt={lane.image.alt} />
        </article>
      ))}
    </div>
  );
}
