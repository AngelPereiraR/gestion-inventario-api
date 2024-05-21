import { Module, forwardRef } from '@nestjs/common';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { ProductListController } from './product-list/product-list.controller';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { Product } from './product/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductListModule } from './product-list.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    forwardRef(() => ProductListModule)
  ],
  providers: [ProductService, JwtAuthGuard],
  controllers: [ProductController, ProductListController],
  exports: [ProductService]
})
export class ProductModule {}
