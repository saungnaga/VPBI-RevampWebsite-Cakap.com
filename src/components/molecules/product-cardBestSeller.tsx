import React from "react";

type ProductCardBestSellerProps = {
  onClick: () => void;
};      
//   temporary proptypes

export const ProductCardBestSeller = ({ onClick }: ProductCardBestSellerProps) => {
  return (
    <div  className="w-60 h-full bg-black mx-1 text-black rounded-3xl"
          onClick={onClick}>
      <div className="overflow-hidden w-full h-[10rem] rounded-t-3xl">
        <img  src="https://media.istockphoto.com/id/453281365/id/foto/huruf-alfabet-api-e.jpg?s=612x612&w=is&k=20&c=ds2MDJFCVsFZQPnFshHjb4_jiIwsOe2NnzmPRtkibVQ=" 
              alt="productName"/>
      </div>
        <div className="bg-white rounded-b-3xl h-[12rem] pt-2 flex flex-col justify-between">
        <div className="text-xl font-bold mx-2">
                <div className="overflow-hidden max-h-14">
                    ini titlenya feohwehpf9pw8efg9we8fg9we7fgwe9fg we79ftqwe97ftwe9pfgwse97fgwe9fwefwefwefwe fdasfsadas asdasdas  asd asd asd asd asda
                </div>
              <div className="text-xs text-gray-500">
                By <span className="text-black">Siapa</span>
              </div>
              <div className="text-xs mt-2">
                Bintangnya
              </div>
          </div> 
          <div className="mx-2 my-6-4 text-2xl font-semibold">
            Rp.500.000,-
          </div>
        </div>
    </div>
  )
};
