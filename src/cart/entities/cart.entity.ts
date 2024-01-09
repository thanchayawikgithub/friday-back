import { Customer } from 'src/customer/entities/customer.entity';
import { Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Customer, (customer) => customer.cart)
  customer: Customer;
}
