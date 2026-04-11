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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Image
              src={product.image}
              alt={product.name}
              height={352}
              width={357}
              className="bg-white p-14"
            />
          </div>

          <div className="flex flex-col gap-2 text-gray-500">
            <span>...</span>
            <h3 className="text-gray-800 text-3xl font-medium">
              {product.name}{" "}
            </h3>
            <div className="flex flex-col gap-2">
              <p className="text-sm">Selecione o tamanho</p>
              <div className="flex gap-4">
                {sizes.map((size) => (
                  <SizeCard
                    key={size}
                    size={size}
                    heightWidth={HeightWidth.PX48}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-500">
                de <span className="line-through mx-1">R$ 99,99</span>
                por
              </p>
              <span className="text-4xl font-semibold text-blue-500">
                R$ {product.price}
              </span>
            </div>

            <div>{product.paymentOptions}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
