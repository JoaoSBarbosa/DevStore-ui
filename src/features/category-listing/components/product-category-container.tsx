"use client";

import { useState } from "react";
import { ProductGrid } from "..";
import { useProduct } from "../context/use-product";
import { FilterSidebar } from "./filter/filters-sidebar";
import { ProductToolbar } from "./toolbar/product-toolbar";
import { useSearchParams } from "next/navigation";

export const ProductCategoryContainer = () => {
  const { product } = useProduct();
  const [isFilterOpened, setIsFilterOpen] = useState<boolean>(false);

  function parseFilter(value?: string | string[]) {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    return value.split("|");
  }

  const searchParams = useSearchParams();

  const tecnologia = searchParams.get("tecnologia")?.split("|") || [];
  const cores = searchParams.get("cores")?.split("|") || [];
  const precos = searchParams.get("precos")?.split("|") || [];
  const priceFilter = product?.filters?.find((f) => f.id === "precos");

  const selectedPriceRanges =
    priceFilter?.options.filter((option) => precos.includes(option.id)) || [];

  function normalize(text: string) {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "");
  }

  const filteredProducts = product?.data.filter((item) => {
    const name = normalize(item.name);

    // TECNOLOGIA (React, Node, Laravel...)
    const techMap: Record<string, string[]> = {
      "react-native": ["react native", "react-native"],
      node: ["node js", "nodejs", "node"],
      laravel: ["laravel"],
      react: ["react js", "react", "reactjs"],
    };
    const matchTech =
      tecnologia.length === 0 ||
      tecnologia.some((tech) => {
        const terms = techMap[tech] || [tech];
        return terms.some((term) => name.includes(normalize(term)));
      });

    // COR (Preto, Azul, Verde...)
    const colorMap: Record<string, string[]> = {
      preto: ["preto", "preta", "pretas"],
      azul: ["azul", "azuis"],
      verde: ["verde", "verdes"],
      branco: ["branco", "branca", "brancas"],
    };
    const matchColor =
      cores.length === 0 ||
      cores.some((color) => {
        const terms = colorMap[color] || [color];
        return terms.some((term) => name.includes(normalize(term)));
      });

    // PREÇO
    const matchPrice =
      precos.length === 0 ||
      precos.some((range) => {
        const [min, max] = range.split("-").map(Number);
        return item.price >= min && item.price <= max;
      });

    return matchTech && matchColor && matchPrice;
  });

  return (
    <div>
      <ProductToolbar
        isFilterOpen={isFilterOpened}
        setIsFilterOpen={setIsFilterOpen}
      />

      <div className="flex flex-col lg:flex-row my-8 gap-8">
        <FilterSidebar
          filters={product?.filters}
          isFilterOpen={isFilterOpened}
          setIsFilterOpen={setIsFilterOpen}
        />
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
};
