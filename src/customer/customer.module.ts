import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Cart } from 'src/cart/entities/cart.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, Cart])],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
