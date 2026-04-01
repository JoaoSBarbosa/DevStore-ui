export const ProductListSkeleton = () => {
  return (
    <div className="my-2 lg:my-12">
      <div className="flex gap-4 flex-col">
        <div className="bg-gray-200 rounded w-52 h-8 mx-auto lg:mx-0 animate-pulse"></div>
        <div className="bg-gray-200 rounded w-64 h-5 mx-auto lg:mx-0 animate-pulse"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-9">
        <div className="bg-gray-200 h-80 rounded animate-pulse"></div>
        <div className="bg-gray-200 h-80 rounded animate-pulse"></div>
        <div className="bg-gray-200 h-80 rounded animate-pulse"></div>
        <div className="bg-gray-200 h-80 rounded animate-pulse"></div>
      </div>
    </div>
  );
};
