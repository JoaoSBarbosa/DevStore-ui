import { useQueryString } from "@/shared/hooks/use-querystring";
import { ProductFiltered } from "@/shared/types/mock/product-type";

type FilterGroupProps = {
  filters?: ProductFiltered;
};

export const FilterGroup = ({ filters }: FilterGroupProps) => {
  const queryString = useQueryString();

  const filterValue = queryString.get("filters") ?? "";
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <h2 className="flex-1 font-bold text-xl">{filters?.title}</h2>
        <div>...</div>
      </div>

      <div className="text-gray-500 flex text-lg flex-col gap-4 pt-8">
        {filters?.options.map((option) => (
          <label key={option.id} className="flex items-center gap-4">
            <input type="checkbox" className="size-6" />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};
