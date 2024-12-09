"use client";
import CatalogCard from "@/components/molecules/catalog-card";
import { useProductStore } from "@/stores/useProductStore";
import Link from "next/link";
import React, { useEffect } from "react";

const Page = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts({
      order_by: "",
    });
  }, [fetchProducts]);

  console.log(products);
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col gap-6">
        <div className="title flex flex-col justify-center text-center items-center gap-2 py-7">
          <h1 className="text-3xl lg:text-4xl font-bold">
            Choose Your Favorite Course!
          </h1>
          <h1 className="text-xl text-gray-400">Make your future brighter!</h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-3 px-4 py-7 ">
          <div className="lg:w-3/4">{/* <Dropdown /> */}</div>
          <div className="lg:w-1/4">{/* <Dropdown /> */}</div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {products?.map((product) => (
            <Link href="#" key={product.courseId}>
              <CatalogCard
                thumbnail={
                  product.thumbnails?.find(
                    (thumbnail) => thumbnail.type === "DESKTOP_LARGE"
                  )?.url
                }
                title={product.courseName}
                normal_price={product.basicPrice}
                discount={
                  product.discount &&
                  (product.discountType === "PERCENTAGE"
                    ? `${product.discount}%`
                    : product.discountType === "FIX_AMOUNT"
                    ? `Rp. ${product.discount}`
                    : null)
                }
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
