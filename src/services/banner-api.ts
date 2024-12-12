import { apiInstance } from "@/config/axiosInstance";

export const getBanner = async () => {
    const response = await apiInstance.get('/selfpaced/banner');
    return response.data;
};