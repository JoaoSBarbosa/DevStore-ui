import { storeBenefits } from "../../data/store-benefits-data";
import { StoreBenefitsCard } from "./store-benefits-card";
export const StoreBenefitsContainer = () => {
  return (
    <div className="flex flex-col lg:flex-row my-6 lg:my-12 gap-4 lg:gap-8">
      {storeBenefits.map((benefit) => (
        <StoreBenefitsCard key={benefit.id} benefit={benefit} />
      ))}
    </div>
  );
};
