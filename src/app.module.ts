import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhonedirectoryModule } from './phonedirectory/phonedirectory.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { datasourceoption } from './typeorm.config';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: () => (datasourceoption)
  }),PhonedirectoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
