import { IsNotEmpty } from 'class-validator';
import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { EmailOptionsDto } from './EmailOptions.dto';
import { SmsOptionsDto } from './SmsOptions.dto';
import { DirectMessageOptionsDto } from './DirectMessageOptions.dto';

export class SendDto {
  @ApiProperty({
    required: true,
    description:
      'Depending on provider make sure you send the correct data payload',
    oneOf: [
      { $ref: getSchemaPath(EmailOptionsDto) },
      { $ref: getSchemaPath(SmsOptionsDto) },
      { $ref: getSchemaPath(DirectMessageOptionsDto) },
    ],
  })
  @IsNotEmpty({ message: 'Field `data` cannot be empty' })
  data: EmailOptionsDto | SmsOptionsDto | DirectMessageOptionsDto;
}
