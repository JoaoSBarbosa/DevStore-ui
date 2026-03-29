import Link from "next/link";
import HeaderIcon from "./header-icon";
import { useHeader } from "../../context/use-header";

export const HeaderActions = () => {
  const { toggleMenu, isMenuOpen } = useHeader();
  return (
    <div className="flex gap-4">
      <Link href={"/my-orders"}>
        <HeaderIcon alt="perfil" src="/assets/ui/user-line.png" />
      </Link>

      <Link href={"/my-car"}>
        <HeaderIcon alt="carrinho" src="/assets/ui/shopping-bag-4-line.png" />
      </Link>

      <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
        <HeaderIcon
          selected={isMenuOpen}
          alt="menu"
          src="/assets/ui/menu-line.png"
          srcSelected="/assets/ui/menu-line-white.png"
        />
      </div>
    </div>
  );
};
