"use client";

import Image from "next/image";
import Link from "next/link";
import { HeaderIcon } from "./common/header-icon";
import { useHeader } from "../context/use-header";

import { HeaderDesktopContainer } from "./desktop/header-desktop-container";
import { HeaderMobileContainer } from "./mobile/header-mobile-container";
import { HeaderActions } from "./common/header-actions";
import { HeaderLogo } from "./common/header-logo";

export default function Header() {
  const { toggleMenu, isMenuOpen } = useHeader();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="bg-black text-white p-4 text-center">
        <strong>FRETE GRATIS</strong> para todo o Nordeste nas compras acima de
        R$ 199,00. <strong> APROVEITA!</strong>
      </div>

      <div className="p-6 w-full max-w-6xl mx-auto">
        <div className=" gap-2 flex items-center">
          <HeaderLogo />

          <HeaderDesktopContainer />

          <HeaderActions />
        </div>
      </div>

      <HeaderMobileContainer />
    </header>
  );
}
