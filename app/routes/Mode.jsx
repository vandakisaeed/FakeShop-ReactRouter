import { create } from "zustand";

export const useColorMode = create((set) => ({
  mode: false, // false = light, true = dark
  backgroundDark: "#000000",  // black
  backgroundLight: "#ffffffff", // white
  changeMode: () =>
    set((state) => ({
      mode: !state.mode, // toggle
    })),
}));
