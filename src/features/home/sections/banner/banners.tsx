import Link from "next/link";
import { BannerType } from "../../types/banner-type";
import Image from "next/image";

type BannersProps = {
  banners: BannerType[];
};

export const Banners = ({ banners }: BannersProps) => {
  return (
    <div className="">
      <div className="relative aspect-3/1">
        {banners.map((banner) => (
          <Link
            key={banner.id}
            href={banner.linkUrl}
            className="transition-all absolute inset-0"
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

      <div className="w-full h-14 bg-red-50">---</div>
    </div>
  );
};
