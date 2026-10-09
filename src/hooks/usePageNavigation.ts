import { useSyncExternalStore } from "react";
import type { Page } from "../types";

function subscribe(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function getPage(): Page {
  switch (window.location.hash) {
    case "#/work":
    case "#work-page":
      return "work";
    case "#/fun":
    case "#fun-page":
      return "fun";
    default:
      return "home";
  }
}

export function usePageNavigation() {
  return useSyncExternalStore<Page>(subscribe, getPage, () => "home");
}
