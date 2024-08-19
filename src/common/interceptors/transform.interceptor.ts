import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

export function createInfo(statusCode: number = 200) {
  return {
    statusCode,
    message: 'success',
  };
}

export type Response<T> = ReturnType<typeof createInfo> & {
  body: T;
};

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<Text, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<Response<T>> {
    const res = context.switchToHttp().getResponse();
    const status = res.statusCode;
    return next
      .handle()
      .pipe(map((body) => Object.assign({}, createInfo(status), { body })));
  }
}
