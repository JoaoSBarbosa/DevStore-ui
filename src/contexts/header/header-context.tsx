import { createContext } from "react";
type HeaderContextType = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export const HeaderContext = createContext<HeaderContextType | null>(null);
