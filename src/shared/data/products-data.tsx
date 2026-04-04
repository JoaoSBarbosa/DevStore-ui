import { Shirts } from "@/shared/data/mock/shirts/shirt-data";
import { ProductDataMock } from "../types/mock/product-type";
import { Caps } from "./mock/cap/cap-data";

export const ProductData: ProductDataMock[] = [
  {
    slug: "camisetas",
    title: "Camisetas",
    data: Shirts,
  },
  {
    slug: "acessorios",
    title: "Acessórios",
    data: Caps,
  },
];
