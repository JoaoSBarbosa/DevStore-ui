import Link from "next/link";

type BreadcrumbProductProps = {
  id: number;
  name?: string;
};

export const BreadcrumbProduct = ({ id, name }: BreadcrumbProductProps) => {
  return (
    <div className="flex gap-1 my-4 text-gray-400">
      <BreadLink href="/">Home</BreadLink>
      <BreadLink href={`/produto/${id}`}>Produto</BreadLink>
      <span>{name}</span>
    </div>
  );
};

type BreadLinkProps = {
  href: string;
  children: React.ReactNode;
};
const BreadLink = ({ href, children }: BreadLinkProps) => {
  return (
    <>
      <Link href={href} className="hover:text-blue-500 hover:underline">
        {children}
      </Link>{" "}
      &gt;
    </>
  );
};
