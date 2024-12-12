"use client";
import { Droprdown } from "@/components/atoms/dropdown";
import { Carousel } from "@/components/molecules/carousel";
import CatalogCard from "@/components/molecules/catalog-card";
import { chunkArray } from "@/helpers/chunkArrayHelper";
import { useProductStore } from "@/stores/useProductStore";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const query = searchParams?.get("query") || "";

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
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState<number>(12);

  const groupedBestSellers = chunkArray(best_sellers, 3);

  useEffect(() => {
    fetchProducts({
      order_by: selectedSortingMethod,
      category_id: selectedCategory,
      page,
      limit,
      search_query: query,
    }).then((data) => {
      console.log("Fetched Products:", data);
    });
  }, [query, page, selectedCategory, selectedSortingMethod, limit, fetchProducts]);

  useEffect(() => {
    fetchBestSellers({
      limit: 9,
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

  const limitNumber = [12, 20, 30, 40, 50];

  const limitData = limitNumber.map((number) => ({
    value: number,
    label: number,
  }));

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col gap-6">
        <div className="title flex flex-col justify-center text-center items-center gap-2 py-7">
          <h1 className="text-3xl lg:text-4xl font-bold">
            Choose Your Favorite Course!
          </h1>
          <h1 className="text-xl text-gray-400">Make your future brighter!</h1>
        </div>

        {!query && (
          <div className="hidden lg:flex flex-col">
            <h1 className="text-lg my-4 font-semibold">Best Sellers</h1>
            <Carousel>
              {groupedBestSellers.map((group, index) => (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row justify-center gap-4"
                >
                  {group?.map((product) => (
                    <Link
                      href={`/courses/${product.courseId}`}
                      key={product.courseId}
                    >
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
              ))}
            </Carousel>
          </div>
        )}
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {products?.map((product) => (
            <Link href={`/courses/${product.courseId}`} key={product.courseId}>
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
      </div>
      <hr className="my-6" />
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex gap-4 items-center w-full">
          <p>Show</p>
          <div className="w-full lg:max-w-[120px]">
            <Droprdown
              options={limitData}
              default_value={12}
              onChange={(e) => setLimit(parseInt(e.target.value))}
              firstOption={12}
              className={"border-2 rounded-lg py-2"}
            />
          </div>
        </div>
        <div className="flex items-center space-x-4 my-8 justify-between w-full lg:justify-normal lg:w-min">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className={`px-4 py-2 border rounded-md text-white bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200`}
          >
            Previous
          </button>
          <span className="text-lg font-semibold">{page}</span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={products.length < limit}
            className={`px-4 py-2 border rounded-md text-white bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
