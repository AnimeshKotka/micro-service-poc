import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreateEvent(data: any) {
    console.log('communication > event log > ', data);
  }
}
