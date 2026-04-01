import { tr } from "zod/locales";
import { Product } from "../types/product-type";

export const BestSellersData: Product[] = [
  {
    id: 1,
    name: "Camisa Node Js - Verde",
    price: 2999.99,
    liked: true,
    image: "/assets/products/camiseta-node.png",
    paymentOptions: ["Boleto", "Cartão", "Pix"],
  },
  {
    id: 2,
    name: "Camisa Laravel - Branca",
    price: 69.99,
    liked: true,
    image: "/assets/products/camiseta-laravel-branca.png",
    paymentOptions: ["Boleto", "Cartão", "Pix"],
  },
  {
    id: 3,
    name: "Camisa Laravel - Azul",
    price: 69.99,
    liked: true,
    image: "/assets/products/camiseta-laravel-azul.png",
    paymentOptions: ["Boleto", "Cartão", "Pix"],
  },
  {
    id: 4,
    name: "Camisa React - Preta",
    price: 69.99,
    liked: true,
    image: "/assets/products/camiseta-react-preta.png",
    paymentOptions: ["Boleto", "Cartão", "Pix"],
  },
];
