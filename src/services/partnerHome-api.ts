import { apiInstance } from "@/config/axiosInstance"

export const getPartner = async () => {
    const response = await apiInstance.get('/selfpaced/partner', {
        params: {
            partnerType: "",
            showAll: false,
            search: "",
            limit: 10,
        }
    });
    return response.data.data.partner;
};