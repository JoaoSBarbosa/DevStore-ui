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
  images?: ProductImage[];
}

export interface Sizes {
  id: number;
  size: string;
}

export interface ProductImage {
  id: number;
  image: string;
}
