import { Injectable } from '@nestjs/common';
import { CreatePhonedirectoryDto } from './dto/create-phonedirectory.dto';
import { UpdatePhonedirectoryDto } from './dto/update-phonedirectory.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Phonedirectory } from './entities/phonedirectory.entity';

@Injectable()
export class PhonedirectoryService {
  constructor(@InjectRepository(Phonedirectory) private taskRep: Repository<Phonedirectory>){}
  async create(createPhoneDirectory: CreatePhonedirectoryDto) {
    try{
      const newTask = await this.taskRep.save({
        firstName: createPhoneDirectory.firstName,
        lastName: createPhoneDirectory.lastName,
        age: createPhoneDirectory.age,
        phone: createPhoneDirectory.phone,
        createdAt: new Date().toISOString(),
      })
      return newTask
    }catch(err){
      return err
    }
  }

  async findAll() {
    return await this.taskRep.find({});
  }

  async findOne(id: string) {
    return await this.taskRep.findBy({id});
  }

  async update(id: string, updatePhoneDto: UpdatePhonedirectoryDto) {
    try{
      const newTask = await this.taskRep.update(id,{
        firstName: updatePhoneDto.firstName,
        lastName: updatePhoneDto.lastName,
        age: updatePhoneDto.age,
        phone: updatePhoneDto.phone,
        updatedAt: new Date().toISOString()
      })
      return newTask
    }catch(err){
      console.log(err);
      return err
    }
  }

  remove(id: string) {
    return this.taskRep.delete({id});
  }
}
