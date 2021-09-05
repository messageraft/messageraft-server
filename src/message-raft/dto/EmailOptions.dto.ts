import { ValidateIf } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EmailOptionsDto {
  @ApiProperty()
  to: string;

  @ApiProperty({
    oneOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }],
  })
  from: string | string[];

  @ApiProperty()
  subject: string;

  @ApiProperty({ required: false })
  @ValidateIf((o) => o.text == undefined || o.html)
  html: string;

  @ApiProperty({ required: false })
  @ValidateIf((o) => o.html == undefined || o.text)
  text: string;
}
