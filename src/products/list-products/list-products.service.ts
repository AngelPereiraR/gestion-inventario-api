// list-products.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ListProducts } from './list-products.entity';

@Injectable()
export class ListProductsService {
  constructor(
    @InjectRepository(ListProducts)
    private readonly listProductsRepository: Repository<ListProducts>,
  ) {}

  async findAll(): Promise<ListProducts[]> {
    return this.listProductsRepository.find({
      order: {
        id: 'ASC'
      }
    });
  }

  async findOne(id: number): Promise<ListProducts> {
    return this.listProductsRepository.findOneBy({id});
  }

  async createListProducts(listProductsData: Partial<ListProducts>): Promise<ListProducts> {
    const listProducts = this.listProductsRepository.create(listProductsData);
    return this.listProductsRepository.save(listProducts);
  }

  async updateListProducts(id: number, listProductsData: Partial<ListProducts>): Promise<ListProducts> {
    await this.listProductsRepository.update(id, listProductsData);
    return this.listProductsRepository.findOneBy({id});
  }

  async deleteListProducts(id: number): Promise<void> {
    const listProducts = await this.listProductsRepository.findOneBy({id});
    if (!listProducts) {
      throw new NotFoundException(`Lista de productos con id ${id} no encontrada`);
    }
    await this.listProductsRepository.remove(listProducts);
  }
}
