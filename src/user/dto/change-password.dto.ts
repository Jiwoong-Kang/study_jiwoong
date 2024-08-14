import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ChangePasswordDto {
  @IsString()
  @MinLength(7)
  @IsNotEmpty()
  @ApiProperty()
  newPassword: string;

  @IsString()
  @ApiProperty()
  token: string;
}
