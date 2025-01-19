import { create } from "zustand";

type State = {
  viewed: string[];
};

const defaultStates: State = {
  viewed: [],
};

type Actions = {
  setViewed: (viewed: string) => void;
};

export const useViewedStore = create<State & Actions>()((set) => ({
  ...defaultStates,
  setViewed: (viewed: string) => {
    const newViewed = [...defaultStates.viewed, viewed];
    set({ viewed: newViewed });
  },
}));
