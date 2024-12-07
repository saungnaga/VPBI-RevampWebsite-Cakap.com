import { apiInstance } from "@/config/axiosInstance";

export const getBestSellerProduct = async () => {
    const response = await apiInstance.get('/selfpaced/course/list?limit=20&page=1&courseOrderBy=BEST_SELLER');
    return response.data;
};

export const getProduct = async () => {
    const response = await apiInstance.get('/selfpaced/course/highlight');
    return response.data;
};