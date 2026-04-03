import Image from "next/image";
import { FooterMenu } from "../components/footer-menu";
import Link from "next/link";
import { FooterRowContainer } from "../components/footer-row-container";

export const FooterTop = () => {
  return (
    <FooterRowContainer styles="justify-between items-center">
      <>
        <Link href="/">
          <Image
            src={"/assets/ui/logo-white.png"}
            alt="Logo"
            width={143}
            height={48}
          />
        </Link>
        <FooterMenu />
      </>
    </FooterRowContainer>
  );
};
