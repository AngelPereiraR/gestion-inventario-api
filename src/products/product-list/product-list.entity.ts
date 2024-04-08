// product-list.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from '../product/product.entity';
import { ListProducts } from '../list-products/list-products.entity';

@Entity()
export class ProductList {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Product, { eager: true })
  product: Product;

  @Column()
  quantity: number;

  @ManyToOne(type => ListProducts, listProducts => listProducts.products)
  list: ListProducts;
}
