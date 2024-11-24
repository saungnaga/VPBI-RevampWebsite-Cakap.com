import { apiInstance } from "@/config/axiosInstance";

export const getFaqs = async () => {
    const response = await apiInstance.get('/selfpaced/faq?tenant=cakap');
    return response.data;
};