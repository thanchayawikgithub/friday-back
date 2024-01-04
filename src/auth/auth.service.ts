import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/customer/entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
    private jwtService: JwtService,
  ) {}
  async signIn(email: string, password: string) {
    const customer = await this.customerRepository.findOne({
      where: { email: email },
    });

    if (!customer) {
      throw new NotFoundException('customer not found');
    }

    if (customer.password !== password) {
      throw new UnauthorizedException('password incorrect');
    }

    const payload = {
      customer: customer,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
