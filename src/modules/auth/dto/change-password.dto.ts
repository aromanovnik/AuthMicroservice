import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';
import { ErrorEnum } from '../../../core';

export class ChangePasswordDto {
  @ApiProperty({
    description: 'Email',
    required: true,
  })
  @IsString({ message: ErrorEnum.NOT_STRING })
  @IsEmail({}, { message: ErrorEnum.INCORRECT_EMAIL })
  readonly email: string;

  @ApiProperty({ description: 'Old password', required: true })
  @IsString({ message: ErrorEnum.NOT_STRING })
  @Length(
    parseInt(process.env.LENGTH_MIN_PASSWORD, 10),
    parseInt(process.env.LENGTH_MAX_PASSWORD, 10),
    { message: ErrorEnum.INCORRECT_PASSWORD },
  )
  readonly password: string;

  @ApiProperty({
    description: 'New password',
    required: true,
  })
  @IsString({ message: ErrorEnum.NOT_STRING })
  @Length(
    parseInt(process.env.LENGTH_MIN_PASSWORD, 10),
    parseInt(process.env.LENGTH_MAX_PASSWORD, 10),
    { message: ErrorEnum.INCORRECT_NEW_PASSWORD },
  )
  readonly newPassword: string;
}
