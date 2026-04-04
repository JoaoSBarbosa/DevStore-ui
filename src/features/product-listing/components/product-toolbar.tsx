"use client";
import Image from "next/image";
import { useProduct } from "../context/use-product";
import { useState } from "react";

export const ProductToolbar = () => {
  const { toggleFilter } = useProduct();
  const [sort, setSort] = useState("");

  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-center ">
      <div className=" text-3xl">
        <strong>12</strong> Produtos
      </div>
      {/* filtros */}

      <div className="flex items-center gap-4">
        <div className="w-1/2 lg:w-full flex flex-col gap-2">
          <span className="hidden lg:block">Ordernar por</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-gray-300 outline-0 p-4 rounded-md"
          >
            <option value="" className="lg:hidden">
              Ordenar
            </option>
            <option value="">Mais relevantes</option>
            <option value="">Menor preço</option>
            <option value="">Maior preço</option>
          </select>
        </div>

        <button
          className="w-1/2 p-4 border border-gray-300 rounded-md cursor-pointer outline-0 right-0 flex justify-between items-center lg:hidden "
          type="button"
          onClick={toggleFilter}
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
