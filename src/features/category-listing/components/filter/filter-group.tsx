"use client";
import { useQueryString } from "@/shared/hooks/use-querystring";
import { FilterGroup } from "@/shared/types/mock/product-type";
import Image from "next/image";
import { useState } from "react";
import { FilterItem } from "./filter-item";

type FilterGroupProps = {
  filters?: FilterGroup;
};

export const FilterGroupContainer = ({ filters }: FilterGroupProps) => {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(true);

  const toggleAccordion = () => {
    setAccordionOpen((prev) => !prev);
  };
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <h2 className="flex-1 font-bold text-xl">{filters?.title}</h2>
        <div className="size-8 flex justify-center items-center">
          <Image
            src={"/assets/ui/arrow-left-s-line.png"}
            alt="arrow"
            width={24}
            height={24}
            onClick={toggleAccordion}
            className={`transition-all cursor-pointer ${!accordionOpen ? "rotate-180" : "rotate-0"}`}
          />
        </div>
      </div>

      <div
        className={`flex flex-col gap-4 overflow-y-hidden ${accordionOpen ? "h-auto pt-8" : "h-0 pt-0"} transition-all`}
      >
        {filters?.options.map((option) => (
          <FilterItem key={option.id} filterOption={option} />
        ))}
      </div>
    </div>
  );
};
