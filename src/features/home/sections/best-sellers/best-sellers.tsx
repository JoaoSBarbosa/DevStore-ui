import { ProductList } from "../../components/product-list";
import { ProductListContainer } from "../../components/product-list-container";
import { MostViewedData } from "../../data/products-data";

export const BestSellers = () => {
  const bestSellersData = MostViewedData;
  return (
    <ProductListContainer
      title="Produtos mais vendidos"
      description="Campeões de vendas da nossa loja."
    >
      <ProductList products={bestSellersData} />
    </ProductListContainer>
  );
};
