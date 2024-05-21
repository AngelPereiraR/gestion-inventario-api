import { Module, forwardRef } from '@nestjs/common';
import { ProductListController } from './product-list/product-list.controller';
import { ProductListService } from './product-list/product-list.service';
import { ListProductsModule } from './list-products.module';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductList } from './product-list/product-list.entity';

@Module({
    imports: [
      TypeOrmModule.forFeature([ProductList]),
      forwardRef(() => ListProductsModule)
    ],
    providers: [ProductListService, JwtAuthGuard],
    controllers: [ProductListController],
    exports: [ProductListService]
})
export class ProductListModule {}
