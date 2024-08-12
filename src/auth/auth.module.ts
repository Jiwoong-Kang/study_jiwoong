import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { LocalAuthStrategy } from './strategies/local-auth.strategy';

@Module({
  imports: [UserModule, JwtModule.register({}), ConfigModule],
  controllers: [AuthController],
  providers: [AuthService, LocalAuthStrategy],
})
export class AuthModule {}
