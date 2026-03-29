import { MenuData } from "../../data/header-menu";
import { DesktopMenu } from "./desktop-menu";
import { HeaderSearch, PaddingOptions } from "../common/header-search";

export const HeaderDesktopContainer = () => {
  const menus = MenuData;

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
