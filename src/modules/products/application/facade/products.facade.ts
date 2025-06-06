import { Injectable } from '@nestjs/common';

import { CreateProductUseCase } from '../use-cases/create-product.use-case';
import { ListProductUseCase } from '../use-cases/list-products.use-case';

@Injectable()
export class ProductsFacade {
  constructor(
    public create: CreateProductUseCase,
    public list: ListProductUseCase,
  ) {}
}
