export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  liked: boolean;
  paymentOptions?: string;
  slug: string;
  sizes?: Sizes[];
  description?: string;
}

export interface Sizes {
  id: number;
  size: string;
}
