export type FfxivFeature = {
  title: string;
  detail: string;
  tags: string[];
};

export type GamingItem = {
  title: string;
  detail: string;
  image: {
    src: string;
    alt: string;
  };
};

export type DanceFeature = {
  detail: string[];
  video?: {
    src: string;
    poster?: string;
  };
};

export type MusicTrack = {
  title: string;
  detail: string;
  src: string;
};

export const ffxivFeature: FfxivFeature = {
  title: "Final Fantasy XIV",
  detail:
    "My favorite game of all time with over 10k hours played. If you haven't noticed, the site has a little FFXIV motif going on. Picked it up during COVID lockdown back in Shadowbringers and been hooked ever since. I'd like to think I'm proficient at every job in the game and I'm a big fan of high-end raiding. Maybe one day I will knock out all the ultis.",
  tags: ["UCOB", "UWU", "TEA", "DSR", "TOP", "FRU", "DMU"],
};

export const clearedFfxivTags: Record<string, string> = {
  UCOB: "#F1A619",
  UWU: "#50C8DB",
  TEA: "#F7C469",
  TOP: "#592788",
};

export const otherGamingItems: GamingItem[] = [
  {
    title: "Stardew Valley",
    detail:
      "Cozy as heck, but I still find a way to optimize. Community center has to be done year one.",
    image: {
      src: "/media/games/stardewvalley.jpg",
      alt: "Stardew Valley artwork",
    },
  },
  {
    title: "Balatro",
    detail: "So addicting. Should've won Game of the Year.",
    image: {
      src: "/media/games/balatro.jpg",
      alt: "Balatro artwork",
    },
  },
  {
    title: "Clair Obscur: Expedition 33",
    detail: "Fantastic game. The FFVII/Chrono Trigger of its generation.",
    image: {
      src: "/media/games/clairobscur.jpg",
      alt: "Clair Obscur: Expedition 33 artwork",
    },
  },
  {
    title: "Fire Emblem",
    detail:
      "Been playing it since childhood. Whole series is great, but the GBA sprites were peak.",
    image: {
      src: "/media/games/fireemblem.jpg",
      alt: "Fire Emblem artwork",
    },
  },
];

export const danceFeature: DanceFeature = {
  detail: [
    "I'm a bit rusty at this point, but I do enjoying dancing. Particularly, open style choreography. It used to be called urban and street styles, which is just as confusing for non-dancers so a quick heuristic would be hip-hop and hip-hop adjacent.",
    "Shoutout to Hothouse for taking this video and The Workroom for holding it down as my main studio.",
    "And shoutout to Kinjaz and Jabbawockeez for inspiring my style which, funnily enough, is totally not like the video at all. Had to roll with this video though because the lighting is sick.",
  ],
  video: {
    src: "/media/videos/20231018.mp4",
  },
};

export const musicTracks: MusicTrack[] = [
  {
    title: "idk",
    detail:
      "Very first song. For a first attempt I was pretty pleased with this one. Can definitely feel the lack of mixing though.",
    src: "/media/music/idk.mp3",
  },
  {
    title: "hey2",
    detail:
      "Wanted to try a more lofi-type beat. Making music is easy, making good music is hard.",
    src: "/media/music/hey2.mp3",
  },
];
