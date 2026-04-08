"use client";
import { Product } from "@/features/home/types/product-type";
import { ProductDataMock } from "@/shared/types/mock/product-type";
import { createContext, Dispatch, SetStateAction } from "react";

type ProductContextType = {
  isFilterOpen: boolean;
  toggleFilter: () => void;

  product: ProductDataMock | null;
  setProduct: Dispatch<SetStateAction<ProductDataMock | null>>;
};

export const ProductContext = createContext<ProductContextType | null>(null);
