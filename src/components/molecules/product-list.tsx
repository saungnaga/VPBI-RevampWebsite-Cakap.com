"use client"

import React, { useEffect } from "react";
import { useProductStore } from "@/stores/useProductStore";
import { ProductCard } from "./product-card";
import { ProductCardProps } from "./types/ProductCardProps.types";

export const ProductList: React.FC = () => {
  const { products, fetchProduct } = useProductStore();
  useEffect(() => {
    fetchProduct(); 
  }, [fetchProduct]);

  console.log('Products in ProductList:', products);
  return (
    <div className="bg-white">
      {products?.map((product) => (
        // <product.courseName key={product.courseId} {...product} />
        <div className="bg-white text-white" key={product.courseId}> {product.courseName} </div>
      ))}
    </div>
  );
};