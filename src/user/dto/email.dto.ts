import { IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EmailDto {
  @IsEmail()
  @ApiProperty({ example: 'dnd0311@naver.com' })
  email: string;
}
