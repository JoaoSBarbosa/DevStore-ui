"use client";
import { useHeader } from "./context/use-header";
import { HeaderDesktopContainer } from "./components/desktop/header-desktop-container";
import { HeaderMobileContainer } from "./components/mobile/header-mobile-container";
import { HeaderActions } from "./components/common/header-actions";
import { HeaderLogo } from "./components/common/header-logo";
import { Container } from "@/shared/layout/container";

export default function Header() {
  const { toggleMenu, isMenuOpen } = useHeader();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="bg-black text-white p-4 text-center">
        <strong>FRETE GRATIS</strong> para todo o Nordeste nas compras acima de
        R$ 199,00. <strong> APROVEITA!</strong>
      </div>

      <Container>
        <div className=" gap-2 flex items-center">
          <HeaderLogo />
          <HeaderDesktopContainer />
          <HeaderActions />
        </div>
      </Container>
      <HeaderMobileContainer />
    </header>
  );
}
