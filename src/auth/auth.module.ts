import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { LocalAuthStrategy } from './strategies/local-auth.strategy';
import { AccessTokenStrategy } from './strategies/access-token.strategy';
import { EmailModule } from '../email/email.module';
import { GoogleAuthStrategy } from './strategies/google-auth.strategy';
import { KakaoAuthStrategy } from './strategies/kakao-auth.strategy';
import { NaverAuthStrategy } from './strategies/naver-auth.strategy';

@Module({
  imports: [UserModule, JwtModule.register({}), ConfigModule, EmailModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalAuthStrategy,
    AccessTokenStrategy,
    GoogleAuthStrategy,
    KakaoAuthStrategy,
    NaverAuthStrategy,
  ],
})
export class AuthModule {}
