import { DesktopMenu } from "./desktop-menu";
import { HeaderSearch, PaddingOptions } from "../common/header-search";
import { MenuList } from "@/shared/data/menu-data";

export const HeaderDesktopContainer = () => {
  const menus = MenuList;

  return (
    <div className="flex-1  ">
      <div className="w-full hidden lg:flex items-center  gap-6 px-6">
        <DesktopMenu />

        <div className="max-w-80 flex items-center ">
          <HeaderSearch padding={PaddingOptions.NONE} />
        </div>
      </div>
    </div>
  );
};
