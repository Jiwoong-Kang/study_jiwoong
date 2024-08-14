import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginUserDto } from '../user/dto/login-user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RequestWithUser } from './interfaces/requestWithUser.interface';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { EmailDto } from '../user/dto/email.dto';
import { ChangePasswordDto } from '../user/dto/change-password.dto';
import { UserService } from '../user/user.service';
import { EmailVerificationDto } from '../user/dto/email-verification.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('/signup')
  async signupUser(@Body() createUserDto: CreateUserDto) {
    await this.authService.signupUser(createUserDto);
    return await this.authService.signupWelcomeEmail(createUserDto.email);
  }

  @Post('/login')
  @ApiBody({ type: LoginUserDto })
  @UseGuards(LocalAuthGuard)
  async loginUser(@Req() req: RequestWithUser) {
    const user = req.user;
    const token = await this.authService.generateAccessToken(user.id);
    return { user, token };
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async authenticate(@Req() req: RequestWithUser) {
    return await req.user;
  }

  @Post('/find/password')
  async findPassword(@Body() emailDto: EmailDto) {
    return await this.authService.findPasswordSendEmail(emailDto.email);
  }

  @Put('/change/password')
  async changePassword(@Body() changePasswordDto: ChangePasswordDto) {
    return await this.userService.changePasswordWithToken(changePasswordDto);
  }

  @Post('/send/email')
  async sendEmail(@Body() emailDto: EmailDto) {
    return await this.authService.initiateEmailAddressVerification(
      emailDto.email,
    );
  }

  @Post('/check/email')
  async checkEmail(@Body() emailVerificationDto: EmailVerificationDto) {
    return await this.authService.confirmEmailVerification(
      emailVerificationDto,
    );
  }
}
