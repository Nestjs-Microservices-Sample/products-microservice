import { Inject } from '@nestjs/common';

import { Product } from '../../domain/entities/product.entity';
import { ProductRepository } from '../../domain/repositories/product.repository';

export class ListProductUseCase {
  constructor(
    @Inject('ProductRepository')
    private readonly productRepo: ProductRepository,
  ) {}

  async execute(): Promise<Product[]> {
    return this.productRepo.list();
  }
}
