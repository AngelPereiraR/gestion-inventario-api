// products.controller.ts
import { Controller, Get, Post, Body, Param, Patch, Delete, UseInterceptors, UploadedFile, UseGuards, Put } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Product> {
    return this.productService.findOne(parseInt(id, 10));
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() productData: Product): Promise<Product> {
    return this.productService.create(productData);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() productData: Product): Promise<Product> {
    return this.productService.update(parseInt(id, 10), productData);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string): Promise<void> {
    return this.productService.remove(parseInt(id, 10));
  }

  @Put('uploadImage/:id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(@Param('id') id: string, @UploadedFile() image: Express.Multer.File): Promise<void> {
    await this.productService.uploadImage(parseInt(id, 10), image);
  }
}
