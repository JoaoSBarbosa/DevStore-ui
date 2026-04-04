"use client";
import { Product } from "@/features/home/types/product-type";
import { createContext, Dispatch, SetStateAction } from "react";

type ProductContextType = {
  isFilterOpen: boolean;
  toggleFilter: () => void;

  product: Product[] | null;
  setProduct: Dispatch<SetStateAction<Product[] | null>>;
};

export const ProductContext = createContext<ProductContextType | null>(null);
