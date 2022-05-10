import { prismaClient } from "../../../database/client";
import {
  IProductRepository,
  ProductCreate,
  ProductSave,
} from "./IProductRepository";

class ProductPrismaRepository implements IProductRepository {
  async save({ bar_code, name, price }: ProductCreate): Promise<ProductSave> {
    const product = await prismaClient.product.create({
      data: {
        bar_code,
        name,
        price,
      },
    });

    const productResult: ProductSave = {
      bar_code: product.bar_code,
      name: product.name,
      price: Number(product.price),
      id: product.id,
    };

    return productResult;
  }

  async findByBarCode(bar_code: string): Promise<ProductSave | null> {
    const product = await prismaClient.product.findFirst({
      where: {
        bar_code,
      },
    });
    const productSave = new Object(product);
    return productSave as ProductSave;
  }
}

export { ProductPrismaRepository };
