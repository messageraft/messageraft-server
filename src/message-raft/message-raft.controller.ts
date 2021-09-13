import {
  Body,
  Controller,
  HttpStatus,
  Logger,
  Param,
  Post,
} from '@nestjs/common';
import { MessageRaftService } from './message-raft.service';
import { SendDto } from './dto/Send.dto';
import * as clc from 'cli-color';
import { ApiExtraModels, ApiParam, ApiTags } from '@nestjs/swagger';
import { EmailOptionsDto } from './dto/EmailOptions.dto';
import { SmsOptionsDto } from './dto/SmsOptions.dto';
import { ProviderName } from '@messageraft/common';
import { DirectMessageOptionsDto } from './dto/DirectMessageOptions.dto';

@ApiExtraModels(EmailOptionsDto, SmsOptionsDto, DirectMessageOptionsDto)
@Controller('message')
export class MessageRaftController {
  private logger = new Logger(MessageRaftController.name);
  constructor(private readonly messageRaftService: MessageRaftService) {}

  @ApiTags('message')
  @ApiParam({ name: 'provider', enum: ProviderName })
  @Post('send/:provider')
  send(@Body() sendDto: SendDto, @Param() params) {
    if (
      Object.keys(ProviderName).findIndex(
        (provider) => provider.toLowerCase() === params.provider,
      ) === -1
    ) {
      return {
        status: HttpStatus.BAD_REQUEST,
        error: 'Provider not supported',
      };
    }

    this.logger.log(
      clc.xterm(81)(`[${params.provider}] ${JSON.stringify(sendDto)}`),
    );
    return this.messageRaftService.send(sendDto, params.provider.toUpperCase());
  }
}
