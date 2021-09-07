import { Injectable, Logger } from '@nestjs/common';
import { Core } from '@messageraft/core';
import {
  ProviderName,
  ProviderType,
  SendgridConstructorOptions,
  SlackConstructorOptions,
  TwilioConstructorOptions,
} from '@messageraft/common';
import { SendDto } from './dto/Send.dto';
import { ConfigService } from '@nestjs/config';
import { providerErrorHandler } from './providerErrorHandler';

@Injectable()
export class MessageRaftService {
  messageRaft: Core;

  constructor(private readonly configService: ConfigService) {
    this.messageRaft = new Core({
      logger: Logger,
      providers: [
        {
          name: ProviderName.SENDGRID,
          type: ProviderType.EMAIL,
          options: this.configService.get<SendgridConstructorOptions>(
            'credentials.sendgrid',
          ),
        },
        {
          name: ProviderName.TWILIO,
          type: ProviderType.SMS,
          options:
            this.configService.get<TwilioConstructorOptions>(
              'credentials.twilio',
            ),
        },
        {
          name: ProviderName.SLACK,
          type: ProviderType.DIRECT_MESSAGE,
          options:
            this.configService.get<SlackConstructorOptions>(
              'credentials.slack',
            ),
        },
      ],
    });
  }

  async send(sendDto: SendDto) {
    try {
      return await this.messageRaft.send(sendDto.data, sendDto.provider);
    } catch (error) {
      return providerErrorHandler(error, sendDto.provider);
    }
  }
}
