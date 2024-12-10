"use client";
import { Droprdown } from "@/components/atoms/dropdown";
import CatalogCard from "@/components/molecules/catalog-card";
import { useProductStore } from "@/stores/useProductStore";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const {
    categories,
    products,
    best_sellers,
    fetchCategories,
    fetchProducts,
    fetchBestSellers,
  } = useProductStore();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSortingMethod, setSelectedSortingMethod] = useState("");

  useEffect(() => {
    fetchProducts({
      order_by: selectedSortingMethod,
      category_id: selectedCategory,
    });
  }, [fetchProducts, selectedCategory, selectedSortingMethod]);

  useEffect(() => {
    fetchBestSellers({
      limit: 3,
    });
  }, [fetchBestSellers]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const sortingMethods = [
    {
      label: "Best Seller",
      value: "BEST_SELLER",
    },
    {
      label: "Rating",
      value: "RATING",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col gap-6">
        <div className="title flex flex-col justify-center text-center items-center gap-2 py-7">
          <h1 className="text-3xl lg:text-4xl font-bold">
            Choose Your Favorite Course!
          </h1>
          <h1 className="text-xl text-gray-400">Make your future brighter!</h1>
        </div>
        <h1 className="text-lg">Top 3 Courses</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {best_sellers?.map((product) => (
            <Link href="#" key={product.courseId}>
              <CatalogCard
                thumbnail={
                  product.thumbnails?.find(
                    (thumbnail) => thumbnail.type === "DESKTOP_LARGE"
                  )?.url
                }
                title={product.courseName}
                normal_price={product.basicPrice}
                final_price={product.finalPrice}
                discount={
                  product.discount &&
                  (product.discountType === "PERCENTAGE"
                    ? `${product.discount}%`
                    : product.discountType === "FIX_AMOUNT"
                    ? `Rp. ${product.discount}`
                    : null)
                }
                partner_name={product.partner.partnerName}
              />
            </Link>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-3 px-4 py-7 ">
          <div className="lg:w-3/4">
            <Droprdown
              options={
                categories?.map((category) => ({
                  label: category.categoryName,
                  value: category.categoriesId,
                })) || []
              }
              default_value=""
              onChange={(e) => setSelectedCategory(e.target.value)}
              firstOption="All Categories"
              className={"border-2"}
            />
          </div>
          <div className="lg:w-1/4">
            <Droprdown
              options={
                sortingMethods?.map((sortingMethod) => ({
                  label: sortingMethod.label,
                  value: sortingMethod.value,
                })) || []
              }
              default_value=""
              onChange={(e) => setSelectedSortingMethod(e.target.value)}
              firstOption="Terbaru"
              className={"border-2"}
            />
          </div>
        </div>

        <h2>Best</h2>
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
                partner_name={product.partner.partnerName}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
