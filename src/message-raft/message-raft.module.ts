import { Module } from '@nestjs/common';
import { MessageRaftService } from './message-raft.service';
import { MessageRaftController } from './message-raft.controller';

@Module({
  providers: [MessageRaftService],
  exports: [MessageRaftService],
  controllers: [MessageRaftController],
})
export class MessageRaftModule {}
