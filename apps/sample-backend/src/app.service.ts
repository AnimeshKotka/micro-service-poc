import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from './events/user-create.event';

@Injectable()
export class AppService {
  private readonly eventMsg: any[] = [];

  constructor(
    @Inject('COMMUNICATION') private communicationClient: ClientProxy,
    @Inject('ANALYTICS') private analyticsClient: ClientProxy
    ) { }
  getHello(): string {
    return 'Hello World!';
  }

  public publishEvent() {
    const msg = `${new Date()} event msg`;
    this.eventMsg.push(msg);
    this.communicationClient.emit(
      'user-create',
      new CreateUserEvent(msg)
    );
    this.analyticsClient.emit(
      'user-create',
      new CreateUserEvent(msg)
    );
  }

  public getAnalytics() {
    return this.analyticsClient.send({cmd: 'get-data'}, {});
  }
}
