import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('user-create')
  handleUserCreateEvent(data: any) {
    this.appService.handleUserCreateEvent(data);
  }

  @MessagePattern({ cmd: 'get-data' })
  handleGetData() {
    return { data: 'This is data from the analytics microservice' };
  }
}
