import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsString, Length } from 'class-validator';
import { ErrorEnum } from '../../../core';

export class PasswordResetDto {
  @ApiProperty({ description: 'Email', required: true })
  @IsString({ message: ErrorEnum.NOT_STRING })
  @IsEmail({}, { message: ErrorEnum.INCORRECT_EMAIL })
  readonly email: string;

  @ApiProperty({ description: 'Secret code', required: true })
  @IsNumber(
    { allowNaN: false, allowInfinity: false },
    { message: ErrorEnum.NOT_NUMBER },
  )
  @Length(
    parseInt(process.env.LENGTH_SECRET_CODE, 10),
    parseInt(process.env.LENGTH_SECRET_CODE, 10),
    { message: ErrorEnum.INCORRECT_SECRET_CODE },
  )
  readonly secretCode: number;
}
