import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService: ConfigService = app.get(ConfigService);

  app.setGlobalPrefix('api');

  const port = configService.get('SERVER_PORT') ?? 7000;
  await app.listen(port);
}
bootstrap();
