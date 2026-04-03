import { MobileMenuItem } from "./mobile-menu-item";
import { MenuList } from "@/shared/data/menu-data";

export const MobileMenu = () => {
  const menus = MenuList;
  return (
    <div className="pb-6">
      {menus.map((menu) => (
        <MobileMenuItem key={menu.id} menu={menu} />
      ))}
    </div>
  );
};

export default MobileMenu;
