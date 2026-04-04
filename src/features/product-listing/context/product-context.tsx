"use client";
import { createContext } from "react";

type ProductContextType = {
  isFilterOpen: boolean;
  toggleFilter: () => void;
};

export const ProductContext = createContext<ProductContextType | null>(null);
