"use client";
import { useState } from "react";
import { ProductContext } from "./product-context";
import { Product } from "@/features/home/types/product-type";
import { ProductDataMock } from "@/shared/types/mock/product-type";

type ProductProviderProps = {
  children: React.ReactNode;
};

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [product, setProduct] = useState<ProductDataMock | null>(null);
  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  return (
    <ProductContext.Provider
      value={{
        isFilterOpen,
        toggleFilter,

        product,
        setProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
