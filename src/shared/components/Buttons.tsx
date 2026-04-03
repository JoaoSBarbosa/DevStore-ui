enum ButtonColor {
  Primary = "bg-blue-500 text-white hover:bg-blue-600",
  Secondary = "bg-gray-500 text-white hover:bg-gray-600",
  Danger = "bg-red-500 text-white hover:bg-red-600",
}
enum ButtonSize {
  Small = "py-2 px-4",
  Medium = "py-4 px-8",
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
