import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/common/cache';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          store: redisStore,
          host: configService.get('REDIS_HOST'),
          port: configService.get('REDIS_PORT'),
          ttl: configService.get('REDIS_TTL'),
        };
      },
      isGlobal: true,
    }),
  ],
})
export class RedisModule {}
