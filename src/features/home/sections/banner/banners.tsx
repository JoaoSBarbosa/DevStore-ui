import { BannerType } from "../../types/banner-type";

type BannersProps = {
  banners: BannerType[];
};

export const Banners = ({ banners }: BannersProps) => {
  return (
    <div>
      {banners.map((banner) => (
        <img key={banner.id} src={banner.imageUrl} alt="Banner" />
      ))}
    </div>
  );
};
