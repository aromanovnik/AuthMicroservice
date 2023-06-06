// import { Users } from '../../modules/user/user.schema';
// import { RoleType } from '../types/role.type';
// import { HttpException, HttpStatus } from '@nestjs/common';
// import { ErrorEnum } from '../enums/error.enum';
//
// export const accessUser = (user: Users, roles: RoleType[]): boolean => {
//   if (!user) {
//     throw new HttpException(ErrorEnum.FORBIDDEN, HttpStatus.FORBIDDEN);
//   }
//   return roles.indexOf(user.role) > -1;
// };
