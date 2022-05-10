import { Prisma } from "@prisma/client";

export type ProductCreate = {
  name: string;
  bar_code: string;
  price: any;
  id?: string | undefined;
};

export type ProductSave = {
  name: string;
  bar_code: string;
  price: number;
  id: string;
};

export interface IProductRepository {
  save(data: ProductCreate): Promise<ProductSave>;
  findByBarCode(bar_code: String): Promise<ProductSave | null>;
}
