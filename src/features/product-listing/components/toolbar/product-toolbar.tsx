"use client";
import Image from "next/image";
import { useProduct } from "../../context/use-product";
import { ChangeEvent, useState } from "react";
import { useQueryString } from "@/shared/hooks/use-querystring";
import { OrderSelect } from "./order-select";
import { FilterButton } from "./filter-button";

type ProductToolbarProps = {
  isFilterOpen: boolean;
  setIsFilterOpen: (value: boolean) => void;
};

export const ProductToolbar = ({
  isFilterOpen,
  setIsFilterOpen,
}: ProductToolbarProps) => {
  const { toggleFilter, product } = useProduct();
  const queryString = useQueryString();
  const order = queryString.get("order") ?? "views";
  const count = product?.data?.length ? product?.data.length : 0;
  const handleSelectChange = (value: string) => {
    queryString.set("order", value);
  };
  return (
    <div className="gap-6 flex flex-col lg:flex-row justify-between lg:items-center">
      <div className=" text-3xl">
        <strong>{count}</strong> Produtos
      </div>

      <div
        className={`grid grid-cols-2 lg:grid-cols-1 flex-row items-center justify-end gap-4 `}
      >
        <OrderSelect value={order} onChange={handleSelectChange} />
        <FilterButton
          isFilterOpen={isFilterOpen}
          setIsFilterOpen={setIsFilterOpen}
        />
      </div>
    </div>
  );
};
