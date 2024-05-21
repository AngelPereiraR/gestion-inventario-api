// products.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import * as fs from 'fs';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.find({
      order: {
        id: 'ASC'
      }
    });
  }

  async findOne(id: number): Promise<Product> {
    return this.productRepository.findOneBy({id});
  }

  async create(productData: Partial<Product>): Promise<Product> {
    const product = this.productRepository.create(productData);
    return this.productRepository.save(product);
  }

  async update(id: number, productData: Partial<Product>): Promise<Product> {
    await this.productRepository.update(id, productData);
    return this.productRepository.findOneBy({id});
  }

  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }

  async uploadImage(id: number, image: Express.Multer.File): Promise<void> {
    const product = await this.productRepository.findOneBy({id});
    if (!product) {
      throw new NotFoundException(`Producto con id ${id} no encontrado`);
    }
    product.image = fs.readFileSync(image.path, { encoding: 'base64' });
    await this.productRepository.save(product);
  }
}
