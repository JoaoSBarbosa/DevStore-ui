"use client";

import { MenuHeaderType } from "@/features/header/types/menu-header-type";
import Image from "next/image";
import Link from "next/link";
import { useHeader } from "../../context/use-header";

type Props = {
  menu: MenuHeaderType;
};

export const MobileMenuItem = ({ menu }: Props) => {
  const { toggleMenu } = useHeader();
  return (
    <Link key={menu.id} href={menu.href} onClick={toggleMenu}>
      <div className="flex justify-between items-center w-full p-6 border-b border-gray-200">
        <div className="font-medium text-lg text-gray-500">{menu.label}</div>

        <Image
          src="/assets/ui/arrow-up-right.png"
          alt={`ir para ${menu.label}`}
          width={24}
          height={24}
          className="size-6"
        />
      </div>
    </Link>
  );
};
