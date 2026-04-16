"use client";
import { motion } from "framer-motion";
import { BreadcrumbProduct } from "./breadcrumb-product";
import { Product } from "@/features/home/types/product-type";
import Image from "next/image";
import { HeightWidth, SizeCard } from "./size-card";
import { ProductDetail } from "./product-detail";
import { ProductSlider } from "./product-slider";
import { ProductDescription } from "./product-description";

type ProductContainerProps = {
  product: Product;
};

export const ProductContainer = ({ product }: ProductContainerProps) => {
  return (
    <motion.div className="flex flex-col">
      <BreadcrumbProduct id={product.id} name={product.name} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-32">
        <ProductSlider images={product.images} />

        <ProductDetail product={product} />
      </div>

      <ProductDescription description={product.description} />
    </motion.div>
  );
};
