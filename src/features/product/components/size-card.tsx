import { on } from "events";

export enum HeightWidth {
  PX48 = "h-12 w-12",
  PX56 = "h-14 w-14",
}

type SizeCardProps = {
  size: string;
  heightWidth: HeightWidth;
  onClick?: () => void;
  selected?: boolean;
};
export const SizeCard = ({
  size,
  onClick,
  selected = false,
  heightWidth = HeightWidth.PX48,
}: SizeCardProps) => {
  const conditionClass = selected
    ? "border-blue-500 bg-blue-500 text-white"
    : "border-gray-200";
  const defaultClass =
    "p-2.5 text-md font-medium font cursor-pointer border text-center  rounded ";
  return (
    <div
      onClick={onClick}
      className={`${defaultClass} ${heightWidth} ${conditionClass}`}
    >
      {size}
    </div>
  );
};
