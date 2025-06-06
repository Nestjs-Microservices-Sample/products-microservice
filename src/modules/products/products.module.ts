import { Module } from '@nestjs/common';

import { CreateProductUseCase } from './application/use-cases/create-product.use-case';
import { InMemoryProductRepository } from './infrastructure/repositories/product.repository.impl';
import { ListProductUseCase } from './application/use-cases/list-products.use-case';
import { ProductsController } from './interfaces/controllers/products.controller';
import { ProductsFacade } from './application/facade/products.facade';

@Module({
  controllers: [ProductsController],
  providers: [
    CreateProductUseCase,
    ListProductUseCase,
    ProductsFacade,
    {
      provide: 'ProductRepository',
      useClass: InMemoryProductRepository,
    },
  ],
})
export class ProductsModule {}
