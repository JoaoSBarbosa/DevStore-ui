import { createContext } from "react";
type HeaderContextType = {
  isMenuOpen: boolean;
  toggleMenu: () => void;

  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export const HeaderContext = createContext<HeaderContextType | null>(null);
