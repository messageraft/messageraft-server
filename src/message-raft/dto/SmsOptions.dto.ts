import { ApiProperty } from '@nestjs/swagger';

export class SmsOptionsDto {
  @ApiProperty({ required: true })
  to: string;

  @ApiProperty({ required: false })
  from: string;

  @ApiProperty({ required: true })
  body: string;
}
