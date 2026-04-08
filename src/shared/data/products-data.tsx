import { Shirts } from "@/shared/data/mock/shirts/shirt-data";
import { ProductDataMock } from "../types/mock/product-type";
import { Accessories } from "./mock/acessories/accessories-data";

export const ProductData: ProductDataMock[] = [
  {
    slug: "camisetas",
    title: "Camisetas",
    data: Shirts,
    filters: [
      {
        id: 1,
        title: "Tecnologia",
        options: [
          { id: 1, label: "React Native", value: "react-native" },
          { id: 2, label: "Node JS", value: "node" },
          { id: 3, label: "Laravel", value: "laravel" },
          { id: 4, label: "React JS", value: "react" },
        ],
      },
      {
        id: 2,
        title: "Cores",
        options: [
          { id: 1, label: "Preto", value: "black" },
          { id: 2, label: "Azul", value: "blue" },
          { id: 3, label: "Verde", value: "green" },
          { id: 4, label: "Branco", value: "white" },
        ],
      },
      {
        id: 3,
        title: "Preços",
        options: [
          {
            id: 1,
            label: "R$ 10 - R$ 50",
            value: { min: 10, max: 50 },
          },
          {
            id: 2,
            label: "R$ 50 - R$ 100",
            value: { min: 50, max: 100 },
          },
        ],
      },
    ],
  },
  {
    slug: "acessorios",
    title: "Acessórios",
    data: Accessories,
    filters: [
      {
        id: 1,
        title: "Tecnologia",
        options: [
          { id: 1, label: "React Native", value: "react-native" },
          { id: 2, label: "Node JS", value: "node" },
          { id: 3, label: "Laravel", value: "laravel" },
          { id: 4, label: "React JS", value: "react" },
        ],
      },
      {
        id: 2,
        title: "Cores",
        options: [
          { id: 1, label: "Preto", value: "black" },
          { id: 2, label: "Azul", value: "blue" },
          { id: 3, label: "Verde", value: "green" },
          { id: 4, label: "Branco", value: "white" },
        ],
      },
      {
        id: 3,
        title: "Preços",
        options: [
          {
            id: 1,
            label: "R$ 10 - R$ 50",
            value: { min: 10, max: 50 },
          },
          {
            id: 2,
            label: "R$ 50 - R$ 100",
            value: { min: 50, max: 100 },
          },
        ],
      },
    ],
  },
];
