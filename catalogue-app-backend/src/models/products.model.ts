export enum ProductCategory {
  MensClothing = "men's clothing",
  WomensClothing = "women's clothing",
  Electronics = "electronics",
  Jewelery = "jewelery",
}

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ProductCategory;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};
