export type WorkLane = {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

export type ExperienceHighlight = {
  title: string;
  eyebrow: string;
  bullets: string[];
};

export type ExperienceItem = {
  role: string;
  place: string;
  period: string;
  logo: {
    id: string;
    src: string;
    alt: string;
  };
  summary: string;
  highlightGroups: ExperienceHighlight[];
  tools: string[];
};

export const workLanes: WorkLane[] = [
  {
    title: "Agreeable",
    description:
      "I will do what you tell me to, unless I can't. Everyone talks about being a good leader, but it's important to remember good leaders need good followers.",
    image: {
      src: "/media/work-lanes/agreeable.jpg",
      alt: "Decorative image for agreeable work style",
    },
  },
  {
    title: "Versatile",
    description:
      "I have approximate knowledge of many things. A jack of all trades if you will. Maybe more like a 10 or a 9 of all trades. Still a great card in blackjack.",
    image: {
      src: "/media/work-lanes/versatile.jpg",
      alt: "Decorative image for versatile work style",
    },
  },
  {
    title: "Navy SEAL",
    description:
      'I\'m not a Navy SEAL, but I like one of their mottos: "Slow is smooth, smooth is fast." That does not always sit well with C-Suite and shareholders though.',
    image: {
      src: "/media/work-lanes/navyseal.jpg",
      alt: "Decorative image for slow is smooth work style",
    },
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    role: "Production Developer",
    place: "Game Informer",
    period: "2021 - Present",
    logo: {
      id: "gi",
      src: "/media/logos/gi.png",
      alt: "",
    },
    summary:
      "You may be wondering what Production Developer means. I'm not entirely sure either, but I did a lot of stuff.",
    highlightGroups: [
      {
        title: "Web",
        eyebrow: "Drupal + site ops",
        bullets: [
          "Built and maintained Drupal-based web features and site workflows",
          "Coordinated website administration and compliance work",
          "Supported design, editorial, and marketing teams at different points in the site workflow",
        ],
      },
      {
        title: "Magazine",
        eyebrow: "Digital + Print production",
        bullets: [
          "Created digital magazine editions for the mobile application and web",
          "Designed assets for print, digital magazine, social media, and web use",
          "Worked primarily in Photoshop and InDesign for production design support",
        ],
      },
      {
        title: "Marketing",
        eyebrow: "Operations + analysis",
        bullets: [
          "Supported marketing operations through Salesforce, Iterable, Mailerlite, and SendGrid",
          "Created and scheduled social media posts for various content",
          "Analyzed website and social media data",
          "Collaborated with parent-company teams to shape strategies around different visions, needs, and means",
        ],
      },
      {
        title: "Editorial",
        eyebrow: "Writing",
        bullets: [
          "Flew to press events for Game Informer coverage",
          "Wrote articles for the magazine and website",
          "Met Yoshi-P",
        ],
      },
    ],
    tools: [
      "Drupal",
      "HTML",
      "SASS",
      "CSS",
      "Javascript",
      "PHP",
      "Docker",
      "Git",
      "Salesforce",
      "Iterable",
      "GA4",
      "Adobe Suite",
      "Sprout",
    ],
  },
  {
    role: "QA Functional Tester",
    place: "Activision Blizzard",
    period: "2020 - 2021",
    logo: {
      id: "activision-blizzard",
      src: "/media/logos/ab.png",
      alt: "",
    },
    summary: "I played a lot of Call of Duty. Like, a lot of Call of Duty.",
    highlightGroups: [
      {
        title: "Testing",
        eyebrow: "Regression",
        bullets: [
          "Regressed issues and performed requests from upstream QA and developers.",
          "Balanced focused individual testing with goal-oriented team work.",
        ],
      },
      {
        title: "Workflow",
        eyebrow: "QA systems",
        bullets: [
          "Worked in Jira and DevSuite to keep testing workflows moving clearly.",
          "Tracked work through structured QA processes and handoffs.",
        ],
      },
    ],
    tools: ["Jira", "DevSuite", "QA", "Regression Testing"],
  },
  {
    role: "Frontend Web Engineer / Database Technician",
    place: "University of Minnesota Disability Resource Center",
    period: "2015 - 2018",
    logo: {
      id: "umn",
      src: "/media/logos/umn.png",
      alt: "",
    },
    summary:
      "College gig that was very insightful to web development and accessibilitly.",
    highlightGroups: [
      {
        title: "Portal",
        eyebrow: "Frontend",
        bullets: [
          "Built a web portal from the ground up in a two-person team.",
          "Used HTML, JavaScript, CSS, Foundation, and jQuery for the interface.",
          "Communicated with professors and departments to make sure their needs were met.",
        ],
      },
      {
        title: "Database",
        eyebrow: "4D + SQL",
        bullets: [
          "Implemented Active4D and SQL functionality across several databases.",
          "Worked in 4D to develop tables, scripts, connectivity, and staff-facing interfaces.",
          "Collaborated with contractors on more sophisticated 4D and Active4D code.",
        ],
      },
      {
        title: "Access",
        eyebrow: "Scheduling + accessibility",
        bullets: [
          "Integrated Google Calendar API for scheduling across pages and databases.",
          "Evaluated websites and web applications for accessibility.",
        ],
      },
    ],
    tools: ["HTML", "JavaScript", "CSS", "Foundation", "jQuery", "SQL", "4D"],
  },
];
