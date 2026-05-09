import Image from "next/image";
import Link from "next/link";

type FooterButtonProps = {
  label?: string;
  href: string;
  icon: string;
  isBlack?: boolean;
  isNotBordered?: boolean;
};
export const FooterButton = ({
  label,
  href,
  icon,
  isBlack,
  isNotBordered,
}: FooterButtonProps) => {
  return (
    <Link
      href={href}
      target={isBlack ? "_blank" : ""}
      className={`flex items-center gap-4 rounded-sm p-4 hover:bg-gray-900 max-w-max 
        ${isNotBordered ? "border-0" : "border border-gray-700"}`}
    >
      <div className="flex gap-2 ">
        <Image src={icon} alt={""} width={24} height={24} />

        {label && <div className="flex-1">{label}</div>}
      </div>
    </Link>
  );
};
