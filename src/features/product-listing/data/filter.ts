import { FilterGroup } from "../types/filter";

export const filters: FilterGroup[] = [
  {
    id: "technology",
    title: "Tecnologia",
    type: "checkbox",
    options: [
      { label: "React Native", value: "react-native" },
      { label: "Node JS", value: "node" },
      { label: "Laravel", value: "laravel" },
      { label: "React JS", value: "react" },
    ],
  },
  {
    id: "color",
    title: "Cor",
    type: "checkbox",
    options: [
      { label: "Preto", value: "black" },
      { label: "Azul", value: "blue" },
      { label: "Verde", value: "green" },
      { label: "Branco", value: "white" },
    ],
  },
  {
    id: "price",
    title: "Preço",
    type: "radio",
    options: [
      { label: "R$ 10,00 - R$ 50,00", value: "10-50" },
      { label: "R$ 50,00 - R$ 100,00", value: "50-100" },
    ],
  },
];
