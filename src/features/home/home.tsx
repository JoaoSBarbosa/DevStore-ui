import { banners } from "./data/banner-data";
import { Banners } from "./sections/banner/banners";
import { StoreBenefitsContainer } from "./sections/store-benefits/store-benefits-container";

export default function Home() {
  const data = banners;
  return (
    <main className="max-w-6xl mx-auto p-6">
      <Banners banners={data} />
      <StoreBenefitsContainer />
    </main>
  );
}
