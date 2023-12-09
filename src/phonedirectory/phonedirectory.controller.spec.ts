import { Test, TestingModule } from '@nestjs/testing';
import { PhonedirectoryController } from './phonedirectory.controller';
import { PhonedirectoryService } from './phonedirectory.service';

describe('PhonedirectoryController', () => {
  let controller: PhonedirectoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhonedirectoryController],
      providers: [PhonedirectoryService],
    }).compile();

    controller = module.get<PhonedirectoryController>(PhonedirectoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
