import React from "react";
import { CatalogCardProps } from "./types/catalog-card.types";
import Image from "next/image";

export const CatalogCard: React.FC<CatalogCardProps> = ({
  thumbnail,
  title,
  normal_price,
  final_price,
  discount,
  partner_name,
}) => {
  return (
    <div className="min-h-[240px]">
      <div
        data-aos="fade-down"
        className="shadow-md rounded-xl hover:shadow-md "
      >
        <picture className="relative">
          <div className="bg-gradient-to-b from-[#00000000] to-[#000000e1] absolute inset-0 z-10 rounded-xl backdrop-brightness-100 hover:backdrop-brightness-75 transition-all duration-300"></div>
          {thumbnail ? (
            <Image
              src={thumbnail}
              width="0"
              height="0"
              sizes="100vw"
              alt={thumbnail}
              className="rounded-xl object-cover h-60 w-full transition duration-500"
            />
          ) : (
            <Image
              src={"https://cdn.cursor-trails.com/trails/77/grumpycatmeme.png"}
              width="0"
              height="0"
              sizes="100vw"
              alt={title}
              priority
              className="rounded-xl object-cover h-60 w-full transition duration-500"
            />
          )}
          <div className="absolute right-0 top-0 rounded-bl-xl rounded-tr-xl">
            <div className="flex items-center">
              {discount && (
                <p className="text-white text-sm text-center font-semibold bg-primary px-3 py-1 min-w-[140px] rounded-bl-xl rounded-tr-xl capitalize bg-yellow-500">
                  Disc {discount}
                </p>
              )}
            </div>
          </div>
          <div className="absolute left-0 bottom-0 rounded-bl-xl rounded-tr-xl py-3 px-5 text-slate-700 z-20 grid gap-1 w-full">
            <div className="items-center">
              <p className="text-white font-semibold">{title}</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-white">{partner_name}</p>
              {discount ? (
                <div className="min-w-[120px] flex justify-end">
                  <p className="absolute bottom-8 text-white line-through text-xs">
                    Rp. {normal_price}
                  </p>
                  <p className="text-white font-semibold">Rp. {final_price}</p>
                </div>
              ) : (
                <p className="text-white">Rp. {normal_price}</p>
              )}
            </div>
          </div>
        </picture>
      </div>
    </div>
  );
};

export default CatalogCard;
