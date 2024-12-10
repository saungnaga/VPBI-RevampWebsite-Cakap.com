import React from "react";

interface PartnerCardProps {
    partner: {
        partnerName: string;
        partnerLogo: {
            small: string;
        };
    };
}

export const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
    return (
        <div className="bg-gray-200 p-4 rounded-lg flex flex-col items-center">
            <img
                alt={partner?.partnerLogo?.small}
                className="mb-2"
                height="50"
                src={partner?.partnerLogo?.small}
                width="50"
            />
            <span className="font-semibold text-gray-700">
                {partner.partnerName}
            </span>
        </div>
    );
};

export default PartnerCard;
