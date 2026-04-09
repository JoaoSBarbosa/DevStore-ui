"use client";
import { useQueryString } from "@/shared/hooks/use-querystring";
import { FilterOption } from "@/shared/types/mock/product-type";

type FilterItemProps = {
  filterOption: FilterOption;
};

export const FilterItem = ({ filterOption }: FilterItemProps) => {
  const queryString = useQueryString();

  const queryGroup = queryString.get(filterOption.groupId);
  const currentFilters = queryGroup ? queryGroup.split("|") : [];
  const isChecked = currentFilters.includes(filterOption.id);

  const toggleFilter = (groupId: string, itemId: string) => {
    let update = [...currentFilters];
    if (isChecked) {
      update = update.filter((id) => id !== itemId);
    } else {
      update.push(itemId);
    }

    queryString.set(groupId, update.join("|"));
  };
  return (
    <div className="flex items-center gap-4">
      <input
        type="checkbox"
        id={`item-${filterOption.id}`}
        checked={isChecked}
        className="size-6 cursor-pointer"
        onChange={() => toggleFilter(filterOption.groupId, filterOption.id)}
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
