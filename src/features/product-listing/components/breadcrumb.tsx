import Link from "next/link";

export const Breadcrumb = () => {
  return (
    <div className="flex gap-1 my-4 text-gray-400">
      <Link href="/" className="hover:text-blue-500 hover:underline">
        Home
      </Link>{" "}
      &gt; <span>Alterar depois</span>
    </div>
  );
};
