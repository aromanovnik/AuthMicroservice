import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/robots.txt')
  robotTxt(@Res() res): string {
    res.type('text/plain');
    return res.send('User-agent: *\nDisallow: /');
  }
}
