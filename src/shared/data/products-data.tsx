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
        id: "tecnologia",
        title: "Tecnologia",
        options: [
          {
            id: "react-native",
            groupId: "tecnologia",
            label: "React Native",
            value: "react-native",
          },
          {
            id: "node",
            groupId: "tecnologia",
            label: "Node JS",
            value: "node",
          },
          {
            id: "laravel",
            groupId: "tecnologia",
            label: "Laravel",
            value: "laravel",
          },
          {
            id: "react",
            groupId: "tecnologia",
            label: "React JS",
            value: "react",
          },
        ],
      },
      {
        id: "cores",
        title: "Cores",
        options: [
          { id: "preto", groupId: "cores", label: "Preto", value: "black" },
          { id: "azul", groupId: "cores", label: "Azul", value: "blue" },
          { id: "verde", groupId: "cores", label: "Verde", value: "green" },
          { id: "branco", groupId: "cores", label: "Branco", value: "white" },
        ],
      },
      {
        id: "precos",
        title: "Preços",
        options: [
          {
            id: "faixa-1",
            groupId: "precos",
            label: "R$ 10 - R$ 50",
            value: { min: 10, max: 50 },
          },
          {
            id: "faixa-2",
            groupId: "precos",
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
        id: "tecnologia",
        title: "Tecnologia",
        options: [
          {
            id: "react-native",
            groupId: "tecnologia",
            label: "React Native",
            value: "react-native",
          },
          {
            id: "node",
            groupId: "tecnologia",
            label: "Node JS",
            value: "node",
          },
          {
            id: "laravel",
            groupId: "tecnologia",
            label: "Laravel",
            value: "laravel",
          },
          {
            id: "react",
            groupId: "tecnologia",
            label: "React JS",
            value: "react",
          },
        ],
      },
      {
        id: "cores",
        title: "Cores",
        options: [
          { id: "preto", groupId: "cores", label: "Preto", value: "black" },
          { id: "azul", groupId: "cores", label: "Azul", value: "blue" },
          { id: "verde", groupId: "cores", label: "Verde", value: "green" },
          { id: "branco", groupId: "cores", label: "Branco", value: "white" },
        ],
      },
      {
        id: "precos",
        title: "Preços",
        options: [
          {
            id: "faixa-1",
            groupId: "precos",
            label: "R$ 10 - R$ 50",
            value: { min: 10, max: 50 },
          },
          {
            id: "faixa-2",
            groupId: "precos",
            label: "R$ 50 - R$ 100",
            value: { min: 50, max: 100 },
          },
        ],
      },
    ],
  },
];
