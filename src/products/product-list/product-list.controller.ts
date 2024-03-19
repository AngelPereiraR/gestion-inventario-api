// product-list.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ProductList } from './product-list';
import { ProductListService } from './product-list.service';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('product-list')
export class ProductListController {
  constructor(private readonly productListService: ProductListService) {}

  @Get()
  findAll(): Promise<ProductList[]> {
    return this.productListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProductList> {
    return this.productListService.findOne(parseInt(id, 10));
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  createProductList(@Body() productList: ProductList): Promise<ProductList> {
    return this.productListService.createProductList(productList);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  updateProductList(@Param('id') id: string, @Body() productList: ProductList): Promise<ProductList> {
    return this.productListService.updateProductList(parseInt(id, 10), productList);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  deleteProductList(@Param('id') id: string): Promise<void> {
    return this.productListService.deleteProductList(parseInt(id, 10));
  }
}
