export type Project = {
  title: string;
  description: string;
  tags: string[];
  status: "Live" | "WIP" | "Maybe";
  emphasis: string;
  visual?: "site";
  media?: {
    kind: "image" | "video";
    src: string;
    alt: string;
    poster?: string;
  };
  href?: string;
};

export const projects: Project[] = [
  {
    title: "This Site",
    description:
      "I figured Codex might be a good way to finally get the portfolio going and learn React. I have a portfolio now, but I barely learned any React. AI is too powerful.",
    tags: ["Codex", "React", "Frontend"],
    status: "Live",
    emphasis: "Website",
    visual: "site",
  },
  {
    title: "TBD",
    description:
      "Haven't gotten around to any side projects yet.",
    tags: ["Production", "Design", "Operations"],
    status: "WIP",
    emphasis: "???",
  },
  {
    title: "Game?",
    description:
      "Some of my friends want to make a game so maybe I will help out and put it here.",
    tags: ["Unity", "Unreal Engine"],
    status: "Maybe",
    emphasis: "Game",
  },
];
