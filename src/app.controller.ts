import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageRaftService } from './message-raft/message-raft.service';
import * as packageJson from 'package.json';

interface HealthResponse {
  version: string;
  providers: {
    identified: string[];
    numberOfProviders: number;
  };
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly messageRaftService: MessageRaftService,
  ) {}

  @Get('health')
  health(): HealthResponse {
    const providers = this.messageRaftService.messageRaft.providers.map(
      (provider) => provider.name,
    );
    return {
      version: packageJson.version,
      providers: {
        identified: providers,
        numberOfProviders: providers.length,
      },
    };
  }
}
