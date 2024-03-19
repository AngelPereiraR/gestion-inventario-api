import { Module, forwardRef } from '@nestjs/common';
import { ListProductsService } from './list-products/list-products.service';
import { ListProductsController } from './list-products/list-products.controller';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListProducts } from './list-products/list-products';
import { UserModule } from 'src/auth/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ListProducts]),
    forwardRef(() => UserModule)
  ],
  providers: [ListProductsService, JwtAuthGuard],
  controllers: [ListProductsController],
  exports: [ListProductsService]
})
export class ListProductsModule {}
