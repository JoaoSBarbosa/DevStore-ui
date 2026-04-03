import React from "react";

type ProductListContainerProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export const ProductListContainer = ({
  title,
  description,
  children,
}: ProductListContainerProps) => {
  return (
    <div className="mt-10">
      <h2 className="font-medium text-2xl text-center lg:text-left">{title}</h2>
      {description && (
        <p className="text-gray-500 text-center lg:text-left">{description}</p>
      )}

      {children}
    </div>
  );
};
