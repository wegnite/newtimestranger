export const i18n = {
  defaultLocale: "en",
  locales: [
    "en",
    "zh",
    "ja",
    "tw",
    "de",
    "ko",
    "fr",
  ],
} as const;

export type Locale = (typeof i18n)["locales"][number];
