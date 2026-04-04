import { MenuList } from "@/shared/data/menu-data";
import { DesktopMenuItems } from "./desktop-menu-items";

export const DesktopMenu = () => {
  const menus = MenuList;
  return (
    <div className="flex-1 flex">
      <DesktopMenuItems />
    </div>
  );
};
