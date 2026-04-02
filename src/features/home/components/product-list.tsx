import { Product } from "../types/product-type";
import { ProductCard } from "./product-card";

type ProductListProps = {
  products: Product[];
};
export const ProductList = ({ products }: ProductListProps) => {
  if (products.length === 0) {
    return (
      <p className="text-gray-500 mt-4 bg-gray-200 h-60 rounded flex items-center justify-center">
        Nenhum produto encontrado.
      </p>
    );
  }

  return (
    <div className="mt-9 grid grid-cols-1 lg:grid-cols-4 gap-6">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
