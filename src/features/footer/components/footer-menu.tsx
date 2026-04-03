import { MenuList } from "@/shared/data/menu-data";
import Link from "next/link";

export const FooterMenu = () => {
  const menus = MenuList;
  return (
    <nav>
      <ul className="flex text-xl flex-col lg:flex-row gap-8 items-center">
        {menus.map((menu) => (
          <li key={menu.id}>
            <Link href={menu.href}>{menu.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
