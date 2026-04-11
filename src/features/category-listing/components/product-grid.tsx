import { ProductCard } from "@/features/home/components/product-card";
import { Product } from "@/features/home/types/product-type";
import { motion, AnimatePresence } from "framer-motion";

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
    <AnimatePresence mode="wait">
      <motion.div
        key={products.map((p) => p.id).join("-")}
        className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.25 }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
