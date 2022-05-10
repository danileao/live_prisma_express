import express from "express";
import { productRouter } from "./modules/product/routes";

const app = express();

app.use(express.json());

app.use("/products", productRouter);

app.listen(3000, () => console.log("Servidor está rodando na porta 3000"));
