import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginUserDto } from '../user/dto/login-user.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PostgresErrorCodes } from '../database/postgresErrorCodes.enum';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async signupUser(createUserDto: CreateUserDto) {
    try {
      return await this.userService.createUser(createUserDto);
    } catch (error) {
      if (error?.code === PostgresErrorCodes.unique_validation) {
        throw new HttpException(
          'This email already exists',
          HttpStatus.BAD_REQUEST,
        );
      } else if (error?.code === PostgresErrorCodes.not_null_violation) {
        throw new HttpException(
          'please check not null body value',
          HttpStatus.BAD_REQUEST,
        );
      }
      throw new HttpException(
        'Unexpected Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async loginUser(loginUserDto: LoginUserDto) {
    const user = await this.userService.getUserByEmail(loginUserDto.email);

    const isMatched = await bcrypt.compare(
      loginUserDto.password,
      user.password,
    );
    if (!isMatched) {
      throw new HttpException('Password do not match', HttpStatus.BAD_REQUEST);
    }
    return user;
  }

  public generateAccessToken(userId: string) {
    const payload: any = { userId };
    const token = this.jwtService.sign(payload, {
      secret: this.configService.get('ACCESS_TOKEN_SECRET'),
      expiresIn: this.configService.get('ACCESS_TOKEN_EXPIRATION_TIME'),
    });
    return token;
  }
}
