"use client";
import { motion } from "framer-motion";
import { BreadcrumbProduct } from "./breadcrumb-product";
import { Product } from "@/features/home/types/product-type";
import Image from "next/image";
import { HeightWidth, SizeCard } from "./size-card";
import { ProductDetail } from "./product-detail";

type ProductContainerProps = {
  product: Product;
};

export const ProductContainer = ({ product }: ProductContainerProps) => {
  return (
    <motion.div className="flex flex-col">
      <BreadcrumbProduct id={product.id} name={product.name} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <Image
            src={product.image}
            alt={product.name}
            height={352}
            width={357}
            className="bg-white p-14"
          />
        </div>

        <ProductDetail product={product} />
      </div>

      <div className="bg-white p-8 lg:p-12 w-full my-30 rounded">
        <h3 className="text-2xl font-medium pb-8 lg:pb-10">
          Informações do produto
        </h3>
        <p className="border-t border-gray-200 pt-8 lg:pt-10 text-gray-400">
          {product.description}
        </p>
      </div>
    </motion.div>
  );
};
