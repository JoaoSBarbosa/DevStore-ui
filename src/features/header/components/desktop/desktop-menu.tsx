import { MenuData } from "@/features/header/data/header-menu";
import { DesktopMenuItems } from "./desktop-menu-items";

export const DesktopMenu = () => {
  const menus = MenuData;
  return (
    <div className="flex-1 flex">
      <DesktopMenuItems />
    </div>
  );
};
