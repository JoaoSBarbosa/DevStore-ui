"use client";
import { useProduct } from "../../context/use-product";
import { filters } from "../../data/filter";

type FilterSidebarProps = {
  isFilterOpen: boolean;
  setIsFilterOpen: (value: boolean) => void;
};
export const FilterSidebar = ({
  isFilterOpen,
  setIsFilterOpen,
}: FilterSidebarProps) => {
  return (
    <div
      className={`flex-1 lg:max-w-70 flex flex-col gap-4 ${isFilterOpen ? "flex" : "hidden"} lg:flex`}
    >
      {filters.map((item) => (
        <div key={item.id}>
          <h3 className="text-xl font-semibold border-b border-gray-300 mb-6 pb-2">
            {item.title}
          </h3>

          <div className="flex flex-col gap-2 text-gray-500 text-xl">
            {item.options.map((option) => (
              <label key={option.label} className="flex items-center gap-2">
                <input type={item.type} className="" />

                {option.label}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
