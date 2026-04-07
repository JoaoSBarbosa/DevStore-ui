"use client";
import { useEffect } from "react";
import { useProduct } from "../context/use-product";
import { Filter } from "./filter/filter";
import { ProductGrid } from "./product-grid";
import { FilterSidebar } from "./filter/filters-sidebar";

type ProductProps = {
  slug: string;
};

export const Product = ({ slug }: ProductProps) => {
  const { product } = useProduct();

  return (
    <div className="flex flex-col lg:flex-row my-8 gap-8">
      <FilterSidebar />

      <ProductGrid products={product} />
    </div>
  );
};
