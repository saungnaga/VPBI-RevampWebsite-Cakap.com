import { getFaqs } from "@/services/faq-api";
import { create } from "zustand";

interface IFaqType {
    faqs: []
    fetchFaqs: () => Promise<void>
}

export const useFaqStore = create<IFaqType>()(
    (set) => ({
        faqs: [],
        fetchFaqs: async () => {
            try {
                const faqs = await getFaqs();
                set({ faqs: faqs });
            } catch (error) {
                console.error("Error fetching faqs:", error);
                throw error;
            }
        }
    })
)