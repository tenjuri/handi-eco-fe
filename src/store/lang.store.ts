import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Locale } from "../../i18n-config";
import { getDictionary } from "../../get-dictionary";

type State = {
  lang: Locale;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
};

const defaultStates: State = {
  lang: "en",
  dictionary: {} as Awaited<ReturnType<typeof getDictionary>>,
};

type Actions = {
  setLang: (lang: Locale) => void;
  setDictionary: (
    dictionary: Awaited<ReturnType<typeof getDictionary>>
  ) => void;
};

export const useLangStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...defaultStates,
      setLang: (lang: Locale) => set({ lang }),
      setDictionary: (
        dictionary: Awaited<ReturnType<typeof getDictionary>>
      ) => {
        set({ dictionary });
      },
    }),
    { name: "langStore" }
  )
);
