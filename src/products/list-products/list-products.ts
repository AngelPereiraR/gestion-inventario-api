// list-products.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { ProductList } from '../product-list/product-list';
import { User } from 'src/auth/user/user';

@Entity()
export class ListProducts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => ProductList, productList => productList.list)
  products: ProductList[];

  @ManyToOne(type => User, user => user.lists)
  user: User;
}
