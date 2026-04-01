import { banners } from "./data/banner-data";
import { Banners } from "./sections/banner/banners";
import { storeBenefits } from "./data/store-benefits-data";
import { StoreBenefitsContainer } from "./sections/store-benefits/store-benefits-container";
import { ProductListSkeleton } from "./components/product-list-skeleton";
import { Suspense } from "react";
import { MostViewedProduct } from "./sections/most-viewed/most-viewed-product";

export default function Home() {
  const data = banners;
  return (
    <main className="max-w-6xl mx-auto p-6">
      <Banners banners={data} />
      <StoreBenefitsContainer benefits={storeBenefits} />
      {/* <ProductListSkeleton />
      <ProductListSkeleton /> */}

      <Suspense fallback={<ProductListSkeleton />}>
        <MostViewedProduct />
      </Suspense>

      <Suspense fallback={<ProductListSkeleton />}></Suspense>
    </main>
  );
}
