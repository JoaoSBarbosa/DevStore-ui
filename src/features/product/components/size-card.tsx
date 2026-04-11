export enum HeightWidth {
  PX48 = "h-12 w-12",
  PX56 = "h-14 w-14",
}

type SizeCardProps = {
  size: string;
  heightWidth: HeightWidth;
};
export const SizeCard = ({
  size,
  heightWidth = HeightWidth.PX48,
}: SizeCardProps) => {
  return (
    <div
      className={`p-2.5 border text-center border-gray-200 rounded ${heightWidth} text-md font-medium`}
    >
      {size}
    </div>
  );
};
