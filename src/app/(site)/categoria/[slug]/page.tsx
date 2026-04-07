import {
  Breadcrumb,
  ProductToolbar,
  ProductInitializer,
  ProductProvider,
  ProductListingLayout,
  ProductCategoryContainer,
} from "@/features/product-listing";
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
        <ProductCategoryContainer />
      </ProductListingLayout>
    </ProductProvider>
  );
}
