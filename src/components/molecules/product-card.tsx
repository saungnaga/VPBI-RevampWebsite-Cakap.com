import { ProductCardSkeleton } from "./product-card-skeleton";
import { useProductHighlightStore } from "@/stores/useProductHighlightStore";
import { useEffect } from "react";
import { ProductCardProps } from "./types/ProductCardProps.types";

export const ProductCard: React.FC = () => {
    const { products, fetchProduct } = useProductHighlightStore();
  
    useEffect(() => {
      fetchProduct();
    }, [fetchProduct]);

    return(
        <div>
        {products?.map((product) => (
          <ProductCardSkeleton courseId={product.courseId}
                    courseName= {product.courseName}
                    categoriesName= {product.categoriesName}
                    partner={product.partner}
                    icon={product.icon}
                    basicPrice={product.basicPrice}
                    price={product.price}
                    discount={product.discount}
                    promoText={product.promoText}
                    nextAction={product.nextAction}/>
        ))}
      </div>
    )
}