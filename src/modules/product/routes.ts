import { response, Router } from "express";
import { ProductController } from "./product.controller";

const productRouter = Router();

const productController = new ProductController();

productRouter.post("/", productController.create);

export { productRouter };
