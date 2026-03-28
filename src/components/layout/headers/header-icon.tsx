import Image from "next/image";

type HeaderIconProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  selected?: boolean;
  srcSelected?: string;
};

export const HeaderIcon = ({
  src,
  alt,
  width = 24,
  height = 24,
  selected = false,
  srcSelected,
}: HeaderIconProps) => {
  const baseClasses =
    "size-12 flex items-center justify-center border rounded-sm";
  const selectedClasses =
    "bg-blue-600 text-blue-900 border-blue-800 hover:to-blue-500";
  const defaultClasses = "hover:bg-gray-100  border-gray-200 ";

  const FormatterSrc = (src: string | null | undefined) => {
    if (src == null) return "/asstes/ui/user-line.png";
    if (src.startsWith("/")) return src;
    return `/${src}`;
  };

  return (
    <div
      className={`
        ${baseClasses} 
        ${selected ? selectedClasses : defaultClasses}
        `}
    >
      {selected && (
        <Image
          className="size-6"
          src={FormatterSrc(srcSelected)}
          alt={alt}
          width={width}
          height={height}
        />
      )}

      {!selected && (
        <Image
          className="size-6"
          src={FormatterSrc(src)}
          alt={alt}
          width={width}
          height={height}
        />
      )}
    </div>
  );
};

export default HeaderIcon;
