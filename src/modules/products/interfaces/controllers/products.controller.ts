import { Controller, Post, Body, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { CreateProductDto } from '../../application/dto/create-product.dto';
import { ProductPatterns } from '../enums';
import { ProductsFacade } from '../../application/facade/products.facade';

@Controller('products')
export class ProductsController {
  constructor(private productFacade: ProductsFacade) {}

  @MessagePattern(ProductPatterns.ListProduct)
  public list() {
    return this.productFacade.list.execute();
  }

  @MessagePattern(ProductPatterns.CreateProduct)
  public create(@Payload() dto: CreateProductDto) {
    return this.productFacade.create.execute(dto);
  }
}
