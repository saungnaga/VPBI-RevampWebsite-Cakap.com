export interface Question {
    id?: number;
    title?: string;
    content?: string;
}

export interface QnASection {
    title?: string;
    description?: string;
    questions?: Question[];
}

export interface QuestionsState {
    general_faqs?: QnASection[];
    home_faqs?: QnASection[];
    prakerja_faqs?: QnASection[];
    fetchFaqs: () => Promise<void>;
}