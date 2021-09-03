import { Test, TestingModule } from '@nestjs/testing';
import { MessageRaftService } from './message-raft.service';

describe('MessageRaftService', () => {
  let service: MessageRaftService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageRaftService],
    }).compile();

    service = module.get<MessageRaftService>(MessageRaftService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
