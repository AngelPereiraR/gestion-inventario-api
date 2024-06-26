import { Module, forwardRef } from '@nestjs/common';
import { ListProductsService } from './list-products/list-products.service';
import { ListProductsController } from './list-products/list-products.controller';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListProducts } from './list-products/list-products.entity';
import { UserModule } from '../auth/user.module';

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
