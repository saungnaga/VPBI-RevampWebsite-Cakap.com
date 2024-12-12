import { getBanner } from "@/services/banner-api";
import { create } from "zustand";

interface bannerType {
    banners: [] | any
    fetchBanners: () => Promise<void>
}

export const useBannerStore = create<bannerType>()(
    (set) => ({
      banners: [],
      fetchBanners: async () => {
        try {
          const response = await getBanner();
          const fetchedBanners = response.data;
        set({ banners: fetchedBanners });
        } catch (error) {
          console.error("Error fetching banners:", error);
          set({ banners: [] }); 
        }
      }
    })
  );