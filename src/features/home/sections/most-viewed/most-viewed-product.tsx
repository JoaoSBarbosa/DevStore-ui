import { ProductList } from "../../components/product-list";
import { ProductListContainer } from "../../components/product-list-container";
import { BestSellersData } from "../../data/products-data";
export const MostViewedProduct = async () => {
  const mock = BestSellersData;
  return (
    // <div className="mt-10">
    //   <h2 className="font-medium text-2xl">Produtos mais vistos</h2>
    //   <p className="text-gray-500">Campeões de visualização da nossa loja.</p>

    //   <ProductList products={mock} />
    // </div>

    <ProductListContainer
      title="Produtos mais vistos"
      description="Campeões de visualização da nossa loja."
    >
      <ProductList products={mock} />
    </ProductListContainer>
  );
};
