// list-products.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ListProducts } from './list-products';
import { ListProductsService } from './list-products.service';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

@Controller('list-products')
export class ListProductsController {
  constructor(private readonly listProductsService: ListProductsService) {}

  @Get()
  findAll(): Promise<ListProducts[]> {
    return this.listProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ListProducts> {
    return this.listProductsService.findOne(parseInt(id, 10));
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  createListProducts(@Body() listProducts: ListProducts): Promise<ListProducts> {
    return this.listProductsService.createListProducts(listProducts);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  updateListProducts(@Param('id') id: string, @Body() listProducts: ListProducts): Promise<ListProducts> {
    return this.listProductsService.updateListProducts(parseInt(id, 10), listProducts);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  deleteListProducts(@Param('id') id: string): Promise<void> {
    return this.listProductsService.deleteListProducts(parseInt(id, 10));
  }
}
