import { apiInstance } from "@/config/axiosInstance";
import { IProductApiTypes } from "./types/product-api.types";

export const getProducts = async ({
	limit = 12,
	page = 1,
	order_by = '',
	category_id = '',
	search_query = '',
}: IProductApiTypes) => {
	const response = await apiInstance.get(
		`/selfpaced/course/list?limit=${limit}&page=${page}&categoriesId=${category_id}&courseOrderBy=${order_by}&search=${search_query}`
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

export const getCourseDetail = async ({ courseId }: { courseId: string }) => {
	try {
		const response = await apiInstance.get(
			`/selfpaced/course/detail/${courseId}?platform=WEB`
		);
		return response.data.data;
	} catch (error: any) {
		throw new Error(
			error.response?.data?.message || 'Failed to fetch course detail'
		);
	}
};

export const getCourseDetailReview = async ({ courseId }: { courseId: string }) => {
	try {
		const response = await apiInstance.get(
			`/selfpaced/rating/${courseId}/summary`
		);
		return response.data.data;
	} catch (error: any) {
		throw new Error(
			error.response?.data?.message ||
			'Failed to fetch course detail review'
		);
	}
};
