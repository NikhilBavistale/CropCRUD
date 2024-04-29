import { Injectable } from '@nestjs/common';

//logical code
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
