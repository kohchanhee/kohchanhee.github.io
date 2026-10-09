export type ProjectPreview = {
  id: "dashboard" | "planner" | "drops";
  label: string;
  src: string;
  alt: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  status: "Live" | "WIP" | "Maybe";
  emphasis: string;
  visual?: "site";
  featured?: boolean;
  previews?: ProjectPreview[];
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
      "This is my portfolio. There are many like it, but this one is mine. Not the most flashy, but fun and practical.",
    tags: ["Codex", "React", "Frontend"],
    status: "Live",
    emphasis: "Website",
    visual: "site",
  },
  {
    title: "Gimme Da Loot",
    featured: true,
    previews: [
      {
        id: "dashboard",
        label: "Dashboard",
        src: "/media/projects/gimme-da-loot-dashboard.jpg",
        alt: "Gimme Da Loot dashboard showing an eight-player raid's loot, item levels, and remaining gear needs",
      },
      {
        id: "planner",
        label: "Gear Planner",
        src: "/media/projects/gimme-da-loot-planner.jpg",
        alt: "Gimme Da Loot gear planner with each player's current gear and best-in-slot selections",
      },
      {
        id: "drops",
        label: "Loot Drops",
        src: "/media/projects/gimme-da-loot-drops.jpg",
        alt: "Gimme Da Loot weekly loot log with a sample earring assigned to Player 1",
      },
    ],
    description:
      "Web app for organizing loot for FFXIV statics. My raid leader had a nice spreadsheet so I figured I'd take a stab at making it a little more polished.",
    tags: ["React", "JSON", "Vercel", "Supabase"],
    status: "Live",
    emphasis: "Web App",
    media: {
      kind: "image",
      src: "/media/projects/gimme-da-loot-icon.png",
      alt: "Gimme Da Loot coffer app icon",
      variant: "icon",
    },
    href: "https://gimmedaloot.app/",
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
