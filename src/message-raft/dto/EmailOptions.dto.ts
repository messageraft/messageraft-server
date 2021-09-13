import { IsNotEmpty, ValidateIf } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EmailOptionsDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Field `to` cannot be empty' })
  to: string;

  @ApiProperty({
    oneOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }],
  })
  @IsNotEmpty({ message: 'Field `from` cannot be empty' })
  from: string | string[];

  @ApiProperty()
  @IsNotEmpty({ message: 'Field `subject` cannot be empty' })
  subject: string;

  @ApiProperty({ required: false })
  @ValidateIf((o) => o.text == undefined || o.html)
  html: string;

  @ApiProperty({ required: false })
  @ValidateIf((o) => o.html == undefined || o.text)
  text: string;
}
