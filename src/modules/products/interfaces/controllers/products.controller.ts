import { Controller, HttpStatus } from '@nestjs/common';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';

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

  @MessagePattern(ProductPatterns.GetProductById)
  public GetProductById(@Payload('id') id: string) {
    throw new RpcException({
      code: 'RESOURCE_NOT_FOUND',
      message: `Product with id; ${id} not found`,
      status: HttpStatus.BAD_REQUEST,
    });
  }
}
