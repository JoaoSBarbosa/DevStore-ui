import { banners } from "./data/banner-data";
import { Banners } from "./sections/banner/banners";
import { storeBenefits } from "./data/store-benefits-data";
import { StoreBenefitsContainer } from "./sections/store-benefits/store-benefits-container";
import { ProductListSkeleton } from "./components/product-list-skeleton";
import { Suspense } from "react";
import { MostViewedProduct } from "./sections/most-viewed/most-viewed-product";
import { BestSellers } from "./sections/best-sellers/best-sellers";
import { Container } from "@/shared/layout/container";

export default function Home() {
  const data = banners;
  return (
    <main>
      <Container>
        <Banners banners={data} />
        <StoreBenefitsContainer benefits={storeBenefits} />

        <Suspense fallback={<ProductListSkeleton />}>
          <MostViewedProduct />
        </Suspense>

        <Suspense fallback={<ProductListSkeleton />}>
          <BestSellers />
        </Suspense>
      </Container>
    </main>
  );
}
