import { PartialType } from '@nestjs/mapped-types';
import { CreatePhonedirectoryDto } from './create-phonedirectory.dto';

export class UpdatePhonedirectoryDto extends PartialType(CreatePhonedirectoryDto) {}
