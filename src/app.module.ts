import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/common';
import { ExampleController } from './app/controllers/example/Example.controller';
import { ExampleService } from './app/services/example/Example.service';
import { ExampleProvider } from './app/providers/example/example.provider';
import { Example } from './app/entities/Example.entity';
import { HealthController } from './app/controllers/health/Health.controller';
import { HealthService } from './app/services/health/health.service';
import { DatabaseModule } from './config/database/database.module';
import ExampleRepository from './app/respositories/Example.repository';
import { typeOrmConfig } from './config/config.validation';
import { ExampleTransformer } from './app/transformers/Example.tranformer';
import AWSProvider from './app/providers/aws/Aws.provider';

@Module({
  imports: [
    ConfigModule.forRoot(typeOrmConfig),
    DatabaseModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 20000,
    }),
    TypeOrmModule.forFeature([Example]),
    HttpModule,
  ],
  controllers: [ExampleController, HealthController],
  providers: [
    ExampleService,
    ExampleRepository,
    ExampleProvider,
    ExampleTransformer,
    HealthService,
    AWSProvider,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
