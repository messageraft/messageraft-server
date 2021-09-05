import { Body, Controller, Logger, Post } from '@nestjs/common';
import { MessageRaftService } from './message-raft.service';
import { SendDto } from './dto/Send.dto';
import * as clc from 'cli-color';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { EmailOptionsDto } from './dto/EmailOptions.dto';
import { SmsOptionsDto } from './dto/SmsOptions.dto';

@ApiExtraModels(EmailOptionsDto, SmsOptionsDto)
@Controller('message')
export class MessageRaftController {
  private logger = new Logger(MessageRaftController.name);
  constructor(private readonly messageRaftService: MessageRaftService) {}

  @ApiTags('message')
  @Post('send')
  send(@Body() sendDto: SendDto) {
    this.logger.log(clc.xterm(81)(`Send payload ${JSON.stringify(sendDto)}`));
    return this.messageRaftService.send(sendDto);
  }
}
