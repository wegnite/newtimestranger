const DEFAULT_SITE_URL = "https://digimonstorytimestranger.com";
const DEFAULT_SITE_NAME = "Time Stranger Guide Hub";

export function getSiteUrl() {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    DEFAULT_SITE_URL;
  return envUrl.replace(/\/+$/, "");
}

export function buildAbsoluteUrl(path: string = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

export function getSiteName() {
  return process.env.NEXT_PUBLIC_SITE_NAME || DEFAULT_SITE_NAME;
}
