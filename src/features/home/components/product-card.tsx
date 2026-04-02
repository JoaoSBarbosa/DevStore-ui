"use client";
import Image from "next/image";
import { Product } from "../types/product-type";
import Link from "next/link";
import { useState } from "react";
type ProductCardProps = {
  product: Product;
};
export const ProductCard = ({ product }: ProductCardProps) => {
  const baseUrl = `/products/${product.id}`;

  const [liked, setLiked] = useState<boolean>(product.liked);

  const toggleLike = () => {
    setLiked(!liked);
  };
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-sm flex flex-col items-center lg:items-start">
      <div className="w-full flex justify-end">
        <div
          className="border flex items-center justify-center border-gray-300 p-2 rounded-sm size-12 cursor-pointer"
          onClick={toggleLike}
        >
          {liked ? (
            <Image
              src={"/assets/ui/heart-3-fill.png"}
              alt="Heart"
              width={24}
              height={24}
            />
          ) : (
            <Image
              src={"/assets/ui/heart-3-line.png"}
              alt="Heart"
              width={24}
              height={24}
            />
          )}
        </div>
      </div>

      <Link href={baseUrl}>
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="max-w-full h-48"
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
