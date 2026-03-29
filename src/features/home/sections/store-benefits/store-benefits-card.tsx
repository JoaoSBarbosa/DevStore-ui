import Image from "next/image";
import { StoreBenefitsType } from "../../types/store-benefits-type";

type StoreBenefitsCardProps = {
  benefit: StoreBenefitsType;
};

export const StoreBenefitsCard = ({ benefit }: StoreBenefitsCardProps) => {
  return (
    <div className="flex flex-1 py-6 border border-gray-200 rounded-sm">
      <div className="w-24 border-r border-gray-200 flex justify-center items-center">
        <Image
          src={benefit.iconSrc}
          alt={benefit.title}
          width={40}
          height={40}
          className="mr-4"
        />
      </div>
      <div className="flex-1 pl-8">
        <h3 className="text-xl font-bold">{benefit.title}</h3>
        <p className="text-gray-500 ">{benefit.description}</p>
      </div>
    </div>
  );
};
