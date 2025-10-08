export const i18n = {
  defaultLocale: "en",
  locales: [
    "en",
    "ru",
    "zh",
    "tw",
    "ja",
    "ko",
    "de",
    "es",
    "fr",
    // Manually added based on previous LangSwitcherData inspection
    "it",
    "pt",
    "th",
    "kk",
    "fil",
    "id",
    "ms",
    "vi",
    "en-AU",
    "nl",
    "es-MX",
  ],
} as const;

export type Locale = (typeof i18n)["locales"][number];
