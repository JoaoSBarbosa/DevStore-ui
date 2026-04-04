import { MostViewedProduct } from "./../sections/most-viewed/most-viewed-product";

import { Product } from "../types/product-type";
import { fa } from "zod/locales";

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

export const MostViewedData: Product[] = [
  {
    id: 5,
    name: "Boné DevWeb - Preto",
    price: 59.99,
    liked: false,
    image: "/assets/products/bone-dev-preto.png",
    paymentOptions: "Em até 2x de R$ 30,00 sem juros",
    slug: "acessorios",
  },
  {
    id: 6,
    name: "Boné DevWeb - Azul",
    price: 59.99,
    liked: false,
    image: "/assets/products/bone-dev-azul.png",
    paymentOptions: "Em até 2x de R$ 30,00 sem juros",
    slug: "acessorios",
  },
  {
    id: 7,
    name: "Boné DevWeb - Cinza",
    price: 59.99,
    liked: false,
    image: "/assets/products/bone-dev-cinza.png",
    paymentOptions: "Em até 2x de R$ 30,00 sem juros",
    slug: "acessorios",
  },
  {
    id: 8,
    name: "Camisa React Native - Preta",
    price: 69.99,
    liked: false,
    image: "/assets/products/camiseta-react-native.png",
    paymentOptions: `Em até 2x de R$ 35,00 sem juros`,
    slug: "acessorios",
  },
];
