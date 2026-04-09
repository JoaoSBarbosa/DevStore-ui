import Image from "next/image";

type FilterButtonProps = {
  isFilterOpen: boolean;
  setIsFilterOpen: (value: boolean) => void;
};
export const FilterButton = ({
  isFilterOpen,
  setIsFilterOpen,
}: FilterButtonProps) => {
  return (
    <button
      className="flex-1 bg-white  px-4 lg:px-6 h-14 border border-gray-200 rounded-sm text-gray-500 gap-4 cursor-pointer outline-0 right-0 flex justify-between items-center lg:hidden "
      type="button"
      onClick={() => setIsFilterOpen(!isFilterOpen)}
    >
      Filtar
      <Image
        src={"/assets/ui/equalizer-2-line.png"}
        alt=""
        width={20}
        height={20}
      />
    </button>
  );
};
