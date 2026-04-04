import { Filter } from "./filter/filter";
import { ProductGrid } from "./product-grid";

export const ProductContainer = () => {
  return (
    <div className="flex flex-col lg:flex-row my-4 gap-6">
      <Filter />

      <ProductGrid />
    </div>
  );
};
