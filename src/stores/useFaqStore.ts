import { getFaqs } from "@/services/faq-api";
import { create } from "zustand";
import { QnASection, QuestionsState } from "./types/useFaqStore.types";


export const useFaqStore = create<QuestionsState>(
    (set) => ({
        general_faqs: [],
        home_faqs: [],
        prakerja_faqs: [],
        fetchFaqs: async () => {
            try {
                const faqs = await getFaqs();

                const general_faqs: QnASection[] = faqs?.data?.general || [];
                const home_faqs: QnASection[] = faqs?.data?.home || [];
                const prakerja_faqs: QnASection[] = faqs?.data?.prakerja || [];

                const general_questions = general_faqs.flatMap(item => item.questions);
                const home_questions = home_faqs
                const prakerja_questions = prakerja_faqs.flatMap(item => item.questions);

                set({
                    general_faqs: general_questions,
                    home_faqs: home_questions,
                    prakerja_faqs: prakerja_questions
                });

            } catch (error) {
                console.error("Error fetching faqs:", error);
                throw error;
            }
        }
    }))
