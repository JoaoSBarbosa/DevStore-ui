"use client";
import Link from "next/link";
import { BannerType } from "../../types/banner-type";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { set } from "zod";
import { clear } from "console";

type BannersProps = {
  banners: BannerType[];
};

export const Banners = ({ banners }: BannersProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const AUTO_SLIDE_INTERVAL = 3000;
  const timeRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    timeRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banners.length);
    }, AUTO_SLIDE_INTERVAL);
  };

  const stopAutoSlide = () => {
    if (timeRef.current) {
      clearInterval(timeRef.current);
    }
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [banners.length]);

  return (
    <div className="">
      <div className="relative aspect-3/1">
        {banners.map((banner, index) => (
          <Link
            key={banner.id}
            href={banner.linkUrl}
            className="transition-all absolute inset-0"
            style={{ opacity: activeIndex === index ? 1 : 0 }}
          >
            <Image
              width={1200}
              height={400}
              src={banner.imageUrl}
              alt={banner.altText || "Banner"}
              className="rounded-lg"
            />
          </Link>
        ))}
      </div>

      <div className="w-full mt-4 flex justify-center gap-4">
        {banners.map((banner, index) => (
          <div
            onClick={() => goToSlide(index)}
            key={index}
            className={`cursor-pointer size-5 rounded-full ${activeIndex === index ? "bg-blue-700" : "bg-gray-400"}`}
          ></div>
        ))}
      </div>
    </div>
  );
};
