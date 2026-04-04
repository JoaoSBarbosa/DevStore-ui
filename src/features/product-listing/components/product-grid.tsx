import { ProductCard } from "@/features/home/components/product-card";
import { Product } from "@/features/home/types/product-type";

type ProductGridProps = {
  products: Product[] | undefined | null;
};
export const ProductGrid = ({ products }: ProductGridProps) => {
  if (products == null) {
    return (
      <div className="h-full w-full bg-gray-200 flex items-center justify-center text-2xl">
        <h2>Não existe registro de produtos para essa categoria</h2>
      </div>
    );
  }

  return (
    <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
