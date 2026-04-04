import { ProductCard } from "@/features/home/components/product-card";
import { Breadcrumb } from "@/features/product-listing/components/breadcrumb";
import { ProductContainer } from "@/features/product-listing/components/product-container";
import { ProductToolbar } from "@/features/product-listing/components/product-toolbar";
import { ProductInitializer } from "@/features/product-listing/context/product-initializer";
import { ProductProvider } from "@/features/product-listing/context/product-provider";
import { ProductListingLayout } from "@/features/product-listing/layout/product-listing-layout";
import { ProductData } from "@/shared/data/products-data";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export default async function Page({ params, searchParams }: Props) {
  const { slug } = await params;
  const filters = await searchParams;

  console.log("Slug:", slug);
  console.log("Filters:", filters);

  const product = ProductData?.find((item) => item.slug === slug)?.data;

  return (
    <ProductProvider>
      <ProductInitializer initialProducts={product} />
      <ProductListingLayout>
        <Breadcrumb />
        <ProductToolbar />
        <ProductContainer slug={slug} />
      </ProductListingLayout>
    </ProductProvider>
  );
}
