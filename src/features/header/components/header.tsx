"use client";

import Image from "next/image";
import Link from "next/link";
import { HeaderIcon } from "./header-icon";
import HeaderMenu from "./header-menu";
import { HeaderShearch } from "./header-search";
import { useHeader } from "../context/use-header";

export default function Header() {
  const { toggleMenu, isMenuOpen } = useHeader();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="bg-black text-white p-4 text-center">
        <strong>FRETE GRATIS</strong> para todo o Nordeste nas compras acima de
        R$ 199,00. <strong> APROVEITA!</strong>
      </div>

      <div className="p-6 w-full max-w-6xl mx-auto">
        <div className=" gap-2 flex items-center justify-between">
          <div className="w-32">
            <Link href={"/"}>
              <Image
                src="/assets/ui/logo-black.png"
                alt="DevStore-logo"
                width={120}
                height={40}
              />
            </Link>
          </div>

          <div className="flex gap-4">
            <Link href={"/my-orders"}>
              <HeaderIcon alt="perfil" src="/assets/ui/user-line.png" />
            </Link>

            <Link href={"/my-car"}>
              <HeaderIcon
                alt="carrinho"
                src="/assets/ui/shopping-bag-4-line.png"
              />
            </Link>

            <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
              <HeaderIcon
                selected={isMenuOpen}
                alt="menu"
                src="/assets/ui/menu-line.png"
                srcSelected="/assets/ui/menu-line-white.png"
              />
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && <HeaderMenu />}

      <HeaderShearch />
      <div className="md:hidden p-6">Busca</div>
    </header>
  );
}
