import type { CSSProperties } from "react";

export type Page = "home" | "work" | "fun";

export type GalleryDirection = "next" | "previous";

export type CarouselStyle = CSSProperties & {
  "--active-game"?: number;
};
