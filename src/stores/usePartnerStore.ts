import { getPartners } from "@/services/partner-api";
import { create } from "zustand";

interface IPartnerType {
    partners: [] | any
    fetchPartners: (limit?: number, search?: string, show_all?: boolean, partner_type?: string) => Promise<void>
}

export const usePartnerStore = create<IPartnerType>()(
    (set) => ({
        partners: [],
        fetchPartners: async (limit?: number, search?: string, show_all?: boolean, partner_type?: string) => {
            try {
                const partners = await getPartners(limit, search, show_all, partner_type);
                set({
                    partners: partners.partner,
                });
            } catch (error) {
                console.error("Error fetching partners:", error);
                throw error;
            }
        }
    })
)