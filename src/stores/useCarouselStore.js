import { create } from "zustand";

const useCarouselStore = create((set) => ({
  currentSlide: 0,
  setCurrentSlide: (slide) => set({ currentSlide: slide }),
}));

export default useCarouselStore;
