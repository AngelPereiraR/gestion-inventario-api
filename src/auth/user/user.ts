// user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ListProducts } from '../../products/list-products/list-products';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column('simple-array')
  roles: string[];

  @OneToMany(type => ListProducts, listProducts => listProducts.user)
  lists: ListProducts[];
}
