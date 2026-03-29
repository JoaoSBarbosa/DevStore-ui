import Image from "next/image";
import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <div className="w-32">
      <Link href={"/"}>
        <Image
          src="/assets/ui/logo-black.png"
          alt="DevStore-logo"
          width={120}
          height={40}
        />
      </Link>
    </div>
  );
};
