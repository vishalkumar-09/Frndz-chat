import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("Frndz-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("Frndz-theme", theme);
    set({ theme });
  },
}));