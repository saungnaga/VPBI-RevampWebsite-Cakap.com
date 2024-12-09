import { getProduct } from "@/services/product-api";
import { product } from "./types/useProductStore.types";
import { create } from "zustand";

interface productType {
    products: product[]
    fetchProduct: () => Promise<void>
}

export const useProductStore = create<productType>()(
    (set) => ({
      products: [],
      fetchProduct: async () => {
        try {
          const response = await getProduct();
          console.log("Fetched Products:", response);
          const fetchedProducts = response.data?.course || []; 
  
          set({ products: Array.isArray(fetchedProducts) ? fetchedProducts : [] });
        } catch (error) {
          console.error("Error fetching product:", error);
          set({ products: [] }); 
        }
      }
    })
  );