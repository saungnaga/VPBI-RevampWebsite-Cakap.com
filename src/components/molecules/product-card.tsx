    import React from "react";
    import { ProductCardProps } from "./types/ProductCardProps.types";
    
    export const ProductCard: React.FC<ProductCardProps> = ({
        isDiscount,
        courseName,
        price,
        discount,
        promoText,
        categoriesName,
        reviews,
        icon,
    }) => {
    return (
        <div  className="max-w-64 h-full bg-black mx-1 text-black rounded-3xl"
          onClick={}>
      <div className="overflow-hidden w-full h-[10rem] rounded-t-3xl">
        <img  src="https://media.istockphoto.com/id/453281365/id/foto/huruf-alfabet-api-e.jpg?s=612x612&w=is&k=20&c=ds2MDJFCVsFZQPnFshHjb4_jiIwsOe2NnzmPRtkibVQ=" 
              alt="productName"/>
      </div>
        <div className="bg-white rounded-b-3xl h-[12rem] flex flex-col justify-between pt-2">
          <div className="text-xl font-bold mx-2">
            <div className="text-xs text-gray-500 font-thin">
                    tanggal
                </div>
                <div className="overflow-hidden max-h-14">
                    {courseName}
                </div>
                <div className="text-xs text-gray-500 font-thin">
                    category
                </div>
                <div className="text-xs text-gray-500 font-thin">
                    By <span className="text-black font-bold">Siapa</span>
                </div>
          </div>
          <div className="">
            {isDiscount ? (<div className="mx-2 text-md text-[#FF6464] font-semibold flex flex-row justify-between ">
                <div>
                    Rp.200.000,-
                </div>
                <div className="bg-[#FF6464] text-white px-1 rounded-xl border-[1px]">
                    50%
                </div>
                <div className="text-black line-through">
                    Rp.500.000,-    
                </div>
            </div>
             ) : (
            <div className="mx-2 mb-6 text-2xl font-semibold">
                    Rp.500.000,- 
            </div>)
                }
            {isDiscount && (
            <div className="mx-2 my-2 py-1 border-[1px] border-black rounded-2xl bg-gray-300 w-1/4 text-center text-xs font-bold">
              Diskon
            </div>
          )}
          </div>
        </div>
    </div>
        )
    };