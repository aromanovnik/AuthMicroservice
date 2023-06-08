import { Test, TestingModule } from '@nestjs/testing';
import { SecretCodeService } from './secret-code.service';

describe('SecretCodeService', () => {
  let service: SecretCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecretCodeService],
    }).compile();

    service = module.get<SecretCodeService>(SecretCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
