import { StoreBenefitsType } from "../../types/store-benefits-type";
import { StoreBenefitsCard } from "./store-benefits-card";

type StoreBenefitsContainerProps = {
  benefits: StoreBenefitsType[];
};
export const StoreBenefitsContainer = ({
  benefits,
}: StoreBenefitsContainerProps) => {
  if (!benefits || benefits.length === 0) {
    return <div>Nenhum benefício encontrado.</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row my-6 lg:my-12 gap-4 lg:gap-8">
      {benefits?.map((benefit) => (
        <StoreBenefitsCard key={benefit.id} benefit={benefit} />
      ))}
    </div>
  );
};
