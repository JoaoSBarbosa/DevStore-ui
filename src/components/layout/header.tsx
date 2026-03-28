"use client";

import Image from "next/image";
import HeaderIcon from "./header-icon";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="bg-black text-white p-4 text-center">
        <strong>FRETE GRATIS</strong> para todo o Nordeste nas compras acima de
        R$ 199,00. <strong> APROVEITA!</strong>
      </div>

      <div className="p-6 w-full max-w-6xl mx-auto gap-2 flex items-center justify-between">
        <div className="">
          <Image
            src="/assets/ui/logo-black.png"
            alt="DevSTore-logo"
            width={120}
            height={40}
          />
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

          <div className="md:hidden">
            <HeaderIcon alt="menu" src="/assets/ui/menu-line.png" />
          </div>
        </div>
      </div>
    </header>
  );
}
