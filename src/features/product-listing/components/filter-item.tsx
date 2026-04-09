import { FilterOption } from "@/shared/types/mock/product-type";

type FilterItemProps = {
  filterOption: FilterOption;
};

export const FilterItem = ({ filterOption }: FilterItemProps) => {
  return (
    <div className=" flex items-center gap-4">
      <input
        type="checkbox"
        id={`item-${filterOption.id}`}
        className="size-6 cursor-pointer"
      />
      <label
        key={filterOption.id}
        htmlFor={`item-${filterOption.id}`}
        className="text-gray-500  text-lg cursor-pointer"
      >
        {filterOption.label}
      </label>
    </div>
  );
};
