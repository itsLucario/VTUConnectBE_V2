import { Controller, Get } from '@nestjs/common';

@Controller('academic-calendar')
export class AppController {
  @Get()
  getHello() {
    return '';
  }
}
