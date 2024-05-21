// list-products.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { ProductList } from '../product-list/product-list.entity';
import { User } from '../../auth/user/user.entity';

@Entity()
export class ListProducts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  name: string;

  @OneToMany(type => ProductList, productList => productList.list)
  products: ProductList[];

  @ManyToOne(type => User, user => user.lists)
  user: User;
}
