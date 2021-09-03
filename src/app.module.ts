import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageRaftModule } from './message-raft/message-raft.module';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from '../config/validation';
import { configuration } from '../config/configuration';

const configOptions = {
  envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
  isGlobal: true,
  expandVariables: true,
  load: [configuration],
  validationSchema,
};

if (process.env.NODE_ENV === 'production') {
  delete configOptions.envFilePath;
}

@Module({
  imports: [MessageRaftModule, ConfigModule.forRoot(configOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
