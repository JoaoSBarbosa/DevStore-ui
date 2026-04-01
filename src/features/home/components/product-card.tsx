import Image from "next/image";
import { Product } from "../types/product-type";
type ProductCardProps = {
  product: Product;
};
export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded flex flex-col items-center lg:items-start gap-4">
      <Image src={product.image} alt={product.name} width={197} height={194} />
      <h2 className="font-medium text-lg">{product.name}</h2>
      <p className="text-blue-600 font-bold text-2xl">
        R$ {product.price.toFixed(2)}
      </p>
      <p className="text-gray-500">{product.paymentOptions?.join(", ")}</p>
    </div>
  );
};
