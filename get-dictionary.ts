import "server-only";
import type { Locale } from "./i18n-config";

const dictionaries = {
  en: () =>
    import("./src/dictionaries/en.json").then((module) => module.default),
  jp: () =>
    import("./src/dictionaries/jp.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
