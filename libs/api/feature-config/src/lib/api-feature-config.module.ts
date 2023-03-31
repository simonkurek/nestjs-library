import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfiguration } from '@nestjs-library/api/utils-config';
import { databaseConfiguration } from '@nestjs-library/api/utils-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfiguration, appConfiguration],
    }),
  ],
})
export class ApiFeatureConfigModule {}
