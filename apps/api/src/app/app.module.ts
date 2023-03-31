import { Module } from '@nestjs/common';
import { AppCoreModule } from './app-core.module';

@Module({
  imports: [AppCoreModule],
})
export class AppModule {}
