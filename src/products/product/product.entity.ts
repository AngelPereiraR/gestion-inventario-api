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

  @Column({ nullable: true })
  brands: string;

  @Column({ nullable: true })
  categories: string;

  @Column({ nullable: true })
  stores: string;

  @Column({ nullable: true })
  countries: string;

  @Column({ nullable: true })
  image: string; // Se almacenará la imagen en formato base64
}
