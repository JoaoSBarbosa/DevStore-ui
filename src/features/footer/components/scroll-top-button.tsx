"use client";

import Image from "next/image";

export const ScrollTopButton = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      title="Voltar ao topo?"
      onClick={handleScrollTop}
      className="cursor-pointer flex items-center justify-center border border-gray-700 rounded-sm py-3 px-3.5 hover:bg-blue-900 max-w-max"
    >
      <div className="flex gap-1 ">
        <Image
          src="/assets/ui/arrow-up-line.png"
          alt=""
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};
