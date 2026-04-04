"use client";
import Link from "next/link";
import { useProduct } from "../context/use-product";

export const Breadcrumb = () => {
  const { product } = useProduct();
  const slug = product?.[0]?.slug;
  return (
    <div className="flex gap-1 my-4 text-gray-400">
      <Link href="/" className="hover:text-blue-500 hover:underline">
        Home
      </Link>{" "}
      &gt; <span>{slug}</span>
    </div>
  );
};
