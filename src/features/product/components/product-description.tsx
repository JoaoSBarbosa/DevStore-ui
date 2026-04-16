type ProductDescriptionProps = {
  description: string | undefined;
};
export const ProductDescription = ({
  description,
}: ProductDescriptionProps) => {
  return (
    <div className="bg-white p-8 lg:p-12 w-full my-30 rounded">
      <h3 className="text-2xl font-medium pb-8 lg:pb-10">
        Informações do produto
      </h3>
      <p className="border-t border-gray-200 pt-8 lg:pt-10 text-gray-400">
        {description ?? "Sem descrição disponível"}
      </p>
    </div>
  );
};
