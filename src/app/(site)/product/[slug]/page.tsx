import { Container } from "@/shared/layout/container";

type PageProps = {
  params: Promise<{ slug: string }>;
  serachParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export default async function Page({ params, serachParams }: PageProps) {
  const { slug } = await params;
  const filter = await serachParams;

  return (
    <section>
      <Container className="h-96">
        <h2>Página de produtos</h2>
        <p>Produto em questão {slug}</p>
      </Container>
    </section>
  );
}
