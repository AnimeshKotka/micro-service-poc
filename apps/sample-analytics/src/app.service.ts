import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  private readonly analytics: any[] = [];
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreateEvent(data: any) {
    console.log('analytics > event log > ', data);
    this.analytics.push({ ...data, timestamp: new Date() })
  }
}
