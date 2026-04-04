import { Container } from "@/shared/layout/container";

type ProductListingLayoutProps = {
  children: React.ReactNode;
};

export const ProductListingLayout = ({
  children,
}: ProductListingLayoutProps) => {
  return (
    <section>
      <Container>{children}</Container>
    </section>
  );
};
