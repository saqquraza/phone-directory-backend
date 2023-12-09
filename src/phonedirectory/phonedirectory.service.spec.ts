import { Test, TestingModule } from '@nestjs/testing';
import { PhonedirectoryService } from './phonedirectory.service';

describe('PhonedirectoryService', () => {
  let service: PhonedirectoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhonedirectoryService],
    }).compile();

    service = module.get<PhonedirectoryService>(PhonedirectoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
