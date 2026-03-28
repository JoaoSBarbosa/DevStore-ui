import { Menu } from "@/features/header/data/header-menu";
import { HeaderMenuItem } from "./header-menu-items";

export const HeaderMenu = () => {
  const menus = Menu;
  return (
    <div className="md:hidden">
      {menus.map((menu) => (
        <HeaderMenuItem key={menu.id} menu={menu} />
      ))}
    </div>
  );
};

export default HeaderMenu;
