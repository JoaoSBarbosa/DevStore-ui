import Image from "next/image";
import { string } from "zod";

type HeaderIconProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  isHighlight?: boolean;
};

export const HeaderIcon = ({
  src,
  alt,
  width = 24,
  height = 24,
  isHighlight = false,
}: HeaderIconProps) => {
  const pathFormater = src.startsWith("/") ? src : `/${src}`;
  return (
    <div
      className={`
        size-12 
        flex 
        items-center 
        justify-center
        border
        border-gray-200 
        rounded-sm
     
        ${isHighlight ? "bg-blue-400 text-blue-900 hover:to-blue-500" : "   hover:bg-gray-100"}
            `}
    >
      <Image
        className="size-6"
        src={pathFormater}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
};

export default HeaderIcon;
