import { apiInstance } from "@/config/axiosInstance";

export const getProductHighlight = async () => {
    const response = await apiInstance.get('/selfpaced/course/highlight');
    return response.data.data;
};