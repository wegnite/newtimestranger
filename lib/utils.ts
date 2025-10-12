import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { buildAbsoluteUrl } from "./siteConfig";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function ensureTrailingSlash(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const finalPath = normalizedPath.endsWith("/") ? normalizedPath : normalizedPath;
  return buildAbsoluteUrl(finalPath);
}

export function getYouTubeVideoId(url: string) {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : "";
}
