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
    variant?: "icon";
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
    title: "Gimme Da Loot",
    description:
      "Web app for organizing loot for FFXIV statics. My raid leader had a nice spreadsheet so I figured I'd take a stab at making it a little more polished.",
    tags: ["React", "Vercel", "JSON"],
    status: "WIP",
    emphasis: "Web App",
    media: {
      kind: "image",
      src: "/media/projects/gimme-da-loot-icon.png",
      alt: "Gimme Da Loot treasure chest app icon",
      variant: "icon",
    },
    href: "https://gimmedaloot.vercel.app/",
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
