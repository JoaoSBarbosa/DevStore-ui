import { ProductCard } from "@/features/home/components/product-card";
import { Shirts } from "../data/shirt-data";

export const ProductGrid = () => {
  return (
    <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {Shirts.map((shirt) => (
        <ProductCard key={shirt.id} product={shirt} />
      ))}
    </div>
  );
};
