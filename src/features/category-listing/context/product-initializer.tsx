"use client";

import { Product } from "@/features/home/types/product-type";
import { useProduct } from "./use-product";
import { useEffect } from "react";
import { ProductDataMock } from "@/shared/types/mock/product-type";

type ProductInitializerProps = {
  initialProducts: ProductDataMock | null | undefined;
};
export const ProductInitializer = ({
  initialProducts,
}: ProductInitializerProps) => {
  const { setProduct } = useProduct();

  useEffect(() => {
    setProduct(initialProducts ?? null);
  }, [initialProducts]);
  return null;
};
