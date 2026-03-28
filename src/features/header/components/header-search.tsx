"use client";

import Image from "next/image";
import { useHeader } from "../context/use-header";

export const HeaderShearch = () => {
  const { search, setSearch } = useHeader();

  return (
    <div className="p-6 md:hidden">
      <div
        className={`
        flex items-center gap-3 
        px-4 py-3 w-full border border-gray-200
        rounded-md
    `}
      >
        <Image
          src="/assets/ui/search.png"
          alt="campo de busca"
          width={24}
          height={24}
        />

        <input
          type="search"
          value={search}
          placeholder="O que você procura?"
          className=" w-full outline-0 text-md"
          onChange={(value) => setSearch(value.target.value)}
        />
      </div>
    </div>
  );
};
