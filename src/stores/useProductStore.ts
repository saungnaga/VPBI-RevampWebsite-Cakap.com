import { getProducts } from "@/services/product-api";
import { create } from "zustand";
import { IProductApiTypes } from "./types/useProductStore.types";

interface IProductType {
    products: [] | any
    fetchProducts: ({
        limit,
        page,
        order_by
    }: IProductApiTypes) => Promise<void>
}

export const useProductStore = create<IProductType>()(
    (set) => ({
        products: [],
        fetchProducts: async ({
            limit,
            page,
            order_by
        }) => {
            try {
                const products = await getProducts({
                    limit,
                    page,
                    order_by
                });
                set({
                    products: products.course,
                });
            } catch (error) {
                console.error("Error fetching products:", error);
                throw error;
            }
        },
    })
)