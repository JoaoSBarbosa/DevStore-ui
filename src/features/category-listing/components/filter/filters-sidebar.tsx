"use client";
import { FilterGroup } from "@/shared/types/mock/product-type";
import { useProduct } from "../../context/use-product";
import { filters } from "../../data/filter";
import { FilterGroupContainer } from "./filter-group";

type FilterSidebarProps = {
  isFilterOpen: boolean;
  setIsFilterOpen: (value: boolean) => void;
  filters?: FilterGroup[];
};
export const FilterSidebar = ({
  isFilterOpen,
  setIsFilterOpen,
  filters,
}: FilterSidebarProps) => {
  return (
    <div
      className={` flex-1 lg:max-w-70 flex flex-col gap-4 ${isFilterOpen ? "flex" : "hidden"} lg:flex`}
    >
      {filters &&
        filters?.map((item) => (
          <FilterGroupContainer key={item.id} filters={item} />
        ))}

      {!filters && (
        <div className="border border-gray-300 rounded-lg p-4">
          <div className="flex flex-col">
            <h2>Sem filtros disponíveis</h2>
          </div>
        </div>
      )}
    </div>
  );
};
