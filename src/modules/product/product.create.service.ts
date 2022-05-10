import {
  IProductRepository,
  ProductCreate,
} from "./repositories/IProductRepository";

class CreateProductService {
  constructor(private productRepository: IProductRepository) {}

  async execute(data: ProductCreate) {
    // Verifcar se  o produto já existe
    const product = await this.productRepository.findByBarCode(data.bar_code);

    if (product) {
      // Se existir dá um erro
      throw new Error("Produto já existe!");
    }
    // Se não, deixa salvar

    const productCreated = await this.productRepository.save(data);

    return productCreated;
  }
}

/**
 *
 * Single Responsability Principle
 * Open/Closed Principle
 * Liskov Substitution Principle
 * Interface Segregation Principle
 * Dependency Inversion Principle
 */
export { CreateProductService };
