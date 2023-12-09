import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhonedirectoryService } from './phonedirectory.service';
import { CreatePhonedirectoryDto } from './dto/create-phonedirectory.dto';
import { UpdatePhonedirectoryDto } from './dto/update-phonedirectory.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Phone Directory')
@Controller('phonedirectory')
export class PhonedirectoryController {
  constructor(private readonly phonedirectoryService: PhonedirectoryService) {}

  @Post()
  create(@Body() createPhonedirectoryDto: CreatePhonedirectoryDto) {
    return this.phonedirectoryService.create(createPhonedirectoryDto);
  }

  @Get()
  findAll() {
    return this.phonedirectoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phonedirectoryService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhonedirectoryDto: UpdatePhonedirectoryDto) {
    return this.phonedirectoryService.update(id, updatePhonedirectoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phonedirectoryService.remove(id);
  }
}
