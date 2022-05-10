import { Product } from "@prisma/client";

export type ProductCreate = {
  name: string;
  bar_code: string;
  price: any;
  id?: string | undefined;
};

export type ProductSave = {
  name: String;
  bar_code: String;
  price: Number;
  id: String;
};

export interface IProductRepository {
  save(data: ProductCreate): Promise<ProductSave>;
  findByBarCode(bar_code: String): Promise<Product | null>;
}
