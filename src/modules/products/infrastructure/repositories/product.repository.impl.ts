import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../domain/repositories/product.repository';
import { Product } from '../../domain/entities/product.entity';

@Injectable()
export class InMemoryProductRepository implements ProductRepository {
  private readonly products = new Map<string, Product>();

  async save(product: Product): Promise<Product> {
    this.products.set(product.id, product);
    return product;
  }

  async findById(id: string): Promise<Product | null> {
    return this.products.get(id) || null;
  }

  async list(): Promise<Product[]> {
    return [...this.products.values()];
  }
}
