import { getProductHighlight } from "@/services/product-api";
import { product } from "./types/useProductHighlightStore.types";
import { create } from "zustand";

interface productType {
    products: [] | any
    fetchProduct: () => Promise<void>
}

export const useProductStore = create<productType>()(
    (set) => ({
      products: [],
      fetchProduct: async () => {
        try {
          const response = await getProductHighlight();
          const fetchedProducts = response;
  
        //   set({ products: Array.isArray(fetchedProducts) ? fetchedProducts : [] });
        set({ products: fetchedProducts });
        } catch (error) {
          console.error("Error fetching product:", error);
          set({ products: [] }); 
        }
      }
    })
  );