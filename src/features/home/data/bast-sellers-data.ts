import { tr } from "zod/locales";
import { Product } from "../types/product-type";

export const BestSellersData: Product[] = [
  {
    id: 1,
    name: "Camisa Node Js - Verde",
    price: 69.99,
    liked: true,
    image: "/assets/products/camiseta-node.png",
    paymentOptions: "Em até 2x de R$ 35,00 sem juros",
  },
  {
    id: 2,
    name: "Camisa Laravel - Branca",
    price: 69.99,
    liked: true,
    image: "/assets/products/camiseta-laravel-branca.png",
    paymentOptions: "Em até 2x de R$ 35,00 sem juros",
  },
  {
    id: 3,
    name: "Camisa Laravel - Azul",
    price: 69.99,
    liked: true,
    image: "/assets/products/camiseta-laravel-azul.png",
    paymentOptions: "Em até 2x de R$ 35,00 sem juros",
  },
  {
    id: 4,
    name: "Camisa React - Preta",
    price: 69.99,
    liked: true,
    image: "/assets/products/camiseta-react-preta.png",
    paymentOptions: `Em até 2x de R$ 35,00 sem juros`,
  },
];
