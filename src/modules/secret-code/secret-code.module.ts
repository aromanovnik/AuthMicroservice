import { Module } from '@nestjs/common';
import { SecretCodeController } from './secret-code.controller';
import { SecretCodeService } from './secret-code.service';

@Module({
  controllers: [SecretCodeController],
  providers: [SecretCodeService],
})
export class SecretCodeModule {}
