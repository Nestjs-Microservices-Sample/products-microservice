import { Product } from '../entities/product.entity';

export interface ProductRepository {
  save(product: Product): Promise<Product>;
  findById(id: string): Promise<Product | null>;
  list(): Promise<Product[]>;
}
