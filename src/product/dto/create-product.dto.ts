import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Category } from 'src/category/entities/category.entity';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  description: string;

  @IsNotEmpty()
  price: string;

  @IsNotEmpty()
  categoryId: number;

  image: string;
}
