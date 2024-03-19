// product-list.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductList } from './product-list';

@Injectable()
export class ProductListService {
  constructor(
    @InjectRepository(ProductList)
    private readonly productListRepository: Repository<ProductList>,
  ) {}

  async findAll(): Promise<ProductList[]> {
    return this.productListRepository.find();
  }

  async findOne(id: number): Promise<ProductList> {
    return this.productListRepository.findOneBy({id});
  }

  async createProductList(productListData: Partial<ProductList>): Promise<ProductList> {
    const productList = this.productListRepository.create(productListData);
    return this.productListRepository.save(productList);
  }

  async updateProductList(id: number, productListData: Partial<ProductList>): Promise<ProductList> {
    await this.productListRepository.update(id, productListData);
    return this.productListRepository.findOneBy({id});
  }

  async deleteProductList(id: number): Promise<void> {
    const productList = await this.productListRepository.findOneBy({id});
    if (!productList) {
      throw new NotFoundException(`Lista de productos con id ${id} no encontrada`);
    }
    await this.productListRepository.remove(productList);
  }
}
