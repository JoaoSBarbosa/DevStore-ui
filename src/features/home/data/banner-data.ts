import { getProductUrl } from "@/shared/utils/url-utils";
import { BannerType } from "../types/banner-type";

export const banners: BannerType[] = [
  {
    id: 1,
    imageUrl: "/assets/banners/banner-1-camiseta-css.png",
    altText: "Banner 1",
    linkUrl: getProductUrl(1),
  },
  {
    id: 2,
    imageUrl: "/assets/banners/banner-2-camiseta-laravel.png",
    altText: "Banner 2",
    linkUrl: getProductUrl(2),
  },
  {
    id: 3,
    imageUrl: "/assets/banners/banner-3-camiseta-node.png",
    altText: "Banner 3",
    linkUrl: getProductUrl(1),
  },
  {
    id: 4,
    imageUrl: "/assets/banners/banner-4-camiseta-php.png",
    altText: "Banner 4",
    linkUrl: getProductUrl(13),
  },
];
