import { extname } from 'path';
import { guid } from './guid';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorEnum } from '../enums';

export const imageFileFilter = <T>(
  req,
  file,
  callback: (HttpException, boolean) => T,
) => {
  if (!file.originalname.toLowerCase().match(/\.(jpg|jpeg|png|gif|pdf)$/)) {
    return callback(
      new HttpException(
        ErrorEnum.ONLY_IMAGE_FILES_ARE_ALLOWED,
        HttpStatus.BAD_REQUEST,
      ),
      false,
    );
  }
  callback(null, true);
};

export const editFileName = (req, file, callback) => {
  // const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  // const randomName = Array(4)
  //   .fill(null)
  //   .map(() => Math.round(Math.random() * 16).toString(16))
  //   .join('');
  // callback(null, `${name}-${randomName}${fileExtName}`);
  callback(null, `${guid().slice(0, 22)}${fileExtName}`);
};
