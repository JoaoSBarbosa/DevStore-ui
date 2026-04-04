import { useContext } from "react";
import { ProductContext } from "./product-context";

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("contexto de produto não esta definido com o provider");
  }

  return context;
};
