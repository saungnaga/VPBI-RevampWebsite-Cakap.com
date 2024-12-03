import React from "react";
import { IJobCardProps } from "../atoms/types/job-card.types";

const JobCard: React.FC<IJobCardProps> = (
    { title, company, type, city, country, timeListed}
) => {
    return (
        <div className="flex justify-between p-5 border-b-2 border-black">
            <div className="flex flex-col gap-2">
                <div className="text-xl font-bold">{title}</div>
                <div>
                    <div>by <b>{company}</b></div>
                    <div>{city}, {country}</div>
                </div>
                <div className="px-3 bg-[#D9D9D9] rounded-2xl w-fit">{type}</div>
            </div>
            <div className="flex flex-col justify-between items-center">
                <div className="text-xs">
                    {timeListed} ago
                </div>
                <button className="bg-black text-white text-xs px-3 py-1 rounded-2xl text-nowrap hover:scale-105">
                    Lihat Detail
                </button>
            </div>
        </div>
    )
}

export default JobCard;