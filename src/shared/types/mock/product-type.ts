import { filters } from "./../../../features/product-listing/data/filter";
import { Product } from "@/features/home/types/product-type";

export interface ProductDataMock {
  slug: string;
  title: string;
  data: Product[];
  filters?: ProductFiltered[];
}

export interface ProductFiltered {
  id: number;
  title: string;
  options: FilterOption[];
}
export interface FilterOption {
  id: number;
  label: string;
  value: string | number | PriceRange;
}

interface PriceRange {
  min: number;
  max: number;
}
