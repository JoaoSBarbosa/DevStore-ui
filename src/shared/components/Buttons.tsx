import Image from "next/image";

export enum ButtonColor {
  Primary = "bg-blue-500 text-white hover:bg-blue-600",
  Secondary = "bg-gray-500 text-white hover:bg-gray-600",
  Danger = "bg-red-500 text-white hover:bg-red-600",
}
export enum ButtonSize {
  Small = "py-2 px-4",
  Medium = "py-3 px-8",
  Large = "py-6 px-12",
  Default = "py-4 px-16",
}
type ButtonProps = {
  label: string;
  onClick: () => void;
  color?: ButtonColor;
  size?: ButtonSize;
  type?: "button" | "submit" | "reset";
};
export const DefaultButton = ({
  label,
  onClick,
  color = ButtonColor.Primary,
  size = ButtonSize.Default,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      className={`${color} ${size} text-center rounded-md cursor-pointer`}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

type ButtonBadgeProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  customClassName?: string;
  size?: string;
};
export const ButtonBadge = ({
  onClick,
  children,
  customClassName,
  size,
}: ButtonBadgeProps) => {
  return (
    <div
      className={`border flex items-center justify-center border-gray-300 p-2 rounded-sm ${size || "size-12"} cursor-pointer ${customClassName || ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

type FavoriteButtonProps = {
  onClick?: () => void;
  liked: boolean;
  size?: string;
};
export const FavoriteButton = ({
  onClick,
  liked,
  size,
}: FavoriteButtonProps) => {
  return (
    <ButtonBadge onClick={onClick} size={size}>
      {liked ? (
        <Image
          src={"/assets/ui/heart-3-fill.png"}
          alt="Heart"
          width={24}
          height={24}
        />
      ) : (
        <Image
          src={"/assets/ui/heart-3-line.png"}
          alt="Heart"
          width={24}
          height={24}
        />
      )}
    </ButtonBadge>
  );
};
