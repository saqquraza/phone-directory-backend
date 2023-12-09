import { Module } from '@nestjs/common';
import { PhonedirectoryService } from './phonedirectory.service';
import { PhonedirectoryController } from './phonedirectory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phonedirectory } from './entities/phonedirectory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Phonedirectory])],
  controllers: [PhonedirectoryController],
  providers: [PhonedirectoryService],
})
export class PhonedirectoryModule {}
