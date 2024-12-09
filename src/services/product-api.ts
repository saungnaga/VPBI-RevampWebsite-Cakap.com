import { apiInstance } from "@/config/axiosInstance";
import { IProductApiTypes } from "./types/product-api.types";

export const getProducts = async ({
    limit = 10,
    page = 1,
    order_by = ''
}: IProductApiTypes) => {
    const response = await apiInstance.get(
        `/selfpaced/course/list?limit=${limit}&page=${page}&courseOrderBy=${order_by}`
    );
    return response.data.data;
};