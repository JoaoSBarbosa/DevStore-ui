"use client";

import { useState } from "react";
import { ProductGrid } from "..";
import { useProduct } from "../context/use-product";
import { FilterSidebar } from "./filter/filters-sidebar";
import { ProductToolbar } from "./toolbar/product-toolbar";

export const ProductCategoryContainer = () => {
  const { product } = useProduct();
  const [isFilterOpened, setIsFilterOpen] = useState<boolean>(false);

  return (
    <div>
      <ProductToolbar
        isFilterOpen={isFilterOpened}
        setIsFilterOpen={setIsFilterOpen}
      />

      <div className="flex flex-col lg:flex-row my-8 gap-8">
        <FilterSidebar
          filters={product?.filters}
          isFilterOpen={isFilterOpened}
          setIsFilterOpen={setIsFilterOpen}
        />
        <ProductGrid products={product?.data} />
      </div>
    </div>
  );
};
