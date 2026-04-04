import Link from "next/link";
import { MenuList } from "../../../../shared/data/menu-data";

export const DesktopMenuItems = () => {
  const menus = MenuList;

  return (
    <ul className="flex items-center gap-10 font-medium text-md text-gray-500">
      {menus.map((menu) => (
        <li key={menu.id}>
          <Link href={menu.href} className="hover:text-gray-900">
            {menu.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
