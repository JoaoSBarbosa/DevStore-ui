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
    <div
      className="flex items-center gap-4 py-2 px-2 rounded-md transition hover:bg-gray-100 active:bg-gray-200"
      style={{ touchAction: "manipulation" }}
    >
      <input
        type="checkbox"
        id={`item-${filterOption.id}`}
        checked={isChecked}
        className="size-6 cursor-pointer accent-primary"
        onChange={() => toggleFilter(filterOption.groupId, filterOption.id)}
        style={{ minWidth: 24, minHeight: 24 }}
      />
      <label
        key={filterOption.id}
        htmlFor={`item-${filterOption.id}`}
        className="text-gray-500 text-lg cursor-pointer select-none w-full"
        style={{ paddingTop: 4, paddingBottom: 4 }}
      >
        {filterOption.label}
      </label>
    </div>
  );
};
