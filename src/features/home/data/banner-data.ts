import { getProductUrl } from "@/shared/utils/url-utils";
import { BannerType } from "../types/banner-type";

export const banners: BannerType[] = [
  {
    id: 1,
    imageUrl: "/assets/banners/banner-1.png",
    altText: "Banner 1",
    linkUrl: getProductUrl(101),
  },
  {
    id: 2,
    imageUrl: "/assets/banners/banner-2.png",
    altText: "Banner 2",
    linkUrl: getProductUrl(202),
  },
  {
    id: 3,
    imageUrl: "/assets/banners/banner-3.png",
    altText: "Banner 3",
    linkUrl: getProductUrl(303),
  },
  {
    id: 4,
    imageUrl: "/assets/banners/banner-4.png",
    altText: "Banner 4",
    linkUrl: getProductUrl(404),
  },
];
