"use client";
import { ReactNode, useState } from "react";
import { HeaderContext } from "./header-context";

type HeaderProviderProps = {
  children: ReactNode;
};

export const HeaderProvider = ({ children }: HeaderProviderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <HeaderContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
        search,
        setSearch,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
