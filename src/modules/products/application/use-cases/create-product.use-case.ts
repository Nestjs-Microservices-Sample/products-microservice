import { Inject } from '@nestjs/common';

import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from '../../domain/entities/product.entity';
import { ProductRepository } from '../../domain/repositories/product.repository';

export class CreateProductUseCase {
  constructor(
    @Inject('ProductRepository')
    private readonly productRepo: ProductRepository,
  ) {}

  async execute(dto: CreateProductDto): Promise<Product> {
    const product = Product.create(dto.name, dto.price);
    return this.productRepo.save(product);
  }
}
