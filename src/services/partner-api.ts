import { apiInstance } from "@/config/axiosInstance";

export const getPartners = async (
    limit: number = 10,
    search: string = '',
    show_all: boolean = false,
    partner_type: string = ''
) => {
    const response = await apiInstance.get(`/selfpaced/partner?partnerType=${partner_type}&showAll=${show_all}&search=${search}&limit=${limit}`);
    return response.data.data;
};