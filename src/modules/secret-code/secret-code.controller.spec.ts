import { Test, TestingModule } from '@nestjs/testing';
import { SecretCodeController } from './secret-code.controller';

describe('SecretCodeController', () => {
  let controller: SecretCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecretCodeController],
    }).compile();

    controller = module.get<SecretCodeController>(SecretCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
