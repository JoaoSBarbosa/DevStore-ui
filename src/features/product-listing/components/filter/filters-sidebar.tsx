"use client";
import { useProduct } from "../../context/use-product";
import { filters } from "../../data/filter";
export const FilterSidebar = () => {
  const { isFilterOpen } = useProduct();

  return (
    isFilterOpen && (
      <div className="flex-1 lg:max-w-70 flex flex-col gap-4">
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
    )
  );
};
