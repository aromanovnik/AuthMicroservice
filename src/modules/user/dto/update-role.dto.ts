import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { ErrorEnum, roleType, RoleType } from '../../../core';

export class UpdateRoleDto {
  @ApiProperty({
    description: 'Role',
    enum: roleType,
    required: true,
  })
  @IsString({ message: ErrorEnum.NOT_STRING })
  readonly role: RoleType;
}
