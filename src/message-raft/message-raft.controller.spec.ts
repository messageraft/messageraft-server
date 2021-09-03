import { Test, TestingModule } from '@nestjs/testing';
import { MessageRaftController } from './message-raft.controller';

describe('MessageRaftController', () => {
  let controller: MessageRaftController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageRaftController],
    }).compile();

    controller = module.get<MessageRaftController>(MessageRaftController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
