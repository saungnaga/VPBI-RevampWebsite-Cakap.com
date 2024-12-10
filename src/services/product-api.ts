import { apiInstance } from "@/config/axiosInstance";
import { IProductApiTypes } from "./types/product-api.types";

export const getProducts = async ({
    limit = 12,
    page = 1,
    order_by = '',
    category_id = ''
}: IProductApiTypes) => {
    const response = await apiInstance.get(
        `/selfpaced/course/list?limit=${limit}&page=${page}&categoriesId=${category_id}&courseOrderBy=${order_by}`
    );
    return response.data.data;
};

export const getProductHighlight = async () => {
    const response = await apiInstance.get('/selfpaced/course/highlight');
    return response.data;
};

export const getCategories = async () => {
    const response = await apiInstance.get('/selfpaced/categories');
    return response.data.data;
};