import { apiInstance } from "@/config/axiosInstance";
import { IPartnerApiTypes } from "./types/partner-api.types";

export const getPartners = async ({
    limit = 10,
    search = '',
    show_all = true,
    partner_type,
}: IPartnerApiTypes) => {
    const response = await apiInstance.get(
        `/selfpaced/partner?partnerType=${partner_type}&showAll=${show_all}&search=${search}&limit=${limit}`
    );
    return response.data.data;
};