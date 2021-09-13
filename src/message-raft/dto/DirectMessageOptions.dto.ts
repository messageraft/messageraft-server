import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class DirectMessageOptionsDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Field `text` cannot be empty' })
  text: string;

  @ApiProperty({ required: false })
  channel: string;
}
