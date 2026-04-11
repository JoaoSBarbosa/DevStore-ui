import { filters } from "../../../features/category-listing/data/filter";
import { Product } from "@/features/home/types/product-type";

export interface ProductDataMock {
  slug: string;
  title: string;
  data: Product[];
  filters?: FilterGroup[];
}

export interface FilterGroup {
  id: string;
  title: string;
  options: FilterOption[];
}
export interface FilterOption {
  id: string;
  groupId: string;
  label: string;
  value: string | number | PriceRange;
}

interface PriceRange {
  min: number;
  max: number;
}
