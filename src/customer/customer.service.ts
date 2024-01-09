import { Injectable, UseGuards } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { AuthGuard } from 'src/auth/auth.guard';
import { Cart } from 'src/cart/entities/cart.entity';

@Injectable()
@UseGuards(AuthGuard)
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
  ) {}
  async create(createCustomerDto: CreateCustomerDto) {
    const customer = await this.customerRepository.save(createCustomerDto);
    if (customer) {
      await this.cartRepository.save({ customer: customer });
    }
    return customer;
  }

  findAll() {
    return this.customerRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
