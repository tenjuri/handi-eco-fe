import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Locale } from "../../i18n-config";

type State = {
  lang: Locale;
};

const defaultStates: State = {
  lang: "en",
};

type Actions = {
  setLang: (lang: Locale) => void;
};

export const useLangStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...defaultStates,
      setLang: (lang: Locale) => set({ lang }),
    }),
    { name: "langStore" }
  )
);
