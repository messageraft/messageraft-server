import { ApiProperty } from '@nestjs/swagger';

export class DirectMessageOptionsDto {
  @ApiProperty()
  text: string;

  @ApiProperty({ required: false })
  channel: string;
}
