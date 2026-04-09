import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useQueryString = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  return {
    get: (attribute: string) => {
      return searchParams.get(attribute);
    },
    set: (attribute: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(attribute, value);
      } else {
        params.delete(attribute);
      }

      const query = params.toString();
      router.push(query ? `${pathName}?${query}` : pathName);
    },
  };
};
