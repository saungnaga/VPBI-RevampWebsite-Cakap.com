import React from "react";
import { CatalogCardProps } from "./types/catalog-card.types";

export const CatalogCard: React.FC<CatalogCardProps> = ({
    data,
    className,
}) => {
    return (
        <div
            className={`relative w-96 h-52 bg-gray-300 rounded-xl overflow-hidden ${className}`}
        >
            <div className="absolute top-0 right-0 bg-gray-500 text-white px-12 py-2 rounded-bl-xl">
                {data.discount}
            </div>

            <div className="absolute bottom-0 left-0 p-6 text-white">
                <div className="text-2xl font-semibold">{data.title}</div>
                <div className="text-lg">{data.mentor}</div>
            </div>

            <div className="absolute bottom-0 right-0 p-6 text-white">
                <div className="text-2xl font-semibold">{data.price}</div>
            </div>
        </div>
    );
};

export default CatalogCard;
