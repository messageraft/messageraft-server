import { Injectable, Logger } from '@nestjs/common';
import { Core } from '@messageraft/core';
import { ProviderName, ProviderType } from '@messageraft/common';
import { SendDto } from './dto/Send.dto';
import { sendgridErrorHandler } from '@messageraft/sendgrid';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MessageRaftService {
  private messageRaft: Core;

  constructor(private readonly configService: ConfigService) {
    this.messageRaft = new Core({
      logger: Logger,
      providers: [
        {
          name: ProviderName.SENDGRID,
          type: ProviderType.EMAIL,
          options: {
            apiKey: this.configService.get<string>('credentials.sendgrid'),
          },
        },
      ],
    });
  }

  async send(sendDto: SendDto) {
    try {
      return await this.messageRaft.send(sendDto.data, sendDto.provider);
    } catch (error) {
      return sendgridErrorHandler(error);
    }
  }
}
