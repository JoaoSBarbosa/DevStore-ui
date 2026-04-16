import { Product } from "@/features/home/types/product-type";
import { div } from "framer-motion/client";
import { HeightWidth, SizeCard } from "./size-card";
import { useState } from "react";
import {
  ButtonBadge,
  ButtonSize,
  DefaultButton,
} from "@/shared/components/Buttons";
import { FavoriteButton } from "@/shared/components/Buttons";
import Image from "next/image";

type ProductDetailProps = {
  product: Product;
};

export const ProductDetail = ({ product }: ProductDetailProps) => {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [liked, setLiked] = useState<boolean>(product.liked);

  const toggleLike = () => {
    setLiked(!liked);
  };
  const handleAddToSacola = () => {};
  return (
    <div className="flex flex-col gap-2 text-gray-500 ">
      <span>...</span>
      <h3 className="text-gray-800 text-3xl font-medium">{product.name} </h3>
      <div className="flex flex-col gap-2">
        <p className="text-sm">Selecione o tamanho</p>
        <div className="flex gap-4">
          {product.sizes?.map((size) => (
            <SizeCard
              key={size.id}
              size={size.size}
              heightWidth={HeightWidth.PX48}
              selected={selectedSize == size.id}
              onClick={() => setSelectedSize(size.id)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-500">
          de <span className="line-through mx-1">R$ 99,99</span>
          por
        </p>
        <span className="text-4xl font-semibold text-blue-500">
          R$ {product.price}
        </span>
      </div>

      <div>{product.paymentOptions}</div>

      <div className="flex gap-4 items-center">
        <DefaultButton
          label="Adicionar à dacola"
          onClick={handleAddToSacola}
          size={ButtonSize.Medium}
        />
        <FavoriteButton liked={liked} onClick={toggleLike} size="size-16" />

        <ButtonBadge
          onClick={() => alert("Compartilhar produto")}
          size="size-16"
        >
          <Image
            src={"/assets/ui/share-line.png"}
            alt=""
            height={24}
            width={24}
            className=""
          />
        </ButtonBadge>
      </div>
    </div>
  );
};
