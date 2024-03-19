// product.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  barcode: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  generalDenomination: string;

  @Column()
  quantity: string;

  @Column('simple-array', { nullable: true })
  brands: string[];

  @Column('simple-array', { nullable: true })
  categories: string[];

  @Column('simple-array', { nullable: true })
  stores: string[];

  @Column('simple-array', { nullable: true })
  countries: string[];

  @Column({ nullable: true })
  image: string; // Se almacenará la imagen en formato base64
}
