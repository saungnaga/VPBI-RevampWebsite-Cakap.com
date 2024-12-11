import React from "react";

interface PartnerCardProps {
  partnerLogo: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partnerLogo }) => {
  return (
    <img className="w-20 h-20 rounded-full border-2 hover:-translate-y-2 transition-all duration-700" src={partnerLogo} alt="partner logo" />
  );
};

export default PartnerCard