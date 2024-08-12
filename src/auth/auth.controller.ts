import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginUserDto } from '../user/dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  async signupUser(@Body() createUserDto: CreateUserDto) {
    return await this.authService.signupUser(createUserDto);
  }

  @Post('/login')
  async loginUser(@Body() loginUserDto: LoginUserDto) {
    const user = await this.authService.loginUser(loginUserDto);
    const token = await this.authService.generateAccessToken(user.id);
    return { user, token };
  }
}
