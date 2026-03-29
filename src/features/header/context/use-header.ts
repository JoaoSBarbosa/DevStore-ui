import { useContext } from "react";
import { HeaderContext } from "../context/header-context";

export const useHeader = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeader não esta definido com um provider");
  }
  return context;
};
