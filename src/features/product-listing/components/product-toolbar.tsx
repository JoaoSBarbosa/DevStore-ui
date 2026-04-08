"use client";
import Image from "next/image";
import { useProduct } from "../context/use-product";
import { ChangeEvent, useState } from "react";
import { useQueryString } from "@/shared/hooks/use-querystring";

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
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    queryString.set("order", e.target.value);
  };
  return (
    <div className="gap-6 flex flex-col lg:flex-row justify-between lg:items-center">
      <div className=" text-3xl">
        <strong>{count}</strong> Produtos
      </div>

      <div
        className={`flex w-full lg:max-w-70  flex-row items-center justify-end gap-4 `}
      >
        <select
          defaultValue={order}
          onChange={handleSelectChange}
          className="bg-white flex-1 px-4  lg:w-full lg:px-6 h-14 border border-gray-200 outline-0 rounded-sm text-gray-500"
        >
          <option value="" className="lg:hidden">
            Limpar
          </option>
          <option value="views">Popularidade</option>
          <option value="price">Por preço</option>
          <option value="selling">Mais vendidos</option>
        </select>

        <button
          className="flex-1 bg-white  lg:w-full px-4 lg:px-6 h-14 border border-gray-200 rounded-sm text-gray-500 gap-4 cursor-pointer outline-0 right-0 flex justify-between items-center lg:hidden "
          type="button"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          Filtar
          <Image
            src={"/assets/ui/equalizer-2-line.png"}
            alt=""
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
};
