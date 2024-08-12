import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Glasses' })
  name: string;
  @ApiProperty({ example: 'Do you want to see my bag' })
  description: string;
  @ApiProperty({ example: 'abscd' })
  productImg: string;
  @ApiProperty({ example: '120000' })
  price: number;
  @ApiProperty({ example: '12' })
  stock: number;
  @ApiProperty({ example: 'true' })
  isSale: boolean;
}
