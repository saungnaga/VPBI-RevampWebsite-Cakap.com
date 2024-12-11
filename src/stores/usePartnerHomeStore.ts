import { Partner } from "@/components/molecules/types/partnerHome-list.types";
import { getPartner } from "@/services/partnerHome-api";
import { create } from "zustand";

interface PartnerType {
    partners: Partner[];
    fetchPartners: () => Promise<void>
}

export const usePartnerStore = create<PartnerType>()(
    (set) => ({
        partners: [],
        fetchPartners: async () => {
            try {
                const partners = await getPartner();

                const validPartners = partners.filter ((partner) => partner.partnerLogo?.large);

                set({ partners: validPartners });
            } catch (error: any) {
                console.error("Failed to fetch partners:", error);
                throw error;
            }
        }
    })
)