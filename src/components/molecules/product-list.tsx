"use client"

import React, { useEffect } from "react";
import { useProductStore } from "@/stores/useProductStore";
import { ProductCard } from "./product-card";
import { ProductCardProps } from "./types/ProductCardProps.types";

export const ProductList: React.FC = () => {
  const { products, fetchProduct } = useProductStore();
  console.log('Products in ProductList:', products);
  useEffect(() => {
    fetchProduct(); 
  }, [fetchProduct]);


  return (
    <div className="bg-white">
      {products.map((product) => (
        <ProductCard key={product.courseId} {...product} />
      ))}
    </div>
  );
};
