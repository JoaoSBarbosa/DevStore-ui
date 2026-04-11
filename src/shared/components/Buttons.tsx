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
};
export const ButtonBadge = ({ onClick, children }: ButtonBadgeProps) => {
  return (
    <div
      className="border flex items-center justify-center border-gray-300 p-2 rounded-sm size-12 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

type FavoriteButtonProps = {
  onClick?: () => void;
  liked: boolean;
};
export const FavoriteButton = ({ onClick, liked }: FavoriteButtonProps) => {
  return (
    <ButtonBadge onClick={onClick}>
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
