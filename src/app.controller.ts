import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//@Controller('login') route:http://localhost:3000/login
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
//request and response
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
