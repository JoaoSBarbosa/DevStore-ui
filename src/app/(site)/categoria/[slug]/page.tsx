import { Breadcrumb } from "@/features/product-listing/components/breadcrumb";
import { ProductContainer } from "@/features/product-listing/components/product-container";
import { ProductGrid } from "@/features/product-listing/components/product-grid";
import { ProductToolbar } from "@/features/product-listing/components/product-toolbar";
import { ProductContext } from "@/features/product-listing/context/product-context";
import { ProductProvider } from "@/features/product-listing/context/product-provider";
import { ProductListingLayout } from "@/features/product-listing/layout/product-listing-layout";
import { Container } from "@/shared/layout/container";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export default async function Page({ params, searchParams }: Props) {
  const { slug } = await params;
  const filters = await searchParams;

  console.log("Slug:", slug);
  console.log("Filters:", filters);
  return (
    <ProductProvider>
      <ProductListingLayout>
        <Breadcrumb />
        <ProductToolbar />
        <ProductContainer />
      </ProductListingLayout>
    </ProductProvider>
  );
}
