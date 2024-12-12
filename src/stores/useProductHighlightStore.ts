import { getProductHighlight } from '@/services/product-api';
import { create } from 'zustand';

interface productType {
	products: [] | any;
	fetchProduct: () => Promise<void>;
}

export const useProductHighlightStore = create<productType>()((set) => ({
	products: [],
	fetchProduct: async () => {
		try {
			const response = await getProductHighlight();
			const fetchedProducts = response.data;

			//   set({ products: Array.isArray(fetchedProducts) ? fetchedProducts : [] });
			set({ products: fetchedProducts });
		} catch (error) {
			console.error('Error fetching product:', error);
			set({ products: [] });
		}
	},
}));
