"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="bg-black text-white p-4 text-center">
        <strong>FRETE GRATIS</strong> para todo o Nordeste nas compras acima de
        R$ 199,00. <strong> APROVEITA!</strong>
      </div>

      <div className="p-6 w-full max-w-6xl mx-auto flex items-center justify-between">
        <div className="">
          <Image
            src="/assets/ui/logo-black.png"
            alt="DevSTore-logo"
            width={120}
            height={40}
          />
        </div>

        <div className="">Botoes</div>
      </div>
    </header>
  );
}
