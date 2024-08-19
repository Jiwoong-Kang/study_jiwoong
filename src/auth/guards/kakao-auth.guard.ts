import { AuthGuard } from '@nestjs/passport';
import { Provider } from '../../common/enums/provider.enum';

export class KakaoAuthGuard extends AuthGuard(Provider.KAKAO) {}
