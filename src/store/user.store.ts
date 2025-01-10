import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/model/user.model";
import axiosInstance from "@/utils/axiosConfig";

type State = {
  accessToken: string;
  refreshToken: string;
  user: User | null;
  isLoggedIn: boolean;
  isAdmin: boolean;
  isRootAdmin: boolean;
};

const defaultStates: State = {
  accessToken: "",
  refreshToken: "",
  user: null,
  isLoggedIn: false,
  isAdmin: false,
  isRootAdmin: false,
};

type Actions = {
  setAccessToken: (accessToken: string) => void;
  setRefreshToken: (refreshToken: string) => void;
  setUser: (user: User | null) => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  getIsLoggedIn: () => boolean;
  getIsAdmin: () => boolean;
  getIsRootAdmin: () => boolean;
  refreshUserToken: () => void;
};

export const useUserStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      ...defaultStates,
      setAccessToken: (accessToken: string) => {
        set({ accessToken });
      },
      setRefreshToken: (refreshToken: string) => {
        set({ refreshToken });
      },
      setUser: (user: User | null) => {
        set({ user });
      },
      setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
      getIsLoggedIn: () =>
        !!get().accessToken && !!get().refreshToken && !!get().user,
      getIsAdmin: () => !!get().user?.isAdmin,
      getIsRootAdmin: () => !!get().user?.isRootAdmin,
      refreshUserToken: () => {
        axiosInstance
          .post("/auth/refresh", { refreshToken: get().refreshToken })
          .then((res) => {
            set({ accessToken: res.data.accessToken });
          })
          .catch((err) => {
            console.log(err);
            set({ accessToken: "", refreshToken: "", user: null });
          });
      },
    }),
    { name: "userStore" }
  )
);
