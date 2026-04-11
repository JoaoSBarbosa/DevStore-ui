import Image from "next/image";

type OrderSelectProps = {
  value: string;
  onChange: (value: string) => void;
};
export const OrderSelect = ({ value, onChange }: OrderSelectProps) => {
  return (
    <select
      defaultValue={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-white flex-1 px-4 lg:px-6 h-14 border border-gray-200 outline-0 rounded-sm text-gray-500"
    >
      <option value="" className="lg:hidden">
        {"\u2715 Limpar"}
      </option>
      <option value="views">Popular</option>
      <option value="price">Preço</option>
      <option value="selling">Vendidos</option>
    </select>
  );
};
