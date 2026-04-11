import { BreadcrumbProduct } from "@/features/product/components/breadcrumb-product";
import { ProductContainer } from "@/features/product/components/product-container";
import { HeightWidth, SizeCard } from "@/features/product/components/size-card";
import { ProductData } from "@/shared/data/products-data";
import { Container } from "@/shared/layout/container";
import Image from "next/image";

type PageProps = {
  params: Promise<{ id: string }>;
};
export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const sizes = ["P", "M", "G", "GG"];
  const productId = parseInt(id, 10);

  const product = ProductData?.flatMap((item) => item.data)?.find(
    (product) => product.id === productId,
  );

  if (!product) {
    return (
      <Container className="h-96 flex items-center justify-center">
        <h1 className="text-2xl font-bold">Produto não encontrado</h1>
      </Container>
    );
  }

  return (
    <section>
      <Container className="">
        <ProductContainer product={product} />
      </Container>
    </section>
  );
}
