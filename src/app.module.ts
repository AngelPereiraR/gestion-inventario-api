import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';
import { UserModule } from './auth/user.module';
import { ProductListModule } from './products/product-list.module';
import { ListProductsModule } from './products/list-products.module';

// Cambiar este import de local a production según necesidad
import config from 'ormconfig.debug';


@Module({
  imports: [TypeOrmModule.forRoot(config), ProductModule, UserModule, ProductListModule, ListProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
