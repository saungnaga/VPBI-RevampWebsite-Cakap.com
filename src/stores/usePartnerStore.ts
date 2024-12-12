import { getPartners } from "@/services/partner-api";
import { create } from "zustand";
import { IPartnerApiTypes } from "./types/usePartnerStore.types";

interface IPartnerType {
    partners: [] | any
    fetchPartners: ({
        limit,
        search,
        show_all,
        partner_type
    }: IPartnerApiTypes) => Promise<void>
}

export const usePartnerStore = create<IPartnerType>()(
    (set) => ({
        partners: [],
        fetchPartners: async ({
            limit,
            search,
            show_all,
            partner_type
        }) => {
            try {
                const partners = await getPartners({
                    limit,
                    search,
                    show_all,
                    partner_type
                });
                set({ partners: partners.partner });
            } catch (error) {
                console.error("Error fetching partners:", error);
                throw error;
            }
        },
    })
)