import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SmsOptionsDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Field `to` cannot be empty' })
  to: string;

  @ApiProperty({ required: false })
  from: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Field `body` cannot be empty' })
  body: string;
}
