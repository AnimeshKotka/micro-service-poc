import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('publish-event')
  createUser() {
   this.appService.publishEvent(); 
  }

  @Get('get-data-from-analytics')
  getData() {
    return this.appService.getAnalytics();
  }
}
