import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, Length } from 'class-validator';
import { ErrorEnum, GenderType, genderType } from '../../../core';

export class RegistrationDto {
  @ApiProperty({
    example: 'user@mail.com',
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

  @ApiProperty({ description: 'First name', required: false })
  @IsOptional()
  @IsString({ message: ErrorEnum.NOT_STRING })
  readonly firstname?: string;

  @ApiProperty({ description: 'Last name', required: false })
  @IsOptional()
  @IsString({ message: ErrorEnum.NOT_STRING })
  readonly lastname?: string;

  @ApiProperty({
    example: 'male',
    description: 'Gender',
    enum: genderType,
    required: false,
  })
  @IsOptional()
  @IsString({ message: ErrorEnum.NOT_STRING })
  readonly gender?: GenderType;
}
