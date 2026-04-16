"use client";
import { ProductImage } from "@/features/home/types/product-type";
import { div } from "framer-motion/client";
import Image from "next/image";
import { useState } from "react";

type ProductSliderProps = {
  images: ProductImage[] | null | undefined;
};

export const ProductSlider = ({ images }: ProductSliderProps) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  if (!images || images.length === 0) {
    return (
      <div className="max-w-sm">
        <div>
          <Image
            src={"/assets/no-image.jpg"}
            alt={"No image available"}
            height={352}
            width={357}
            className="bg-white p-14"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-sm">
      <div className="border border-gray-300">
        <Image
          src={images[selectedImage]?.image}
          alt={images[selectedImage]?.image}
          height={380}
          width={380}
          className="bg-white p-2 lg:p-14 max-w-full h-96 object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-6 mt-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex items-center justify-center cursor-pointer border p-2 bg-white
              ${
                selectedImage === index ? "border-blue-500" : "border-gray-300"
              }`}
          >
            <Image
              key={image.id}
              src={image.image}
              alt={image.image}
              height={120}
              width={120}
              className=""
              onClick={() => setSelectedImage(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
