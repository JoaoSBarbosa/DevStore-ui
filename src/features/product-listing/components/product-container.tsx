"use client";
import { useEffect } from "react";
import { useProduct } from "../context/use-product";
import { Filter } from "./filter/filter";
import { ProductGrid } from "./product-grid";
import { ProductData } from "@/shared/data/products-data";

type ProductContainerProps = {
  slug: string;
};

export const ProductContainer = ({ slug }: ProductContainerProps) => {
  const { product } = useProduct();

  return (
    <div className="flex flex-col lg:flex-row my-4 gap-6">
      <Filter />

      <ProductGrid products={product} />
    </div>
  );
};
