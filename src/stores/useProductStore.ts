import { getCategories, getProducts } from "@/services/product-api";
import { create } from "zustand";
import { IBestSellerApiTypes, IProductApiTypes } from "./types/useProductStore.types";

interface IProductType {
    categories: [] | any
    products: [] | any
    best_sellers: [] | any

    fetchProducts: ({
        limit,
        page,
        order_by,
        category_id
    }: IProductApiTypes) => Promise<void>

    fetchBestSellers: ({
        limit,
        page,
    }: IBestSellerApiTypes) => Promise<void>

    fetchCategories: () => Promise<void>
}

export const useProductStore = create<IProductType>()(
    (set) => ({
        categories: [],
        products: [],
        best_sellers: [],

        fetchProducts: async ({
            limit,
            page,
            order_by,
            category_id
        }) => {
            try {
                const products = await getProducts({
                    limit,
                    page,
                    order_by,
                    category_id
                });

                set({
                    products: products.course,
                });
            } catch (error) {
                console.error("Error fetching products:", error);
                throw error;
            }
        },

        fetchBestSellers: async ({
            limit,
            page,
        }) => {
            try {
                const bestSellerProducts = await getProducts({
                    limit,
                    page,
                    order_by: 'BEST_SELLER'
                })

                set({
                    best_sellers: bestSellerProducts.course
                });
            } catch (error) {
                console.error("Error fetching best seller products:", error);
                throw error;
            }
        },

        fetchCategories: async () => {
            try {
                const categories = await getCategories()

                set({
                    categories: categories
                });
            } catch (error) {
                console.error("Error fetching categories:", error);
                throw error;
            }
        }
    })
)