import Image from "next/image";
import Link from "next/link";

type FooterButtonProps = {
  label?: string;
  href: string;
  icon: string;
};
export const FooterButton = ({ label, href, icon }: FooterButtonProps) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 border border-gray-700 rounded-sm p-4 hover:bg-gray-900 max-w-max"
    >
      <div className="flex gap-2 ">
        <Image src={icon} alt={""} width={24} height={24} />

        {label && <div className="flex-1">{label}</div>}
      </div>
    </Link>
  );
};
