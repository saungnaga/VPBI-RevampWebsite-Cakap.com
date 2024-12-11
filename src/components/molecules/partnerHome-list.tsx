"use client";

import { usePartnerStore } from "@/stores/usePartnerHomeStore";
import { useEffect, useRef } from "react";
import { Partner } from "./types/partnerHome-list.types";
import PartnerCard from "./partnerHome-card";

const PartnerList: React.FC = () => {
  const { partners, fetchPartners } = usePartnerStore();

  useEffect(() => {
    fetchPartners();
  }, [fetchPartners]);

  return (
    <div className="flex gap-5 p-3 scroll-content">
      {partners.map((partner: Partner, index) => (
        <PartnerCard key={index} partnerLogo={partner.partnerLogo.large} />
      ))}
    </div>
  );
};

export default PartnerList;
