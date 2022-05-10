import { CreateProductService } from "./product.create.service";
import { ProductInMemoryRepository } from "./repositories/ProductInMemoryRepository";

let createProductService: CreateProductService;
let productInMemoryRepository: ProductInMemoryRepository;

describe("Create Product", () => {
  beforeAll(() => {
    productInMemoryRepository = new ProductInMemoryRepository();
    createProductService = new CreateProductService(productInMemoryRepository);
  });

  it("Deve ser possível criar um produto", async () => {
    const product = {
      name: "Product_Test",
      bar_code: "bar_code_test",
      price: 100,
    };

    const result = await createProductService.execute(product);

    expect(result).toHaveProperty("id");
  });

  it("Não deve ser possível criar um produto com bar_code existente", async () => {
    const product = {
      name: "Product_Test",
      bar_code: "test_bar_code_existente",
      price: 100,
    };

    await createProductService.execute(product);
    await expect(createProductService.execute(product)).rejects.toEqual(
      new Error("Produto já existe!")
    );
  });
});
