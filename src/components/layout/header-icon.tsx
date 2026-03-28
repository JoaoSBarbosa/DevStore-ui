import Image from "next/image";
import { string } from "zod";

type HeaderIconProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export const HeaderIcon = ({
  src,
  alt,
  width = 24,
  height = 24,
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
        hover:bg-gray-100
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
