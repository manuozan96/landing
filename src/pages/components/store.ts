import { create } from "zustand";

interface AppState {
  isTransitioning: boolean;
  setTransitioning: (value: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  isTransitioning: false,
  setTransitioning: (value) => set({ isTransitioning: value }),
}));
