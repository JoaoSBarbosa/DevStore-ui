import { MenuData } from "@/features/header/data/header-menu";
import { MobileMenuItem } from "./mobile-menu-item";

export const MobileMenu = () => {
  const menus = MenuData;
  return (
    <div className="pb-6">
      {menus.map((menu) => (
        <MobileMenuItem key={menu.id} menu={menu} />
      ))}
    </div>
  );
};

export default MobileMenu;
