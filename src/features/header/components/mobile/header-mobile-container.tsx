import { useHeader } from "../../context/use-header";
import { MobileMenu } from "./mobile-menu";
import { HeaderSearch } from "../common/header-search";

export const HeaderMobileContainer = () => {
  const { isMenuOpen } = useHeader();
  return (
    <div className="lg:hidden">
      {isMenuOpen && <MobileMenu />}

      <HeaderSearch />
    </div>
  );
};
