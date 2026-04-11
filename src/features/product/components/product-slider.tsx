import Image from "next/image";

type ProductSliderProps = {
  image: string;
  name: string;
};

export const ProductSlider = ({ image, name }: ProductSliderProps) => {
  return (
    <div>
      <Image
        src={image}
        alt={name}
        height={352}
        width={357}
        className="bg-white p-14"
      />
    </div>
  );
};
