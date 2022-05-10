import { Request, Response } from "express";
import { CreateProductService } from "./product.create.service";
import { ProductPrismaRepository } from "./repositories/ProductPrismaRepository";

class ProductController {
  async create(request: Request, response: Response) {
    try {
      const { body } = request;
      const prismaRepository = new ProductPrismaRepository();
      const createProductService = new CreateProductService(prismaRepository);

      const result = await createProductService.execute(body);

      return response.json(result);
    } catch (err: any) {
      return response.status(400).json({
        error: err.message,
      });
    }
  }
}

export { ProductController };
