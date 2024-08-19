import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-kakao';
import { Provider } from '../../common/enums/provider.enum';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../../user/user.service';

@Injectable()
export class KakaoAuthStrategy extends PassportStrategy(
  Strategy,
  Provider.KAKAO,
) {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {
    super({
      clientID: configService.get('KAKAO_AUTH_CLIENT_ID'),
      callbackURL: configService.get('KAKAO_AUTH_CALLBACK_URL'),
    });
  }
  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: any,
    done: any,
  ) {
    const { provider, displayName } = profile;
    const { profile_image } = profile._json.properties;
    const { email } = profile._json.kakao_account;

    try {
      const user = await this.userService.getUserByEmail(email);
      if (user.provider !== provider) {
        throw new HttpException(
          `You already subscribed ${provider}`,
          HttpStatus.CONFLICT,
        );
      }
      console.log('++++++++++++++++++++++++++');
      done(null, user);
    } catch (err) {
      const newUser = await this.userService.createUser({
        name: displayName,
        email,
        provider,
        profileImg: profile_image,
      });
      console.log('-----------------------');
      done(null, newUser);
    }
  }
}
