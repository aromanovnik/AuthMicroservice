import { ApiProperty } from '@nestjs/swagger';
import { ErrorEnum } from '../../../core';
import { IsEmail, IsString } from 'class-validator';

export class SendSecretCodeDto {
  @ApiProperty({ description: 'Email', required: true })
  @IsString({ message: ErrorEnum.NOT_STRING })
  @IsEmail({}, { message: ErrorEnum.INCORRECT_EMAIL })
  readonly email: string;
}
