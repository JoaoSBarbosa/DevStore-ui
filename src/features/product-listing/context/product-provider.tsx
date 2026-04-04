"use client";
import { useState } from "react";
import { ProductContext } from "./product-context";

type ProductProviderProps = {
  children: React.ReactNode;
};

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  return (
    <ProductContext.Provider
      value={{
        isFilterOpen,
        toggleFilter,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
