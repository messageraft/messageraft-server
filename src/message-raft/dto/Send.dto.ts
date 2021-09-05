import { ProviderName } from '@messageraft/common';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { EmailOptionsDto } from './EmailOptions.dto';
import { SmsOptionsDto } from './SmsOptions.dto';

export class SendDto {
  @ApiProperty({ required: true, enum: ProviderName })
  @IsNotEmpty({ message: 'Field `Provider` cannot be empty' })
  provider: ProviderName;

  @ApiProperty({
    required: true,
    description:
      'Depending on provider make sure you send the correct data payload',
    oneOf: [
      { $ref: getSchemaPath(EmailOptionsDto) },
      { $ref: getSchemaPath(SmsOptionsDto) },
    ],
  })
  @IsNotEmpty({ message: 'Field `data` cannot be empty' })
  data: EmailOptionsDto | SmsOptionsDto;
}
