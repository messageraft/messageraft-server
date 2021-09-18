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
import { buildProvidersConfig } from './buildProvidersConfig';

@Injectable()
export class MessageRaftService {
  messageRaft: Core;

  constructor(private readonly configService: ConfigService) {
    this.messageRaft = new Core({
      logger: Logger,
      providers: buildProvidersConfig(this.configService),
    });
  }

  async send(sendDto: SendDto, provider: ProviderName) {
    try {
      return await this.messageRaft.send(sendDto.data, provider);
    } catch (error) {
      return providerErrorHandler(error, provider);
    }
  }
}
