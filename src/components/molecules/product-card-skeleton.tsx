import React from "react";
import { ProductCardProps } from "./types/ProductCardProps.types";
import Link from "next/link";
import { useProductHighlightStore } from "@/stores/useProductHighlightStore";
import { useEffect } from "react";

const formatPrice = (price: string | number) => {
    const priceString = typeof price === 'string' ? price : price.toString();
    const number = parseFloat(priceString.replace(/[^\d.-]/g, ''));
    if (isNaN(number)) return priceString;
    return new Intl.NumberFormat('de-DE').format(number);
  };

export const ProductCardSkeleton: React.FC<ProductCardProps> = ({
    courseName,
    courseId,
    price,
    basicPrice,
    discount,
    promoText,
    categoriesName,
    partner,
    icon,
    nextAction
}) => {

    const { products, fetchProduct } = useProductHighlightStore();
  
    useEffect(() => {
      fetchProduct();
    }, [fetchProduct]);


return (
    <Link href={nextAction.deeplink}>
    <div className="max-w-64 h-full bg-black mx-1 text-black rounded-3xl 
                    transition ease-in-out delay-150 hover:-translate-y-1 
                    hover:scale-110 hover:opacity-90 duration-300"
         key={courseId}>
    <img  src={icon.thumbnail} 
          alt={courseName}
          className="object-cover overflow-hidden w-full h-[10rem] rounded-t-3xl"/>
    {/* title/header */}
    <div className="bg-white rounded-b-3xl h-[12rem] flex flex-col justify-between pt-2">
      <div className="text-lg font-bold mx-2">
        <div className="text-xs text-gray-500 font-thin">
                tanggal
            </div>
            <div className="overflow-hidden text-ellipsis whitespace-nowrap max-h-14">
                {courseName}
            </div>
            <div className="text-xs text-gray-500 font-thin">
                {categoriesName}
            </div>
            <div className="text-xs text-gray-500 font-thin">
                By <span className="text-black font-bold">{partner.partnerName}</span>
            </div>
      </div>
      {/* pricing */}
      <div className="">
        {discount ? (<div className="mx-2 text-md text-[#FF6464] font-semibold flex flex-row justify-between ">
            <div>
                {formatPrice(price.new)}
            </div>
            <div className="bg-[#FF6464] text-white px-1 rounded-xl border-[1px]">
                {promoText}
            </div>
            <div className="text-black line-through">
                {formatPrice(price.old)}   
            </div>
        </div>
         ) : (
        <div className="mx-2 mb-6 text-2xl font-semibold">
                Rp.{formatPrice(basicPrice)},-
        </div>)
            }
        {discount && (
        <div className="mx-2 my-2 py-1 border-[1px] border-black rounded-2xl bg-gray-300 w-1/4 text-center text-xs font-bold">
          Diskon
        </div>
      )}
      </div>
    </div>
</div>
</Link>
    )
};