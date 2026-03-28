"use client";
import { ReactNode, useState } from "react";
import { HeaderContext } from "./header-context";

type HeaderProviderProps = {
  children: ReactNode;
};

export const HeaderProvider = ({ children }: HeaderProviderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <HeaderContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </HeaderContext.Provider>
  );
};
