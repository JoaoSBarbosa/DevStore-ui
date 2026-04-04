export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  liked: boolean;
  paymentOptions?: string;
  slug: string;
}
