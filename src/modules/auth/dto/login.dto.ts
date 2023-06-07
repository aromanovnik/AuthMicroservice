import { ApiProperty } from '@nestjs/swagger';
import { ErrorEnum } from '../../../core';
import { IsEmail, IsString, Length } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'Email',
    required: true,
  })
  @IsString({ message: ErrorEnum.NOT_STRING })
  @IsEmail({}, { message: ErrorEnum.INCORRECT_EMAIL })
  readonly email: string;

  @ApiProperty({ description: 'Password', required: true })
  @IsString({ message: ErrorEnum.NOT_STRING })
  @Length(
    parseInt(process.env.LENGTH_MIN_PASSWORD, 10),
    parseInt(process.env.LENGTH_MAX_PASSWORD, 10),
    { message: ErrorEnum.INCORRECT_PASSWORD },
  )
  readonly password: string;
}
