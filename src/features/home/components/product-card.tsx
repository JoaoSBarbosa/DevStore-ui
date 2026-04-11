"use client";
import Image from "next/image";
import { Product } from "../types/product-type";
import Link from "next/link";
import { useState } from "react";
import { FavoriteButton } from "@/shared/components/Buttons";
type ProductCardProps = {
  product: Product;
};
export const ProductCard = ({ product }: ProductCardProps) => {
  const baseUrl = `/produto/${product.id}`;

  const [liked, setLiked] = useState<boolean>(product.liked);

  const toggleLike = () => {
    setLiked(!liked);
  };
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-sm flex flex-col items-center lg:items-start">
      <div className="w-full flex justify-end">
        <FavoriteButton liked={liked} onClick={toggleLike} />
      </div>

      <Link href={baseUrl}>
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="max-w-full h-42 object-contain"
          />
        </div>
        <div className="mt-9 w-full">
          <h2 className="font-bold text-lg">{product.name}</h2>
          <p className="text-blue-600 font-bold text-2xl mt-3">
            R$ {product.price.toFixed(2)}
          </p>
          <p className="text-gray-400 mt-5">{product?.paymentOptions}</p>
        </div>
      </Link>
    </div>
  );
};
