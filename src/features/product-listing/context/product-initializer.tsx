"use client";

import { Product } from "@/features/home/types/product-type";
import { useProduct } from "./use-product";
import { useEffect } from "react";

type ProductInitializerProps = {
  initialProducts: Product[] | null | undefined;
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
