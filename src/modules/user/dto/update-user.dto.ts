import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';
import { ErrorEnum, genderType, GenderType } from '../../../core';

export class UpdateUserDto {
  @ApiProperty({ description: 'First name', required: false })
  @IsOptional()
  @IsString({ message: ErrorEnum.NOT_STRING })
  readonly firstname?: string;

  @ApiProperty({ description: 'Last name', required: false })
  @IsOptional()
  @IsString({ message: ErrorEnum.NOT_STRING })
  readonly lastname?: string;

  @ApiProperty({ description: '', required: false })
  @IsOptional()
  @IsDateString({ strict: false }, { message: ErrorEnum.NOT_DATE })
  readonly birthdate?: Date;

  @ApiProperty({ description: 'Phone', required: false })
  @IsOptional()
  @IsNumber({ allowNaN: false }, { message: ErrorEnum.NOT_NUMBER })
  readonly phone?: number;

  @ApiProperty({ description: 'Description', required: false })
  @IsOptional()
  @IsString({ message: ErrorEnum.NOT_STRING })
  readonly description?: string;

  @ApiProperty({ description: '', required: false })
  @IsOptional()
  @IsString({ message: ErrorEnum.NOT_STRING })
  readonly comment?: string;

  @ApiProperty({
    description: 'Gender',
    enum: genderType,
    required: true,
  })
  @IsOptional()
  @IsString({ message: ErrorEnum.NOT_STRING })
  readonly gender?: GenderType;
}
