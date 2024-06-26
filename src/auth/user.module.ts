import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { User } from './user/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { ListProductsModule } from '../products/list-products.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
          secret: process.env.JWT_SEED,
          signOptions: { expiresIn: '6h' },
        }),
        forwardRef(() => ListProductsModule)
    ],
    providers: [UserService, JwtAuthGuard],
    controllers: [UserController]})
export class UserModule {}
