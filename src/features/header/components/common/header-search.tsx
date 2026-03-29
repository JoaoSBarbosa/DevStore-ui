"use client";

import Image from "next/image";
import { useHeader } from "../../context/use-header";

type HeaderSearchProps = {
  padding?: PaddingOptions;
};

export enum PaddingOptions {
  NONE = "",
  DEFAULT = "p-6",
  SMALL = "p-4",
}

export const HeaderSearch = ({
  padding = PaddingOptions.DEFAULT,
}: HeaderSearchProps) => {
  const { search, setSearch, isMenuOpen } = useHeader();

  return (
    <div className={`pt-0 ${padding}`}>
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
